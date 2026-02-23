'use client'

import { use, useMemo, useState, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { getTest, getResult } from '@/lib/tests'
import { saveTestResult, saveRoomParticipation } from '@/lib/history'
import { Share2, Link2, Users, Download, Camera, MessageCircle } from 'lucide-react'
import html2canvas from 'html2canvas'

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
      alert('링크가 복사되었어요!')
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

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    alert('링크가 복사되었어요!')
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
    efficiency: '효율',
    social: '소셜',
    initiative: '주도',
    passion: '열정',
    spicy: '매운맛',
    adventure: '모험',
    health: '건강',
    mood: '기분파',
    introvert: '내향',
    planner: '계획',
    trendy: '트렌디',
    emotional: '감성',
  }

  return (
    <div className="max-w-lg mx-auto pt-8 pb-4">
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
            {/* 결과 유형 아이콘 */}
            {result.icon ? (
              <img src={result.icon} alt={result.title} className="w-20 h-20 rounded-3xl mx-auto mb-4 object-contain" style={{ background: `${result.color}15` }} />
            ) : (
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-4"
                style={{ background: `${result.color}15` }}
              >
                {result.emoji}
              </div>
            )}

            {/* 테스트 라벨 */}
            <p
              className="text-xs font-medium mb-2 tracking-wide uppercase"
              style={{ color: result.color }}
            >
              {test.title}
            </p>

            {/* 결과 타이틀 */}
            <h1 className="text-2xl font-bold mb-1">{result.title}</h1>
            <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
              {result.subtitle}
            </p>

            {/* 태그 */}
            <div className="flex flex-wrap justify-center gap-2 mb-5">
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

            {/* 희귀도 */}
            {rarity && (
              <div className="mb-4">
                <span
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold"
                  style={{ background: `${result.color}15`, color: result.color }}
                >
                  {rarity.percentage <= 10 ? 'SSR' : rarity.percentage <= 25 ? 'SR' : rarity.percentage <= 50 ? 'R' : 'N'}
                  {' '}{rarity.percentage}% ({rarity.total}명 중)
                </span>
              </div>
            )}

            {/* 설명 */}
            <p className="text-sm leading-relaxed" style={{ color: 'var(--fg)', opacity: 0.8 }}>
              {result.description}
            </p>
          </div>
        </div>
      </div>

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
                      <span className="text-xs" style={{ color: 'var(--muted)' }}>{score}점</span>
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

      {/* 공유 버튼 */}
      <div className="mt-6 grid grid-cols-3 gap-2 animate-fade-up delay-300">
        <button
          onClick={handleSaveImage}
          disabled={saving}
          className="flex flex-col items-center justify-center gap-1 py-3 rounded-2xl font-bold text-xs transition-all btn-bounce"
          style={{ background: 'var(--card)', border: '1px solid var(--border)', opacity: saving ? 0.6 : 1 }}
        >
          <Camera size={16} />
          {saving ? '저장중...' : '이미지 저장'}
        </button>
        <button
          onClick={handleCopyLink}
          className="flex flex-col items-center justify-center gap-1 py-3 rounded-2xl font-bold text-xs transition-all btn-bounce"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <Link2 size={16} />
          링크 복사
        </button>
        <button
          onClick={handleShare}
          className="flex flex-col items-center justify-center gap-1 py-3 rounded-2xl text-white font-bold text-xs transition-all btn-bounce"
          style={{ background: `linear-gradient(135deg, ${result.color}, ${result.color}cc)` }}
        >
          <Share2 size={16} />
          공유하기
        </button>
      </div>

      {/* 리뷰 작성 */}
      <div className="mt-6 animate-fade-up delay-300">
        {reviewDone ? (
          <div
            className="rounded-2xl p-5 text-center"
            style={{ background: `${result.color}08`, border: `1px solid ${result.color}20` }}
          >
            <div className="w-10 h-10 mx-auto mb-2 rounded-xl flex items-center justify-center" style={{ background: `${result.color}15`, color: result.color }}>
              <MessageCircle size={20} />
            </div>
            <p className="text-sm font-bold" style={{ color: result.color }}>리뷰가 등록되었어요!</p>
            <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>소중한 의견 감사합니다</p>
          </div>
        ) : (
          <div
            className="rounded-2xl p-5"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <p className="text-sm font-bold mb-3">이 테스트 어땠나요?</p>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="닉네임"
                value={reviewNickname}
                onChange={e => setReviewNickname(e.target.value)}
                maxLength={10}
                className="w-24 px-3 py-2.5 rounded-xl text-xs outline-none shrink-0"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                onFocus={e => { e.currentTarget.style.borderColor = result.color }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
              />
              <input
                type="text"
                placeholder="리뷰를 남겨주세요 (200자)"
                value={reviewText}
                onChange={e => setReviewText(e.target.value)}
                maxLength={200}
                className="flex-1 px-3 py-2.5 rounded-xl text-xs outline-none"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                onFocus={e => { e.currentTarget.style.borderColor = result.color }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
                onKeyDown={e => { if (e.key === 'Enter' && !reviewSubmitting) handleSubmitReview() }}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSubmitReview}
                disabled={reviewSubmitting}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white btn-bounce"
                style={{ background: result.color, opacity: reviewSubmitting ? 0.5 : 1 }}
              >
                {reviewSubmitting ? '등록 중...' : '등록'}
              </button>
            </div>
          </div>
        )}
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
          다른 테스트 하러가기 →
        </Link>
      </div>
    </div>
  )
}
