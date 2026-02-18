/** 테스트 카테고리 */
export type TestCategory = 'personality' | 'food' | 'relationship' | 'lifestyle' | 'fun'

/** 카테고리별 색상 매핑 */
export const CATEGORY_COLORS: Record<TestCategory, string> = {
  personality: '#0ea5e9',   // 성격/유형 — 스카이블루
  food:        '#f59e0b',   // 음식/취향 — 앰버
  relationship:'#8b5cf6',   // 관계/궁합 — 바이올렛
  lifestyle:   '#10b981',   // 라이프스타일 — 에메랄드
  fun:         '#ec4899',   // 재미/놀이 — 핑크
}

/** 카테고리 한글 라벨 */
export const CATEGORY_LABELS: Record<TestCategory, string> = {
  personality: '성격',
  food:        '음식',
  relationship:'관계',
  lifestyle:   '라이프',
  fun:         '재미',
}

export interface Choice {
  text: string
  emoji?: string
  scores: Record<string, number> // { axis: points }
}

export interface Question {
  id: number
  situation: string   // 상황 설명
  emoji: string
  choices: Choice[]
}

export interface ResultType {
  id: string
  title: string
  emoji: string
  subtitle: string
  description: string
  tags: string[]
  color: string       // hex
  gradient: string    // tailwind gradient classes
}

/**
 * 문항 수 선택 옵션
 * 각 테스트마다 제공할 문항 수와 라벨을 지정
 */
export interface QuestionCountOption {
  count: number
  label: string   // 예: '빠르게', '적당히', '정확하게'
  time: string    // 예: '2분', '5분'
}

export interface TestConfig {
  id: string
  title: string
  emoji: string
  icon?: string           // 커스텀 아이콘 이미지 경로 (예: '/icons/office.png')
  description: string
  category: TestCategory  // 카테고리 지정 → 색상 자동 결정
  color: string           // CATEGORY_COLORS[category] 로 설정
  tags: string[]           // 상세 페이지에 표시할 태그 (예: ['직장인', '성격', 'MBTI'])
  avgTime?: string         // 평균 소요 시간 (예: '3분')
  questions: Question[]
  results: ResultType[]
  axes: string[]
  /** 테스트별 문항 수 옵션 (미지정 시 기본값 사용) */
  questionCounts?: QuestionCountOption[]
  calculateResult: (scores: Record<string, number>) => string
}

export interface TestResult {
  testId: string
  resultType: string
  scores: Record<string, number>
  nickname?: string
}
