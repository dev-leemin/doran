import { TestConfig, CATEGORY_COLORS } from './types'

const morningTest: TestConfig = {
  id: 'morning',
  title: '나의 아침 루틴은?',
  emoji: '🌅',
  icon: '/icons/tests/morning.png',
  description: '당신의 아침 스타일을 알아보세요',
  category: 'lifestyle',
  color: CATEGORY_COLORS.lifestyle,
  tags: ['아침', '루틴', '라이프', '생활패턴'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['discipline', 'energy', 'mindful', 'social'],

  questions: [
    {
      id: 1,
      situation: '아침 알람이 울렸다. 당신의 반응은?',
      emoji: '⏰',
      choices: [
        { text: '첫 알람에 바로 일어나서 이불 정리', emoji: '🛏️', scores: { discipline: 3, energy: 1 } },
        { text: '알람 끄고 스트레칭부터 시작', emoji: '🤸', scores: { energy: 3, mindful: 1 } },
        { text: '눈 감은 채로 오늘 하루를 떠올려본다', emoji: '🧘', scores: { mindful: 3, discipline: 1 } },
        { text: '카톡 확인하면서 천천히 눈 뜨기', emoji: '📱', scores: { social: 3, energy: 0 } },
      ],
    },
    {
      id: 2,
      situation: '일어나자마자 가장 먼저 하는 일은?',
      emoji: '🌤️',
      choices: [
        { text: '커튼 열고 창문 열어서 환기', emoji: '🪟', scores: { discipline: 2, mindful: 2 } },
        { text: '운동복 갈아입고 밖으로 나간다', emoji: '🏃', scores: { energy: 3, discipline: 1 } },
        { text: '따뜻한 물 한 잔 마시며 명상', emoji: '💧', scores: { mindful: 3, energy: 0 } },
        { text: '단톡방에 "굿모닝~" 인사부터', emoji: '💬', scores: { social: 3, mindful: 1 } },
      ],
    },
    {
      id: 3,
      situation: '아침 식사 스타일은?',
      emoji: '🍳',
      choices: [
        { text: '전날 밤에 미리 준비해둔 식단대로', emoji: '📋', scores: { discipline: 3, energy: 1 } },
        { text: '단백질 쉐이크와 바나나로 간단히', emoji: '🥤', scores: { energy: 3, discipline: 1 } },
        { text: '따뜻한 차 한 잔과 가벼운 과일', emoji: '🍵', scores: { mindful: 3, social: 0 } },
        { text: '동네 카페에서 친구랑 브런치', emoji: '🥐', scores: { social: 3, energy: 1 } },
      ],
    },
    {
      id: 4,
      situation: '샤워할 시간이다. 당신의 스타일은?',
      emoji: '🚿',
      choices: [
        { text: '5분 안에 끝내는 효율적 샤워', emoji: '⚡', scores: { discipline: 3, energy: 1 } },
        { text: '찬물 샤워로 정신 번쩍!', emoji: '🧊', scores: { energy: 3, mindful: 1 } },
        { text: '따뜻한 물에 아로마 오일 한 방울', emoji: '🫧', scores: { mindful: 3, discipline: 0 } },
        { text: '노래 부르면서 여유롭게 즐기기', emoji: '🎤', scores: { social: 2, energy: 2 } },
      ],
    },
    {
      id: 5,
      situation: '옷을 고르는 중이다.',
      emoji: '👔',
      choices: [
        { text: '전날 밤에 이미 코디해둔 옷', emoji: '🧥', scores: { discipline: 3, mindful: 1 } },
        { text: '움직이기 편한 운동복 스타일', emoji: '👟', scores: { energy: 3, discipline: 0 } },
        { text: '오늘 기분에 맞는 색감의 옷', emoji: '🎨', scores: { mindful: 3, social: 1 } },
        { text: '인스타 감성 OOTD 고민 중', emoji: '📸', scores: { social: 3, mindful: 1 } },
      ],
    },
    {
      id: 6,
      situation: '출근/외출 준비 시간이 15분 남았다.',
      emoji: '🕗',
      choices: [
        { text: '이미 다 준비됐고 여유 시간에 뉴스 확인', emoji: '📰', scores: { discipline: 3, social: 1 } },
        { text: '남는 시간에 플랭크 1세트 추가', emoji: '💪', scores: { energy: 3, discipline: 1 } },
        { text: '창밖 바라보며 잠시 멍 때리기', emoji: '🌳', scores: { mindful: 3, energy: 0 } },
        { text: '친구한테 전화해서 같이 출근 약속', emoji: '📞', scores: { social: 3, discipline: 0 } },
      ],
    },
    {
      id: 7,
      situation: '아침에 커피를 마신다면?',
      emoji: '☕',
      choices: [
        { text: '타이머 맞춰둔 커피머신에서 바로 추출', emoji: '⏱️', scores: { discipline: 3, energy: 1 } },
        { text: '운동 후 보상으로 마시는 아메리카노', emoji: '🏋️', scores: { energy: 3, discipline: 1 } },
        { text: '핸드드립으로 정성껏 내리는 한 잔', emoji: '🫖', scores: { mindful: 3, energy: 0 } },
        { text: '단골 카페에서 바리스타와 수다 떨며', emoji: '🗣️', scores: { social: 3, mindful: 1 } },
      ],
    },
    {
      id: 8,
      situation: '아침에 핸드폰을 보는 패턴은?',
      emoji: '📱',
      choices: [
        { text: '일정 확인하고 할 일 목록 체크', emoji: '✅', scores: { discipline: 3, social: 1 } },
        { text: '오늘의 운동 루틴 영상 검색', emoji: '🎬', scores: { energy: 3, mindful: 0 } },
        { text: '오늘의 명언이나 긍정 확언 읽기', emoji: '📖', scores: { mindful: 3, discipline: 1 } },
        { text: 'SNS 피드 훑어보고 댓글 달기', emoji: '💕', scores: { social: 3, energy: 0 } },
      ],
    },
    {
      id: 9,
      situation: '아침에 날씨가 너무 좋다!',
      emoji: '☀️',
      choices: [
        { text: '좋은 날씨에도 평소 루틴 그대로', emoji: '📝', scores: { discipline: 3, mindful: 0 } },
        { text: '바로 러닝화 신고 공원 달리기', emoji: '🏃', scores: { energy: 3, mindful: 1 } },
        { text: '베란다에서 햇살 맞으며 심호흡', emoji: '🌞', scores: { mindful: 3, energy: 1 } },
        { text: '"날씨 짱이다!" 사진 찍어서 공유', emoji: '🤳', scores: { social: 3, discipline: 0 } },
      ],
    },
    {
      id: 10,
      situation: '아침에 갑자기 비가 내리기 시작했다.',
      emoji: '🌧️',
      choices: [
        { text: '우산은 이미 현관에 준비되어 있다', emoji: '☂️', scores: { discipline: 3, energy: 0 } },
        { text: '실내 운동으로 루틴 전환!', emoji: '🧘‍♂️', scores: { energy: 3, discipline: 1 } },
        { text: '빗소리 들으며 차 한 잔의 여유', emoji: '🌿', scores: { mindful: 3, social: 1 } },
        { text: '친구한테 "비 온다 우산 챙겨~" 연락', emoji: '💌', scores: { social: 3, mindful: 0 } },
      ],
    },
    {
      id: 11,
      situation: '주말 아침, 알람 없이 눈을 떴다.',
      emoji: '🛌',
      choices: [
        { text: '주말이어도 평일과 같은 시간에 기상', emoji: '🕖', scores: { discipline: 3, energy: 1 } },
        { text: '일어나자마자 자전거 타러 나간다', emoji: '🚴', scores: { energy: 3, social: 1 } },
        { text: '이불 속에서 감사일기 쓰기', emoji: '📓', scores: { mindful: 3, discipline: 1 } },
        { text: '친구들한테 "오늘 뭐해?" 연락 돌리기', emoji: '📲', scores: { social: 3, energy: 1 } },
      ],
    },
    {
      id: 12,
      situation: '아침 루틴이 방해받았다! 어떻게 할까?',
      emoji: '😤',
      choices: [
        { text: '시간을 재배분해서라도 루틴 완수', emoji: '🔄', scores: { discipline: 3, mindful: 0 } },
        { text: '루틴 대신 계단 오르기로 에너지 충전', emoji: '🏢', scores: { energy: 3, discipline: 1 } },
        { text: '괜찮아, 흐름에 맡기자', emoji: '🍃', scores: { mindful: 3, social: 1 } },
        { text: '동료한테 사정 얘기하면서 웃기', emoji: '😂', scores: { social: 3, energy: 1 } },
      ],
    },
    {
      id: 13,
      situation: '아침에 집을 나서기 직전, 마지막으로 하는 일은?',
      emoji: '🚪',
      choices: [
        { text: '체크리스트 확인: 지갑, 열쇠, 폰 OK', emoji: '🔑', scores: { discipline: 3, social: 0 } },
        { text: '가볍게 스쿼트 10개 하고 출발', emoji: '🦵', scores: { energy: 3, mindful: 0 } },
        { text: '현관에서 잠시 눈 감고 오늘의 다짐', emoji: '🙏', scores: { mindful: 3, discipline: 1 } },
        { text: '같이 가는 사람한테 "나 출발!" 문자', emoji: '✉️', scores: { social: 3, discipline: 1 } },
      ],
    },
    {
      id: 14,
      situation: '아침에 예상치 못한 여유 시간 30분이 생겼다.',
      emoji: '🎁',
      choices: [
        { text: '밀린 집안일 정리하기', emoji: '🧹', scores: { discipline: 3, energy: 1 } },
        { text: '홈트 유튜브 영상 하나 따라하기', emoji: '📺', scores: { energy: 3, social: 0 } },
        { text: '좋아하는 음악 들으며 차 한 잔', emoji: '🎵', scores: { mindful: 3, energy: 1 } },
        { text: '이웃이나 동료에게 안부 전화', emoji: '📞', scores: { social: 3, mindful: 1 } },
      ],
    },
    {
      id: 15,
      situation: '오늘따라 몸이 찌뿌둥하다.',
      emoji: '😩',
      choices: [
        { text: '그래도 정해진 루틴은 지킨다', emoji: '💼', scores: { discipline: 3, energy: 0 } },
        { text: '가벼운 조깅이라도 하면 나아질 거야', emoji: '🏃‍♀️', scores: { energy: 3, mindful: 1 } },
        { text: '폼롤러 위에서 천천히 스트레칭', emoji: '🧘‍♀️', scores: { mindful: 3, energy: 1 } },
        { text: '친구한테 "오늘 컨디션 별로야ㅠ" 투정', emoji: '🥺', scores: { social: 3, discipline: 0 } },
      ],
    },
    {
      id: 16,
      situation: '출근길에 여유 시간이 있다면?',
      emoji: '🚶',
      choices: [
        { text: '한 정거장 전에 내려서 걷기', emoji: '👞', scores: { discipline: 2, energy: 2 } },
        { text: '자전거 출근으로 운동 겸하기', emoji: '🚲', scores: { energy: 3, discipline: 1 } },
        { text: '이어폰 끼고 팟캐스트 들으며 산책', emoji: '🎧', scores: { mindful: 3, social: 0 } },
        { text: '근처 카페에서 동료와 모닝 커피', emoji: '☕', scores: { social: 3, energy: 1 } },
      ],
    },
    {
      id: 17,
      situation: '아침에 냉장고를 열었는데 먹을 게 없다.',
      emoji: '🧊',
      choices: [
        { text: '비상용 오트밀이 항상 준비되어 있다', emoji: '🥣', scores: { discipline: 3, mindful: 0 } },
        { text: '편의점 달려가서 에너지바 사오기', emoji: '🏪', scores: { energy: 2, social: 2 } },
        { text: '그냥 물 한 잔 마시고 가볍게 시작', emoji: '💧', scores: { mindful: 3, discipline: 1 } },
        { text: '친구한테 "아침 같이 먹자!" 연락', emoji: '🍽️', scores: { social: 3, energy: 0 } },
      ],
    },
    {
      id: 18,
      situation: '아침에 거울을 본다. 당신의 루틴은?',
      emoji: '🪞',
      choices: [
        { text: '정해진 순서대로 깔끔하게 준비', emoji: '✨', scores: { discipline: 3, social: 1 } },
        { text: '선크림만 바르고 빠르게 출발', emoji: '🧴', scores: { energy: 2, discipline: 2 } },
        { text: '거울 속 나에게 "오늘도 파이팅" 한마디', emoji: '💪', scores: { mindful: 3, energy: 1 } },
        { text: '셀카 한 장 찍어서 스토리에 올리기', emoji: '🤳', scores: { social: 3, mindful: 0 } },
      ],
    },
    {
      id: 19,
      situation: '아침에 뉴스를 접하는 방법은?',
      emoji: '📰',
      choices: [
        { text: '구독 중인 뉴스레터를 정해진 시간에 읽기', emoji: '📧', scores: { discipline: 3, mindful: 1 } },
        { text: '뉴스보다 운동 관련 유튜브가 먼저', emoji: '🏋️‍♀️', scores: { energy: 3, social: 0 } },
        { text: '뉴스 대신 명상 앱으로 마음 정리', emoji: '📿', scores: { mindful: 3, discipline: 0 } },
        { text: '단톡방에서 친구들이 공유한 기사로', emoji: '👥', scores: { social: 3, energy: 1 } },
      ],
    },
    {
      id: 20,
      situation: '아침에 반려동물(또는 식물)을 돌보는 시간이다.',
      emoji: '🐶',
      choices: [
        { text: '정해진 시간에 밥 주고 산책 루틴 완료', emoji: '🦮', scores: { discipline: 3, energy: 1 } },
        { text: '반려동물과 함께 공원에서 달리기', emoji: '🐕', scores: { energy: 3, social: 1 } },
        { text: '식물에 물 주며 조용히 교감하는 시간', emoji: '🌱', scores: { mindful: 3, social: 0 } },
        { text: '반려동물 사진 찍어서 SNS에 자랑', emoji: '🐱', scores: { social: 3, mindful: 1 } },
      ],
    },
    {
      id: 21,
      situation: '아침에 음악을 듣는다면?',
      emoji: '🎶',
      choices: [
        { text: '매일 같은 플레이리스트로 루틴 유지', emoji: '🔁', scores: { discipline: 3, mindful: 1 } },
        { text: '신나는 EDM으로 에너지 폭발!', emoji: '🔊', scores: { energy: 3, social: 1 } },
        { text: '잔잔한 재즈나 클래식으로 마음 정리', emoji: '🎷', scores: { mindful: 3, energy: 0 } },
        { text: '친구가 추천해준 노래부터 들어보기', emoji: '🎵', scores: { social: 2, mindful: 2 } },
      ],
    },
    {
      id: 22,
      situation: '아침에 중요한 회의가 있다.',
      emoji: '💼',
      choices: [
        { text: '전날 밤에 자료 다 준비해둠, 여유롭게 출발', emoji: '📂', scores: { discipline: 3, social: 0 } },
        { text: '아침 운동으로 뇌를 깨운 후 집중!', emoji: '🧠', scores: { energy: 3, discipline: 1 } },
        { text: '5분간 호흡법으로 긴장 풀기', emoji: '🫁', scores: { mindful: 3, energy: 1 } },
        { text: '동료한테 미리 연락해서 분위기 파악', emoji: '🤝', scores: { social: 3, discipline: 1 } },
      ],
    },
    {
      id: 23,
      situation: '아침에 집안이 어수선하다.',
      emoji: '🏠',
      choices: [
        { text: '출근 전 10분 정리정돈은 기본', emoji: '🧹', scores: { discipline: 3, energy: 1 } },
        { text: '빠르게 움직이면서 정리하면 운동도 됨', emoji: '🏃‍♂️', scores: { energy: 3, discipline: 1 } },
        { text: '좋아하는 공간만 깔끔하게 정리', emoji: '🕯️', scores: { mindful: 2, discipline: 2 } },
        { text: '가족이나 룸메이트에게 같이 정리하자고 제안', emoji: '🤗', scores: { social: 3, mindful: 0 } },
      ],
    },
    {
      id: 24,
      situation: '이상적인 아침 시간은 어떤 모습일까?',
      emoji: '✨',
      choices: [
        { text: '모든 것이 계획대로 흘러가는 완벽한 아침', emoji: '📐', scores: { discipline: 3, mindful: 1 } },
        { text: '상쾌한 운동 후 건강한 식사까지', emoji: '🥗', scores: { energy: 3, discipline: 1 } },
        { text: '고요한 침묵 속에서 나만의 시간', emoji: '🌅', scores: { mindful: 3, social: 0 } },
        { text: '사랑하는 사람들과 함께하는 따뜻한 식탁', emoji: '👨‍👩‍👧‍👦', scores: { social: 3, energy: 1 } },
      ],
    },
    {
      id: 25,
      situation: '아침 루틴에서 절대 빠질 수 없는 것은?',
      emoji: '💎',
      choices: [
        { text: '정해진 시간에 일어나는 규칙적인 기상', emoji: '⏰', scores: { discipline: 3, energy: 0 } },
        { text: '몸을 움직이는 어떤 형태의 운동', emoji: '🔥', scores: { energy: 3, mindful: 1 } },
        { text: '혼자만의 고요한 성찰 시간', emoji: '🧘', scores: { mindful: 3, discipline: 1 } },
        { text: '누군가와 나누는 아침 인사', emoji: '🤝', scores: { social: 3, energy: 1 } },
      ],
    },
  ],

  results: [
    {
      id: 'early-bird',
      title: '새벽형 인간',
      emoji: '🐔',
      icon: '/icons/results/morning-early-bird.png',
      subtitle: '해 뜨기 전에 하루를 시작하는',
      description: '남들이 아직 이불 속에서 뒹굴거릴 때 당신은 이미 하루의 절반을 끝냈다. 새벽 5시 기상은 기본이고, 해 뜨기 전 조용한 시간이 당신에게는 하루 중 가장 소중한 골든타임이다. "일찍 일어나는 새가 벌레를 잡는다"를 인생 모토로 삼고, 아침 시간의 생산성은 타의 추종을 불허한다. 밤 10시면 어김없이 눈이 감기는 건 비밀.',
      tags: ['#새벽기상', '#골든타임', '#아침형인간'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-yellow-500',
    },
    {
      id: 'snooze',
      title: '알람 10개 장인',
      emoji: '⏰',
      icon: '/icons/results/morning-snooze.png',
      subtitle: '5분만 더... 의 무한 반복',
      description: '알람은 최소 10개, 5분 간격으로 세팅하는 것이 당신의 기본 설정이다. "5분만 더"를 외치다 보면 어느새 30분이 훌쩍 지나있고, 매일 아침이 시간과의 전쟁이다. 하지만 놀라운 점은 그 짧은 시간 안에 준비를 마치는 초능력을 가지고 있다는 것. 지각 직전의 아드레날린이 오히려 당신을 깨워주는 특별한 체질이다.',
      tags: ['#5분만더', '#알람전쟁', '#기적의준비'],
      color: '#ef4444',
      gradient: 'from-red-400 to-rose-500',
    },
    {
      id: 'routine',
      title: '루틴의 신',
      emoji: '📋',
      icon: '/icons/results/morning-routine.png',
      subtitle: '분 단위로 짜인 완벽한 아침',
      description: '기상 6:00, 세안 6:05, 스트레칭 6:15... 당신의 아침은 분 단위로 계획되어 있다. 하루라도 루틴이 깨지면 온종일 찝찝한 당신은 진정한 규칙의 수호자다. 덕분에 절대 지각하는 법이 없고, 아침마다 여유로운 모습에 주변 사람들은 "비결이 뭐야?"라고 묻는다. 비결은 단 하나, 흔들리지 않는 루틴의 힘이다.',
      tags: ['#분단위루틴', '#규칙적생활', '#시간관리왕'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'workout',
      title: '모닝 운동러',
      emoji: '🏃',
      icon: '/icons/results/morning-workout.png',
      subtitle: '땀 흘려야 하루가 시작되는',
      description: '아침 운동 없이는 하루가 시작되지 않는 당신은 진정한 모닝 운동러다. 새벽 러닝, 헬스장, 홈트 뭐든 좋다. 일단 땀을 흘려야 뇌가 제대로 돌아간다. 운동 후 상쾌함은 그 어떤 커피보다 강력한 각성제이며, 아침 운동 루틴 덕분에 동료들보다 에너지 레벨이 한 단계 높다. 오늘도 출근길에 이미 5km를 달리고 왔다.',
      tags: ['#모닝운동', '#새벽러닝', '#운동이곧커피'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'coffee',
      title: '커피 먼저',
      emoji: '☕',
      icon: '/icons/results/morning-coffee.png',
      subtitle: '커피 없이는 사람이 아닌',
      description: '눈을 뜨자마자 향기로운 커피 한 잔이 당신의 부팅 버튼이다. 커피가 몸에 퍼지기 전까지는 어떤 대화도, 어떤 업무도 불가능한 "커피 퍼스트" 철학의 소유자. 원두 고르는 것부터 추출 방식까지 나름의 철학이 있고, 아침 커피 시간만큼은 누구에게도 방해받고 싶지 않은 신성한 의식이다. 커피 한 잔의 여유가 하루의 질을 결정한다.',
      tags: ['#커피러버', '#카페인부팅', '#원두장인'],
      color: '#78716c',
      gradient: 'from-stone-400 to-stone-600',
    },
    {
      id: 'mindful',
      title: '명상 힐링러',
      emoji: '🧘',
      icon: '/icons/results/morning-mindful.png',
      subtitle: '고요한 아침으로 마음을 채우는',
      description: '당신의 아침은 고요함으로 시작된다. 명상, 감사일기, 심호흡... 마음을 가다듬는 시간 없이는 하루를 시작할 수 없다. 바쁜 세상 속에서도 자기 자신과 대화하는 시간을 놓치지 않는 당신은 진정한 마음 챙김의 달인이다. 덕분에 어떤 상황에서도 흔들리지 않는 내면의 평화를 유지하고, 주변 사람들에게 잔잔한 안정감을 전해준다.',
      tags: ['#마음챙김', '#명상러', '#고요한아침'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'rush',
      title: '출근 5분전 대시러',
      emoji: '💨',
      icon: '/icons/results/morning-rush.png',
      subtitle: '매일이 타임어택인',
      description: '당신의 아침은 매일이 스프린트다. 알람이 울려도 "조금만 더"를 외치다가 시계를 보는 순간 광속으로 준비가 시작된다. 양치하면서 옷 입고, 신발 신으면서 가방 챙기는 멀티태스킹은 이미 몸에 배어있다. 놀라운 건 이 혼돈 속에서도 어떻게든 시간에 맞춰 도착한다는 것. 아드레날린 러시가 당신의 모닝 커피다.',
      tags: ['#지각직전', '#광속준비', '#멀티태스킹'],
      color: '#f97316',
      gradient: 'from-orange-400 to-amber-500',
    },
    {
      id: 'brunch',
      title: '브런치 감성러',
      emoji: '🥐',
      icon: '/icons/results/morning-brunch.png',
      subtitle: '사람과 함께하는 아침이 좋은',
      description: '당신에게 아침은 혼자만의 시간이 아니라 사람과 나누는 따뜻한 순간이다. 가족과 함께하는 식탁, 친구와의 모닝 카페, 동료와의 출근길 수다가 당신의 하루를 밝게 만든다. "같이 아침 먹을 사람?" 이 당신의 아침 첫 메시지이고, 누군가와 나누는 대화 한마디가 그 어떤 루틴보다 강력한 에너지원이다. 사교적인 아침이 행복한 하루의 비결이다.',
      tags: ['#모닝피플', '#같이아침', '#소셜모닝'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { discipline = 0, energy = 0, mindful = 0, social = 0 } = scores
    const max = Math.max(discipline, energy, mindful, social)

    if (discipline === max && discipline > energy) {
      if (energy >= discipline - 2) return 'early-bird'
      return 'routine'
    }
    if (energy === max && energy > discipline) {
      if (discipline >= energy - 2) return 'early-bird'
      return 'workout'
    }
    if (mindful === max && mindful > social) {
      if (discipline >= mindful - 2) return 'coffee'
      return 'mindful'
    }
    if (social === max) {
      if (energy > discipline) return 'brunch'
      if (mindful > discipline) return 'brunch'
      return 'brunch'
    }

    // 복합 유형 판별
    if (discipline > 0 && energy > 0 && discipline === energy) return 'early-bird'
    if (mindful > 0 && social > 0 && mindful === social) return 'coffee'
    if (energy > 0 && social > 0 && energy === social) return 'brunch'

    // 낮은 점수 유형
    const total = discipline + energy + mindful + social
    if (total < 15) return 'snooze'
    if (discipline < energy && discipline < mindful) return 'rush'

    // fallback
    return 'snooze'
  },
}

export default morningTest
