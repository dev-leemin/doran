'use client'

import { useState, useEffect, useCallback, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { getTest, getResult, testList } from '@/lib/tests'
import { calculateCompatibility } from '@/lib/compatibility'
import type { RoomData, ParticipantData } from '@/lib/types/room'
import { Settings, X, Link2, Share2, UserMinus, Trash2, RefreshCw, Users, ChevronRight, Lock, Unlock, RotateCcw } from 'lucide-react'
import QRCode from 'qrcode'

/* ── 궁합 점수 → 설명 매핑 ── */
function getCompatDescription(score: number) {
  if (score >= 85) return { icon: '/icons/compat/perfect.png', label: '환상의 케미', description: '서로의 성향이 아주 잘 맞아요! 함께하면 시너지가 폭발할 거예요.', color: '#ec4899', bg: '#fdf2f8' }
  if (score >= 70) return { icon: '/icons/compat/good.png', label: '좋은 궁합', description: '비슷한 성향이 많아서 편하게 지낼 수 있는 사이예요.', color: '#10b981', bg: '#ecfdf5' }
  if (score >= 55) return { icon: '/icons/compat/okay.png', label: '무난한 사이', description: '적당한 공통점과 차이점이 있어서 균형 잡힌 관계예요.', color: '#6366f1', bg: '#eef2ff' }
  if (score >= 40) return { icon: '/icons/compat/diverse.png', label: '다채로운 조합', description: '서로 다른 점이 많지만, 그래서 오히려 배울 점도 많아요.', color: '#f59e0b', bg: '#fffbeb' }
  return { icon: '/icons/compat/opposite.png', label: '반대의 매력', description: '성향이 많이 다르지만, 그만큼 서로에게 새로운 시각을 줄 수 있어요!', color: '#ef4444', bg: '#fef2f2' }
}

/* ── 그룹 점수 → 모임 칭호 ── */
function getGroupTitle(avg: number, count: number) {
  if (count <= 1) return { title: '첫 모임', subtitle: '친구를 초대해보세요!', icon: '/icons/group/first.png' }
  if (avg >= 80) return { title: '찰떡궁합 모임', subtitle: '이 조합 진짜 잘 맞아요!', icon: '/icons/group/perfect.png' }
  if (avg >= 65) return { title: '케미 넘치는 모임', subtitle: '함께하면 즐거운 관계예요', icon: '/icons/group/chemistry.png' }
  if (avg >= 50) return { title: '균형 잡힌 모임', subtitle: '다양한 색깔이 공존하는 그룹', icon: '/icons/group/balanced.png' }
  if (avg >= 35) return { title: '다채로운 모임', subtitle: '서로 다르기에 더 흥미로운 관계', icon: '/icons/group/colorful.png' }
  return { title: '불꽃 튀는 모임', subtitle: '개성 강한 멤버들의 만남!', icon: '/icons/group/fire.png' }
}

/* ── 1:1 궁합 상세 텍스트 생성 ── */
function getDetailedCompat(
  nameA: string, nameB: string,
  scoreA: Record<string, number>, scoreB: Record<string, number>,
  axes: string[], axisLabels: Record<string, string>,
  score: number,
) {
  const lines: string[] = []
  // 가장 비슷한 축, 가장 다른 축
  let minDiff = Infinity, maxDiff = 0
  let similarAxis = '', differentAxis = ''
  axes.forEach(axis => {
    const diff = Math.abs((scoreA[axis] || 0) - (scoreB[axis] || 0))
    if (diff < minDiff) { minDiff = diff; similarAxis = axis }
    if (diff > maxDiff) { maxDiff = diff; differentAxis = axis }
  })
  if (similarAxis) {
    lines.push(`${axisLabels[similarAxis] || similarAxis} 성향이 가장 비슷해요.`)
  }
  if (differentAxis && differentAxis !== similarAxis) {
    lines.push(`${axisLabels[differentAxis] || differentAxis} 성향은 서로 달라서 새로운 시각을 줄 수 있어요.`)
  }
  if (score >= 70) {
    lines.push(`${nameA}님과 ${nameB}님은 함께하면 편안한 사이가 될 수 있어요!`)
  } else if (score >= 50) {
    lines.push(`서로의 다른 점을 인정하면 더 좋은 관계가 될 수 있어요.`)
  } else {
    lines.push(`정반대라 오히려 서로에게 배울 점이 많은 관계예요!`)
  }
  return lines
}

/* ── 축 레이블 ── */
const AXIS_LABELS: Record<string, string> = {
  efficiency: '효율', social: '소셜', initiative: '주도', passion: '열정',
  spicy: '매운맛', adventure: '모험', health: '건강', mood: '기분파',
  introvert: '내향', planner: '계획', trendy: '트렌디', emotional: '감성',
}

export default function RoomPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = use(params)
  const router = useRouter()
  const [room, setRoom] = useState<RoomData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [joinNickname, setJoinNickname] = useState('')
  const [showJoin, setShowJoin] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null)
  const [myNickname, setMyNickname] = useState<string | null>(null)

  // 방 관리 모드
  const [showSettings, setShowSettings] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')
  const [adminVerified, setAdminVerified] = useState(false)
  const [adminLoading, setAdminLoading] = useState(false)
  const [adminError, setAdminError] = useState('')
  const [editName, setEditName] = useState('')
  const [renaming, setRenaming] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [qrUrl, setQrUrl] = useState<string | null>(null)
  const [showQR, setShowQR] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(`doran_room_${code}`)
    if (saved) setMyNickname(saved)
  }, [code])

  // QR 코드 생성
  useEffect(() => {
    if (typeof window !== 'undefined') {
      QRCode.toDataURL(window.location.href, { width: 200, margin: 2, color: { dark: '#1e1a3a', light: '#ffffff' } })
        .then(url => setQrUrl(url))
        .catch(() => {})
    }
  }, [code])

  const fetchRoom = useCallback(async () => {
    try {
      const res = await fetch(`/api/room?code=${code}`)
      const data = await res.json()
      if (data.error) setError(data.error)
      else setRoom(data.room)
    } catch {
      setError('방 정보를 불러올 수 없습니다')
    } finally {
      setLoading(false)
    }
  }, [code])

  useEffect(() => {
    fetchRoom()
    const interval = setInterval(fetchRoom, 5000)
    return () => clearInterval(interval)
  }, [fetchRoom])

  const handleJoin = () => {
    if (!joinNickname.trim()) { alert('닉네임을 입력해주세요'); return }
    localStorage.setItem(`doran_room_${code}`, joinNickname.trim())
    setMyNickname(joinNickname.trim())
    if (room) {
      router.push(`/quiz/${room.testId}/play?room=${code}&nickname=${encodeURIComponent(joinNickname.trim())}`)
    }
  }

  /* ── 관리 모드: 비밀번호 검증 ── */
  const handleAdminVerify = async () => {
    if (adminPassword.length !== 4) { setAdminError('비밀번호는 4자리입니다'); return }
    setAdminLoading(true)
    setAdminError('')
    try {
      const res = await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'verify', code, password: adminPassword }),
      })
      const data = await res.json()
      if (data.error) { setAdminError(data.error); return }
      setAdminVerified(true)
      if (room) setEditName(room.name)
    } catch { setAdminError('오류가 발생했습니다') }
    finally { setAdminLoading(false) }
  }

  /* ── 관리 모드: 방 이름 변경 ── */
  const handleRename = async () => {
    if (!editName.trim()) { alert('방 이름을 입력해주세요'); return }
    setRenaming(true)
    try {
      const res = await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'rename', code, password: adminPassword, name: editName.trim() }),
      })
      const data = await res.json()
      if (data.error) { alert(data.error); return }
      await fetchRoom()
      alert('방 이름이 변경되었어요!')
    } catch { alert('오류가 발생했습니다') }
    finally { setRenaming(false) }
  }

  /* ── 관리 모드: 참가자 제거 ── */
  const handleKick = async (nickname: string) => {
    if (!confirm(`${nickname}님을 정말 제거할까요?`)) return
    try {
      const res = await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'kick', code, password: adminPassword, nickname }),
      })
      const data = await res.json()
      if (data.error) { alert(data.error); return }
      await fetchRoom()
    } catch { alert('오류가 발생했습니다') }
  }

  /* ── 관리 모드: 방 삭제 ── */
  const handleDeleteRoom = async () => {
    if (!confirm('정말 방을 삭제할까요? 모든 데이터가 삭제됩니다.')) return
    try {
      const res = await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', code, password: adminPassword }),
      })
      const data = await res.json()
      if (data.error) { alert(data.error); return }
      alert('방이 삭제되었어요')
      router.push('/')
    } catch { alert('오류가 발생했습니다') }
  }

  /* ── 방 잠금/해제 ── */
  const handleToggleLock = async () => {
    try {
      const res = await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'lock', code, password: adminPassword }),
      })
      const data = await res.json()
      if (data.error) { alert(data.error); return }
      await fetchRoom()
      alert(data.locked ? '방이 잠금되었어요. 새로운 참여가 차단됩니다.' : '방 잠금이 해제되었어요.')
    } catch { alert('오류가 발생했습니다') }
  }

  /* ── 리액션 토글 ── */
  const handleReaction = async (toNick: string, type: string) => {
    if (!myNickname) return
    try {
      await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'react', code, fromNick: myNickname, toNick, type }),
      })
      await fetchRoom()
    } catch {}
  }

  const handleShare = async () => {
    const url = window.location.href
    const test = room ? getTest(room.testId) : null
    const text = test ? `${test.emoji} ${test.title} - 같이 해볼래?\n` : '도란 테스트 - 같이 해볼래?\n'
    if (navigator.share) {
      try { await navigator.share({ title: '도란', text, url }) } catch {}
    } else {
      await navigator.clipboard.writeText(`${text}${url}`)
      alert('링크가 복사되었어요!')
    }
  }

  /* ── 로딩 / 에러 ── */
  if (loading) {
    return (
      <div className="max-w-lg mx-auto pt-24 text-center animate-fade-in">
        <div className="w-12 h-12 rounded-full mx-auto mb-4 animate-pulse" style={{ background: 'var(--sky-100)' }} />
        <p className="text-sm" style={{ color: 'var(--muted)' }}>방 정보 불러오는 중...</p>
      </div>
    )
  }
  if (error || !room) {
    return (
      <div className="max-w-lg mx-auto pt-20 text-center animate-fade-up">
        <img src="/icons/status/not-found.png" alt="not found" className="w-20 h-20 mx-auto mb-4 object-contain" />
        <p className="font-bold text-lg mb-2">방을 찾을 수 없어요</p>
        <p className="text-sm mb-6" style={{ color: 'var(--muted)' }}>코드를 다시 확인해주세요</p>
        <Link href="/" className="inline-block px-6 py-3 rounded-2xl text-sm font-medium" style={{ background: 'var(--sky-100)', color: 'var(--sky-600)' }}>
          홈으로 가기
        </Link>
      </div>
    )
  }

  const test = getTest(room.testId)
  if (!test) return null

  const participants = room.participants
  const isParticipant = myNickname && participants.some(p => p.nickname === myNickname)

  /* ── 궁합 매트릭스 ── */
  const compatMatrix: Record<string, Record<string, number>> = {}
  participants.forEach(a => {
    compatMatrix[a.nickname] = {}
    participants.forEach(b => {
      if (a.nickname !== b.nickname) {
        compatMatrix[a.nickname][b.nickname] = calculateCompatibility(a.scores, b.scores)
      }
    })
  })

  /* ── 전체 평균 궁합 ── */
  let totalScore = 0, pairCount = 0
  participants.forEach((a, i) => {
    participants.forEach((b, j) => {
      if (i < j) {
        totalScore += compatMatrix[a.nickname]?.[b.nickname] || 0
        pairCount++
      }
    })
  })
  const avgScore = pairCount > 0 ? Math.round(totalScore / pairCount) : 0
  const groupInfo = getGroupTitle(avgScore, participants.length)

  /* ── 최고/최저 궁합 쌍 ── */
  let bestPair = { a: '', b: '', score: 0 }
  let worstPair = { a: '', b: '', score: 100 }
  participants.forEach((a, i) => {
    participants.forEach((b, j) => {
      if (i < j) {
        const score = compatMatrix[a.nickname]?.[b.nickname] || 0
        if (score > bestPair.score) bestPair = { a: a.nickname, b: b.nickname, score }
        if (score < worstPair.score) worstPair = { a: a.nickname, b: b.nickname, score }
      }
    })
  })

  /* ── 개인별 평균 궁합 순위 ── */
  const personalAvg = participants.map(p => {
    const others = participants.filter(o => o.nickname !== p.nickname)
    const sum = others.reduce((s, o) => s + (compatMatrix[p.nickname]?.[o.nickname] || 0), 0)
    return { nickname: p.nickname, avg: others.length > 0 ? Math.round(sum / others.length) : 0 }
  }).sort((a, b) => b.avg - a.avg)

  /* ── 결과 유형 분포 ── */
  const typeDist: Record<string, { count: number; result: ReturnType<typeof getResult> }> = {}
  participants.forEach(p => {
    const r = getResult(room.testId, p.resultType)
    if (!r) return
    if (!typeDist[p.resultType]) typeDist[p.resultType] = { count: 0, result: r }
    typeDist[p.resultType].count++
  })

  const myParticipant = participants.find(p => p.nickname === myNickname)
  const myResult = myParticipant ? getResult(room.testId, myParticipant.resultType) : null

  /* ── 선택된 인물 상세 ── */
  const focusPerson = selectedPerson ? participants.find(p => p.nickname === selectedPerson) : null
  const focusResult = focusPerson ? getResult(room.testId, focusPerson.resultType) : null

  return (
    <div className="max-w-lg mx-auto pt-6 pb-4">

      {/* ═══ 1. 방 헤더 ═══ */}
      <div className="text-center mb-4 animate-fade-up relative">
        {/* 테스트 아이콘 */}
        {test.icon ? (
          <img src={test.icon} alt={test.title} className="w-16 h-16 mx-auto mb-3 rounded-2xl object-contain" style={{ background: `${test.color}10` }} />
        ) : (
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center text-3xl" style={{ background: `${test.color}10` }}>
            {test.emoji}
          </div>
        )}
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-2xl font-bold">{room.name || test.title}</h1>
          <button
            onClick={() => { setShowSettings(!showSettings); setAdminVerified(false); setAdminPassword(''); setAdminError('') }}
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shrink-0"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            aria-label="방 설정"
          >
            <Settings size={14} style={{ color: 'var(--muted)' }} />
          </button>
        </div>
        <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>
          {test.emoji} {test.title} · {participants.length}명 참여
        </p>

        {/* 공유 / 참여 버튼 */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => setShowShareMenu(!showShareMenu)}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold btn-bounce"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <Share2 size={14} />
            공유하기
          </button>
          {!isParticipant && !room.locked && (
            <button
              onClick={() => setShowJoin(true)}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white btn-bounce"
              style={{ background: `linear-gradient(135deg, ${test.color}, ${test.color}cc)`, boxShadow: `0 4px 15px ${test.color}25` }}
            >
              <Users size={14} />
              참여하기
            </button>
          )}
          {room.locked && !isParticipant && (
            <span className="flex items-center gap-1 px-4 py-2 rounded-full text-xs font-medium" style={{ background: '#f59e0b12', color: '#f59e0b', border: '1px solid #f59e0b20' }}>
              <Lock size={12} />
              참여 잠금됨
            </span>
          )}
        </div>
      </div>

      {/* ═══ 공유 메뉴 ═══ */}
      {showShareMenu && (
        <div className="mb-4 animate-scale-in">
          <div className="rounded-2xl p-4" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold">공유하기</p>
              <button onClick={() => setShowShareMenu(false)} className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: 'var(--bg)' }}>
                <X size={12} style={{ color: 'var(--muted)' }} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(window.location.href)
                  alert('링크가 복사되었어요!')
                  setShowShareMenu(false)
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs btn-bounce"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              >
                <Link2 size={14} />
                링크 복사
              </button>
              <button
                onClick={() => { handleShare(); setShowShareMenu(false) }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-xs btn-bounce"
                style={{ background: `linear-gradient(135deg, ${test.color}, ${test.color}cc)` }}
              >
                <Share2 size={14} />
                링크 공유
              </button>
            </div>
            {/* QR 코드 */}
            <button
              onClick={() => setShowQR(!showQR)}
              className="w-full py-2 rounded-xl text-[11px] font-medium btn-bounce"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--muted)' }}
            >
              {showQR ? 'QR 닫기' : 'QR 코드 보기'}
            </button>
            {showQR && qrUrl && (
              <div className="mt-3 flex flex-col items-center gap-2 animate-scale-in">
                <img src={qrUrl} alt="QR Code" className="w-40 h-40 rounded-xl" style={{ background: 'white' }} />
                <p className="text-[10px]" style={{ color: 'var(--muted)' }}>QR을 스캔하면 바로 참여할 수 있어요</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══ 방 관리 패널 ═══ */}
      {showSettings && (
        <div className="mb-6 animate-scale-in">
          <div className="rounded-2xl p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            {!adminVerified ? (
              /* 비밀번호 입력 */
              <>
                <p className="text-sm font-bold mb-3">방 관리</p>
                <p className="text-xs mb-3" style={{ color: 'var(--muted)' }}>방 생성 시 입력한 비밀번호를 입력해주세요</p>
                <input
                  type="password"
                  placeholder="비밀번호 (4자리)"
                  value={adminPassword}
                  onChange={e => { setAdminPassword(e.target.value.replace(/\D/g, '').slice(0, 4)); setAdminError('') }}
                  maxLength={4}
                  inputMode="numeric"
                  className="w-full px-4 py-3 rounded-xl text-sm text-center outline-none font-mono tracking-widest mb-3"
                  style={{ background: 'var(--bg)', border: `1px solid ${adminError ? '#ef4444' : 'var(--border)'}` }}
                  onKeyDown={e => { if (e.key === 'Enter') handleAdminVerify() }}
                  autoFocus
                />
                {adminError && <p className="text-xs text-center mb-3" style={{ color: '#ef4444' }}>{adminError}</p>}
                <div className="flex gap-2">
                  <button onClick={() => setShowSettings(false)} className="flex-1 py-2.5 rounded-xl text-sm font-medium btn-bounce" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>닫기</button>
                  <button onClick={handleAdminVerify} disabled={adminLoading} className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white btn-bounce" style={{ background: test.color, opacity: adminLoading ? 0.6 : 1 }}>
                    {adminLoading ? '확인 중...' : '확인'}
                  </button>
                </div>
              </>
            ) : (
              /* 관리 패널 */
              <>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold">방 관리</p>
                  <button onClick={() => setShowSettings(false)} className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'var(--bg)' }}>
                    <X size={14} style={{ color: 'var(--muted)' }} />
                  </button>
                </div>

                {/* 방 이름 변경 */}
                <div className="mb-4">
                  <p className="text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>방 이름 변경</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={editName}
                      onChange={e => setEditName(e.target.value)}
                      maxLength={20}
                      className="flex-1 px-3 py-2.5 rounded-xl text-sm outline-none"
                      style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                      onFocus={e => { e.currentTarget.style.borderColor = test.color }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                    />
                    <button onClick={handleRename} disabled={renaming} className="px-4 py-2.5 rounded-xl text-xs font-bold text-white btn-bounce shrink-0" style={{ background: test.color, opacity: renaming ? 0.6 : 1 }}>
                      {renaming ? '...' : '변경'}
                    </button>
                  </div>
                </div>

                {/* 참가자 관리 */}
                {participants.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>참가자 관리</p>
                    <div className="space-y-1.5">
                      {participants.map(p => {
                        const result = getResult(room.testId, p.resultType)
                        return (
                          <div key={p.nickname} className="flex items-center gap-2.5 p-2.5 rounded-xl" style={{ background: 'var(--bg)' }}>
                            {result?.icon ? <img src={result.icon} alt={result.title} className="w-8 h-8 rounded-lg object-contain shrink-0" style={{ background: `${result.color}10` }} /> : <span className="text-lg shrink-0">{result?.emoji}</span>}
                            <div className="flex-1 min-w-0">
                              <span className="text-xs font-bold truncate block">{p.nickname}</span>
                              <span className="text-[10px]" style={{ color: 'var(--muted)' }}>{result?.title}</span>
                            </div>
                            <button
                              onClick={() => handleKick(p.nickname)}
                              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-[10px] font-bold btn-bounce shrink-0"
                              style={{ background: '#ef444412', color: '#ef4444', border: '1px solid #ef444420' }}
                            >
                              <UserMinus size={12} />
                              제거
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* 방 잠금/해제 */}
                <div className="mb-4">
                  <button
                    onClick={handleToggleLock}
                    className="w-full py-2.5 rounded-xl text-sm font-bold btn-bounce flex items-center justify-center gap-1.5"
                    style={{
                      background: room?.locked ? '#f59e0b10' : `${test.color}08`,
                      color: room?.locked ? '#f59e0b' : test.color,
                      border: `1px solid ${room?.locked ? '#f59e0b20' : `${test.color}20`}`,
                    }}
                  >
                    {room?.locked ? <><Unlock size={14} /> 잠금 해제</> : <><Lock size={14} /> 방 잠그기</>}
                  </button>
                  <p className="text-[10px] text-center mt-1" style={{ color: 'var(--muted)' }}>
                    {room?.locked ? '현재 잠금 상태 (새 참여 차단)' : '잠그면 새로운 참여를 차단합니다'}
                  </p>
                </div>

                {/* 방 삭제 */}
                <div className="pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  <button
                    onClick={handleDeleteRoom}
                    className="w-full py-2.5 rounded-xl text-sm font-bold btn-bounce flex items-center justify-center gap-1.5"
                    style={{ background: '#ef444410', color: '#ef4444', border: '1px solid #ef444420' }}
                  >
                    <Trash2 size={14} />
                    방 삭제하기
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ═══ 2. 그룹 궁합 지수 ═══ */}
      {participants.length >= 2 && (
        <div className="mb-6 animate-scale-in">
          <div
            className="relative rounded-3xl p-6 text-center overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${test.color}06, ${test.color}14)`,
              border: `1px solid ${test.color}20`,
            }}
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.06]" style={{ background: `radial-gradient(circle, ${test.color}, transparent 70%)` }} />
            <img src={groupInfo.icon} alt={groupInfo.title} className="w-10 h-10 mx-auto mb-1 object-contain" />
            <p className="text-xs font-medium mb-3" style={{ color: 'var(--muted)' }}>모임 궁합 지수</p>
            <p className="text-5xl font-bold mb-1" style={{ color: test.color }}>{avgScore}</p>
            <p className="text-sm font-bold mb-0.5">{groupInfo.title}</p>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>{groupInfo.subtitle}</p>

            {/* 궁합 스펙트럼 */}
            <div className="mt-5 mx-auto max-w-[280px]">
              <div className="h-2.5 rounded-full overflow-hidden flex">
                <div className="flex-1 rounded-l-full" style={{ background: '#ec4899' }} />
                <div className="flex-1" style={{ background: '#10b981' }} />
                <div className="flex-1" style={{ background: '#6366f1' }} />
                <div className="flex-1" style={{ background: '#f59e0b' }} />
                <div className="flex-1 rounded-r-full" style={{ background: '#ef4444' }} />
              </div>
              {/* 포인터 */}
              <div className="relative h-3 mt-0.5">
                <div
                  className="absolute -top-0.5 w-3 h-3 rounded-full border-2 border-white"
                  style={{
                    left: `${Math.max(2, Math.min(98, avgScore))}%`,
                    transform: 'translateX(-50%)',
                    background: test.color,
                    boxShadow: `0 0 6px ${test.color}60`,
                  }}
                />
              </div>
              <div className="flex justify-between text-[9px] mt-0.5" style={{ color: 'var(--muted)' }}>
                <span>반대</span>
                <span>환상</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══ 3. 참여 닉네임 입력 (showJoin 시) ═══ */}
      {showJoin && !isParticipant && (
        <div className="mb-6 animate-scale-in">
          <div className="rounded-2xl p-5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <p className="font-bold text-sm mb-4 text-center">닉네임을 입력해주세요</p>
            <input type="text" placeholder="닉네임 (최대 10자)" value={joinNickname} onChange={e => setJoinNickname(e.target.value)} maxLength={10} autoFocus
              className="w-full px-4 py-3 rounded-xl text-sm text-center outline-none mb-3"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
              onFocus={e => { e.currentTarget.style.borderColor = test.color }}
              onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
              onKeyDown={e => { if (e.key === 'Enter') handleJoin() }}
            />
            <div className="flex gap-2">
              <button onClick={() => setShowJoin(false)} className="flex-1 py-3 rounded-xl text-sm font-medium btn-bounce" style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}>취소</button>
              <button onClick={handleJoin} className="flex-1 py-3 rounded-xl text-white text-sm font-bold btn-bounce" style={{ background: test.color }}>테스트 시작</button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ 4. 참가자 아바타 가로 스크롤 ═══ */}
      {participants.length > 0 && (
        <div className="mb-6 animate-fade-up delay-100">
          <p className="text-sm font-bold mb-3">참가자</p>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
            {participants.map((p, i) => {
              const result = getResult(room.testId, p.resultType)
              if (!result) return null
              const isMe = p.nickname === myNickname
              const isSelected = selectedPerson === p.nickname
              return (
                <button
                  key={p.nickname}
                  onClick={() => setSelectedPerson(isSelected ? null : p.nickname)}
                  className="flex flex-col items-center gap-1.5 shrink-0 transition-all duration-200"
                  style={{ opacity: selectedPerson && !isSelected ? 0.5 : 1 }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 overflow-hidden"
                    style={{
                      background: isSelected ? `${result.color}25` : `${result.color}12`,
                      border: isSelected ? `2px solid ${result.color}` : isMe ? `2px solid ${result.color}50` : '2px solid transparent',
                      transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                    }}
                  >
                    {result.icon ? <img src={result.icon} alt={result.title} className="w-full h-full object-contain" /> : result.emoji}
                  </div>
                  <span className="text-[10px] font-bold whitespace-nowrap">
                    {p.nickname}
                    {isMe && <span style={{ color: result.color }}> (나)</span>}
                  </span>
                  <span className="text-[9px]" style={{ color: result.color }}>{result.title}</span>
                  {/* 받은 리액션 카운트 */}
                  {(() => {
                    const received = room.reactions.filter(r => r.toNick === p.nickname)
                    const reactionIcons: Record<string, string | null> = {
                      laugh: '/icons/reactions/reaction-laugh.png',
                      surprise: '/icons/reactions/reaction-surprise.png',
                      agree: '/icons/reactions/reaction-agree.png',
                      fire: '/icons/reactions/reaction-fire.png',
                    }
                    return received.length > 0 ? (
                      <span className="flex items-center gap-0.5">
                        {received.slice(0, 4).map((r, i) => (
                          <img key={i} src={reactionIcons[r.type] || '/icons/reactions/reaction-fire.png'} alt={r.type} className="w-3.5 h-3.5 object-contain" />
                        ))}
                      </span>
                    ) : null
                  })()}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ═══ 5. 선택된 인물 상세 ═══ */}
      {focusPerson && focusResult && (
        <div className="mb-6 animate-scale-in">
          <div
            className="rounded-2xl p-5 overflow-hidden"
            style={{ background: `${focusResult.color}06`, border: `1px solid ${focusResult.color}20` }}
          >
            {/* 닫기 버튼 */}
            <div className="flex justify-end mb-3">
              <button onClick={() => setSelectedPerson(null)} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'var(--card)' }}>
                <X size={14} style={{ color: 'var(--muted)' }} />
              </button>
            </div>

            {/* 결과 이미지 크게 */}
            {focusResult.icon ? (
              <div className="w-full rounded-2xl overflow-hidden mb-4">
                <img src={focusResult.icon} alt={focusResult.title} className="w-full h-auto" style={{ borderRadius: '16px' }} />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4" style={{ background: `${focusResult.color}15` }}>
                {focusResult.emoji}
              </div>
            )}

            <div className="text-center mb-4">
              <p className="font-bold text-base">{focusPerson.nickname}</p>
              <p className="text-sm font-bold" style={{ color: focusResult.color }}>{focusResult.title}</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>{focusResult.subtitle}</p>
            </div>

            {/* 결과 보기 버튼 */}
            <Link
              href={`/result/${room.testId}/${focusPerson.resultType}?s=${encodeURIComponent(JSON.stringify(focusPerson.scores))}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold mb-3 btn-bounce"
              style={{ background: `${focusResult.color}12`, color: focusResult.color, border: `1px solid ${focusResult.color}25` }}
            >
              {focusPerson.nickname}의 결과 보기
              <ChevronRight size={14} />
            </Link>

            {/* 리액션 버튼 */}
            {myNickname && focusPerson.nickname !== myNickname && (
              <div className="flex items-center justify-center gap-2 mb-4">
                {[
                  { type: 'laugh', icon: '/icons/reactions/reaction-laugh.png' },
                  { type: 'surprise', icon: '/icons/reactions/reaction-surprise.png' },
                  { type: 'agree', icon: '/icons/reactions/reaction-agree.png' },
                  { type: 'fire', icon: '/icons/reactions/reaction-fire.png' },
                ].map(r => {
                  const active = room.reactions.some(rx => rx.fromNick === myNickname && rx.toNick === focusPerson.nickname && rx.type === r.type)
                  return (
                    <button
                      key={r.type}
                      onClick={() => handleReaction(focusPerson.nickname, r.type)}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all btn-bounce"
                      style={{
                        background: active ? `${focusResult.color}20` : 'var(--card)',
                        border: `1.5px solid ${active ? focusResult.color : 'var(--border)'}`,
                        transform: active ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      <img src={r.icon} alt={r.type} className="w-6 h-6 object-contain" />
                    </button>
                  )
                })}
              </div>
            )}

            {/* 다른 참가자와의 궁합 (2명 이상일 때만) */}
            {participants.length >= 2 && (
              <div className="space-y-3">
                {participants.filter(p => p.nickname !== focusPerson.nickname).map(other => {
                  const score = compatMatrix[focusPerson.nickname]?.[other.nickname] || 0
                  const desc = getCompatDescription(score)
                  const otherResult = getResult(room.testId, other.resultType)
                  if (!otherResult) return null
                  const details = getDetailedCompat(
                    focusPerson.nickname, other.nickname,
                    focusPerson.scores, other.scores,
                    test.axes, AXIS_LABELS, score,
                  )
                  return (
                    <div key={other.nickname} className="rounded-xl p-3.5" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
                      {/* 상단: 이모지 + 이름 + 점수 */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        {focusResult.icon ? <img src={focusResult.icon} alt={focusResult.title} className="w-8 h-8 rounded-lg object-contain shrink-0" style={{ background: `${focusResult.color}10` }} /> : <span className="text-xl">{focusResult.emoji}</span>}
                        <div className="flex-1">
                          <div className="h-2 rounded-full overflow-hidden" style={{ background: `${desc.color}15` }}>
                            <div className="h-full rounded-full" style={{ width: `${score}%`, background: `linear-gradient(90deg, ${desc.color}80, ${desc.color})`, transition: 'width 0.8s ease' }} />
                          </div>
                        </div>
                        {otherResult.icon ? <img src={otherResult.icon} alt={otherResult.title} className="w-8 h-8 rounded-lg object-contain shrink-0" style={{ background: `${otherResult.color}10` }} /> : <span className="text-xl">{otherResult.emoji}</span>}
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <img src={desc.icon} alt={desc.label} className="w-5 h-5 object-contain" />
                          <span className="text-xs font-bold" style={{ color: desc.color }}>{desc.label}</span>
                        </div>
                        <span className="text-sm font-bold" style={{ color: desc.color }}>{score}%</span>
                      </div>
                      <p className="text-xs font-bold mb-1">
                        {focusPerson.nickname} ↔ {other.nickname}
                      </p>
                      {/* 상세 설명 */}
                      <div className="space-y-1">
                        {details.map((line, i) => (
                          <p key={i} className="text-[11px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                            · {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══ 6. 최고/최저 케미 하이라이트 ═══ */}
      {participants.length >= 2 && !selectedPerson && (
        <div className="space-y-4 mb-6 animate-fade-up delay-200">
          <p className="text-sm font-bold">궁합 하이라이트</p>

          {/* 최고 궁합 */}
          {(() => {
            const desc = getCompatDescription(bestPair.score)
            const rA = getResult(room.testId, participants.find(p => p.nickname === bestPair.a)?.resultType || '')
            const rB = getResult(room.testId, participants.find(p => p.nickname === bestPair.b)?.resultType || '')
            const pA = participants.find(p => p.nickname === bestPair.a)
            const pB = participants.find(p => p.nickname === bestPair.b)
            const details = pA && pB ? getDetailedCompat(bestPair.a, bestPair.b, pA.scores, pB.scores, test.axes, AXIS_LABELS, bestPair.score) : []
            return (
              <div className="relative rounded-2xl p-5 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fef3c710, #fbbf2415)', border: '1px solid #fbbf2420' }}>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-[0.08]" style={{ background: 'radial-gradient(circle, #fbbf24, transparent 70%)' }} />
                <div className="flex items-center gap-2 mb-4">
                  <img src="/icons/highlights/best.png" alt="최고의 케미" className="w-6 h-6 object-contain" />
                  <span className="text-sm font-bold">최고의 케미</span>
                </div>
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="flex flex-col items-center gap-1">
                    {rA?.icon ? <img src={rA.icon} alt={rA.title} className="w-12 h-12 rounded-xl object-contain" style={{ background: `${rA.color}12` }} /> : <span className="text-3xl">{rA?.emoji}</span>}
                    <span className="text-xs font-bold">{bestPair.a}</span>
                    <span className="text-[9px]" style={{ color: 'var(--muted)' }}>{rA?.title}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold" style={{ color: '#f59e0b' }}>{bestPair.score}%</span>
                    <span className="text-[10px] font-medium" style={{ color: '#f59e0b' }}>{desc.label}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    {rB?.icon ? <img src={rB.icon} alt={rB.title} className="w-12 h-12 rounded-xl object-contain" style={{ background: `${rB.color}12` }} /> : <span className="text-3xl">{rB?.emoji}</span>}
                    <span className="text-xs font-bold">{bestPair.b}</span>
                    <span className="text-[9px]" style={{ color: 'var(--muted)' }}>{rB?.title}</span>
                  </div>
                </div>
                <div className="space-y-0.5">
                  {details.map((line, i) => (
                    <p key={i} className="text-[11px] text-center leading-relaxed" style={{ color: 'var(--muted)' }}>· {line}</p>
                  ))}
                </div>
              </div>
            )
          })()}

          {/* 최저 궁합 */}
          {participants.length >= 3 && bestPair.score !== worstPair.score && (() => {
            const desc = getCompatDescription(worstPair.score)
            const rA = getResult(room.testId, participants.find(p => p.nickname === worstPair.a)?.resultType || '')
            const rB = getResult(room.testId, participants.find(p => p.nickname === worstPair.b)?.resultType || '')
            const pA = participants.find(p => p.nickname === worstPair.a)
            const pB = participants.find(p => p.nickname === worstPair.b)
            const details = pA && pB ? getDetailedCompat(worstPair.a, worstPair.b, pA.scores, pB.scores, test.axes, AXIS_LABELS, worstPair.score) : []
            return (
              <div className="relative rounded-2xl p-5 overflow-hidden" style={{ background: 'linear-gradient(135deg, #fee2e210, #ef444410)', border: '1px solid #ef444420' }}>
                <div className="flex items-center gap-2 mb-4">
                  <img src="/icons/highlights/surprise.png" alt="의외의 조합" className="w-6 h-6 object-contain" />
                  <span className="text-sm font-bold">의외의 조합</span>
                </div>
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="flex flex-col items-center gap-1">
                    {rA?.icon ? <img src={rA.icon} alt={rA.title} className="w-12 h-12 rounded-xl object-contain" style={{ background: `${rA.color}12` }} /> : <span className="text-3xl">{rA?.emoji}</span>}
                    <span className="text-xs font-bold">{worstPair.a}</span>
                    <span className="text-[9px]" style={{ color: 'var(--muted)' }}>{rA?.title}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold" style={{ color: '#ef4444' }}>{worstPair.score}%</span>
                    <span className="text-[10px] font-medium" style={{ color: '#ef4444' }}>{desc.label}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    {rB?.icon ? <img src={rB.icon} alt={rB.title} className="w-12 h-12 rounded-xl object-contain" style={{ background: `${rB.color}12` }} /> : <span className="text-3xl">{rB?.emoji}</span>}
                    <span className="text-xs font-bold">{worstPair.b}</span>
                    <span className="text-[9px]" style={{ color: 'var(--muted)' }}>{rB?.title}</span>
                  </div>
                </div>
                <div className="space-y-0.5">
                  {details.map((line, i) => (
                    <p key={i} className="text-[11px] text-center leading-relaxed" style={{ color: 'var(--muted)' }}>· {line}</p>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      )}

      {/* ═══ 7. 궁합 랭킹 (소셜왕/개성파) ═══ */}
      {participants.length >= 3 && !selectedPerson && (
        <div className="mb-6 animate-fade-up delay-200">
          <p className="text-sm font-bold mb-3">궁합 랭킹</p>
          <div className="rounded-2xl p-4" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <div className="space-y-2.5">
              {personalAvg.map((item, i) => {
                const p = participants.find(pp => pp.nickname === item.nickname)
                const result = p ? getResult(room.testId, p.resultType) : null
                if (!result) return null
                const medalIcon = i === 0 ? '/icons/medals/gold.png' : i === 1 ? '/icons/medals/silver.png' : i === 2 ? '/icons/medals/bronze.png' : null
                const isMe = item.nickname === myNickname
                const desc = getCompatDescription(item.avg)
                const label = i === 0 ? '소셜왕' : i === personalAvg.length - 1 ? '개성파' : ''
                return (
                  <div
                    key={item.nickname}
                    className="flex items-center gap-3 p-2.5 rounded-xl transition-all"
                    style={{ background: isMe ? `${result.color}06` : 'transparent' }}
                  >
                    {medalIcon
                      ? <img src={medalIcon} alt={`${i + 1}등`} className="w-7 h-7 object-contain shrink-0" />
                      : <span className="text-xs w-7 text-center font-bold shrink-0" style={{ color: 'var(--muted)' }}>{i + 1}</span>}
                    {result.icon ? <img src={result.icon} alt={result.title} className="w-8 h-8 rounded-lg object-contain shrink-0" style={{ background: `${result.color}10` }} /> : <span className="text-xl shrink-0">{result.emoji}</span>}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold truncate">{item.nickname}</span>
                        {isMe && <span className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: `${result.color}15`, color: result.color }}>나</span>}
                        {label && <span className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: `${desc.color}12`, color: desc.color }}>{label}</span>}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: `${desc.color}12` }}>
                          <div className="h-full rounded-full" style={{ width: `${item.avg}%`, background: desc.color, transition: 'width 0.8s ease' }} />
                        </div>
                        <span className="text-[10px] font-bold shrink-0" style={{ color: desc.color }}>{item.avg}%</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="text-[10px] text-center mt-3" style={{ color: 'var(--muted)' }}>
              다른 참가자들과의 평균 궁합 점수 기준
            </p>
          </div>
        </div>
      )}

      {/* ═══ 8. 유형 분포 ═══ */}
      {participants.length >= 2 && !selectedPerson && Object.keys(typeDist).length > 0 && (
        <div className="mb-6 animate-fade-up delay-300">
          <p className="text-sm font-bold mb-3">성향 분포</p>
          <div className="rounded-2xl p-4" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            {/* 바 차트 */}
            <div className="flex items-end gap-2 justify-center mb-3" style={{ minHeight: 80 }}>
              {Object.entries(typeDist).map(([typeId, { count, result }]) => {
                if (!result) return null
                const pct = Math.round((count / participants.length) * 100)
                const barH = Math.max(20, (count / participants.length) * 70)
                return (
                  <div key={typeId} className="flex flex-col items-center gap-1" style={{ width: `${Math.max(40, 100 / Object.keys(typeDist).length)}px` }}>
                    <span className="text-[10px] font-bold" style={{ color: result.color }}>{count}명</span>
                    <div className="w-full rounded-t-lg" style={{ height: barH, background: `linear-gradient(to top, ${result.color}40, ${result.color})` }} />
                    {result.icon ? <img src={result.icon} alt={result.title} className="w-7 h-7 rounded object-contain" /> : <span className="text-lg">{result.emoji}</span>}
                    <span className="text-[9px] font-medium text-center leading-tight" style={{ color: 'var(--muted)' }}>{result.title}</span>
                  </div>
                )
              })}
            </div>
            {Object.keys(typeDist).length === 1 && (
              <p className="text-[11px] text-center" style={{ color: 'var(--muted)' }}>모두 같은 유형이에요! 찐 케미 보장</p>
            )}
            {Object.keys(typeDist).length >= 3 && (
              <p className="text-[11px] text-center" style={{ color: 'var(--muted)' }}>다양한 유형이 모여있는 활기 넘치는 그룹!</p>
            )}
          </div>
        </div>
      )}

      {/* ═══ 9. 전체 궁합표 (3명+) ═══ */}
      {participants.length >= 3 && !selectedPerson && (
        <div className="mb-6 animate-fade-up delay-300">
          <p className="text-sm font-bold mb-3">전체 궁합표</p>
          <div className="rounded-2xl overflow-x-auto p-3" style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
            <table className="w-full text-xs">
              <thead>
                <tr>
                  <th className="p-1.5" />
                  {participants.map(p => {
                    const r = getResult(room.testId, p.resultType)
                    return (
                      <th key={p.nickname} className="p-1.5 text-center">
                        {r?.icon ? <img src={r.icon} alt={r.title} className="w-7 h-7 mx-auto rounded object-contain" /> : <span className="text-base block">{r?.emoji}</span>}
                        <span className="text-[9px] font-medium block" style={{ color: 'var(--muted)' }}>{p.nickname}</span>
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {participants.map(a => (
                  <tr key={a.nickname}>
                    <td className="p-1.5 font-medium text-[10px]">{a.nickname}</td>
                    {participants.map(b => {
                      if (a.nickname === b.nickname) {
                        return <td key={b.nickname} className="p-1.5 text-center" style={{ color: 'var(--muted)' }}>-</td>
                      }
                      const score = compatMatrix[a.nickname]?.[b.nickname] || 0
                      const desc = getCompatDescription(score)
                      return (
                        <td key={b.nickname} className="p-1.5 text-center">
                          <span className="text-[10px] font-bold" style={{ color: desc.color }}>{score}%</span>
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ═══ 10. 초대 카드 (0~1명일 때) ═══ */}
      {participants.length <= 1 && (
        <div className="mb-6 animate-fade-up delay-100">
          <div
            className="relative rounded-2xl p-6 overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${test.color}08, ${test.color}18)`,
              border: `1px solid ${test.color}20`,
            }}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-[0.08]" style={{ background: `radial-gradient(circle, ${test.color}, transparent 70%)` }} />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${test.color}15` }}>
                  <Users size={18} style={{ color: test.color }} />
                </div>
                <div>
                  <p className="font-bold text-sm">
                    {participants.length === 0 ? '아직 아무도 없어요' : '친구가 더 필요해요!'}
                  </p>
                  <p className="text-[11px]" style={{ color: 'var(--muted)' }}>
                    {participants.length === 0
                      ? '링크를 공유해서 친구를 초대해보세요'
                      : '2명 이상이면 궁합 분석이 시작돼요'}
                  </p>
                </div>
              </div>
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(window.location.href)
                  alert('링크가 복사되었어요!')
                }}
                className="w-full py-3 rounded-xl text-xs font-bold text-white btn-bounce flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${test.color}, ${test.color}cc)`, boxShadow: `0 4px 15px ${test.color}20` }}
              >
                <Link2 size={14} />
                초대 링크 복사하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ 11. 다른 테스트 해보기 ═══ */}
      <div className="mb-6 animate-fade-up delay-300">
        <p className="text-sm font-bold mb-3">다른 테스트도 해보세요</p>
        <div className="space-y-2.5">
          {testList.filter(t => t.id !== room.testId).sort(() => Math.random() - 0.5).slice(0, 3).map(t => (
            <Link
              key={t.id}
              href={`/quiz/${t.id}`}
              className="flex items-center gap-3 p-3.5 rounded-2xl transition-all duration-200 btn-bounce"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              {t.icon ? (
                <img src={t.icon} alt={t.title} className="w-11 h-11 rounded-xl object-contain" style={{ background: `${t.color}10` }} />
              ) : (
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl" style={{ background: `${t.color}10` }}>
                  {t.emoji}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold">{t.title}</p>
                <p className="text-[11px] truncate" style={{ color: 'var(--muted)' }}>{t.description}</p>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--muted)' }} />
            </Link>
          ))}
        </div>
      </div>

      {/* ═══ 액션 버튼 ═══ */}
      <div className="space-y-2.5 animate-fade-up delay-300">
        {/* 다시 테스트하기 (참여자만) */}
        {isParticipant && (
          <Link
            href={`/quiz/${room.testId}/play?room=${code}&nickname=${encodeURIComponent(myNickname || '')}`}
            className="w-full py-3.5 rounded-2xl font-bold text-sm btn-bounce flex items-center justify-center gap-2"
            style={{ background: `${test.color}08`, border: `1px solid ${test.color}20`, color: test.color }}
          >
            <RotateCcw size={14} />
            다시 테스트하기
          </Link>
        )}
        <button onClick={fetchRoom} className="w-full py-3.5 rounded-2xl font-medium text-sm btn-bounce flex items-center justify-center gap-2"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}>
          <RefreshCw size={14} />
          새로고침
        </button>
        <Link href="/" className="block w-full py-3.5 rounded-2xl text-center text-sm" style={{ color: 'var(--muted)' }}>
          홈으로
        </Link>
      </div>
    </div>
  )
}
