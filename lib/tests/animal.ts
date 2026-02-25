import { TestConfig, CATEGORY_COLORS } from './types'

const animalTest: TestConfig = {
  id: 'animal',
  title: '나의 동물 유형은?',
  emoji: '🐾',
  icon: '/icons/tests/animal.png',
  description: '당신과 가장 닮은 동물을 찾아보세요',
  category: 'fun',
  color: CATEGORY_COLORS.fun,
  tags: ['동물', '성격유형', '심리테스트', '재미'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['energy', 'social', 'instinct', 'freedom'],

  questions: [
    {
      id: 1,
      situation: '주말 아침, 알람 없이 눈이 떠졌다.',
      emoji: '🌞',
      choices: [
        { text: '바로 일어나서 운동하러 감', emoji: '🏃', scores: { energy: 3, instinct: 2 } },
        { text: '친구한테 "뭐해?" 카톡 보냄', emoji: '📱', scores: { social: 3, energy: 1 } },
        { text: '이불 속에서 유튜브 시작', emoji: '📺', scores: { freedom: 3, instinct: 1 } },
        { text: '오늘 뭐 하지? 계획 세우기', emoji: '📝', scores: { instinct: 3, social: 1 } },
      ],
    },
    {
      id: 2,
      situation: '친구가 갑자기 "지금 나올 수 있어?" 연락이 왔다.',
      emoji: '📞',
      choices: [
        { text: '"ㅇㅋ 10분!" 바로 출발', emoji: '🚀', scores: { energy: 3, social: 2 } },
        { text: '"무슨 일인데?" 일단 상황 파악', emoji: '🤔', scores: { instinct: 3, social: 1 } },
        { text: '"오늘은 좀... 다음에 보자"', emoji: '🙈', scores: { freedom: 3, instinct: 1 } },
        { text: '"좋아! 다른 애들도 부를까?"', emoji: '🎉', scores: { social: 3, energy: 2 } },
      ],
    },
    {
      id: 3,
      situation: '놀이공원에 왔다. 뭐부터 탈까?',
      emoji: '🎢',
      choices: [
        { text: '제일 무서운 롤러코스터 직행', emoji: '🎢', scores: { energy: 3, instinct: 2 } },
        { text: '일행이랑 같이 타고 싶은 거 맞춰봄', emoji: '👫', scores: { social: 3, instinct: 1 } },
        { text: '먼저 지도 보고 효율적인 동선 짜기', emoji: '🗺️', scores: { instinct: 3, energy: 1 } },
        { text: '벤치에서 간식 먹으며 구경부터', emoji: '🍿', scores: { freedom: 3, social: 1 } },
      ],
    },
    {
      id: 4,
      situation: '길을 걷다가 완전히 길을 잃었다.',
      emoji: '😵',
      choices: [
        { text: '지도 앱 켜고 바로 경로 검색', emoji: '📍', scores: { instinct: 3, energy: 2 } },
        { text: '지나가는 사람한테 물어봄', emoji: '🙋', scores: { social: 3, instinct: 1 } },
        { text: '오히려 좋아! 새로운 길 탐험', emoji: '🧭', scores: { energy: 3, freedom: 2 } },
        { text: '일단 카페 들어가서 쉬면서 생각', emoji: '☕', scores: { freedom: 3, social: 1 } },
      ],
    },
    {
      id: 5,
      situation: '비 오는 날, 마땅한 우산이 없다.',
      emoji: '🌧️',
      choices: [
        { text: '그냥 비 맞으며 뛰어감 (좀 신나기도 함)', emoji: '🏃‍♂️', scores: { energy: 3, freedom: 2 } },
        { text: '근처 편의점에서 우산 구매', emoji: '🏪', scores: { instinct: 3, energy: 1 } },
        { text: '아는 사람한테 "우산 있어?" 연락', emoji: '📲', scores: { social: 3, instinct: 1 } },
        { text: '비 그칠 때까지 어딘가에서 대기', emoji: '🏠', scores: { freedom: 3, social: 1 } },
      ],
    },
    {
      id: 6,
      situation: '카페에서 주문할 차례가 됐다.',
      emoji: '☕',
      choices: [
        { text: '이미 정해둔 거 바로 주문', emoji: '⚡', scores: { instinct: 3, energy: 2 } },
        { text: '친구한테 "뭐 마실 거야?" 물어보고 맞춤', emoji: '🤝', scores: { social: 3, freedom: 1 } },
        { text: '메뉴판 처음부터 끝까지 정독', emoji: '👀', scores: { freedom: 3, instinct: 1 } },
        { text: '"추천 메뉴 뭐예요?" 직원한테 물어봄', emoji: '🙂', scores: { social: 2, energy: 2 } },
      ],
    },
    {
      id: 7,
      situation: '친구 생일 선물을 사야 한다.',
      emoji: '🎁',
      choices: [
        { text: '평소에 뭐 좋아하는지 분석해서 정확한 선물', emoji: '🎯', scores: { instinct: 3, social: 2 } },
        { text: '같이 쇼핑 가서 고르자고 제안', emoji: '🛍️', scores: { social: 3, energy: 1 } },
        { text: '기프티콘 보내기 (실용적!)', emoji: '💳', scores: { freedom: 3, instinct: 1 } },
        { text: '직접 편지 쓰거나 뭔가 만들어줌', emoji: '✉️', scores: { energy: 3, social: 2 } },
      ],
    },
    {
      id: 8,
      situation: '집에서 넷플릭스를 보고 있는데 뭘 볼지 모르겠다.',
      emoji: '🎬',
      choices: [
        { text: '순위 1위 누르고 바로 시작', emoji: '▶️', scores: { energy: 3, instinct: 1 } },
        { text: '친구한테 추천 물어봄', emoji: '💬', scores: { social: 3, instinct: 1 } },
        { text: '리뷰 검색하고 평점 비교 후 결정', emoji: '🔍', scores: { instinct: 3, freedom: 1 } },
        { text: '고르다 지쳐서 그냥 예전에 본 거 또 봄', emoji: '🔁', scores: { freedom: 3, energy: 1 } },
      ],
    },
    {
      id: 9,
      situation: '여행 가서 숙소에 도착했다.',
      emoji: '🧳',
      choices: [
        { text: '짐 풀자마자 밖으로 나가 탐험', emoji: '🗺️', scores: { energy: 3, freedom: 2 } },
        { text: '동행이랑 오늘 일정 이야기', emoji: '👥', scores: { social: 3, instinct: 1 } },
        { text: '내일 동선 미리 짜놓기', emoji: '📋', scores: { instinct: 3, energy: 1 } },
        { text: '일단 침대에 누워서 좀 쉬기', emoji: '🛌', scores: { freedom: 3, social: 1 } },
      ],
    },
    {
      id: 10,
      situation: '마트에서 장을 보고 있다.',
      emoji: '🛒',
      choices: [
        { text: '미리 짠 목록대로 쓱쓱 담기', emoji: '📝', scores: { instinct: 3, energy: 2 } },
        { text: '"이것도 맛있겠다!" 충동적으로 담기', emoji: '🤩', scores: { energy: 2, freedom: 3 } },
        { text: '같이 온 사람이랑 "이거 살까?" 상의', emoji: '🤝', scores: { social: 3, instinct: 1 } },
        { text: '시식 코너 순례하면서 천천히 구경', emoji: '🍴', scores: { freedom: 2, social: 2 } },
      ],
    },
    {
      id: 11,
      situation: '모임에서 모르는 사람이 말을 걸어왔다.',
      emoji: '👋',
      choices: [
        { text: '반갑게 인사하고 이야기 나눔', emoji: '😄', scores: { social: 3, energy: 2 } },
        { text: '가볍게 대답만 하고 자리 피함', emoji: '🚶', scores: { freedom: 3, instinct: 1 } },
        { text: '상대방에 대해 이것저것 질문함', emoji: '🧐', scores: { instinct: 3, social: 2 } },
        { text: '아는 사람한테 가서 합류', emoji: '🏃', scores: { social: 2, energy: 2 } },
      ],
    },
    {
      id: 12,
      situation: '운동을 시작하려고 한다.',
      emoji: '💪',
      choices: [
        { text: '헬스장 등록하고 바로 오늘부터', emoji: '🏋️', scores: { energy: 3, instinct: 2 } },
        { text: '친구랑 같이 하자고 약속 잡음', emoji: '🤼', scores: { social: 3, energy: 1 } },
        { text: '유튜브로 홈트 영상 검색부터', emoji: '📱', scores: { instinct: 2, freedom: 2 } },
        { text: '생각만 하다가 내일로 미룸', emoji: '🛋️', scores: { freedom: 3, social: 1 } },
      ],
    },
    {
      id: 13,
      situation: '새로운 취미를 시작하고 싶다.',
      emoji: '🎨',
      choices: [
        { text: '일단 등록! 해보면서 배우자', emoji: '🔥', scores: { energy: 3, instinct: 1 } },
        { text: '같이 할 사람 먼저 모으기', emoji: '👯', scores: { social: 3, energy: 2 } },
        { text: '후기 검색하고 비용, 시간 따져봄', emoji: '🔍', scores: { instinct: 3, freedom: 1 } },
        { text: '관심 있는 게 너무 많아서 고르기 어려움', emoji: '🤯', scores: { freedom: 3, instinct: 1 } },
      ],
    },
    {
      id: 14,
      situation: '친구랑 의견이 갈리는 상황이다.',
      emoji: '⚡',
      choices: [
        { text: '내 의견을 논리적으로 설득해봄', emoji: '🗣️', scores: { instinct: 3, energy: 2 } },
        { text: '"그래 네 말도 맞아" 일단 맞춰줌', emoji: '😊', scores: { social: 3, freedom: 1 } },
        { text: '각자 양보할 점 찾아서 절충안 제시', emoji: '⚖️', scores: { social: 2, instinct: 2 } },
        { text: '"뭐 어때~ 그냥 둘 다 해보자"', emoji: '🤷', scores: { freedom: 3, energy: 1 } },
      ],
    },
    {
      id: 15,
      situation: '갑자기 일주일 휴가가 생겼다!',
      emoji: '🎊',
      choices: [
        { text: '바로 해외 항공편 검색', emoji: '✈️', scores: { energy: 3, freedom: 2 } },
        { text: '친구들한테 "같이 갈 사람?" 단톡 올림', emoji: '👥', scores: { social: 3, energy: 2 } },
        { text: '여행지 비교하고 최적 루트 계획', emoji: '📊', scores: { instinct: 3, energy: 1 } },
        { text: '집에서 아무것도 안 하면서 푹 쉬기', emoji: '🏡', scores: { freedom: 3, instinct: 1 } },
      ],
    },
    {
      id: 16,
      situation: '음식점에서 주문한 음식이 너무 늦게 나온다.',
      emoji: '⏰',
      choices: [
        { text: '직원 불러서 언제 나오는지 확인', emoji: '🙋‍♂️', scores: { energy: 2, instinct: 3 } },
        { text: '같이 온 사람이랑 수다 떨면서 기다림', emoji: '💬', scores: { social: 3, freedom: 1 } },
        { text: '핸드폰 보면서 느긋하게 대기', emoji: '📱', scores: { freedom: 3, social: 1 } },
        { text: '"나가서 다른 데 갈까?" 대안 제시', emoji: '🚶‍♂️', scores: { energy: 3, instinct: 1 } },
      ],
    },
    {
      id: 17,
      situation: '밤에 갑자기 배가 고프다.',
      emoji: '🌙',
      choices: [
        { text: '배달 앱 켜고 바로 주문', emoji: '📦', scores: { energy: 3, instinct: 1 } },
        { text: '"누구 야식 먹을 사람?" 연락', emoji: '📞', scores: { social: 3, energy: 2 } },
        { text: '냉장고 뒤져서 있는 걸로 해결', emoji: '🍳', scores: { instinct: 3, freedom: 1 } },
        { text: '참고 자기... 내일 아침에 잘 먹지 뭐', emoji: '😴', scores: { freedom: 3, instinct: 1 } },
      ],
    },
    {
      id: 18,
      situation: '새로 이사 온 동네를 탐색 중이다.',
      emoji: '🏘️',
      choices: [
        { text: '구석구석 걸어다니며 동네 파악', emoji: '🚶', scores: { energy: 3, instinct: 2 } },
        { text: '이웃한테 인사하고 맛집 추천받기', emoji: '🤝', scores: { social: 3, energy: 1 } },
        { text: '네이버 지도로 주변 시설 검색', emoji: '🔍', scores: { instinct: 3, freedom: 1 } },
        { text: '필요한 거 생기면 그때 알아보지 뭐', emoji: '😌', scores: { freedom: 3, social: 1 } },
      ],
    },
    {
      id: 19,
      situation: '버스를 놓쳤다. 다음 버스는 20분 후.',
      emoji: '🚌',
      choices: [
        { text: '택시 잡거나 걸어가기 시작', emoji: '🏃', scores: { energy: 3, instinct: 2 } },
        { text: '옆에 있는 사람한테 "다음 거 맞죠?" 말 걸기', emoji: '💬', scores: { social: 3, energy: 1 } },
        { text: '다른 노선이나 교통편 검색', emoji: '🔄', scores: { instinct: 3, social: 1 } },
        { text: '음악 듣거나 멍 때리면서 기다림', emoji: '🎧', scores: { freedom: 3, instinct: 1 } },
      ],
    },
    {
      id: 20,
      situation: '친구들이랑 게임을 하는데 계속 지고 있다.',
      emoji: '🎮',
      choices: [
        { text: '지는 게 싫어서 더 집중하고 공략 검색', emoji: '🔥', scores: { energy: 3, instinct: 2 } },
        { text: '다 같이 웃으면서 즐기면 된 거지', emoji: '😂', scores: { social: 3, freedom: 1 } },
        { text: '패턴 분석해서 전략 수정', emoji: '🧠', scores: { instinct: 3, energy: 1 } },
        { text: '"나 이거 안 맞나 봐" 다른 거 하자고 제안', emoji: '🤷', scores: { freedom: 3, social: 1 } },
      ],
    },
    {
      id: 21,
      situation: '카페에서 공부/작업 중인데 옆 테이블이 시끄럽다.',
      emoji: '📚',
      choices: [
        { text: '이어폰 끼고 집중 모드 돌입', emoji: '🎧', scores: { instinct: 3, freedom: 2 } },
        { text: '조용히 해달라고 정중하게 말함', emoji: '🙏', scores: { energy: 3, instinct: 1 } },
        { text: '그냥 자리 옮기거나 다른 카페로 이동', emoji: '🚶', scores: { freedom: 3, energy: 1 } },
        { text: '옆 테이블 대화에 은근 귀 기울이게 됨', emoji: '👂', scores: { social: 3, freedom: 1 } },
      ],
    },
    {
      id: 22,
      situation: '거리에서 귀여운 강아지를 발견했다.',
      emoji: '🐶',
      choices: [
        { text: '바로 다가가서 쓰다듬기', emoji: '🤗', scores: { energy: 3, social: 2 } },
        { text: '주인한테 "만져봐도 될까요?" 물어봄', emoji: '😊', scores: { social: 3, instinct: 1 } },
        { text: '사진 찍어서 SNS에 올림', emoji: '📸', scores: { instinct: 2, freedom: 2 } },
        { text: '멀리서 "귀엽다..." 하고 지나감', emoji: '😍', scores: { freedom: 3, energy: 1 } },
      ],
    },
    {
      id: 23,
      situation: '요리를 해야 하는데 재료가 부족하다.',
      emoji: '🍳',
      choices: [
        { text: '있는 재료로 즉석 창작 요리', emoji: '👨‍🍳', scores: { energy: 3, freedom: 2 } },
        { text: '마트까지 뛰어가서 재료 사 옴', emoji: '🏃', scores: { energy: 2, instinct: 3 } },
        { text: '"뭐 해 먹을까?" 가족/동거인한테 물어봄', emoji: '🗣️', scores: { social: 3, instinct: 1 } },
        { text: '포기하고 배달 시킴', emoji: '📱', scores: { freedom: 3, social: 1 } },
      ],
    },
    {
      id: 24,
      situation: '혼자 영화관에 왔다.',
      emoji: '🎥',
      choices: [
        { text: '이미 볼 영화 정해놓고 왔음', emoji: '🎬', scores: { instinct: 3, energy: 2 } },
        { text: '옆 좌석 사람이랑 가끔 리액션 공유됨', emoji: '😄', scores: { social: 3, freedom: 1 } },
        { text: '혼자 보는 게 오히려 더 집중되고 좋음', emoji: '🤫', scores: { freedom: 3, instinct: 2 } },
        { text: '팝콘 대 사이즈에 콜라까지, 풀세팅', emoji: '🍿', scores: { energy: 3, social: 1 } },
      ],
    },
    {
      id: 25,
      situation: '친구가 고민 상담을 해왔다.',
      emoji: '💭',
      choices: [
        { text: '"그건 이렇게 하면 돼!" 해결책 바로 제시', emoji: '💡', scores: { energy: 3, instinct: 2 } },
        { text: '일단 끝까지 들어주고 공감해줌', emoji: '🫂', scores: { social: 3, freedom: 1 } },
        { text: '비슷한 경험 공유하면서 조언', emoji: '📖', scores: { instinct: 3, social: 2 } },
        { text: '"힘들었겠다... 맛있는 거 먹으러 가자"', emoji: '🍕', scores: { social: 2, energy: 2 } },
      ],
    },
  ],

  results: [
    {
      id: 'golden-retriever',
      title: '골든 리트리버',
      emoji: '🐕',
      icon: '/icons/results/animal-golden-retriever.png',
      subtitle: '에너지 넘치고 사교적인',
      description: '당신은 만나는 사람마다 꼬리를 흔들며 반기는 골든 리트리버! 에너지가 넘쳐서 가만히 있으면 오히려 스트레스를 받고, 사람들 사이에서 가장 빛나는 타입이에요. 새로운 모임에 가면 5분 안에 모든 사람과 친해지고, "또 언제 만나요?"가 입버릇. 가끔은 좀 쉬어도 괜찮아요 — 그래도 내일이면 또 신나서 뛰어다니겠지만요.',
      tags: ['#에너지충전', '#인싸력MAX', '#밝은바이브'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-yellow-500',
    },
    {
      id: 'cat',
      title: '고양이',
      emoji: '🐱',
      icon: '/icons/results/animal-cat.png',
      subtitle: '독립적이고 자유로운',
      description: '당신은 자기만의 세계가 확고한 고양이 타입! 혼자만의 시간이 곧 충전 시간이고, "같이 뭐 하자~"는 제안에 10번 중 7번은 "나 오늘 좀 쉴래"로 답해요. 하지만 마음을 연 사람에게는 세상에서 가장 다정하고, 은근히 챙김의 달인이죠. 남들 눈치 안 보고 하고 싶은 걸 하는 당신이야말로 진정한 자유인!',
      tags: ['#독립적', '#혼자가편해', '#도도한매력'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'fox',
      title: '여우',
      emoji: '🦊',
      icon: '/icons/results/animal-fox.png',
      subtitle: '영리하고 눈치 빠른',
      description: '당신은 상황 판단이 빠르고 머리 회전이 좋은 여우 타입! 어떤 상황에서든 가장 효율적인 방법을 찾아내고, 사람들 사이에서도 눈치 하나로 분위기를 읽어내요. "어떻게 그걸 미리 알았어?"라는 말을 자주 듣는 편이죠. 계획적이면서도 필요하면 과감하게 움직이는 당신, 주변에서 은근히 의지하는 사람이 많을 거예요.',
      tags: ['#눈치왕', '#전략가', '#영리함'],
      color: '#f97316',
      gradient: 'from-orange-400 to-amber-500',
    },
    {
      id: 'bear',
      title: '곰',
      emoji: '🐻',
      icon: '/icons/results/animal-bear.png',
      subtitle: '듬직하고 포근한',
      description: '당신은 묵직한 존재감과 따뜻한 포근함을 지닌 곰 타입! 급하게 서두르는 법 없이 자기 페이스를 잘 지키고, 주변 사람들에게 안정감을 줘요. 말은 많지 않지만 한번 하면 핵심을 짚고, 약속은 반드시 지키는 사람이에요. "너 옆에 있으면 편해"라는 말이야말로 당신에게 가장 잘 어울리는 칭찬!',
      tags: ['#듬직함', '#안정감', '#포근한매력'],
      color: '#78716c',
      gradient: 'from-stone-400 to-stone-600',
    },
    {
      id: 'dolphin',
      title: '돌고래',
      emoji: '🐬',
      icon: '/icons/results/animal-dolphin.png',
      subtitle: '밝고 활발한 사교형',
      description: '당신은 어디에서든 분위기를 밝히는 돌고래 타입! 사람들과 어울리는 게 에너지 충전이고, 재미있는 일이 있으면 무조건 참여하는 스타일이에요. 그룹 채팅방에서 가장 활발하고, 모임 총무는 항상 당신 몫이죠. 긍정 에너지가 넘쳐서 주변 사람들까지 덩달아 기분이 좋아지는, 진정한 소셜 에너자이저!',
      tags: ['#소셜에너지', '#긍정바이브', '#파티피플'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'owl',
      title: '부엉이',
      emoji: '🦉',
      icon: '/icons/results/animal-owl.png',
      subtitle: '신중하고 지적인',
      description: '당신은 생각이 깊고 판단력이 뛰어난 부엉이 타입! 성급하게 결정하는 법 없이 충분히 고민하고 분석한 뒤 움직여요. 정보 수집 능력이 뛰어나서 친구들 사이에서 "걔한테 물어봐"라고 불리는 인간 위키피디아 같은 존재. 가끔 생각이 너무 많아서 결정이 늦어지기도 하지만, 그만큼 실수가 적은 게 당신의 강점이에요.',
      tags: ['#분석왕', '#신중함', '#지적매력'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      id: 'sloth',
      title: '나무늘보',
      emoji: '🦥',
      icon: '/icons/results/animal-sloth.png',
      subtitle: '느긋하고 평화로운',
      description: '당신은 세상의 속도에 휘둘리지 않는 나무늘보 타입! "빨리빨리"라는 말과는 거리가 멀고, 자기만의 리듬으로 살아가는 게 인생 철학이에요. 남들이 뭐라 하든 편하게 쉴 줄 아는 진짜 여유의 고수. 스트레스 관리의 달인이기도 해서, 바쁜 친구들이 당신을 보며 "나도 좀 쉬어야지..." 하고 깨달음을 얻곤 해요.',
      tags: ['#느긋한삶', '#마이페이스', '#힐링존재'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'wolf',
      title: '늑대',
      emoji: '🐺',
      icon: '/icons/results/animal-wolf.png',
      subtitle: '독립적이고 카리스마 있는',
      description: '당신은 혼자서도 충분히 강하지만, 무리를 이끌 수 있는 카리스마도 가진 늑대 타입! 자기 확신이 강하고 목표가 뚜렷해서 한번 정한 건 끝까지 밀고 나가요. 아무나 쉽게 다가오지 못하는 아우라가 있지만, 정작 가까운 사람에게는 의외로 따뜻한 반전 매력의 소유자. "그 사람은 뭔가 달라"라는 평가를 자주 듣는 당신이에요.',
      tags: ['#카리스마', '#독보적존재', '#반전매력'],
      color: '#475569',
      gradient: 'from-slate-500 to-gray-700',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { energy = 0, social = 0, instinct = 0, freedom = 0 } = scores
    const total = energy + social + instinct + freedom

    // 돌출 성향 기반 판별
    const max = Math.max(energy, social, instinct, freedom)

    if (energy === max && energy > social) {
      if (social >= energy - 2) return 'golden-retriever'
      return 'wolf'
    }
    if (social === max && social > instinct) {
      if (energy >= social - 2) return 'dolphin'
      return 'golden-retriever'
    }
    if (instinct === max) {
      if (energy > social) return 'fox'
      if (social > freedom) return 'owl'
      return 'fox'
    }
    if (freedom === max) {
      if (instinct >= freedom - 2) return 'cat'
      if (social > energy) return 'sloth'
      return 'cat'
    }

    // fallback
    if (total < 15) return 'bear'
    return 'bear'
  },
}

export default animalTest
