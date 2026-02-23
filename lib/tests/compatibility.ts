import { TestConfig, CATEGORY_COLORS } from './types'

const compatibilityTest: TestConfig = {
  id: 'compatibility',
  title: '취향 궁합',
  emoji: '💫',
  icon: '/icons/tests/compatibility.png',
  description: '우리 진짜 잘 통할까?',
  category: 'relationship',
  color: CATEGORY_COLORS.relationship,
  tags: ['궁합', '취향', '친구', '연인', '케미'],
  avgTime: '3분',
  createdAt: '2026-02-20',
  axes: ['introvert', 'planner', 'trendy', 'emotional'],

  questions: [
    {
      id: 1,
      situation: '금요일 저녁, 약속이 없다!',
      emoji: '🌙',
      choices: [
        { text: '넷플릭스 + 배달음식 = 최고의 금요일', emoji: '🛋️', scores: { introvert: 3, emotional: 1 } },
        { text: '급하게라도 사람 모아서 술 한잔', emoji: '🍻', scores: { introvert: 0, trendy: 2 } },
        { text: '그동안 못 갔던 카페나 전시 탐방', emoji: '🎨', scores: { trendy: 3, planner: 1 } },
        { text: '밀린 집안일이나 하자...', emoji: '🧹', scores: { planner: 3, introvert: 1 } },
      ],
    },
    {
      id: 2,
      situation: '여행 스타일은?',
      emoji: '✈️',
      choices: [
        { text: '분 단위 일정표 필수', emoji: '📋', scores: { planner: 3, trendy: 1 } },
        { text: '대충 숙소만 잡고 그날그날', emoji: '🎒', scores: { planner: 0, emotional: 2 } },
        { text: 'SNS 핫플 위주로 동선 짜기', emoji: '📸', scores: { trendy: 3, planner: 1 } },
        { text: '조용한 곳에서 쉬는 게 여행', emoji: '🏡', scores: { introvert: 3, emotional: 2 } },
      ],
    },
    {
      id: 3,
      situation: '친구가 갑자기 고민 상담을 한다.',
      emoji: '😢',
      choices: [
        { text: '일단 들어주기. 공감이 먼저', emoji: '🤗', scores: { emotional: 3, introvert: 1 } },
        { text: '해결책을 같이 찾아줌', emoji: '💡', scores: { planner: 3, emotional: 0 } },
        { text: '"일단 나와. 기분 전환하자"', emoji: '🏃', scores: { trendy: 1, introvert: 0 } },
        { text: '카톡으로 길~게 위로 메시지', emoji: '💌', scores: { introvert: 2, emotional: 3 } },
      ],
    },
    {
      id: 4,
      situation: '새로운 취미를 시작한다면?',
      emoji: '🎯',
      choices: [
        { text: '요즘 핫한 테니스/골프', emoji: '🎾', scores: { trendy: 3, introvert: 0 } },
        { text: '혼자 하는 독서/퍼즐', emoji: '📚', scores: { introvert: 3, planner: 1 } },
        { text: '그림/음악 같은 창작 활동', emoji: '🎨', scores: { emotional: 3, trendy: 1 } },
        { text: '체계적으로 배우는 자격증/공부', emoji: '📝', scores: { planner: 3, trendy: 0 } },
      ],
    },
    {
      id: 5,
      situation: '쇼핑할 때 나는?',
      emoji: '🛍️',
      choices: [
        { text: '필요한 것만 사고 바로 나옴', emoji: '🎯', scores: { planner: 3, trendy: 0 } },
        { text: '이것저것 구경이 재미. 충동구매 위험', emoji: '😍', scores: { emotional: 2, trendy: 2 } },
        { text: '온라인으로 비교하고 최저가 구매', emoji: '💻', scores: { planner: 2, introvert: 2 } },
        { text: '유행하는 거 위주로 관심', emoji: '✨', scores: { trendy: 3, emotional: 1 } },
      ],
    },
    {
      id: 6,
      situation: 'SNS 사용 스타일은?',
      emoji: '📱',
      choices: [
        { text: '거의 안 함. 눈팅만', emoji: '👻', scores: { introvert: 3, trendy: 0 } },
        { text: '일상 자주 올림. 스토리 장인', emoji: '📷', scores: { trendy: 3, emotional: 1 } },
        { text: '의미 있는 것만 가끔 올림', emoji: '🎭', scores: { emotional: 2, planner: 1 } },
        { text: '보는 것보단 올리는 게 좋음', emoji: '✍️', scores: { trendy: 2, introvert: 0 } },
      ],
    },
    {
      id: 7,
      situation: '갈등이 생겼을 때?',
      emoji: '⚡',
      choices: [
        { text: '바로 얘기함. 미루면 더 커져', emoji: '🗣️', scores: { planner: 2, introvert: 0 } },
        { text: '좀 식힌 다음에 대화', emoji: '🧊', scores: { emotional: 1, planner: 2 } },
        { text: '상대 입장을 먼저 생각해봄', emoji: '🤔', scores: { emotional: 3, introvert: 1 } },
        { text: '시간이 해결해줄 거야...', emoji: '⏰', scores: { introvert: 3, emotional: 1 } },
      ],
    },
    {
      id: 8,
      situation: '이상적인 주말은?',
      emoji: '☀️',
      choices: [
        { text: '오전 운동 + 오후 카페 + 저녁 친구', emoji: '📅', scores: { planner: 3, trendy: 1 } },
        { text: '아무 계획 없이 늘어지기', emoji: '🐱', scores: { introvert: 3, emotional: 1 } },
        { text: '핫플 브런치 + 팝업스토어', emoji: '🌟', scores: { trendy: 3, introvert: 0 } },
        { text: '좋아하는 영화/음악 감상', emoji: '🎬', scores: { emotional: 3, introvert: 2 } },
      ],
    },
    {
      id: 9,
      situation: '선물을 고를 때?',
      emoji: '🎁',
      choices: [
        { text: '뭐 필요한지 직접 물어봄', emoji: '🤝', scores: { planner: 3, emotional: 0 } },
        { text: '평소 관심사 기억해뒀다가 서프라이즈', emoji: '💝', scores: { emotional: 3, planner: 1 } },
        { text: '요즘 유행하는 아이템으로', emoji: '🔥', scores: { trendy: 3, emotional: 1 } },
        { text: '무난하게 기프티콘', emoji: '📲', scores: { introvert: 2, planner: 1 } },
      ],
    },
    {
      id: 10,
      situation: '10년 후 나는?',
      emoji: '🔮',
      choices: [
        { text: '안정적인 직장 + 가정', emoji: '🏠', scores: { planner: 3, emotional: 1 } },
        { text: '나만의 사업/프리랜서', emoji: '🚀', scores: { trendy: 2, introvert: 1 } },
        { text: '하고 싶은 일 하면서 살기', emoji: '🌈', scores: { emotional: 3, trendy: 1 } },
        { text: '아직 모르겠고 그때 가서 생각', emoji: '🤷', scores: { introvert: 2, emotional: 2 } },
      ],
    },
    {
      id: 11,
      situation: '카페에서 자리를 고를 때?',
      emoji: '☕',
      choices: [
        { text: '구석 창가 자리 사수', emoji: '🪟', scores: { introvert: 3, emotional: 1 } },
        { text: '사람 구경 잘 되는 가운데 자리', emoji: '👀', scores: { trendy: 2, introvert: 0 } },
        { text: '콘센트 있는 효율적인 자리', emoji: '🔌', scores: { planner: 3, trendy: 0 } },
        { text: '분위기 좋은 인테리어 옆자리', emoji: '🕯️', scores: { emotional: 3, trendy: 2 } },
      ],
    },
    {
      id: 12,
      situation: '단톡방에 아무도 답을 안 한다.',
      emoji: '💬',
      choices: [
        { text: '나도 안 함. 누가 먼저 하겠지', emoji: '🫥', scores: { introvert: 3, emotional: 0 } },
        { text: '분위기 살리려고 내가 먼저 답함', emoji: '🙋', scores: { emotional: 2, introvert: 0 } },
        { text: '관련 밈이나 짤 던져서 분위기 전환', emoji: '😂', scores: { trendy: 3, emotional: 1 } },
        { text: '"다들 바쁜가?" 하고 확인 메시지', emoji: '📩', scores: { planner: 2, emotional: 1 } },
      ],
    },
    {
      id: 13,
      situation: '음식점에서 메뉴를 고를 때?',
      emoji: '🍽️',
      choices: [
        { text: '항상 먹던 거. 실패 싫어', emoji: '🔁', scores: { planner: 2, introvert: 2 } },
        { text: '리뷰에서 별점 높은 거 주문', emoji: '⭐', scores: { planner: 3, trendy: 1 } },
        { text: '그날 끌리는 거 직감으로 선택', emoji: '🎲', scores: { emotional: 3, planner: 0 } },
        { text: '신메뉴나 시즌 한정 무조건 도전', emoji: '🆕', scores: { trendy: 3, emotional: 1 } },
      ],
    },
    {
      id: 14,
      situation: '모임에서 처음 보는 사람이 많다!',
      emoji: '🫣',
      choices: [
        { text: '아는 사람 옆에 딱 붙어 있기', emoji: '🐥', scores: { introvert: 3, emotional: 1 } },
        { text: '자연스럽게 돌아다니며 인사', emoji: '🤝', scores: { trendy: 2, introvert: 0 } },
        { text: '옆 사람이랑 한 명씩 깊은 대화', emoji: '💬', scores: { emotional: 3, introvert: 1 } },
        { text: '분위기 파악하고 적절히 합류', emoji: '🧐', scores: { planner: 2, emotional: 1 } },
      ],
    },
    {
      id: 15,
      situation: '비 오는 날 기분은?',
      emoji: '🌧️',
      choices: [
        { text: '집에서 빗소리 들으며 감성 타임', emoji: '🎧', scores: { emotional: 3, introvert: 2 } },
        { text: '우산 챙겨야지... 내일 날씨도 확인', emoji: '🌂', scores: { planner: 3, emotional: 0 } },
        { text: '비 오면 파전에 막걸리지!', emoji: '🫓', scores: { trendy: 1, emotional: 2 } },
        { text: '비 오는 날 감성 카페 가야 해', emoji: '📸', scores: { trendy: 3, emotional: 1 } },
      ],
    },
    {
      id: 16,
      situation: '운동을 시작하려고 한다면?',
      emoji: '💪',
      choices: [
        { text: '혼자 조용히 러닝이나 홈트', emoji: '🏃', scores: { introvert: 3, planner: 1 } },
        { text: '체계적으로 PT 등록해서 배우기', emoji: '🏋️', scores: { planner: 3, introvert: 0 } },
        { text: '요즘 핫한 클라이밍/필라테스', emoji: '🧗', scores: { trendy: 3, planner: 1 } },
        { text: '친구랑 같이 해야 동기부여 됨', emoji: '👯', scores: { emotional: 2, introvert: 0 } },
      ],
    },
    {
      id: 17,
      situation: '늦잠 자서 지각할 것 같다!',
      emoji: '⏰',
      choices: [
        { text: '택시 타고 어떻게든 시간 맞춤', emoji: '🚕', scores: { planner: 3, emotional: 0 } },
        { text: '"5분 늦어요~" 솔직히 연락함', emoji: '📱', scores: { emotional: 2, introvert: 1 } },
        { text: '어차피 늦은 거 커피라도 사 가기', emoji: '☕', scores: { trendy: 1, emotional: 2 } },
        { text: '사실 알람을 3개 맞춰놔서 안 늦음', emoji: '😏', scores: { planner: 3, introvert: 2 } },
      ],
    },
    {
      id: 18,
      situation: '좋아하는 영화 장르는?',
      emoji: '🎬',
      choices: [
        { text: '로맨스/드라마 (감정이입 최고)', emoji: '💕', scores: { emotional: 3, introvert: 1 } },
        { text: '스릴러/추리 (두뇌 풀가동)', emoji: '🔍', scores: { planner: 2, introvert: 2 } },
        { text: '마블/액션 (일단 시원하게)', emoji: '💥', scores: { trendy: 2, emotional: 1 } },
        { text: '다큐멘터리/예술영화', emoji: '🎭', scores: { introvert: 2, emotional: 3 } },
      ],
    },
    {
      id: 19,
      situation: '친구 생일 파티를 연다면?',
      emoji: '🎂',
      choices: [
        { text: '서프라이즈 파티 기획! 디테일까지 완벽하게', emoji: '🎉', scores: { planner: 3, emotional: 2 } },
        { text: '트렌디한 레스토랑 예약', emoji: '🍷', scores: { trendy: 3, planner: 1 } },
        { text: '소수 친한 친구끼리 집에서 조용히', emoji: '🏠', scores: { introvert: 3, emotional: 1 } },
        { text: '감동적인 영상이나 편지 준비', emoji: '💌', scores: { emotional: 3, introvert: 1 } },
      ],
    },
    {
      id: 20,
      situation: '스트레스 받을 때 해소법은?',
      emoji: '😤',
      choices: [
        { text: '혼자 조용히 음악 듣거나 산책', emoji: '🎶', scores: { introvert: 3, emotional: 2 } },
        { text: '친구 만나서 수다 폭격', emoji: '🗣️', scores: { introvert: 0, emotional: 2 } },
        { text: '쇼핑이나 맛집으로 기분 전환', emoji: '🛒', scores: { trendy: 3, emotional: 1 } },
        { text: '운동이나 청소로 에너지 소비', emoji: '🧹', scores: { planner: 2, introvert: 1 } },
      ],
    },
    {
      id: 21,
      situation: '카카오톡 프로필은?',
      emoji: '💛',
      choices: [
        { text: '기본 이미지 그대로. 귀찮아서', emoji: '🫥', scores: { introvert: 3, planner: 0 } },
        { text: '잘 나온 셀카나 인생사진', emoji: '🤳', scores: { trendy: 2, emotional: 1 } },
        { text: '감성 있는 풍경이나 일러스트', emoji: '🌅', scores: { emotional: 3, trendy: 1 } },
        { text: '자주 바꿈. 기분에 따라 달라짐', emoji: '🔄', scores: { trendy: 3, emotional: 2 } },
      ],
    },
    {
      id: 22,
      situation: '냉장고에 먹을 게 없다!',
      emoji: '🧊',
      choices: [
        { text: '배달앱 열어서 최고 리뷰 찾기', emoji: '📱', scores: { planner: 2, trendy: 2 } },
        { text: '일단 라면이라도 끓여 먹지 뭐', emoji: '🍜', scores: { introvert: 2, emotional: 1 } },
        { text: '장 볼 리스트 작성 후 마트 가기', emoji: '📝', scores: { planner: 3, introvert: 1 } },
        { text: '친구한테 밥 먹자고 연락함', emoji: '📞', scores: { introvert: 0, emotional: 2 } },
      ],
    },
    {
      id: 23,
      situation: '새 드라마가 시작했다!',
      emoji: '📺',
      choices: [
        { text: '완결 나면 몰아보기 할 예정', emoji: '⏸️', scores: { planner: 2, introvert: 2 } },
        { text: '실시간으로 보면서 트위터 반응 확인', emoji: '🐦', scores: { trendy: 3, emotional: 1 } },
        { text: '1화 보고 감정 이입되면 정주행', emoji: '😭', scores: { emotional: 3, introvert: 1 } },
        { text: '주변 반응 보고 재밌으면 그때 시작', emoji: '🤔', scores: { planner: 1, trendy: 2 } },
      ],
    },
    {
      id: 24,
      situation: '택시 vs 대중교통?',
      emoji: '🚌',
      choices: [
        { text: '무조건 최단 시간! 택시 불러', emoji: '🚕', scores: { planner: 2, trendy: 1 } },
        { text: '교통비 아끼는 게 낫지. 버스나 지하철', emoji: '💰', scores: { planner: 3, introvert: 1 } },
        { text: '이어폰 끼고 지하철 타는 거 좋아', emoji: '🎧', scores: { introvert: 3, emotional: 2 } },
        { text: '날씨나 기분에 따라 다름', emoji: '🌤️', scores: { emotional: 2, trendy: 1 } },
      ],
    },
    {
      id: 25,
      situation: '갑자기 하루 휴가가 생겼다!',
      emoji: '🎊',
      choices: [
        { text: '미리 하고 싶었던 거 리스트에서 골라서', emoji: '📋', scores: { planner: 3, trendy: 1 } },
        { text: '늦잠 + 아무것도 안 하기', emoji: '😴', scores: { introvert: 3, emotional: 1 } },
        { text: '오늘만의 특별한 무언가 즉흥으로', emoji: '✨', scores: { emotional: 2, trendy: 2 } },
        { text: '핫한 전시나 팝업 다녀오기', emoji: '🖼️', scores: { trendy: 3, introvert: 0 } },
      ],
    },
    {
      id: 26,
      situation: '노래방에 왔다!',
      emoji: '🎤',
      choices: [
        { text: '최신 히트곡 위주로 분위기 메이커', emoji: '🔥', scores: { trendy: 3, introvert: 0 } },
        { text: '내가 좋아하는 노래 조용히 부르기', emoji: '🎵', scores: { introvert: 2, emotional: 2 } },
        { text: '감정 실어서 발라드 폭발', emoji: '😭', scores: { emotional: 3, introvert: 1 } },
        { text: '번호 미리 정해놓고 순서대로 부름', emoji: '📑', scores: { planner: 3, trendy: 0 } },
      ],
    },
    {
      id: 27,
      situation: '친구가 갑자기 이사를 도와달래!',
      emoji: '📦',
      choices: [
        { text: '당연히 가야지. 힘든 거 같이 해야지', emoji: '💪', scores: { emotional: 3, introvert: 0 } },
        { text: '도와줄게~ 근데 시간 조율하자', emoji: '🗓️', scores: { planner: 3, emotional: 1 } },
        { text: '몸은 좀 그렇고 치킨 쏠게', emoji: '🍗', scores: { introvert: 2, trendy: 1 } },
        { text: '갈게! 짐 정리 효율적으로 해주겠어', emoji: '🏗️', scores: { planner: 2, introvert: 0 } },
      ],
    },
    {
      id: 28,
      situation: '새 폰이 나왔다!',
      emoji: '📱',
      choices: [
        { text: '출시일에 바로 사전예약', emoji: '🏃', scores: { trendy: 3, planner: 1 } },
        { text: '리뷰 다 비교하고 신중하게 결정', emoji: '🔬', scores: { planner: 3, trendy: 0 } },
        { text: '지금 폰 괜찮은데 굳이 바꿔야 해?', emoji: '🤷', scores: { introvert: 2, emotional: 1 } },
        { text: '색상이랑 디자인이 예쁘면 바꿈', emoji: '🎨', scores: { emotional: 2, trendy: 2 } },
      ],
    },
    {
      id: 29,
      situation: '자기 전 루틴은?',
      emoji: '🌜',
      choices: [
        { text: '유튜브/릴스 보다가 어느새 새벽', emoji: '📱', scores: { trendy: 2, emotional: 1 } },
        { text: '일기 쓰거나 오늘 하루 되돌아보기', emoji: '📓', scores: { emotional: 3, planner: 1 } },
        { text: '내일 할 일 정리하고 알람 세팅', emoji: '✅', scores: { planner: 3, introvert: 1 } },
        { text: '조용히 책 읽다가 스르르 잠들기', emoji: '📖', scores: { introvert: 3, emotional: 2 } },
      ],
    },
    {
      id: 30,
      situation: '인생 좌우명을 고른다면?',
      emoji: '📜',
      choices: [
        { text: '"오늘 하루도 나답게"', emoji: '🌿', scores: { introvert: 2, emotional: 3 } },
        { text: '"계획대로 되지 않는 건 없다"', emoji: '🎯', scores: { planner: 3, emotional: 0 } },
        { text: '"인생은 짧고 할 건 많다"', emoji: '🔥', scores: { trendy: 3, planner: 1 } },
        { text: '"사람이 전부다"', emoji: '🤗', scores: { emotional: 3, introvert: 0 } },
      ],
    },
  ],

  results: [
    {
      id: 'homebody',
      title: '집순이/집돌이',
      emoji: '🏠',
      icon: '/icons/results/compat-homebody.png',
      subtitle: '집이 최고의 핫플',
      description: '금요일 저녁, "오늘 나올래?"라는 카톡에 10초 고민 후 "아 오늘 좀 피곤해서..."라고 답하는 프로 집콕러. 약속 취소 문자가 오면 표정은 "아쉽다~"이지만 속으로는 가츠포즈를 날린다. 넷플릭스 큐가 항상 20개 이상이고, 배달앱 즐겨찾기는 이미 완벽하게 세팅되어 있다. 침대 위에서 핸드폰 보다가 잠드는 게 하루의 피날레이며, "집이 최고의 핫플"이라는 말을 진심으로 믿는다. 누군가 "밖에 날씨 좋다"고 하면 "그래서 창문으로 볼게"라고 답할 수 있는 사람.',
      tags: ['#집최고', '#혼자좋아', '#에너지충전은집에서'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-violet-500',
    },
    {
      id: 'planner',
      title: '계획형 인간',
      emoji: '📋',
      icon: '/icons/results/compat-planner.png',
      subtitle: '계획 없으면 불안한 타입',
      description: '구글 캘린더가 텅 비어있으면 불안해지는 사람. 여행 가기 2주 전부터 엑셀로 일정표를 짜고, 주말 계획도 금요일 밤에 확정한다. 쇼핑할 때도 "필요한 것 리스트"를 미리 작성해서 가고, 장보러 갈 때 동선까지 최적화하는 능력자. 즉흥적인 친구가 "지금 나와!"라고 하면 일단 "몇 시에? 어디서?"부터 물어보는 게 습관이다. 계획대로 되지 않으면 약간 스트레스를 받지만, 그 덕분에 여행 사진이 항상 예쁘고 약속에 절대 늦지 않는다.',
      tags: ['#플래너필수', '#체계적', '#효율주의'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-cyan-500',
    },
    {
      id: 'trendsetter',
      title: '트렌드 세터',
      emoji: '✨',
      icon: '/icons/results/compat-trendsetter.png',
      subtitle: '유행은 내가 만든다',
      description: '새로 오픈한 팝업스토어, 인스타에서 뜨는 카페, 넷플릭스 신작 — 다 이 사람이 제일 먼저 안다. 친구들 사이에서 "이거 알아?"라고 물으면 "아 그거? 저번 주에 다녀왔는데"라고 답하는 정보의 최전선. 인스타 피드는 항상 감각적이고, 옷도 음식도 가는 곳도 트렌디하다. "요즘 뭐가 핫해?"라는 질문을 가장 많이 받는 사람이자, 친구들의 문화생활 컨설턴트를 자처한다. 유행이 지나기 전에 이미 다음 트렌드를 찾고 있는, 항상 한 발 앞서가는 타입.',
      tags: ['#트렌드리더', '#핫플마스터', '#인싸중의인싸'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 'empath',
      title: '감성 충만러',
      emoji: '🌙',
      icon: '/icons/results/compat-emotional.png',
      subtitle: '느끼는 게 많은 사람',
      description: '영화 보다가 울고, 노래 듣다가 울고, 친구 고민 들으면서도 같이 운다. "너 왜 울어?"라는 말을 자주 듣지만, 본인은 "감동적이잖아..."라며 당당하다. 감성 카페에서 창밖 보면서 생각에 잠기는 시간이 소확행이고, 일기를 쓰면 하루에 3페이지는 거뜬히 채운다. 사람의 표정 변화를 귀신같이 캐치해서 "무슨 일 있어?"라고 먼저 물어보는 공감 능력자. 가끔 감정에 너무 깊이 빠져서 힘들 때도 있지만, 이런 풍부한 감성이 주변 사람들에게는 따뜻한 위로가 된다.',
      tags: ['#감성파', '#공감능력자', '#눈물많은편'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      id: 'social-butterfly',
      title: '소셜 나비',
      emoji: '🦋',
      icon: '/icons/results/compat-social.png',
      subtitle: '사람이 좋은 에너자이저',
      description: '월요일부터 금요일까지 매일 저녁 약속이 있어도 전혀 지치지 않는 에너자이저. 사람을 만나면 에너지가 충전되고, 혼자 있으면 오히려 심심해서 단톡방에 "오늘 뭐 해?"를 던진다. 모임에 가면 자연스럽게 분위기를 이끌고, 처음 보는 사람과도 5분 안에 친해지는 마법의 소유자. 트렌디한 감각에 감성까지 겸비해서, 어떤 자리에서든 빛나는 존재감을 뿜뿜한다. 연락처에 이름이 500개 넘는 건 기본이고, "너 아는 사람 진짜 많다"라는 말을 듣는 게 최고의 칭찬.',
      tags: ['#인싸', '#에너자이저', '#사람이좋아'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'old-soul',
      title: '올드 소울',
      emoji: '🍵',
      icon: '/icons/results/compat-old-soul.png',
      subtitle: '나이와 상관없이 차분한',
      description: '유행하는 건 알지만 따라가지 않는다. "그거 다 해봤는데 별로야"가 아니라, 그냥 자기만의 취향이 확고한 사람. 카페에서 책 읽는 걸 좋아하고, 소수의 친한 친구와 깊은 대화를 나누는 시간이 가장 행복하다. SNS는 거의 안 하거나 눈팅만 하지만, 오프라인에서 만나면 생각보다 말이 많고 재미있어서 사람들이 놀란다. "너 요즘 뭐 해?"라고 물으면 알 수 없는 취미 3개를 꺼내놓는 숨은 다재다능인. 조용하지만 자기 세계가 깊어서, 알면 알수록 매력적인 타입이다.',
      tags: ['#마이웨이', '#깊이있는', '#차분한매력'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { introvert = 0, planner = 0, trendy = 0, emotional = 0 } = scores
    const max = Math.max(introvert, planner, trendy, emotional)

    if (introvert === max && introvert > trendy + 2) return 'homebody'
    if (planner === max && planner > emotional) return 'planner'
    if (trendy === max && trendy > introvert) {
      if (emotional > planner) return 'social-butterfly'
      return 'trendsetter'
    }
    if (emotional === max) {
      if (introvert > trendy) return 'old-soul'
      return 'empath'
    }

    // 균형형
    if (trendy > introvert && emotional > planner) return 'social-butterfly'
    return 'old-soul'
  },
}

export default compatibilityTest
