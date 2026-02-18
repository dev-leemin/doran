import { TestConfig, CATEGORY_COLORS } from './types'

const lunchTest: TestConfig = {
  id: 'lunch',
  title: '점심 뭐 먹지?',
  emoji: '🍽️',
  icon: '/icons/lunch.png',
  description: '당신의 음식 DNA를 분석합니다',
  category: 'food',
  color: CATEGORY_COLORS.food,
  tags: ['음식', '점심메뉴', '취향', '직장인'],
  avgTime: '3분',
  axes: ['spicy', 'adventure', 'health', 'mood'],

  questions: [
    {
      id: 1,
      situation: '오전 업무가 너무 힘들었다. 점심은?',
      emoji: '😫',
      choices: [
        { text: '고기! 삼겹살이나 갈비', emoji: '🥩', scores: { mood: 3, spicy: 1 } },
        { text: '뜨끈한 국물 한 그릇', emoji: '🍲', scores: { mood: 2, health: 2 } },
        { text: '매운 걸로 스트레스 해소', emoji: '🌶️', scores: { spicy: 3, mood: 2 } },
        { text: '그냥 가볍게 샐러드', emoji: '🥗', scores: { health: 3, mood: 0 } },
      ],
    },
    {
      id: 2,
      situation: '새로 생긴 가게가 보인다.',
      emoji: '👀',
      choices: [
        { text: '바로 들어간다. 새로운 건 참을 수 없어', emoji: '🏃', scores: { adventure: 3, mood: 1 } },
        { text: '리뷰부터 검색', emoji: '📱', scores: { health: 1, adventure: 1 } },
        { text: '다음에... 검증된 곳으로', emoji: '🔒', scores: { mood: 2, adventure: 0 } },
        { text: '메뉴판만 슬쩍 보고 판단', emoji: '🤔', scores: { adventure: 2, health: 1 } },
      ],
    },
    {
      id: 3,
      situation: '해장이 필요한 아침이다.',
      emoji: '🤢',
      choices: [
        { text: '뜨끈한 콩나물국밥', emoji: '🥣', scores: { health: 2, mood: 2 } },
        { text: '얼큰한 짬뽕', emoji: '🍜', scores: { spicy: 3, mood: 2 } },
        { text: '그냥 커피 한 잔이면 됨', emoji: '☕', scores: { health: 1, adventure: 1 } },
        { text: '해장은 또 라면이지', emoji: '🍝', scores: { mood: 3, spicy: 1 } },
      ],
    },
    {
      id: 4,
      situation: '혼밥할 때 가장 편한 메뉴는?',
      emoji: '🧍',
      choices: [
        { text: '덮밥류 (규동, 카츠동)', emoji: '🍚', scores: { mood: 2, adventure: 1 } },
        { text: '라멘이나 우동', emoji: '🍜', scores: { adventure: 2, mood: 2 } },
        { text: '편의점 도시락', emoji: '🏪', scores: { health: 0, mood: 1 } },
        { text: '카페에서 샌드위치', emoji: '🥪', scores: { health: 2, adventure: 1 } },
      ],
    },
    {
      id: 5,
      situation: '점심 메뉴 투표. 뭘 밀겠어?',
      emoji: '🗳️',
      choices: [
        { text: '중식 (짜장, 짬뽕, 탕수육)', emoji: '🥟', scores: { mood: 3, spicy: 1 } },
        { text: '일식 (초밥, 돈카츠)', emoji: '🍣', scores: { adventure: 2, health: 1 } },
        { text: '한식 (김치찌개, 된장찌개)', emoji: '🫕', scores: { health: 2, mood: 2 } },
        { text: '양식 (파스타, 피자)', emoji: '🍕', scores: { adventure: 2, mood: 2 } },
      ],
    },
    {
      id: 6,
      situation: '맵기를 고를 수 있다면?',
      emoji: '🔥',
      choices: [
        { text: '최고 단계 (눈물 날 때까지)', emoji: '😭', scores: { spicy: 3, adventure: 2 } },
        { text: '중간보다 좀 더 매운 거', emoji: '🌶️', scores: { spicy: 2, mood: 1 } },
        { text: '적당히 (맵기는 감칠맛)', emoji: '👌', scores: { spicy: 1, health: 1 } },
        { text: '안 매운 걸로 주세요', emoji: '😇', scores: { health: 2, spicy: 0 } },
      ],
    },
    {
      id: 7,
      situation: '회식 장소를 정해야 한다.',
      emoji: '🎊',
      choices: [
        { text: '고기집 (삼겹살, 소고기)', emoji: '🥓', scores: { mood: 3, spicy: 0 } },
        { text: '이자카야/일본 선술집', emoji: '🍶', scores: { adventure: 3, mood: 1 } },
        { text: '매운 닭발/곱창', emoji: '🍗', scores: { spicy: 3, adventure: 1 } },
        { text: '조용한 레스토랑', emoji: '🍷', scores: { health: 1, adventure: 2 } },
      ],
    },
    {
      id: 8,
      situation: '다이어트 중인데 점심시간이다.',
      emoji: '⚖️',
      choices: [
        { text: '다이어트는 내일부터... 치킨', emoji: '🍗', scores: { mood: 3, health: 0 } },
        { text: '샐러드 + 닭가슴살', emoji: '🥗', scores: { health: 3, mood: 0 } },
        { text: '포케볼 같은 균형 잡힌 메뉴', emoji: '🥙', scores: { health: 2, adventure: 2 } },
        { text: '점심을 적게 먹고 간식으로 버팀', emoji: '🍪', scores: { health: 1, mood: 1 } },
      ],
    },
    {
      id: 9,
      situation: '비 오는 날 먹고 싶은 건?',
      emoji: '🌧️',
      choices: [
        { text: '부침개 + 막걸리 (일하는 중이지만)', emoji: '🫓', scores: { mood: 3, adventure: 1 } },
        { text: '칼국수나 수제비', emoji: '🍝', scores: { health: 2, mood: 2 } },
        { text: '매운 떡볶이', emoji: '🍢', scores: { spicy: 3, mood: 1 } },
        { text: '따뜻한 쌀국수(포)', emoji: '🍜', scores: { adventure: 2, health: 2 } },
      ],
    },
    {
      id: 10,
      situation: '여행지에서 현지 음식이 낯설다.',
      emoji: '✈️',
      choices: [
        { text: '무조건 도전! 이게 여행이지', emoji: '🤩', scores: { adventure: 3, spicy: 1 } },
        { text: '제일 유명한 거 하나만', emoji: '⭐', scores: { adventure: 2, mood: 1 } },
        { text: '한식당 찾아본다', emoji: '🇰🇷', scores: { mood: 2, adventure: 0 } },
        { text: '일단 먹어보고 안 맞으면 버림', emoji: '🤷', scores: { adventure: 2, health: 1 } },
      ],
    },
    {
      id: 11,
      situation: '야근 확정. 저녁 메뉴는?',
      emoji: '🌙',
      choices: [
        { text: '치킨 + 콜라 조합은 진리', emoji: '🍗', scores: { mood: 3, health: 0 } },
        { text: '든든하게 국밥 한 그릇', emoji: '🍚', scores: { mood: 2, health: 2 } },
        { text: '매운 라볶이로 화풀이', emoji: '🌶️', scores: { spicy: 3, mood: 1 } },
        { text: '건강하게 샌드위치랑 주스', emoji: '🥤', scores: { health: 3, mood: 0 } },
      ],
    },
    {
      id: 12,
      situation: '친구가 "아무거나"라고 했다.',
      emoji: '😑',
      choices: [
        { text: '그럼 내가 고른다. 매운 거!', emoji: '🔥', scores: { spicy: 3, adventure: 1 } },
        { text: '카페 가서 브런치 먹자', emoji: '🥞', scores: { adventure: 2, health: 1 } },
        { text: '무난하게 김치찌개', emoji: '🫕', scores: { mood: 2, health: 1 } },
        { text: '새로 핫한 맛집 가보자', emoji: '📍', scores: { adventure: 3, mood: 1 } },
      ],
    },
    {
      id: 13,
      situation: '편의점에 들어왔다. 뭘 고를까?',
      emoji: '🏪',
      choices: [
        { text: '불닭볶음면 (컵라면)', emoji: '🍜', scores: { spicy: 3, mood: 1 } },
        { text: '삼각김밥이랑 우유', emoji: '🍙', scores: { health: 1, mood: 2 } },
        { text: '처음 보는 신상 과자', emoji: '🆕', scores: { adventure: 3, mood: 1 } },
        { text: '샐러드랑 닭가슴살', emoji: '🥗', scores: { health: 3, adventure: 0 } },
      ],
    },
    {
      id: 14,
      situation: '배달앱을 켰다. 첫 번째 행동은?',
      emoji: '📱',
      choices: [
        { text: '"매운" 검색부터', emoji: '🌶️', scores: { spicy: 3, mood: 1 } },
        { text: '신규 입점 매장 탐색', emoji: '🔍', scores: { adventure: 3, health: 0 } },
        { text: '찜한 단골 가게 바로 클릭', emoji: '❤️', scores: { mood: 3, adventure: 0 } },
        { text: '칼로리 낮은 순으로 정렬', emoji: '📊', scores: { health: 3, mood: 0 } },
      ],
    },
    {
      id: 15,
      situation: '떡볶이를 먹으려고 한다.',
      emoji: '🍢',
      choices: [
        { text: '핵불닭맛으로 주세요', emoji: '💀', scores: { spicy: 3, adventure: 2 } },
        { text: '로제 떡볶이 요즘 핫하던데', emoji: '🧀', scores: { adventure: 2, mood: 2 } },
        { text: '옛날 떡볶이가 최고야', emoji: '👵', scores: { mood: 2, spicy: 1 } },
        { text: '밀떡 말고 쌀떡으로 건강하게', emoji: '🌾', scores: { health: 2, spicy: 1 } },
      ],
    },
    {
      id: 16,
      situation: '소개팅 식사 장소를 정해야 한다.',
      emoji: '💕',
      choices: [
        { text: '분위기 좋은 이탈리안 레스토랑', emoji: '🍝', scores: { mood: 2, adventure: 2 } },
        { text: '요즘 SNS에서 핫한 곳', emoji: '📸', scores: { adventure: 3, mood: 1 } },
        { text: '무난하게 깔끔한 한정식', emoji: '🍱', scores: { health: 2, mood: 2 } },
        { text: '맛집이면 장르 불문', emoji: '🏆', scores: { adventure: 2, mood: 2 } },
      ],
    },
    {
      id: 17,
      situation: '라면을 끓이려고 한다.',
      emoji: '🍜',
      choices: [
        { text: '신라면 + 계란 + 파 국룰', emoji: '🥚', scores: { spicy: 2, mood: 2 } },
        { text: '불닭볶음면 + 치즈 올려서', emoji: '🧀', scores: { spicy: 3, mood: 1 } },
        { text: '안성탕면 순한맛이 좋아', emoji: '😊', scores: { health: 1, mood: 2 } },
        { text: '직접 육수 내서 라멘풍으로', emoji: '👨‍🍳', scores: { adventure: 3, health: 1 } },
      ],
    },
    {
      id: 18,
      situation: '뷔페에 왔다. 전략은?',
      emoji: '🤑',
      choices: [
        { text: '비싼 거부터 (스테이크, 해산물)', emoji: '🦐', scores: { mood: 3, adventure: 1 } },
        { text: '안 먹어본 것 위주로 시도', emoji: '🧐', scores: { adventure: 3, mood: 1 } },
        { text: '샐러드바부터 건강하게', emoji: '🥬', scores: { health: 3, mood: 0 } },
        { text: '매운 음식 코너 집중 공략', emoji: '🔥', scores: { spicy: 3, mood: 1 } },
      ],
    },
    {
      id: 19,
      situation: '급하게 5분 안에 먹어야 한다.',
      emoji: '⏰',
      choices: [
        { text: '김밥 한 줄이면 충분', emoji: '🫒', scores: { health: 1, mood: 2 } },
        { text: '핫도그나 토스트 간편하게', emoji: '🌭', scores: { mood: 2, adventure: 1 } },
        { text: '컵라면 부어서 후루룩', emoji: '🍜', scores: { spicy: 1, mood: 2 } },
        { text: '프로틴바로 때우기', emoji: '💪', scores: { health: 3, mood: 0 } },
      ],
    },
    {
      id: 20,
      situation: '냉장고에 남은 재료가 애매하다.',
      emoji: '🧊',
      choices: [
        { text: '볶음밥이면 뭐든 해결', emoji: '🍳', scores: { mood: 2, adventure: 1 } },
        { text: '유튜브 보고 새로운 요리 도전', emoji: '📺', scores: { adventure: 3, health: 1 } },
        { text: '고추장 넣고 비벼서 매콤하게', emoji: '🌶️', scores: { spicy: 2, mood: 2 } },
        { text: '그냥 배달시킨다', emoji: '📦', scores: { mood: 3, adventure: 0 } },
      ],
    },
    {
      id: 21,
      situation: '카페에서 디저트를 고른다.',
      emoji: '🍰',
      choices: [
        { text: '시즌 한정 메뉴 무조건 도전', emoji: '🆕', scores: { adventure: 3, mood: 1 } },
        { text: '아메리카노만. 디저트는 칼로리', emoji: '☕', scores: { health: 3, mood: 0 } },
        { text: '크로플이나 케이크 풀코스', emoji: '🧇', scores: { mood: 3, health: 0 } },
        { text: '매운 디저트 있으면 그걸로 (떡볶이 케이크?)', emoji: '🤯', scores: { spicy: 2, adventure: 3 } },
      ],
    },
    {
      id: 22,
      situation: '월급날이다! 점심은?',
      emoji: '💰',
      choices: [
        { text: '소고기 오마카세 가자', emoji: '🥩', scores: { adventure: 2, mood: 3 } },
        { text: '평소 못 가던 새로운 맛집', emoji: '🌟', scores: { adventure: 3, mood: 1 } },
        { text: '그래도 점심은 소박하게', emoji: '😌', scores: { health: 2, mood: 1 } },
        { text: '매운 대게찜이나 해물탕!', emoji: '🦀', scores: { spicy: 2, mood: 3 } },
      ],
    },
    {
      id: 23,
      situation: '운동 끝나고 뭘 먹을까?',
      emoji: '🏋️',
      choices: [
        { text: '닭가슴살 + 고구마 루틴', emoji: '🍠', scores: { health: 3, mood: 0 } },
        { text: '운동했으니까 보상! 피자!', emoji: '🍕', scores: { mood: 3, health: 0 } },
        { text: '프로틴 쉐이크 한 잔', emoji: '🥤', scores: { health: 3, adventure: 0 } },
        { text: '매운 닭볶음탕으로 단백질 보충', emoji: '🍗', scores: { spicy: 2, health: 1 } },
      ],
    },
    {
      id: 24,
      situation: '외국인 친구에게 한식을 소개해야 한다.',
      emoji: '🌏',
      choices: [
        { text: '불닭볶음면 도전시키기', emoji: '😈', scores: { spicy: 3, adventure: 2 } },
        { text: '비빔밥이 제일 무난하지', emoji: '🍚', scores: { health: 2, mood: 2 } },
        { text: '삼겹살에 쏘주 풀코스', emoji: '🥓', scores: { mood: 3, adventure: 1 } },
        { text: '전통 한정식 코스로 제대로', emoji: '🍱', scores: { adventure: 2, health: 2 } },
      ],
    },
    {
      id: 25,
      situation: '새벽에 갑자기 배가 고프다.',
      emoji: '🌃',
      choices: [
        { text: '신라면 끓여야 이 밤이 마무리됨', emoji: '🍜', scores: { spicy: 2, mood: 2 } },
        { text: '치킨 배달 가능한 시간인가 확인', emoji: '🍗', scores: { mood: 3, adventure: 0 } },
        { text: '참는다. 야식은 건강의 적', emoji: '🙅', scores: { health: 3, mood: 0 } },
        { text: '냉동실 뒤져서 뭔가 해먹기', emoji: '🧊', scores: { adventure: 2, mood: 1 } },
      ],
    },
    {
      id: 26,
      situation: '짜장면 vs 짬뽕, 매번 고민된다.',
      emoji: '🤔',
      choices: [
        { text: '짬뽕이지! 매운 게 좋으니까', emoji: '🌶️', scores: { spicy: 3, mood: 1 } },
        { text: '짜장면. 편안한 맛이 최고', emoji: '🖤', scores: { mood: 3, spicy: 0 } },
        { text: '반반 시킨다 (둘 다 먹어야 함)', emoji: '🤝', scores: { mood: 2, adventure: 1 } },
        { text: '둘 다 놔두고 볶음밥 시킴', emoji: '😎', scores: { adventure: 2, mood: 1 } },
      ],
    },
    {
      id: 27,
      situation: '분식집에 왔다.',
      emoji: '🏠',
      choices: [
        { text: '떡볶이 + 튀김 + 순대 풀세트', emoji: '🍢', scores: { mood: 3, spicy: 1 } },
        { text: '쫄면 매운맛으로', emoji: '🥵', scores: { spicy: 3, health: 0 } },
        { text: '잔치국수 하나면 충분', emoji: '🍜', scores: { health: 2, mood: 1 } },
        { text: '메뉴판에 새로운 거 있으면 그걸로', emoji: '✨', scores: { adventure: 3, mood: 1 } },
      ],
    },
    {
      id: 28,
      situation: '음식에 소스를 추가할 수 있다.',
      emoji: '🫙',
      choices: [
        { text: '청양고추 추가요!', emoji: '🌶️', scores: { spicy: 3, mood: 1 } },
        { text: '이 집 특제 소스가 뭐예요?', emoji: '🧐', scores: { adventure: 3, health: 0 } },
        { text: '소스 없이 재료 본연의 맛으로', emoji: '🍃', scores: { health: 3, adventure: 0 } },
        { text: '치즈 폭탄으로 주세요', emoji: '🧀', scores: { mood: 3, health: 0 } },
      ],
    },
    {
      id: 29,
      situation: '회사 구내식당 메뉴가 맘에 안 든다.',
      emoji: '😒',
      choices: [
        { text: '그래도 먹는다. 공짜가 최고니까', emoji: '💸', scores: { health: 1, mood: 1 } },
        { text: '밖에 나가서 매운 거 먹고 온다', emoji: '🏃', scores: { spicy: 3, adventure: 1 } },
        { text: '배달앱 켜서 새로운 거 시킨다', emoji: '📱', scores: { adventure: 2, mood: 2 } },
        { text: '간단하게 프로틴바로 대체', emoji: '💪', scores: { health: 3, mood: 0 } },
      ],
    },
    {
      id: 30,
      situation: '마지막 질문! 인생 음식 하나만 고른다면?',
      emoji: '🏅',
      choices: [
        { text: '엽떡 오리지널 (매운맛이 인생)', emoji: '🔥', scores: { spicy: 3, mood: 2 } },
        { text: '아직 못 먹어본 미지의 음식', emoji: '🌍', scores: { adventure: 3, mood: 1 } },
        { text: '엄마가 해주는 집밥', emoji: '🏡', scores: { mood: 3, health: 2 } },
        { text: '닭가슴살 샐러드 (건강이 최고)', emoji: '🥗', scores: { health: 3, adventure: 0 } },
      ],
    },
  ],

  results: [
    {
      id: 'spicy-explorer',
      title: '매운맛 탐험가',
      emoji: '🌶️',
      subtitle: '매운 게 없으면 밥을 못 먹는 타입',
      description: '캡사이신이 몸에 흐르는 사람. 신메뉴 나오면 매운 버전부터 찾고, 친구들은 항상 이 사람 때문에 매운 집만 간다.',
      tags: ['#매운맛중독', '#캡사이신러버', '#불닭은기본'],
      color: '#ef4444',
      gradient: 'from-red-400 to-orange-500',
    },
    {
      id: 'food-adventurer',
      title: '미식 모험가',
      emoji: '🗺️',
      subtitle: '새로운 맛을 찾아 떠나는 사람',
      description: '안 가본 식당은 참을 수 없고, 이상한 조합도 일단 시도. 맛집 리스트가 항상 100개 이상이다.',
      tags: ['#맛집헌터', '#푸드투어', '#호기심천국'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-indigo-500',
    },
    {
      id: 'health-guru',
      title: '건강식 마스터',
      emoji: '🥗',
      subtitle: '몸이 곧 자본',
      description: '칼로리 계산은 기본, 영양소 밸런스까지. 다른 사람 탄산음료 마실 때 물 마시는 사람.',
      tags: ['#클린이팅', '#건강제일', '#물많이마심'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-green-500',
    },
    {
      id: 'comfort-foodie',
      title: '소울푸드 집착러',
      emoji: '🍖',
      subtitle: '맛있으면 0칼로리',
      description: '기분에 따라 먹는 타입. 힘들면 고기, 기쁘면 고기, 그냥도 고기. 음식이 삶의 큰 행복.',
      tags: ['#먹는게행복', '#소울푸드', '#기분따라메뉴'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-yellow-500',
    },
    {
      id: 'balance-eater',
      title: '균형잡힌 미식가',
      emoji: '⚖️',
      subtitle: '맛도 건강도 놓치지 않는',
      description: '극단적이지 않고, 이것저것 골고루. 건강도 챙기면서 맛있는 것도 먹을 줄 아는 센스쟁이.',
      tags: ['#밸런스킹', '#골고루', '#센스있는입맛'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'routine-eater',
      title: '루틴 식사러',
      emoji: '📋',
      subtitle: '검증된 곳만 간다',
      description: '한번 정한 메뉴는 잘 안 바꿈. 단골집이 3개 이상이고, 거기서 매번 같은 걸 시킨다.',
      tags: ['#단골러', '#변하지않는입맛', '#안전제일'],
      color: '#64748b',
      gradient: 'from-slate-400 to-gray-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { spicy = 0, adventure = 0, health = 0, mood = 0 } = scores
    const max = Math.max(spicy, adventure, health, mood)

    if (spicy === max && spicy > adventure) return 'spicy-explorer'
    if (adventure === max && adventure > mood) return 'food-adventurer'
    if (health === max && health > mood) return 'health-guru'
    if (mood === max && mood > health + 2) return 'comfort-foodie'

    // 균형형 체크
    const range = max - Math.min(spicy, adventure, health, mood)
    if (range <= 3) return 'balance-eater'

    if (adventure <= 3 && mood > health) return 'routine-eater'

    return 'comfort-foodie'
  },
}

export default lunchTest
