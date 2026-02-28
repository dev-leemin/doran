'use client'

import { use, useMemo, useState, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { getTest, getResult, testList } from '@/lib/tests'
import { saveTestResult, saveRoomParticipation } from '@/lib/history'
import { Share2, Link2, Users, Camera, MessageCircle, ThumbsUp, ThumbsDown } from 'lucide-react'
import html2canvas from 'html2canvas'
import AdBanner from '@/components/ad-banner'

function getSessionId() {
  if (typeof window === 'undefined') return ''
  let id = localStorage.getItem('doran_session_id')
  if (!id) {
    id = crypto.randomUUID()
    localStorage.setItem('doran_session_id', id)
  }
  return id
}

export default function ResultPage({
  params,
}: {
  params: Promise<{ testId: string; type: string }>
}) {
  const { testId, type } = use(params)
  const searchParams = useSearchParams()
  const router = useRouter()
  const test = getTest(testId)
  const result = getResult(testId, type)

  const { data: session } = useSession()
  const [roomCode, setRoomCode] = useState('')
  const [nickname, setNickname] = useState(session?.user?.name || '')
  const [joining, setJoining] = useState(false)
  const [showGroup, setShowGroup] = useState(false)

  // 결과 카드 ref + 희귀도
  const cardRef = useRef<HTMLDivElement>(null)
  const [rarity, setRarity] = useState<{ percentage: number; total: number } | null>(null)
  const [saving, setSaving] = useState(false)

  // 좋아요/싫어요
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [myReaction, setMyReaction] = useState<string | null>(null)

  const [copied, setCopied] = useState(false)
  const showCopied = () => { setCopied(true); setTimeout(() => setCopied(false), 2000) }

  // 리뷰 작성
  const [reviewNickname, setReviewNickname] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [reviewSubmitting, setReviewSubmitting] = useState(false)
  const [reviewDone, setReviewDone] = useState(false)

  const scores = useMemo(() => {
    try {
      const s = searchParams.get('s')
      return s ? JSON.parse(decodeURIComponent(s)) : {}
    } catch {
      return {}
    }
  }, [searchParams])

  const otherTests = useMemo(() => {
    return testList
      .filter(t => t.id !== testId)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
  }, [testId])

  // 세션 로드 후 닉네임 자동 채우기
  useEffect(() => {
    if (session?.user?.name) {
      if (!nickname) setNickname(session.user.name)
      if (!reviewNickname) setReviewNickname(session.user.name)
    }
  }, [session, nickname, reviewNickname])

  // 모든 사용자: 결과 자동 저장 (localStorage)
  useEffect(() => {
    if (testId && type && Object.keys(scores).length > 0) {
      saveTestResult(testId, type, scores)
    }
  }, [testId, type, scores])

  // 좋아요/싫어요 조회
  useEffect(() => {
    if (!testId) return
    const sessionId = getSessionId()
    fetch(`/api/reactions?testId=${testId}&sessionId=${sessionId}`)
      .then(r => r.json())
      .then(d => {
        setLikes(d.likes ?? 0)
        setDislikes(d.dislikes ?? 0)
        setMyReaction(d.myReaction ?? null)
      })
      .catch(() => {})
  }, [testId])

  // 결과 통계 조회 + 카운트 증가
  useEffect(() => {
    if (!testId || !type) return
    // 카운트 증가 (세션당 1회)
    const statKey = `doran_stat_${testId}_${type}`
    if (!sessionStorage.getItem(statKey)) {
      fetch('/api/result-stats', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testId, resultType: type }),
      }).catch(() => {})
      sessionStorage.setItem(statKey, '1')
    }
    // 통계 조회
    fetch(`/api/result-stats?testId=${testId}`)
      .then(r => r.json())
      .then(data => {
        if (data.distribution?.[type]) {
          setRarity({ percentage: data.distribution[type].percentage, total: data.total })
        }
      })
      .catch(() => {})
  }, [testId, type])

  if (!test || !result) {
    return (
      <div className="max-w-lg mx-auto pt-20 text-center">
        <img src="/icons/status/no-test.png" alt="not found" className="w-20 h-20 mx-auto mb-4 object-contain" />
        <p className="font-bold">결과를 찾을 수 없어요</p>
        <Link href="/" className="mt-4 inline-block text-sm underline" style={{ color: 'var(--muted)' }}>
          홈으로 돌아가기
        </Link>
      </div>
    )
  }

  // 점수 기반 레이더 데이터
  const maxScore = Math.max(...Object.values(scores as Record<string, number>), 1)

  const handleShare = async () => {
    const shareData = {
      title: `티키타카 - ${test.title}`,
      text: `나의 ${test.title} 결과: ${result.emoji} ${result.title}\n${result.subtitle}`,
      url: window.location.href,
    }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch { /* 사용자가 취소 */ }
    } else {
      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`)
      showCopied()
    }
  }

  const handleSubmitReview = async () => {
    if (!reviewNickname.trim() || !reviewText.trim()) {
      alert('닉네임과 내용을 입력해주세요')
      return
    }
    setReviewSubmitting(true)
    try {
      await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testId, nickname: reviewNickname, content: reviewText }),
      })
      setReviewDone(true)
    } catch {}
    setReviewSubmitting(false)
  }

  const handleReaction = async (reactionType: 'like' | 'dislike') => {
    const sessionId = getSessionId()
    try {
      const res = await fetch('/api/reactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ testId, type: reactionType, sessionId }),
      })
      const data = await res.json()
      setLikes(data.likes ?? 0)
      setDislikes(data.dislikes ?? 0)
      setMyReaction(data.myReaction ?? null)
    } catch {}
  }

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    showCopied()
  }

  const handleSaveImage = async () => {
    if (!cardRef.current) return
    setSaving(true)
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
      })
      const link = document.createElement('a')
      link.download = `도란_${result?.title || 'result'}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch { alert('이미지 저장에 실패했어요') }
    setSaving(false)
  }

  const axisLabels: Record<string, string> = {
    // office
    efficiency: '효율', social: '사교', initiative: '주도', passion: '열정',
    // lunch
    spicy: '매운맛', adventure: '모험', health: '건강', mood: '기분파',
    // compatibility
    introvert: '내향', planner: '계획', trendy: '트렌디', emotional: '감성',
    // animal
    energy: '에너지', instinct: '본능', freedom: '자유',
    // love
    affection: '애정', independence: '독립', romance: '로맨스', stability: '안정',
    // travel
    planning: '계획력', culture: '문화', relaxation: '휴식',
    // color
    warmth: '따뜻함', depth: '깊이', clarity: '명료함',
    // stress
    active: '활동', creative: '창의', calm: '평온',
    // cafe
    taste: '맛', vibe: '분위기',
    // cooking
    skill: '실력', creativity: '창작',
    // friendship
    loyalty: '충성', empathy: '공감',
    // morning
    discipline: '규율', mindful: '마음챙김',
    // superpower
    power: '힘', wisdom: '지혜', stealth: '은밀', charm: '매력',
    // hobby
    intellectual: '지적',
    // fantasy
    strength: '근력', intelligence: '지능', charisma: '카리스마', agility: '민첩',
  }

  return (
    <div className="max-w-lg mx-auto pt-8 pb-4">
      {/* 링크 복사 토스트 */}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-full text-white text-sm font-semibold shadow-lg transition-all duration-300"
        style={{
          background: 'rgba(30,30,30,0.92)',
          backdropFilter: 'blur(8px)',
          opacity: copied ? 1 : 0,
          transform: copied ? 'translate(-50%, 0)' : 'translate(-50%, 12px)',
          pointerEvents: 'none',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        링크가 복사되었어요!
      </div>

      {/* 결과 카드 */}
      <div className="animate-scale-in">
        <div
          ref={cardRef}
          className="rounded-3xl p-6 text-center relative overflow-hidden"
          style={{
            background: `linear-gradient(145deg, ${result.color}10, ${result.color}05)`,
            border: `1px solid ${result.color}20`,
          }}
        >
          {/* 배경 장식 */}
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.08]"
            style={{ background: `radial-gradient(circle, ${result.color}, transparent 70%)` }}
          />
          <div
            className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full opacity-[0.06]"
            style={{ background: `radial-gradient(circle, ${result.color}, transparent 70%)` }}
          />

          <div className="relative">
            {/* 테스트 라벨 */}
            <p
              className="text-[11px] font-medium mb-3 tracking-wide uppercase"
              style={{ color: result.color }}
            >
              {test.title}
            </p>

            {/* 결과 이미지 — 크게 */}
            {result.icon ? (
              <div className="relative w-full rounded-2xl overflow-hidden mb-5 mx-auto">
                <img
                  src={result.icon}
                  alt={result.title}
                  className="w-full h-auto"
                  style={{ borderRadius: '16px' }}
                />
                {/* 희귀도 뱃지 (이미지 위) — N등급은 숨김 */}
                {rarity && rarity.percentage <= 50 && (
                  <span
                    className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[10px] font-bold backdrop-blur-sm"
                    style={{ background: `${result.color}cc`, color: '#fff' }}
                  >
                    {rarity.percentage <= 10 ? 'SSR' : rarity.percentage <= 25 ? 'SR' : rarity.percentage <= 50 ? 'R' : 'N'}
                    {' '}{rarity.percentage}%
                  </span>
                )}
              </div>
            ) : (
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-5"
                style={{ background: `${result.color}15` }}
              >
                {result.emoji}
              </div>
            )}

            {/* 결과 타이틀 */}
            <h1 className="text-2xl font-bold mb-1">
              {result.emoji} {result.title}
            </h1>
            <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
              {result.subtitle}
            </p>

            {/* 태그 + 희귀도 */}
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {rarity && rarity.percentage <= 50 && !result.icon && (
                <span
                  className="text-[11px] px-3 py-1 rounded-full font-bold"
                  style={{ background: `${result.color}15`, color: result.color }}
                >
                  {rarity.percentage <= 10 ? 'SSR' : rarity.percentage <= 25 ? 'SR' : rarity.percentage <= 50 ? 'R' : 'N'}
                  {' '}{rarity.percentage}% ({rarity.total}명 중)
                </span>
              )}
              {result.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{ background: `${result.color}12`, color: result.color }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 설명 */}
            <p className="text-sm leading-relaxed" style={{ color: 'var(--fg)', opacity: 0.8 }}>
              {result.description}
            </p>
          </div>
        </div>
      </div>

      {/* 광고 1: 결과 카드 하단 */}
      <AdBanner slot="SLOT_RESULT_1" format="rectangle" className="mt-6" />

      {/* 점수 분석 */}
      {Object.keys(scores).length > 0 && (
        <div className="mt-6 animate-fade-up delay-200">
          <div
            className="rounded-2xl p-5"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <p className="text-xs font-medium mb-4" style={{ color: 'var(--muted)' }}>
              성향 분석
            </p>
            <div className="space-y-3">
              {test.axes.map(axis => {
                const score = (scores as Record<string, number>)[axis] || 0
                const pct = Math.round((score / maxScore) * 100)
                return (
                  <div key={axis}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium">{axisLabels[axis] || axis}</span>
                      <span className="text-xs font-bold" style={{ color: result.color }}>{pct}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: `${result.color}10` }}>
                      <div
                        className="h-full rounded-full animate-progress"
                        style={{
                          width: `${pct}%`,
                          background: `linear-gradient(90deg, ${result.color}90, ${result.color})`,
                        }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* 좋아요 / 싫어요 + 공유 버튼 */}
      <div className="mt-6 animate-fade-up delay-300">
        <div className="flex gap-2 mb-3">
          <button
            onClick={() => handleReaction('like')}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-medium transition-all btn-bounce"
            style={{
              background: myReaction === 'like' ? `${result.color}15` : 'var(--card)',
              border: myReaction === 'like' ? `1.5px solid ${result.color}40` : '1px solid var(--border)',
              color: myReaction === 'like' ? result.color : 'var(--fg)',
            }}
          >
            <ThumbsUp size={16} fill={myReaction === 'like' ? 'currentColor' : 'none'} />
            좋아요{likes > 0 && ` ${likes}`}
          </button>
          <button
            onClick={() => handleReaction('dislike')}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-medium transition-all btn-bounce"
            style={{
              background: myReaction === 'dislike' ? '#ef444415' : 'var(--card)',
              border: myReaction === 'dislike' ? '1.5px solid #ef444440' : '1px solid var(--border)',
              color: myReaction === 'dislike' ? '#ef4444' : 'var(--fg)',
            }}
          >
            <ThumbsDown size={16} fill={myReaction === 'dislike' ? 'currentColor' : 'none'} />
            싫어요{dislikes > 0 && ` ${dislikes}`}
          </button>
        </div>
        {/* 공유 버튼 */}
        <button
          onClick={handleShare}
          className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-white font-bold text-sm transition-all btn-bounce"
          style={{
            background: `linear-gradient(135deg, ${result.color}, ${result.color}aa)`,
            boxShadow: `0 6px 24px ${result.color}40`,
          }}
        >
          <Share2 size={18} />
          결과 공유하기
        </button>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs transition-all btn-bounce"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <Link2 size={14} />
            링크 복사
          </button>
          <button
            onClick={handleSaveImage}
            disabled={saving}
            className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs transition-all btn-bounce"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', opacity: saving ? 0.6 : 1 }}
          >
            <Camera size={14} />
            {saving ? '저장중...' : '이미지 저장'}
          </button>
        </div>
      </div>

      {/* 광고 2: 공유 버튼 하단 */}
      <AdBanner slot="SLOT_RESULT_2" format="horizontal" className="mt-6" />

      {/* 리뷰 작성 */}
      <div className="mt-6 animate-fade-up delay-300">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <div className="px-5 pt-4 pb-3 flex items-center gap-2">
            <MessageCircle size={14} style={{ color: result.color }} />
            <p className="text-sm font-bold">한줄 리뷰</p>
          </div>
          {reviewDone ? (
            <div className="px-5 pb-5 text-center">
              <p className="text-sm font-medium" style={{ color: result.color }}>리뷰가 등록되었어요!</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'var(--muted)' }}>소중한 의견 감사합니다</p>
            </div>
          ) : (
            <div className="px-5 pb-4">
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="닉네임"
                  value={reviewNickname}
                  onChange={e => setReviewNickname(e.target.value)}
                  maxLength={10}
                  className="w-full px-3 py-2.5 rounded-xl text-xs outline-none"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                  onFocus={e => { e.currentTarget.style.borderColor = result.color }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                />
                <textarea
                  placeholder="이 테스트 어땠나요? 솔직한 리뷰를 남겨주세요!"
                  value={reviewText}
                  onChange={e => setReviewText(e.target.value)}
                  maxLength={200}
                  rows={2}
                  className="w-full px-3 py-2.5 rounded-xl text-xs outline-none resize-none"
                  style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                  onFocus={e => { e.currentTarget.style.borderColor = result.color }}
                  onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px]" style={{ color: 'var(--muted)' }}>{reviewText.length}/200</span>
                <button
                  onClick={handleSubmitReview}
                  disabled={reviewSubmitting}
                  className="px-4 py-1.5 rounded-lg text-xs font-bold text-white btn-bounce"
                  style={{ background: result.color, opacity: reviewSubmitting ? 0.5 : 1 }}
                >
                  {reviewSubmitting ? '등록 중...' : '등록'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 방 참여 섹션 */}
      <div className="mt-8 animate-fade-up delay-400">
        <button
          onClick={() => setShowGroup(!showGroup)}
          className="w-full py-3.5 rounded-2xl font-bold text-sm btn-bounce flex items-center justify-center gap-2"
          style={{
            background: 'linear-gradient(135deg, var(--sky-400), var(--accent))',
            color: 'white',
            boxShadow: '0 4px 15px rgba(99, 102, 241, 0.2)',
          }}
        >
          <Users size={16} />
          방 참여하기
        </button>

        {showGroup && (
          <div className="mt-4 space-y-3 animate-scale-in">
            <input
              type="text"
              placeholder="닉네임 입력"
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              maxLength={10}
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
              onFocus={e => { e.currentTarget.style.borderColor = 'var(--sky-400)' }}
              onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
            />
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="방 코드 입력"
                value={roomCode}
                onChange={e => setRoomCode(e.target.value.toUpperCase())}
                maxLength={6}
                className="flex-1 px-4 py-3 rounded-xl text-sm font-mono text-center uppercase outline-none"
                style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
                onFocus={e => { e.currentTarget.style.borderColor = 'var(--sky-400)' }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
              />
              <button
                onClick={async () => {
                  if (!nickname.trim()) { alert('닉네임을 입력해주세요'); return }
                  if (!roomCode.trim()) { alert('방 코드를 입력해주세요'); return }
                  setJoining(true)
                  try {
                    const res = await fetch('/api/room', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        action: 'join',
                        code: roomCode.trim(),
                        nickname: nickname.trim(),
                        scores,
                        resultType: type,
                      }),
                    })
                    const data = await res.json()
                    if (data.error) {
                      alert(data.error)
                    } else {
                      saveRoomParticipation(roomCode.trim(), data.room?.name || '', testId, nickname.trim(), data.room?.participants?.length)
                      router.push(`/room/${roomCode.trim()}`)
                    }
                  } catch {
                    alert('참여에 실패했어요')
                  } finally {
                    setJoining(false)
                  }
                }}
                disabled={joining}
                className="px-5 py-3 rounded-xl text-sm font-bold btn-bounce shrink-0"
                style={{ background: 'var(--sky-500)', color: 'white' }}
              >
                {joining ? '...' : '참여'}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 다른 테스트 */}
      <div className="mt-6 space-y-3 animate-fade-up delay-400">
        <Link
          href={`/quiz/${testId}`}
          className="block w-full py-3.5 rounded-2xl text-center font-medium text-sm transition-all btn-bounce"
          style={{
            background: `${result.color}08`,
            border: `1px solid ${result.color}20`,
            color: result.color,
          }}
        >
          다시 테스트하기
        </Link>

        <Link
          href="/"
          className="block w-full py-3.5 rounded-2xl text-center text-sm"
          style={{ color: 'var(--muted)' }}
        >
          전체 테스트 보러가기 →
        </Link>
      </div>

      {/* 다른 테스트 추천 */}
      <div className="mt-8 animate-fade-up delay-500">
        <p className="text-xs font-medium mb-3 px-1" style={{ color: 'var(--muted)' }}>다른 테스트도 해보세요</p>
        <div className="space-y-2">
          {otherTests.map(t => (
            <Link
              key={t.id}
              href={`/quiz/${t.id}`}
              className="flex items-center gap-3 p-3.5 rounded-2xl transition-all btn-bounce"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              {t.icon ? (
                <img src={t.icon} alt={t.title} className="w-10 h-10 rounded-xl object-cover shrink-0" />
              ) : (
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: 'var(--bg)' }}>
                  {t.emoji}
                </div>
              )}
              <div className="text-left min-w-0">
                <p className="text-sm font-medium truncate">{t.title}</p>
                <p className="text-[11px] truncate" style={{ color: 'var(--muted)' }}>{t.description}</p>
              </div>
              <span className="text-xs shrink-0" style={{ color: 'var(--muted)' }}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
