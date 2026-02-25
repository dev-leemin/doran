import { TestConfig, CATEGORY_COLORS } from './types'

const cafeTest: TestConfig = {
  id: 'cafe',
  title: '나의 카페 유형은?',
  emoji: '☕',
  icon: '/icons/tests/cafe.png',
  description: '당신의 카페 스타일을 알아보세요',
  category: 'food',
  color: CATEGORY_COLORS.food,
  tags: ['카페', '커피', '음료', '취향'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['taste', 'vibe', 'social', 'adventure'],

  questions: [
    {
      id: 1,
      situation: '카페에 들어갔다. 가장 먼저 하는 행동은?',
      emoji: '🚪',
      choices: [
        { text: '메뉴판부터 꼼꼼히 살핀다', emoji: '📋', scores: { taste: 2, adventure: 1 } },
        { text: '인테리어부터 둘러본다', emoji: '👀', scores: { vibe: 3, taste: 0 } },
        { text: '같이 온 친구와 자리부터 잡는다', emoji: '💺', scores: { social: 3, vibe: 1 } },
        { text: '신메뉴 포스터가 있는지 확인한다', emoji: '🆕', scores: { adventure: 3, taste: 1 } },
      ],
    },
    {
      id: 2,
      situation: '커피 주문할 때 당신은?',
      emoji: '☕',
      choices: [
        { text: '아메리카노 한 잔이면 충분', emoji: '🖤', scores: { taste: 3, vibe: 0 } },
        { text: '라떼에 시럽 추가해서 달달하게', emoji: '🥛', scores: { taste: 2, social: 1 } },
        { text: '이 집 시그니처 메뉴가 뭐예요?', emoji: '⭐', scores: { adventure: 3, taste: 1 } },
        { text: '친구가 시키는 거 같은 걸로', emoji: '👯', scores: { social: 2, adventure: 1 } },
      ],
    },
    {
      id: 3,
      situation: '카페에서 자리를 고를 때?',
      emoji: '💺',
      choices: [
        { text: '콘센트 있는 자리 (노트북 필수)', emoji: '🔌', scores: { vibe: 1, taste: 2 } },
        { text: '창가 자리 (햇살이 들어오는 곳)', emoji: '🌤️', scores: { vibe: 3, social: 1 } },
        { text: '넓은 테이블 (수다 떨기 좋은 곳)', emoji: '🗣️', scores: { social: 3, vibe: 1 } },
        { text: '구석 자리 (아늑한 느낌)', emoji: '🛋️', scores: { vibe: 2, adventure: 1 } },
      ],
    },
    {
      id: 4,
      situation: '디저트 메뉴를 볼 때 당신은?',
      emoji: '🍰',
      choices: [
        { text: '케이크 풀코스로 시킨다', emoji: '🎂', scores: { taste: 3, social: 1 } },
        { text: '커피만 마신다. 디저트는 패스', emoji: '✋', scores: { taste: 2, vibe: 1 } },
        { text: '사진 찍기 좋은 걸로 고른다', emoji: '📸', scores: { vibe: 3, social: 1 } },
        { text: '처음 보는 디저트가 있으면 도전', emoji: '🧁', scores: { adventure: 3, taste: 1 } },
      ],
    },
    {
      id: 5,
      situation: '카페에서 보내는 시간은 보통?',
      emoji: '⏰',
      choices: [
        { text: '테이크아웃해서 바로 나간다', emoji: '🏃', scores: { taste: 1, adventure: 1 } },
        { text: '30분 정도. 커피 마시고 나가기', emoji: '☕', scores: { taste: 2, social: 1 } },
        { text: '2-3시간은 기본 (노트북 작업)', emoji: '💻', scores: { vibe: 2, taste: 2 } },
        { text: '친구랑 수다 떨다 보면 반나절', emoji: '💬', scores: { social: 3, vibe: 1 } },
      ],
    },
    {
      id: 6,
      situation: '새로 생긴 카페를 발견했다!',
      emoji: '✨',
      choices: [
        { text: '당장 들어가본다', emoji: '🚀', scores: { adventure: 3, vibe: 1 } },
        { text: '인스타 검색부터 한다', emoji: '📱', scores: { vibe: 2, social: 1 } },
        { text: '리뷰에서 커피 맛 평가를 확인한다', emoji: '🔍', scores: { taste: 3, adventure: 0 } },
        { text: '친구한테 같이 가자고 연락한다', emoji: '📞', scores: { social: 3, adventure: 1 } },
      ],
    },
    {
      id: 7,
      situation: '카페 음악이 너무 시끄럽다.',
      emoji: '🔊',
      choices: [
        { text: '커피만 맛있으면 상관없다', emoji: '🤷', scores: { taste: 3, vibe: 0 } },
        { text: '분위기가 깨져서 다른 곳으로 간다', emoji: '🚶', scores: { vibe: 3, taste: 0 } },
        { text: '오히려 시끄러운 게 좋다. 대화하기 편해', emoji: '😄', scores: { social: 3, vibe: 0 } },
        { text: '새로운 분위기도 나쁘지 않네', emoji: '🎵', scores: { adventure: 2, vibe: 1 } },
      ],
    },
    {
      id: 8,
      situation: '친구가 카페 추천을 해달라고 한다.',
      emoji: '🤝',
      choices: [
        { text: '커피 맛 좋은 로스터리 카페', emoji: '🫘', scores: { taste: 3, adventure: 1 } },
        { text: '인테리어 예쁜 감성 카페', emoji: '🕯️', scores: { vibe: 3, social: 1 } },
        { text: '얘기하기 좋은 조용한 카페', emoji: '🤫', scores: { social: 2, vibe: 2 } },
        { text: '최근에 새로 오픈한 핫플 카페', emoji: '🔥', scores: { adventure: 3, social: 1 } },
      ],
    },
    {
      id: 9,
      situation: '여름에 카페를 간다면?',
      emoji: '☀️',
      choices: [
        { text: '아이스 아메리카노. 여름엔 아아지', emoji: '🧊', scores: { taste: 3, vibe: 0 } },
        { text: '이 집 특제 빙수가 있다면 그걸로', emoji: '🍧', scores: { adventure: 2, taste: 2 } },
        { text: '에어컨 빵빵한 곳에서 시원하게', emoji: '❄️', scores: { vibe: 2, social: 1 } },
        { text: '야외 테라스에서 여유롭게', emoji: '🌴', scores: { vibe: 3, social: 1 } },
      ],
    },
    {
      id: 10,
      situation: '카페에서 공부/작업을 해야 한다.',
      emoji: '📚',
      choices: [
        { text: '조용하고 넓은 스터디 카페로 간다', emoji: '🤓', scores: { vibe: 2, taste: 1 } },
        { text: '커피가 맛있어야 집중이 잘 된다', emoji: '☕', scores: { taste: 3, vibe: 1 } },
        { text: '친구랑 같이 가서 같이 공부한다', emoji: '👥', scores: { social: 3, vibe: 0 } },
        { text: '매번 다른 카페에서 작업하는 게 좋다', emoji: '🔄', scores: { adventure: 3, vibe: 1 } },
      ],
    },
    {
      id: 11,
      situation: '카페 메뉴에 핸드드립 옵션이 있다.',
      emoji: '🫗',
      choices: [
        { text: '원두 종류 물어보고 핸드드립 주문', emoji: '🫘', scores: { taste: 3, adventure: 1 } },
        { text: '그냥 에스프레소 기반 음료로', emoji: '☕', scores: { taste: 2, vibe: 0 } },
        { text: '핸드드립 처음인데 한번 도전해볼까', emoji: '🤔', scores: { adventure: 3, taste: 1 } },
        { text: '커피보다는 논커피 음료가 좋아', emoji: '🧃', scores: { social: 1, adventure: 1 } },
      ],
    },
    {
      id: 12,
      situation: '단골 카페의 메뉴가 바뀌었다.',
      emoji: '😮',
      choices: [
        { text: '내가 좋아하던 메뉴가 없어지면 화난다', emoji: '😤', scores: { taste: 3, adventure: 0 } },
        { text: '새 메뉴 다 먹어봐야지', emoji: '🤩', scores: { adventure: 3, taste: 1 } },
        { text: '리뉴얼된 인테리어가 더 궁금하다', emoji: '🏠', scores: { vibe: 3, adventure: 1 } },
        { text: '단톡방에 바로 공유한다', emoji: '💬', scores: { social: 3, adventure: 1 } },
      ],
    },
    {
      id: 13,
      situation: '비 오는 날 카페에서 당신은?',
      emoji: '🌧️',
      choices: [
        { text: '따뜻한 핫초코 한 잔이면 완벽', emoji: '🍫', scores: { taste: 2, vibe: 2 } },
        { text: '빗소리 들으며 창밖 구경', emoji: '🪟', scores: { vibe: 3, taste: 0 } },
        { text: '친구 불러서 수다 타임', emoji: '☎️', scores: { social: 3, vibe: 1 } },
        { text: '비 와서 사람 없겠다. 새 카페 가보자', emoji: '🌂', scores: { adventure: 3, vibe: 1 } },
      ],
    },
    {
      id: 14,
      situation: '해외여행 중 현지 카페에 들어갔다.',
      emoji: '✈️',
      choices: [
        { text: '현지 스타일 커피를 마셔본다', emoji: '🌍', scores: { adventure: 3, taste: 2 } },
        { text: '분위기 좋은 곳에서 사진 찍기', emoji: '📷', scores: { vibe: 3, social: 1 } },
        { text: '그냥 아메리카노. 어디서든 안전한 선택', emoji: '🖤', scores: { taste: 3, adventure: 0 } },
        { text: '현지인이랑 대화 시도해본다', emoji: '🗣️', scores: { social: 3, adventure: 2 } },
      ],
    },
    {
      id: 15,
      situation: '카페 사장님이 시음을 권한다.',
      emoji: '🥄',
      choices: [
        { text: '새 원두라면 무조건 맛본다', emoji: '👅', scores: { taste: 3, adventure: 1 } },
        { text: '어떤 원두인지 설명부터 듣고 싶다', emoji: '🧐', scores: { taste: 2, adventure: 2 } },
        { text: '같이 온 친구들한테도 나눠준다', emoji: '🤗', scores: { social: 3, taste: 1 } },
        { text: '사장님이랑 커피 이야기 하며 분위기 즐기기', emoji: '😊', scores: { vibe: 2, social: 2 } },
      ],
    },
    {
      id: 16,
      situation: 'SNS에서 유명한 카페를 발견했다.',
      emoji: '📱',
      choices: [
        { text: '비주얼은 좋은데 맛은 어떨지 검색', emoji: '🔎', scores: { taste: 3, vibe: 1 } },
        { text: '사진 찍으러 당장 가야 해', emoji: '📸', scores: { vibe: 3, adventure: 1 } },
        { text: '친구들 모아서 같이 가자', emoji: '👫', scores: { social: 3, adventure: 1 } },
        { text: '유명해지기 전에 빨리 가봐야지', emoji: '⚡', scores: { adventure: 3, social: 1 } },
      ],
    },
    {
      id: 17,
      situation: '카페 원두를 집에서도 마시고 싶다.',
      emoji: '🏠',
      choices: [
        { text: '원두 사서 직접 내려 마신다', emoji: '🫖', scores: { taste: 3, vibe: 1 } },
        { text: '예쁜 드리퍼 세트도 같이 구매', emoji: '🛍️', scores: { vibe: 3, taste: 1 } },
        { text: '인스턴트 커피로 충분해', emoji: '🫙', scores: { social: 1, adventure: 0 } },
        { text: '새로운 원두 구독 서비스를 시도해본다', emoji: '📦', scores: { adventure: 3, taste: 2 } },
      ],
    },
    {
      id: 18,
      situation: '카페에서 옆 테이블이 너무 시끄럽다.',
      emoji: '😣',
      choices: [
        { text: '커피에 집중. 맛있으면 다 괜찮아', emoji: '☕', scores: { taste: 3, vibe: 0 } },
        { text: '분위기 망했으니 다른 카페로 이동', emoji: '🚶', scores: { vibe: 3, adventure: 1 } },
        { text: '나도 친구랑 더 크게 떠들면 그만', emoji: '😂', scores: { social: 3, vibe: 0 } },
        { text: '이참에 새로운 카페 개척하러 가자', emoji: '🗺️', scores: { adventure: 3, social: 1 } },
      ],
    },
    {
      id: 19,
      situation: '겨울에 카페를 간다면?',
      emoji: '❄️',
      choices: [
        { text: '따뜻한 라떼 한 잔이면 행복', emoji: '🥛', scores: { taste: 3, vibe: 1 } },
        { text: '크리스마스 시즌 한정 메뉴 도전', emoji: '🎄', scores: { adventure: 3, taste: 1 } },
        { text: '감성 조명 아래서 분위기 있게', emoji: '🕯️', scores: { vibe: 3, social: 1 } },
        { text: '친구들이랑 모여서 따뜻하게', emoji: '🧣', scores: { social: 3, vibe: 1 } },
      ],
    },
    {
      id: 20,
      situation: '카페 사장님이 "뭐 드릴까요?" 한다.',
      emoji: '🙋',
      choices: [
        { text: '"아메리카노요" (0.5초 만에 대답)', emoji: '⚡', scores: { taste: 3, social: 0 } },
        { text: '"추천 메뉴가 뭐예요?"', emoji: '🤔', scores: { adventure: 2, social: 2 } },
        { text: '"여기 제일 인기 있는 게 뭐예요?"', emoji: '🏆', scores: { social: 2, adventure: 1 } },
        { text: '"오늘 처음 왔는데 특별한 거 있어요?"', emoji: '😃', scores: { adventure: 3, vibe: 1 } },
      ],
    },
    {
      id: 21,
      situation: '카페 인테리어가 마음에 든다.',
      emoji: '🏡',
      choices: [
        { text: '그래도 커피가 맛없으면 안 온다', emoji: '🙅', scores: { taste: 3, vibe: 1 } },
        { text: '인테리어가 예쁘면 맛은 좀 부족해도 OK', emoji: '✨', scores: { vibe: 3, taste: 0 } },
        { text: '여기 좋다! 친구들한테 자랑해야지', emoji: '📣', scores: { social: 3, vibe: 1 } },
        { text: '이런 컨셉 카페 또 어디 없나 찾아본다', emoji: '🔍', scores: { adventure: 3, vibe: 1 } },
      ],
    },
    {
      id: 22,
      situation: '카페에서 노트북을 펼쳤다. 집중이 안 된다.',
      emoji: '😵‍💫',
      choices: [
        { text: '에스프레소 한 잔 추가 주문', emoji: '💉', scores: { taste: 3, vibe: 0 } },
        { text: '음악이 좋은 다른 카페로 옮긴다', emoji: '🎧', scores: { vibe: 3, adventure: 1 } },
        { text: '그냥 친구한테 전화해서 수다 떤다', emoji: '📱', scores: { social: 3, taste: 0 } },
        { text: '다른 새로운 카페에서 환경을 바꿔본다', emoji: '🔄', scores: { adventure: 3, vibe: 1 } },
      ],
    },
    {
      id: 23,
      situation: '카페 갈 때 가장 중요한 것은?',
      emoji: '❓',
      choices: [
        { text: '커피 맛. 이것만 좋으면 된다', emoji: '👑', scores: { taste: 3, adventure: 0 } },
        { text: '분위기. 공간이 주는 힐링', emoji: '🌿', scores: { vibe: 3, taste: 0 } },
        { text: '함께하는 사람. 카페는 만남의 장소', emoji: '🫂', scores: { social: 3, vibe: 0 } },
        { text: '새로움. 매번 다른 경험이 좋다', emoji: '🌈', scores: { adventure: 3, social: 0 } },
      ],
    },
    {
      id: 24,
      situation: '카페 쿠폰이 10개 다 모였다!',
      emoji: '🎫',
      choices: [
        { text: '무료 아메리카노 당연히 받아야지', emoji: '☕', scores: { taste: 3, social: 0 } },
        { text: '평소 안 시키던 비싼 메뉴 도전', emoji: '💎', scores: { adventure: 3, taste: 1 } },
        { text: '친구 줄까? 같이 가서 쓰자', emoji: '🎁', scores: { social: 3, adventure: 0 } },
        { text: '기념으로 예쁜 한정 굿즈 받기', emoji: '🧸', scores: { vibe: 3, social: 1 } },
      ],
    },
    {
      id: 25,
      situation: '마지막 질문! 당신에게 카페란?',
      emoji: '🏅',
      choices: [
        { text: '좋은 커피 한 잔의 여유', emoji: '☕', scores: { taste: 3, vibe: 1 } },
        { text: '일상 속 작은 감성 충전소', emoji: '🔋', scores: { vibe: 3, taste: 1 } },
        { text: '사람들과 함께하는 소통의 공간', emoji: '💬', scores: { social: 3, vibe: 1 } },
        { text: '새로운 맛과 공간을 탐험하는 모험', emoji: '🧭', scores: { adventure: 3, taste: 1 } },
      ],
    },
  ],

  results: [
    {
      id: 'americano',
      title: '아메리카노 장인',
      emoji: '☕',
      icon: '/icons/results/cafe-americano.png',
      subtitle: '커피는 아메리카노, 그 이상도 이하도 아닌',
      description: '카페에 가면 0.5초 만에 "아메리카노요"가 나오는 사람. 원두의 산미와 바디감을 구분할 줄 알고, 핸드드립과 에스프레소의 차이를 설명할 수 있다. 화려한 시럽이나 크림 같은 건 커피의 순수함을 해친다고 생각하며, 좋은 원두 한 잔이면 하루가 완성된다고 믿는다. 주변 사람들은 "좀 다른 것도 마셔봐"라고 하지만, 커피 본연의 맛을 아는 진정한 커피 러버.',
      tags: ['#아아는진리', '#원두감별사', '#블랙커피'],
      color: '#78716c',
      gradient: 'from-stone-400 to-stone-600',
    },
    {
      id: 'latte',
      title: '라떼 아티스트',
      emoji: '🥛',
      icon: '/icons/results/cafe-latte.png',
      subtitle: '부드럽고 달콤한 게 인생이지',
      description: '바닐라 라떼, 카라멜 마키아또, 헤이즐넛 라떼... 시럽 추가는 기본이고 휘핑크림도 올려야 완성이다. 커피도 좋아하지만 그보다 중요한 건 부드럽고 달콤한 맛의 하모니. "이건 커피가 아니라 디저트야"라는 말을 들어도 당당하게 "맛있으면 됐지!"라고 응수한다. 계절 한정 라떼가 나오면 꼭 먹어보는 편이고, 라떼아트가 예쁘면 사진부터 찍는 감성도 있다.',
      tags: ['#달달한인생', '#시럽추가', '#라떼이즈뭔들'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 'dessert',
      title: '디저트 러버',
      emoji: '🍰',
      icon: '/icons/results/cafe-dessert.png',
      subtitle: '카페는 커피보다 디저트가 본체',
      description: '카페를 갈 때 커피보다 디저트 메뉴를 먼저 보는 사람. 케이크, 크로플, 마카롱, 스콘... 디저트 없는 카페는 의미가 없고, SNS에서 예쁜 디저트를 보면 그 카페를 찾아간다. "카페 왔으면 디저트 하나는 먹어야지"가 입버릇이고, 친구들이 "다이어트 중인데..."라고 하면 "인생은 한 번뿐이야"로 설득한다. 단맛이 주는 행복을 아는 진정한 디저트 감별사.',
      tags: ['#디저트맛집', '#케이크는별도', '#달달구리'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      id: 'study',
      title: '카공족 대장',
      emoji: '📚',
      icon: '/icons/results/cafe-study.png',
      subtitle: '카페는 나의 제2의 사무실',
      description: '카페에 가면 노트북, 충전기, 이어폰을 꺼내놓고 자리를 세팅하는 것부터 시작한다. 콘센트 유무가 카페 선택의 제1기준이고, 와이파이 속도도 중요하다. 아메리카노 한 잔으로 3시간은 거뜬히 버티며, 집중이 안 되면 에스프레소를 추가한다. 카페 사장님이 은근히 부담스러워하는 걸 느끼면서도 "손님은 왕이야"를 속으로 외치는 프로 카공러.',
      tags: ['#콘센트필수', '#카페가사무실', '#아아리필'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      id: 'vibe',
      title: '분위기 감성러',
      emoji: '🕯️',
      icon: '/icons/results/cafe-vibe.png',
      subtitle: '카페는 감성을 채우는 공간',
      description: '커피 맛도 중요하지만 더 중요한 건 분위기. 인테리어가 예쁜 카페, 음악이 좋은 카페, 조명이 감성적인 카페를 찾아다닌다. 인스타에 카페 사진을 올리는 게 취미이고, "여기 분위기 좋다"가 최고의 칭찬이다. 비 오는 날 창가에 앉아 커피를 마시는 순간이 인생에서 가장 행복한 시간이라 생각하며, 카페야말로 일상에서 감성을 충전하는 최고의 장소라 믿는다.',
      tags: ['#감성충전', '#카페투어', '#분위기맛집'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'newbie',
      title: '신메뉴 탐험가',
      emoji: '🧪',
      icon: '/icons/results/cafe-newbie.png',
      subtitle: '새로운 맛을 찾아 떠나는 카페 모험가',
      description: '카페에 가면 기본 메뉴는 눈에 들어오지도 않는다. 시즌 한정, 신메뉴, 시그니처 메뉴만 눈에 들어오고, 처음 보는 음료가 있으면 반사적으로 주문한다. 네이버 지도 저장 목록에 "가볼 카페"가 100개 이상이고, 매주 새로운 카페를 개척하는 것이 주말 루틴이다. 실패해도 "이것도 경험이지!"라며 긍정적이고, 주변 사람들에게 카페 추천을 해주는 인간 카페 네비게이션.',
      tags: ['#신메뉴헌터', '#카페탐험', '#호기심대장'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'takeout',
      title: '테이크아웃 스피드러',
      emoji: '🏃',
      icon: '/icons/results/cafe-takeout.png',
      subtitle: '커피는 빠르게, 인생은 바쁘게',
      description: '카페에 앉아있을 시간이 어딨어? 주문하고, 받고, 바로 나가는 게 효율의 극치다. 모바일 사이렌 오더는 기본이고, 출근길에 테이크아웃 한 잔 없으면 하루가 시작되지 않는다. 커피는 들고 다니면서 마시는 게 제일 맛있다고 생각하며, 카페에서 오래 앉아있는 사람들을 보면 "시간이 참 많구나"라고 속으로 감탄한다. 바쁘지만 커피만큼은 포기할 수 없는 효율 만점 카페 이용러.',
      tags: ['#사이렌오더', '#효율의왕', '#걸어가며커피'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'social',
      title: '카페 수다왕',
      emoji: '💬',
      icon: '/icons/results/cafe-social.png',
      subtitle: '카페는 사람을 만나는 곳이지',
      description: '카페에 혼자 가는 건 상상도 할 수 없다. 항상 누군가와 함께 가고, 커피보다 대화가 메인 이벤트다. 카페에 앉으면 말이 술술 나오고, 수다를 떨다 보면 3시간이 훌쩍 지나있다. 친구의 고민 상담, 연인과의 데이트, 동료와의 회의까지 모든 만남의 장소가 카페인 사람. "어디서 만날까?"라는 질문에 항상 "카페!"라고 답하며, 카페야말로 세상에서 가장 좋은 소통의 공간이라 확신한다.',
      tags: ['#수다는생명', '#함께라서좋은', '#카페는만남의장소'],
      color: '#f97316',
      gradient: 'from-orange-400 to-amber-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { taste = 0, vibe = 0, social = 0, adventure = 0 } = scores
    const max = Math.max(taste, vibe, social, adventure)

    // 강한 단일 축 우세
    if (taste === max && taste > vibe + 2 && taste > social + 2) return 'americano'
    if (vibe === max && vibe > taste + 2) return 'vibe'
    if (social === max && social > vibe + 2) return 'social'
    if (adventure === max && adventure > taste + 2) return 'newbie'

    // 복합 유형 판별
    if (taste === max && vibe >= taste - 2 && taste > social) return 'study'
    if (taste >= max - 1 && social >= max - 1) return 'latte'
    if (vibe >= max - 1 && adventure >= max - 1) return 'newbie'
    if (taste === max && adventure >= taste - 1) return 'dessert'

    // 낮은 social + vibe 조합 = 테이크아웃
    if (social <= taste && social <= adventure && vibe < taste) return 'takeout'

    // 기본 max 기반 분기
    if (taste === max) return 'americano'
    if (vibe === max) return 'vibe'
    if (social === max) return 'social'
    if (adventure === max) return 'newbie'

    return 'latte'
  },
}

export default cafeTest
