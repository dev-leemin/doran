import { TestConfig, CATEGORY_COLORS } from './types'

const stressTest: TestConfig = {
  id: 'stress',
  title: '나의 스트레스 해소법은?',
  emoji: '😤',
  icon: '/icons/tests/stress.png',
  description: '스트레스 받을 때 나의 해소법을 알아보세요',
  category: 'personality',
  color: CATEGORY_COLORS.personality,
  tags: ['스트레스', '힐링', '성격', '심리'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['active', 'social', 'creative', 'calm'],

  questions: [
    {
      id: 1,
      situation: '월요일 아침, 알람이 울린다. 벌써부터 스트레스다.',
      emoji: '⏰',
      choices: [
        { text: '이불 박차고 나가서 아침 런닝 한 바퀴', emoji: '🏃', scores: { active: 3, calm: 0 } },
        { text: '친구한테 "나 오늘 죽겠어" 카톡 보내기', emoji: '📱', scores: { social: 3, calm: 1 } },
        { text: '좋아하는 노래 틀고 감성에 젖기', emoji: '🎧', scores: { creative: 2, calm: 2 } },
        { text: '알람 끄고 5분만 더 눈 감기', emoji: '😴', scores: { calm: 3, active: 0 } },
      ],
    },
    {
      id: 2,
      situation: '상사가 갑자기 업무를 추가로 던져줬다.',
      emoji: '😠',
      choices: [
        { text: '점심시간에 헬스장 가서 샌드백 치기', emoji: '🥊', scores: { active: 3, social: 0 } },
        { text: '동료한테 가서 같이 뒷담화하기', emoji: '🗣️', scores: { social: 3, active: 1 } },
        { text: '메모장에 화난 감정 글로 쏟아내기', emoji: '✍️', scores: { creative: 3, calm: 1 } },
        { text: '이어폰 꽂고 조용히 심호흡하기', emoji: '🧘', scores: { calm: 3, creative: 0 } },
      ],
    },
    {
      id: 3,
      situation: '시험 기간이다. 공부할 게 산더미.',
      emoji: '📚',
      choices: [
        { text: '30분 공부하고 30분 운동하며 번갈아가기', emoji: '💪', scores: { active: 3, calm: 1 } },
        { text: '스터디 카페에서 친구랑 같이 공부하기', emoji: '👥', scores: { social: 3, creative: 0 } },
        { text: '공부 내용을 마인드맵으로 예쁘게 정리하기', emoji: '🎨', scores: { creative: 3, active: 1 } },
        { text: '따뜻한 차 한 잔 마시며 천천히 시작하기', emoji: '🍵', scores: { calm: 3, social: 0 } },
      ],
    },
    {
      id: 4,
      situation: '친구와 크게 싸웠다. 마음이 무겁다.',
      emoji: '💔',
      choices: [
        { text: '밖에 나가서 한참을 걷거나 뛰기', emoji: '🚶', scores: { active: 3, social: 0 } },
        { text: '다른 친구 만나서 속마음 털어놓기', emoji: '🤗', scores: { social: 3, calm: 1 } },
        { text: '일기장에 감정을 솔직하게 적어보기', emoji: '📓', scores: { creative: 3, calm: 1 } },
        { text: '혼자 조용히 있으면서 마음 정리하기', emoji: '🌙', scores: { calm: 3, creative: 0 } },
      ],
    },
    {
      id: 5,
      situation: '갑자기 미래가 불안해졌다.',
      emoji: '😰',
      choices: [
        { text: '당장 뭐라도 하면서 몸을 움직이기', emoji: '🏋️', scores: { active: 3, creative: 1 } },
        { text: '비슷한 고민 있는 사람들 커뮤니티 찾아보기', emoji: '💬', scores: { social: 3, calm: 0 } },
        { text: '버킷리스트를 새로 작성해보기', emoji: '📝', scores: { creative: 3, social: 1 } },
        { text: '명상 앱 켜고 마음을 비우기', emoji: '🕊️', scores: { calm: 3, active: 0 } },
      ],
    },
    {
      id: 6,
      situation: '퇴근 후 녹초가 된 상태. 뭘 해야 풀릴까?',
      emoji: '🫠',
      choices: [
        { text: '동네 한 바퀴 조깅하고 샤워하기', emoji: '🏃‍♂️', scores: { active: 3, calm: 1 } },
        { text: '친구한테 전화해서 1시간 수다 떨기', emoji: '📞', scores: { social: 3, creative: 0 } },
        { text: '맛있는 거 직접 요리해서 먹기', emoji: '🍳', scores: { creative: 3, active: 1 } },
        { text: '따뜻한 물에 반신욕하기', emoji: '🛁', scores: { calm: 3, social: 0 } },
      ],
    },
    {
      id: 7,
      situation: '주말인데 할 일이 너무 많다.',
      emoji: '📋',
      choices: [
        { text: '아침 일찍 일어나서 운동부터 하고 시작', emoji: '☀️', scores: { active: 3, calm: 0 } },
        { text: '친구 불러서 같이 카페에서 각자 할 일 하기', emoji: '☕', scores: { social: 2, calm: 2 } },
        { text: '플레이리스트 만들면서 기분 전환하기', emoji: '🎵', scores: { creative: 3, social: 1 } },
        { text: '일단 2시간 낮잠 자고 생각하기', emoji: '💤', scores: { calm: 3, active: 0 } },
      ],
    },
    {
      id: 8,
      situation: '누군가에게 억울한 말을 들었다.',
      emoji: '😤',
      choices: [
        { text: '화가 풀릴 때까지 격하게 운동하기', emoji: '🥋', scores: { active: 3, social: 0 } },
        { text: '가까운 사람한테 바로 전화해서 하소연', emoji: '😭', scores: { social: 3, active: 1 } },
        { text: 'SNS에 감정을 간접적으로 표현하기', emoji: '💭', scores: { creative: 2, social: 2 } },
        { text: '속으로 삭이면서 혼자 정리하기', emoji: '🧊', scores: { calm: 3, creative: 1 } },
      ],
    },
    {
      id: 9,
      situation: '돈이 부족해서 스트레스다.',
      emoji: '💸',
      choices: [
        { text: '알바라도 뛰면서 몸을 바쁘게 만들기', emoji: '🏃‍♀️', scores: { active: 3, social: 1 } },
        { text: '친구랑 저렴한 맛집 투어 가기', emoji: '🍜', scores: { social: 3, creative: 1 } },
        { text: '가계부 예쁘게 꾸미면서 정리해보기', emoji: '📊', scores: { creative: 3, calm: 1 } },
        { text: '무료 공원에서 산책하며 마음 달래기', emoji: '🌳', scores: { calm: 3, active: 1 } },
      ],
    },
    {
      id: 10,
      situation: '잠이 안 온다. 내일 중요한 일이 있는데...',
      emoji: '🌃',
      choices: [
        { text: '스트레칭이나 가벼운 운동 해보기', emoji: '🤸', scores: { active: 2, calm: 2 } },
        { text: '친구한테 "나 잠 안 와" 메시지 보내기', emoji: '💬', scores: { social: 3, calm: 0 } },
        { text: '머릿속 생각을 글이나 그림으로 꺼내기', emoji: '🖊️', scores: { creative: 3, active: 0 } },
        { text: 'ASMR 틀고 눈 감고 가만히 있기', emoji: '🎧', scores: { calm: 3, creative: 1 } },
      ],
    },
    {
      id: 11,
      situation: '연인과 사소한 일로 다퉜다.',
      emoji: '💢',
      choices: [
        { text: '밖에 나가서 걸으면서 머리 식히기', emoji: '🚶‍♂️', scores: { active: 3, calm: 1 } },
        { text: '절친한테 전화해서 객관적 조언 구하기', emoji: '🤙', scores: { social: 3, creative: 0 } },
        { text: '편지를 써서 마음을 정리해보기', emoji: '💌', scores: { creative: 3, social: 1 } },
        { text: '시간이 약이니까 일단 거리 두기', emoji: '⏳', scores: { calm: 3, active: 0 } },
      ],
    },
    {
      id: 12,
      situation: '회사에서 프레젠테이션을 망쳤다.',
      emoji: '😓',
      choices: [
        { text: '퇴근 후 바로 헬스장 직행', emoji: '🏋️‍♂️', scores: { active: 3, calm: 0 } },
        { text: '동료한테 "나 오늘 어땠어?" 물어보기', emoji: '👨‍💼', scores: { social: 3, creative: 1 } },
        { text: '발표 내용 복기하면서 더 나은 버전 구상', emoji: '💡', scores: { creative: 3, active: 1 } },
        { text: '집에 가서 좋아하는 영화 보며 잊기', emoji: '🎬', scores: { calm: 3, social: 0 } },
      ],
    },
    {
      id: 13,
      situation: '비 오는 날, 기분이 축 처진다.',
      emoji: '🌧️',
      choices: [
        { text: '비 맞으며 산책하거나 실내 운동하기', emoji: '🌂', scores: { active: 3, creative: 1 } },
        { text: '친구한테 "비 온다~ 만날래?" 연락하기', emoji: '☔', scores: { social: 3, active: 0 } },
        { text: '빗소리 들으며 그림 그리거나 글 쓰기', emoji: '🖌️', scores: { creative: 3, calm: 2 } },
        { text: '이불 속에서 빗소리 ASMR 삼아 낮잠', emoji: '🛌', scores: { calm: 3, social: 0 } },
      ],
    },
    {
      id: 14,
      situation: '다이어트 중인데 야식이 너무 먹고 싶다.',
      emoji: '🍕',
      choices: [
        { text: '식욕을 운동으로 승화시키기', emoji: '🏃', scores: { active: 3, calm: 0 } },
        { text: '친구 불러서 같이 건강한 메뉴 먹으러 가기', emoji: '🥗', scores: { social: 3, active: 1 } },
        { text: '헬시 레시피 검색해서 직접 만들어 먹기', emoji: '👨‍🍳', scores: { creative: 3, social: 0 } },
        { text: '따뜻한 허브티 마시면서 참아보기', emoji: '🍵', scores: { calm: 3, creative: 1 } },
      ],
    },
    {
      id: 15,
      situation: '취업 준비가 잘 안 풀린다.',
      emoji: '📄',
      choices: [
        { text: '체력이라도 기르자! 운동 루틴 만들기', emoji: '💪', scores: { active: 3, social: 0 } },
        { text: '취준생 모임에 가서 서로 응원하기', emoji: '👫', scores: { social: 3, calm: 1 } },
        { text: '자기소개서를 새로운 관점으로 다시 써보기', emoji: '✏️', scores: { creative: 3, active: 1 } },
        { text: '하루 쉬면서 좋아하는 것만 하기', emoji: '🌈', scores: { calm: 3, creative: 1 } },
      ],
    },
    {
      id: 16,
      situation: '가족과 의견 충돌이 생겼다.',
      emoji: '🏠',
      choices: [
        { text: '밖에 나가서 자전거 타면서 기분 전환', emoji: '🚲', scores: { active: 3, calm: 1 } },
        { text: '이해해줄 수 있는 지인한테 고민 상담', emoji: '🤝', scores: { social: 3, creative: 0 } },
        { text: '내 감정을 정리해서 편지로 전달하기', emoji: '📩', scores: { creative: 3, social: 1 } },
        { text: '시간을 두고 서로 냉각기 갖기', emoji: '🕐', scores: { calm: 3, active: 0 } },
      ],
    },
    {
      id: 17,
      situation: 'SNS에서 다들 잘 나가는 것 같아 우울하다.',
      emoji: '📱',
      choices: [
        { text: 'SNS 끄고 밖에 나가서 뛰기', emoji: '🏃‍♂️', scores: { active: 3, creative: 0 } },
        { text: '친구 만나서 서로의 고민 나누기', emoji: '🫂', scores: { social: 3, calm: 1 } },
        { text: '나만의 특기를 살려서 뭔가 만들어보기', emoji: '🎯', scores: { creative: 3, active: 1 } },
        { text: '앱 삭제하고 디지털 디톡스 시작', emoji: '🧘‍♀️', scores: { calm: 3, social: 0 } },
      ],
    },
    {
      id: 18,
      situation: '과제 마감이 코앞인데 하나도 안 했다.',
      emoji: '⏰',
      choices: [
        { text: '에너지 드링크 마시고 밤새 돌파하기', emoji: '⚡', scores: { active: 3, creative: 1 } },
        { text: '같은 수업 듣는 친구한테 도움 요청', emoji: '🙋', scores: { social: 3, active: 1 } },
        { text: '일단 구조부터 창의적으로 잡아보기', emoji: '🧩', scores: { creative: 3, social: 0 } },
        { text: '10분 명상 후 차분하게 시작하기', emoji: '🕯️', scores: { calm: 3, active: 0 } },
      ],
    },
    {
      id: 19,
      situation: '실수로 중요한 파일을 날려버렸다.',
      emoji: '🖥️',
      choices: [
        { text: '책상 앞에서 벌떡 일어나 복도를 서성이기', emoji: '😱', scores: { active: 2, social: 1 } },
        { text: 'IT 잘 아는 지인한테 바로 SOS', emoji: '🆘', scores: { social: 3, active: 1 } },
        { text: '처음부터 더 나은 버전으로 다시 만들기', emoji: '🔄', scores: { creative: 3, calm: 1 } },
        { text: '심호흡하고 복구 방법 차분히 검색하기', emoji: '🔍', scores: { calm: 3, creative: 1 } },
      ],
    },
    {
      id: 20,
      situation: '약속이 갑자기 취소됐다. 허무하다.',
      emoji: '😶',
      choices: [
        { text: '혼자 운동하러 가기 — 나만의 시간으로!', emoji: '🏊', scores: { active: 3, calm: 1 } },
        { text: '다른 친구한테 바로 "오늘 시간 돼?" 연락', emoji: '📲', scores: { social: 3, active: 0 } },
        { text: '갑자기 생긴 여유 시간에 취미 활동하기', emoji: '🎸', scores: { creative: 3, social: 0 } },
        { text: '카페에서 혼자 창밖 구경하며 여유 즐기기', emoji: '🪟', scores: { calm: 3, creative: 1 } },
      ],
    },
    {
      id: 21,
      situation: '새 학기(새 직장) 시작, 어색한 사람들 투성이다.',
      emoji: '😬',
      choices: [
        { text: '동아리나 운동 소모임 바로 가입하기', emoji: '⚽', scores: { active: 3, social: 2 } },
        { text: '먼저 말 걸고 밥 같이 먹자고 하기', emoji: '🍱', scores: { social: 3, active: 1 } },
        { text: '자기소개를 재미있게 준비해가기', emoji: '🎤', scores: { creative: 3, social: 1 } },
        { text: '천천히 적응하면서 나만의 페이스 유지', emoji: '🐢', scores: { calm: 3, creative: 0 } },
      ],
    },
    {
      id: 22,
      situation: '체력이 바닥이다. 매일 피곤하다.',
      emoji: '🔋',
      choices: [
        { text: '오히려 운동을 시작해서 체력 끌어올리기', emoji: '🏋️', scores: { active: 3, calm: 0 } },
        { text: '친구랑 같이 건강 챌린지 시작하기', emoji: '🤜', scores: { social: 3, active: 2 } },
        { text: '건강 루틴표를 예쁘게 만들어보기', emoji: '📅', scores: { creative: 2, calm: 2 } },
        { text: '주말에는 아무것도 안 하고 푹 쉬기', emoji: '🛋️', scores: { calm: 3, social: 0 } },
      ],
    },
    {
      id: 23,
      situation: '길을 걷다가 갑자기 눈물이 나려고 한다.',
      emoji: '🥺',
      choices: [
        { text: '뛰기 시작한다 — 달리면 눈물이 마른다', emoji: '🏃‍♀️', scores: { active: 3, calm: 0 } },
        { text: '가장 편한 사람한테 바로 전화하기', emoji: '📱', scores: { social: 3, creative: 0 } },
        { text: '이 감정을 글이나 노래로 표현해보기', emoji: '🎶', scores: { creative: 3, social: 1 } },
        { text: '조용한 곳 찾아서 실컷 울고 비우기', emoji: '🌊', scores: { calm: 3, active: 0 } },
      ],
    },
    {
      id: 24,
      situation: '연말, 올해도 뭔가 아쉽다는 생각이 든다.',
      emoji: '🎄',
      choices: [
        { text: '마지막이라도 새로운 도전을 시작하기', emoji: '🔥', scores: { active: 3, creative: 1 } },
        { text: '친구들 불러서 송년회 하기', emoji: '🥂', scores: { social: 3, calm: 1 } },
        { text: '올해를 담은 사진 앨범이나 일기 정리하기', emoji: '📸', scores: { creative: 3, calm: 1 } },
        { text: '연말 감성에 취해 조용히 회고하기', emoji: '🌠', scores: { calm: 3, social: 0 } },
      ],
    },
    {
      id: 25,
      situation: '오늘 하루, 최악이었다. 집에 도착했다.',
      emoji: '🚪',
      choices: [
        { text: '운동복 갈아입고 야간 러닝 나가기', emoji: '🌃', scores: { active: 3, calm: 0 } },
        { text: '가장 친한 친구한테 "오늘 진짜 힘들었어" 보내기', emoji: '💬', scores: { social: 3, active: 0 } },
        { text: '좋아하는 취미에 몰두하면서 리셋하기', emoji: '🎮', scores: { creative: 3, social: 1 } },
        { text: '따뜻한 물에 목욕하고 일찍 잠자리 들기', emoji: '🛀', scores: { calm: 3, creative: 0 } },
      ],
    },
  ],

  results: [
    {
      id: 'workout',
      title: '운동 폭발러',
      emoji: '💪',
      icon: '/icons/results/stress-workout.png',
      subtitle: '스트레스는 땀으로 날린다',
      description: '화가 나면 러닝화부터 신고, 슬프면 헬스장으로 향하는 당신. 스트레스를 받으면 오히려 에너지가 폭발해서 운동으로 전부 태워버리는 타입이다. 운동 후 샤워하고 나면 세상 모든 걱정이 사라지는 마법을 매번 경험한다. 당신의 몸은 이미 스트레스 해소법을 알고 있다.',
      tags: ['#땀이답이다', '#운동중독', '#헬스장단골'],
      color: '#ef4444',
      gradient: 'from-red-400 to-orange-500',
    },
    {
      id: 'foodie',
      title: '먹방 힐링러',
      emoji: '🍕',
      icon: '/icons/results/stress-foodie.png',
      subtitle: '맛있는 게 최고의 위로',
      description: '스트레스의 해답은 언제나 맛있는 음식에 있다는 것을 본능적으로 아는 사람. 힘든 날엔 직접 요리를 하거나 배달 앱을 열어 최고의 메뉴를 고르는 것이 당신의 루틴이다. 한 입 먹는 순간 세상 모든 고민이 녹아내리고, 디저트까지 완벽하게 마무리해야 진정한 스트레스 해소가 완성된다. 당신에게 맛집 리스트는 곧 처방전이다.',
      tags: ['#먹으면행복', '#맛집처방전', '#디저트필수'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-yellow-500',
    },
    {
      id: 'socializer',
      title: '수다 해소러',
      emoji: '🗣️',
      icon: '/icons/results/stress-socializer.png',
      subtitle: '말하면 풀리는 타입',
      description: '스트레스를 혼자 안고 있으면 오히려 더 커지는 걸 아는 당신은 사람을 만나야 에너지가 충전되는 타입이다. 힘든 일이 생기면 바로 친구에게 전화하고, 카페에서 3시간 수다를 떨고 나면 마법처럼 기분이 풀린다. 당신의 주변 사람들은 최고의 치료제이자 든든한 안전망이다.',
      tags: ['#수다가약', '#통화3시간', '#사람이좋아'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'sleeper',
      title: '수면 충전러',
      emoji: '😴',
      icon: '/icons/results/stress-sleeper.png',
      subtitle: '자고 나면 다 해결된다',
      description: '세상 모든 고민의 해결책은 "일단 자고 보자"라는 확고한 철학의 소유자. 스트레스를 받으면 이불 속으로 들어가 푹 자는 것이 당신의 리셋 버튼이다. 놀라운 건 진짜로 자고 일어나면 어제의 고민이 별것 아닌 것처럼 느껴진다는 것. 당신의 침대는 세상에서 가장 효과적인 힐링 공간이다.',
      tags: ['#잠이보약', '#이불밖위험', '#수면왕'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      id: 'shopper',
      title: '지름신 강림러',
      emoji: '🛍️',
      icon: '/icons/results/stress-shopper.png',
      subtitle: '스트레스는 카드로 해결',
      description: '기분이 안 좋을 때 쇼핑 앱을 여는 건 이미 본능이 된 당신. 장바구니에 물건을 담는 순간부터 스트레스가 녹아내리고, 결제 완료 알림이 울리면 세상을 다 가진 기분이 된다. 택배가 도착하는 날은 크리스마스 아침 같고, 언박싱의 즐거움은 그 어떤 힐링보다 강력하다. 통장 잔고만 빼면 완벽한 해소법이다.',
      tags: ['#쇼핑이힐링', '#장바구니테라피', '#택배가선물'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      id: 'creator',
      title: '창작 몰입러',
      emoji: '🎨',
      icon: '/icons/results/stress-creator.png',
      subtitle: '감정을 작품으로 승화',
      description: '스트레스가 당신에게는 오히려 창작의 연료가 된다. 힘든 감정을 글, 그림, 음악, 요리 등 다양한 형태로 표현하면서 마음을 정리하는 타입이다. 몰입하는 순간 시간도 고민도 잊어버리고, 완성된 결과물을 보면 스트레스가 보람으로 바뀌는 신비한 경험을 한다. 당신의 감성은 세상을 더 아름답게 만드는 힘이 있다.',
      tags: ['#창작이치료', '#감성폭발', '#몰입의달인'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'nature',
      title: '자연 속 힐링러',
      emoji: '🌿',
      icon: '/icons/results/stress-nature.png',
      subtitle: '자연이 최고의 치료제',
      description: '콘크리트 숲에서 받은 스트레스는 진짜 숲에서 풀어야 직성이 풀리는 당신. 공원 산책, 등산, 바다 구경 등 자연 속에 있으면 복잡했던 머릿속이 맑아지는 걸 느낀다. 흙 냄새, 바람 소리, 나뭇잎 사이로 비치는 햇살이 당신에게는 세상에서 가장 효과적인 명약이다. 도시를 벗어나는 순간 이미 절반은 힐링 완료다.',
      tags: ['#자연인모드', '#숲속힐링', '#산책이답'],
      color: '#22c55e',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      id: 'binge',
      title: '콘텐츠 폭주러',
      emoji: '📺',
      icon: '/icons/results/stress-binge.png',
      subtitle: '드라마 정주행이 처방전',
      description: '스트레스를 받으면 넷플릭스를 열거나 유튜브 알고리즘에 몸을 맡기는 당신. 드라마 한 편을 시작하면 밤새 정주행하고, 웹툰을 한 회 보면 완결까지 달리는 것이 당신의 스트레스 해소법이다. 다른 세계에 빠져드는 순간 현실의 고민은 일시정지되고, 콘텐츠 속 캐릭터에 감정이입하며 카타르시스를 느낀다.',
      tags: ['#넷플릭스처방', '#정주행각', '#콘텐츠중독'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { active = 0, social = 0, creative = 0, calm = 0 } = scores
    const max = Math.max(active, social, creative, calm)

    // 활동적 성향이 최고인 경우
    if (active === max && active > social) {
      if (calm >= active - 2) return 'nature'
      return 'workout'
    }

    // 사교적 성향이 최고인 경우
    if (social === max && social > active) {
      if (creative >= social - 2) return 'foodie'
      return 'socializer'
    }

    // 창작 성향이 최고인 경우
    if (creative === max && creative > calm) {
      if (social > active) return 'foodie'
      if (active >= creative - 2) return 'creator'
      return 'creator'
    }

    // 차분한 성향이 최고인 경우
    if (calm === max) {
      if (creative > social) return 'binge'
      if (active > social) return 'sleeper'
      return 'sleeper'
    }

    // 동점 복합 유형 판별
    if (active > 0 && social > 0 && active === social) return 'shopper'
    if (creative > 0 && calm > 0 && creative === calm) return 'binge'
    if (active > 0 && calm > 0 && active === calm) return 'nature'

    // fallback
    const total = active + social + creative + calm
    if (total < 15) return 'binge'
    return 'workout'
  },
}

export default stressTest
