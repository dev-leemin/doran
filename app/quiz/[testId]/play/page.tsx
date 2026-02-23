'use client'

import { useState, useCallback, use } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Users, FileText, Clock, Link2 } from 'lucide-react'
import { getTest } from '@/lib/tests'
import type { Choice, Question } from '@/lib/tests'
import { saveRoomParticipation, saveTestResult } from '@/lib/history'

/** 배열을 랜덤으로 섞는 유틸 (Fisher-Yates 셔플) */
function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function PlayPage({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = use(params)
  const router = useRouter()
  const searchParams = useSearchParams()
  const test = getTest(testId)

  /* 방 참여 모드 */
  const [roomCodeState, setRoomCodeState] = useState(searchParams.get('room') || '')
  const [roomNicknameState, setRoomNicknameState] = useState(searchParams.get('nickname') || '')
  const [showRoomForm, setShowRoomForm] = useState(false)
  const [roomNameInput, setRoomNameInput] = useState('')
  const [roomNicknameInput, setRoomNicknameInput] = useState('')
  const [roomPasswordInput, setRoomPasswordInput] = useState('')
  const [roomCreating, setRoomCreating] = useState(false)

  const [step, setStep] = useState<'intro' | 'question' | 'calculating'>('intro')
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])
  const [currentQ, setCurrentQ] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({})
  const [animating, setAnimating] = useState(false)

  /* 문항 수: 최소 10, 최대 30 (가용 문항 수 이내) */
  const maxQuestions = test?.questions.length ?? 30
  const minQuestions = Math.min(10, maxQuestions)
  const [questionCount, setQuestionCount] = useState(minQuestions)

  if (!test) {
    return (
      <div className="max-w-lg mx-auto pt-20 text-center">
        <img src="/icons/status/no-test.png" alt="not found" className="w-20 h-20 mx-auto mb-4 object-contain" />
        <p className="font-bold text-lg">존재하지 않는 테스트예요</p>
      </div>
    )
  }

  /** 테스트 시작: 방 참여 모드면 방의 문항을 사용, 아니면 랜덤 선택 */
  const startTest = async () => {
    if (roomCodeState) {
      /* 방 참여 모드 → 방의 questionIds로 동일 문항 사용 */
      try {
        const res = await fetch(`/api/room?code=${roomCodeState}`)
        const data = await res.json()
        if (data.room?.questionIds?.length > 0) {
          const picked = (data.room.questionIds as number[]).map((i: number) => test.questions[i])
          setSelectedQuestions(picked)
          setCurrentQ(0)
          setScores({})
          setStep('question')
          return
        }
      } catch { /* fallback to random */ }
    }
    /* 혼자하기 → 랜덤 출제 */
    const picked = shuffle(test.questions).slice(0, questionCount)
    setSelectedQuestions(picked)
    setCurrentQ(0)
    setScores({})
    setStep('question')
  }

  /** 방 만들기 → 방 생성 후 테스트 시작 */
  const handleCreateRoom = async () => {
    if (!roomNameInput.trim()) { alert('방 이름을 입력해주세요'); return }
    if (!roomNicknameInput.trim()) { alert('닉네임을 입력해주세요'); return }
    if (roomPasswordInput.length !== 4) { alert('비밀번호는 4자리로 입력해주세요'); return }
    setRoomCreating(true)
    try {
      const indices = test.questions.map((_, i) => i)
      const shuffledIndices = shuffle(indices).slice(0, questionCount)
      const picked = shuffledIndices.map(i => test.questions[i])

      const res = await fetch('/api/room', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          testId,
          name: roomNameInput.trim(),
          password: roomPasswordInput,
          questionCount,
          questionIds: shuffledIndices,
        }),
      })
      const data = await res.json()
      if (data.error) { alert(data.error); return }

      setRoomCodeState(data.room.code)
      setRoomNicknameState(roomNicknameInput.trim())
      setSelectedQuestions(picked)
      setCurrentQ(0)
      setScores({})
      setStep('question')
    } catch {
      alert('방 만들기에 실패했어요')
    } finally {
      setRoomCreating(false)
    }
  }

  const question = selectedQuestions[currentQ]
  const progress = selectedQuestions.length > 0
    ? (currentQ / selectedQuestions.length) * 100
    : 0

  /** 선택지 클릭 → 점수 합산 → 다음 문항 또는 결과 계산 */
  const handleChoice = useCallback((choice: Choice) => {
    if (animating) return
    setAnimating(true)

    const newScores = { ...scores }
    Object.entries(choice.scores).forEach(([axis, points]) => {
      newScores[axis] = (newScores[axis] || 0) + points
    })
    setScores(newScores)

    setTimeout(() => {
      if (currentQ + 1 >= selectedQuestions.length) {
        /* 모든 문항 완료 → 결과 계산 */
        setStep('calculating')
        const resultType = test.calculateResult(newScores)

        /* 참여 통계 증가 (비동기, 실패해도 무시) */
        fetch('/api/stats', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ testId }),
        }).catch(() => {})

        setTimeout(async () => {
          /* 모든 사용자: 테스트 결과를 localStorage에 저장 */
          saveTestResult(testId, resultType, newScores)

          /* 방 참여 모드면 자동으로 방에 입장 */
          if (roomCodeState && roomNicknameState) {
            try {
              const joinRes = await fetch('/api/room', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  action: 'join',
                  code: roomCodeState,
                  nickname: roomNicknameState,
                  scores: newScores,
                  resultType,
                }),
              })
              const joinData = await joinRes.json()
              /* 방 참여 기록 저장 */
              saveRoomParticipation(roomCodeState, roomNameInput || '', testId, roomNicknameState, joinData.room?.participants?.length)
              router.push(`/room/${roomCodeState}`)
              return
            } catch { /* fallback to normal result */ }
          }
          const scoreParam = encodeURIComponent(JSON.stringify(newScores))
          router.push(`/result/${testId}/${resultType}?s=${scoreParam}`)
        }, 2000)
      } else {
        setCurrentQ(currentQ + 1)
        setAnimating(false)
      }
    }, 300)
  }, [animating, scores, currentQ, selectedQuestions, test, testId, router, roomCodeState, roomNicknameState])

  /* ── 인트로 화면 ── */
  if (step === 'intro') {
    return (
      <div className="max-w-lg mx-auto pt-10 pb-8 animate-fade-up">
        {/* 상단 카드 */}
        <div
          className="relative rounded-3xl p-8 text-center overflow-hidden mb-6"
          style={{
            background: `linear-gradient(145deg, ${test.color}08, ${test.color}18)`,
            border: `1px solid ${test.color}20`,
          }}
        >
          {/* 배경 장식 */}
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-[0.08]"
            style={{ background: `radial-gradient(circle, ${test.color}, transparent 70%)` }}
          />
          <div
            className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full opacity-[0.06]"
            style={{ background: `radial-gradient(circle, ${test.color}, transparent 70%)` }}
          />

          <div className="relative">
            {test.icon ? (
              <div className="w-24 h-24 rounded-3xl overflow-hidden mx-auto mb-5 animate-float">
                <Image src={test.icon} alt={test.title} width={96} height={96} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl mx-auto mb-5 animate-float"
                style={{ background: `${test.color}15` }}
              >
                {test.emoji}
              </div>
            )}
            <h1 className="text-2xl font-bold mb-2">{test.title}</h1>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              {test.description}
            </p>
          </div>
        </div>

        {/* 문항 수: 방 참여 모드면 고정, 아니면 슬라이더 */}
        {roomCodeState ? (
          <div
            className="rounded-2xl p-5 mb-4"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold flex items-center gap-1"><Users size={14} /> 방 참여 모드</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>방장이 설정한 문항으로 진행돼요</p>
            </div>
          </div>
        ) : (
          <div
            className="rounded-2xl p-5 mb-4"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold">문항 수 선택</p>
              <p className="text-lg font-bold" style={{ color: test.color }}>{questionCount}문항</p>
            </div>
            <input
              type="range"
              min={minQuestions}
              max={maxQuestions}
              step={1}
              value={questionCount}
              onChange={e => setQuestionCount(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${test.color} ${((questionCount - minQuestions) / (maxQuestions - minQuestions)) * 100}%, var(--border) ${((questionCount - minQuestions) / (maxQuestions - minQuestions)) * 100}%)`,
                accentColor: test.color,
              }}
            />
            <div className="flex justify-between text-[10px] mt-1" style={{ color: 'var(--muted)' }}>
              <span>{minQuestions}문항</span>
              <span>{maxQuestions}문항</span>
            </div>
          </div>
        )}

        {/* 안내 카드 */}
        <div
          className="rounded-2xl p-5 mb-6"
          style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${test.color}10`, color: test.color }}>
                <FileText size={18} />
              </span>
              <div>
                <p className="font-medium text-xs">랜덤 출제</p>
                <p className="text-[11px]" style={{ color: 'var(--muted)' }}>총 {test.questions.length}문항 중 {questionCount}문항이 랜덤으로 나와요</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${test.color}10`, color: test.color }}>
                <Clock size={18} />
              </span>
              <div>
                <p className="font-medium text-xs">예상 소요시간</p>
                <p className="text-[11px]" style={{ color: 'var(--muted)' }}>약 {test.avgTime ?? '3분'} 정도 걸려요</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${test.color}10`, color: test.color }}>
                <Link2 size={18} />
              </span>
              <div>
                <p className="font-medium text-xs">결과 공유</p>
                <p className="text-[11px]" style={{ color: 'var(--muted)' }}>완료 후 친구에게 결과를 공유할 수 있어요</p>
              </div>
            </div>
          </div>
        </div>

        {/* 시작 옵션 */}
        {roomCodeState ? (
          /* 방 참여 모드 - 바로 시작 */
          <button
            onClick={startTest}
            className="w-full py-4 rounded-2xl text-white font-bold text-base transition-all duration-200 btn-bounce"
            style={{
              background: `linear-gradient(135deg, ${test.color}, ${test.color}dd)`,
              boxShadow: `0 4px 15px ${test.color}30`,
            }}
          >
            시작하기
          </button>
        ) : showRoomForm ? (
          /* 방 만들기 폼 */
          <div
            className="rounded-2xl p-5 animate-scale-in"
            style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
          >
            <p className="text-sm font-bold mb-3">👥 방 만들기</p>
            <div className="space-y-2.5 mb-4">
              <input
                type="text"
                placeholder="방 이름"
                value={roomNameInput}
                onChange={e => setRoomNameInput(e.target.value)}
                maxLength={20}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                onFocus={e => { e.currentTarget.style.borderColor = test.color }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
              />
              <input
                type="text"
                placeholder="닉네임"
                value={roomNicknameInput}
                onChange={e => setRoomNicknameInput(e.target.value)}
                maxLength={10}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                onFocus={e => { e.currentTarget.style.borderColor = test.color }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
              />
              <input
                type="password"
                placeholder="비밀번호 (숫자 4자리)"
                value={roomPasswordInput}
                onChange={e => setRoomPasswordInput(e.target.value.replace(/\D/g, '').slice(0, 4))}
                maxLength={4}
                inputMode="numeric"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none font-mono tracking-widest"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
                onFocus={e => { e.currentTarget.style.borderColor = test.color }}
                onBlur={e => { e.currentTarget.style.borderColor = 'var(--border)' }}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => { setShowRoomForm(false); setRoomNameInput(''); setRoomPasswordInput(''); setRoomNicknameInput('') }}
                className="py-3 rounded-xl font-medium text-sm btn-bounce"
                style={{ background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--muted)' }}
              >
                취소
              </button>
              <button
                onClick={handleCreateRoom}
                disabled={roomCreating}
                className="py-3 rounded-xl font-bold text-sm text-white btn-bounce"
                style={{
                  background: `linear-gradient(135deg, ${test.color}, ${test.color}dd)`,
                  opacity: roomCreating ? 0.6 : 1,
                }}
              >
                {roomCreating ? '만드는 중...' : '만들기'}
              </button>
            </div>
          </div>
        ) : (
          /* 혼자하기 / 방 만들기 선택 */
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={startTest}
              className="py-4 rounded-2xl text-white font-bold text-base transition-all duration-200 btn-bounce"
              style={{
                background: `linear-gradient(135deg, ${test.color}, ${test.color}dd)`,
                boxShadow: `0 4px 15px ${test.color}30`,
              }}
            >
              혼자하기
            </button>
            <button
              onClick={() => setShowRoomForm(true)}
              className="py-4 rounded-2xl font-bold text-base transition-all duration-200 btn-bounce"
              style={{
                background: `${test.color}10`,
                border: `1px solid ${test.color}30`,
                color: test.color,
              }}
            >
              방 만들기
            </button>
          </div>
        )}
      </div>
    )
  }

  /* ── 계산 중 화면 ── */
  if (step === 'calculating') {
    return (
      <div className="max-w-lg mx-auto pt-24 text-center animate-fade-in">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: test.color }}
          />
          <img src="/icons/status/loading.png" alt="분석 중" className="relative w-20 h-20 object-contain" />
        </div>
        <p className="font-bold text-lg mb-2">분석 중...</p>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          당신의 답변을 분석하고 있어요
        </p>

        {/* 로딩 바 */}
        <div className="mt-8 mx-auto max-w-[200px]">
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${test.color}15` }}>
            <div
              className="h-full rounded-full animate-progress"
              style={{
                background: `linear-gradient(90deg, ${test.color}, ${test.color}aa)`,
                width: '100%',
                animationDuration: '1.8s',
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  /* ── 질문 화면 ── */
  return (
    <div className="max-w-lg mx-auto pt-6">
      {/* 프로그레스 바 */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium" style={{ color: test.color }}>
            Q{currentQ + 1}
          </span>
          <span className="text-xs" style={{ color: 'var(--muted)' }}>
            {currentQ + 1} / {selectedQuestions.length}
          </span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${test.color}12` }}>
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              background: `linear-gradient(90deg, ${test.color}, ${test.color}bb)`,
            }}
          />
        </div>
      </div>

      {/* 질문 */}
      <div key={currentQ} className="animate-slide-right">
        <div className="text-center mb-8">
          <span className="text-4xl block mb-3">{question.emoji}</span>
          <p className="font-bold text-lg leading-relaxed">
            {question.situation}
          </p>
        </div>

        {/* 선택지 */}
        <div className="space-y-3">
          {question.choices.map((choice, i) => (
            <button
              key={i}
              onClick={() => handleChoice(choice)}
              disabled={animating}
              className="w-full text-left p-4 rounded-2xl transition-all duration-200 btn-bounce"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = test.color
                e.currentTarget.style.background = `${test.color}06`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--card)'
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl shrink-0">{choice.emoji}</span>
                <span className="text-sm font-medium">{choice.text}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
