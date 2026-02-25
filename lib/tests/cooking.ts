import { TestConfig, CATEGORY_COLORS } from './types'

const cookingTest: TestConfig = {
  id: 'cooking',
  title: '나의 요리 스타일은?',
  emoji: '👨‍🍳',
  icon: '/icons/tests/cooking.png',
  description: '당신의 요리 성향을 알아보세요',
  category: 'food',
  color: CATEGORY_COLORS.food,
  tags: ['요리', '음식', '쿡방', '자취'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['skill', 'passion', 'creativity', 'efficiency'],

  questions: [
    {
      id: 1,
      situation: '집에 친구들이 놀러온다고 한다. 저녁은?',
      emoji: '🏠',
      choices: [
        { text: '풀코스 요리를 준비한다', emoji: '🍽️', scores: { skill: 3, passion: 2 } },
        { text: '유튜브 레시피 보고 따라 만든다', emoji: '📱', scores: { passion: 2, creativity: 1 } },
        { text: '밀키트 몇 개 사다 놓는다', emoji: '📦', scores: { efficiency: 3, skill: 0 } },
        { text: '배달앱을 켠다', emoji: '🛵', scores: { efficiency: 2, passion: 0 } },
      ],
    },
    {
      id: 2,
      situation: '냉장고에 남은 재료가 애매하게 있다.',
      emoji: '🧊',
      choices: [
        { text: '있는 재료로 창작 요리를 해본다', emoji: '🧪', scores: { creativity: 3, skill: 2 } },
        { text: '레시피 검색해서 맞는 거 찾는다', emoji: '🔍', scores: { passion: 2, efficiency: 1 } },
        { text: '라면에 대충 넣어 끓인다', emoji: '🍜', scores: { efficiency: 3, creativity: 0 } },
        { text: '재료 더 사러 마트에 간다', emoji: '🛒', scores: { passion: 3, skill: 1 } },
      ],
    },
    {
      id: 3,
      situation: '요리 유튜브를 보는 중이다.',
      emoji: '📺',
      choices: [
        { text: '칼질 기술이나 불 조절 팁에 집중', emoji: '🔪', scores: { skill: 3, passion: 1 } },
        { text: '이 레시피 당장 따라 해봐야겠다!', emoji: '🤩', scores: { passion: 3, creativity: 1 } },
        { text: '저거 내 스타일로 바꿔볼까?', emoji: '💡', scores: { creativity: 3, skill: 1 } },
        { text: '가성비 좋고 간단한 것만 저장', emoji: '💾', scores: { efficiency: 3, passion: 0 } },
      ],
    },
    {
      id: 4,
      situation: '처음 해보는 요리에 도전한다.',
      emoji: '🆕',
      choices: [
        { text: '기본기부터 차근차근 연습', emoji: '📝', scores: { skill: 3, efficiency: 0 } },
        { text: '설레는 마음으로 재료부터 장본다', emoji: '❤️', scores: { passion: 3, skill: 1 } },
        { text: '레시피를 내 방식으로 변형해본다', emoji: '✨', scores: { creativity: 3, passion: 1 } },
        { text: '제일 쉬운 버전을 찾아서 한다', emoji: '⚡', scores: { efficiency: 3, skill: 0 } },
      ],
    },
    {
      id: 5,
      situation: '자취하면서 가장 자주 해먹는 건?',
      emoji: '🏡',
      choices: [
        { text: '제대로 된 한 끼 (찌개, 반찬 포함)', emoji: '🍚', scores: { skill: 2, passion: 3 } },
        { text: '나만의 시그니처 볶음밥', emoji: '🍳', scores: { creativity: 2, skill: 2 } },
        { text: '컵라면이나 즉석밥 조합', emoji: '🍜', scores: { efficiency: 3, passion: 0 } },
        { text: '에어프라이어에 돌리면 끝', emoji: '🔥', scores: { efficiency: 2, creativity: 1 } },
      ],
    },
    {
      id: 6,
      situation: '마트에서 장을 볼 때 나는?',
      emoji: '🛒',
      choices: [
        { text: '신선한 재료를 꼼꼼히 고른다', emoji: '🥬', scores: { skill: 3, passion: 2 } },
        { text: '이것저것 다 사고 싶어진다', emoji: '🤤', scores: { passion: 3, creativity: 1 } },
        { text: '써본 적 없는 소스나 양념을 산다', emoji: '🫙', scores: { creativity: 3, passion: 1 } },
        { text: '밀키트나 반조리 식품 위주로', emoji: '📦', scores: { efficiency: 3, skill: 0 } },
      ],
    },
    {
      id: 7,
      situation: '요리 중 간이 안 맞는 것 같다.',
      emoji: '🧂',
      choices: [
        { text: '맛보면서 조금씩 조절한다', emoji: '👅', scores: { skill: 3, creativity: 1 } },
        { text: '레시피에 적힌 양을 다시 확인', emoji: '📖', scores: { passion: 2, efficiency: 1 } },
        { text: '새로운 양념을 추가해서 실험', emoji: '🧪', scores: { creativity: 3, skill: 1 } },
        { text: '대충 이 정도면 됐지 뭐', emoji: '🤷', scores: { efficiency: 3, passion: 0 } },
      ],
    },
    {
      id: 8,
      situation: '베이킹에 대한 내 생각은?',
      emoji: '🧁',
      choices: [
        { text: '정확한 계량이 중요한 기술이다', emoji: '⚖️', scores: { skill: 3, efficiency: 1 } },
        { text: '케이크 만드는 건 정말 행복해', emoji: '🎂', scores: { passion: 3, creativity: 1 } },
        { text: '레시피를 변형해서 나만의 맛을!', emoji: '🌈', scores: { creativity: 3, passion: 1 } },
        { text: '베이킹은 너무 복잡해... 사 먹는다', emoji: '🏪', scores: { efficiency: 3, skill: 0 } },
      ],
    },
    {
      id: 9,
      situation: '요리가 실패했을 때 나는?',
      emoji: '😱',
      choices: [
        { text: '뭐가 잘못됐는지 분석하고 다시 한다', emoji: '🔬', scores: { skill: 3, passion: 1 } },
        { text: '아쉽지만 다음엔 더 잘하겠지!', emoji: '💪', scores: { passion: 3, efficiency: 0 } },
        { text: '실패작을 살릴 방법을 즉석에서 찾는다', emoji: '🛠️', scores: { creativity: 3, skill: 2 } },
        { text: '바로 배달앱을 켠다', emoji: '📱', scores: { efficiency: 3, creativity: 0 } },
      ],
    },
    {
      id: 10,
      situation: '누군가에게 요리를 해줄 때 나는?',
      emoji: '🥰',
      choices: [
        { text: '완벽한 플레이팅까지 신경 쓴다', emoji: '🎨', scores: { skill: 3, passion: 2 } },
        { text: '상대방이 좋아하는 걸 정성껏', emoji: '💝', scores: { passion: 3, skill: 1 } },
        { text: '한 번도 안 해본 요리에 도전', emoji: '🆕', scores: { creativity: 3, passion: 1 } },
        { text: '간단하지만 맛있는 걸로 빠르게', emoji: '⏱️', scores: { efficiency: 2, skill: 1 } },
      ],
    },
    {
      id: 11,
      situation: '주말 아침, 여유로운 시간이다.',
      emoji: '☀️',
      choices: [
        { text: '브런치를 제대로 만들어본다', emoji: '🥞', scores: { skill: 2, passion: 3 } },
        { text: '팬케이크에 과일 데코까지', emoji: '🍓', scores: { creativity: 2, passion: 2 } },
        { text: '토스트에 계란 후라이면 충분', emoji: '🍞', scores: { efficiency: 3, skill: 0 } },
        { text: '새로운 레시피의 브런치에 도전', emoji: '🧇', scores: { creativity: 3, skill: 1 } },
      ],
    },
    {
      id: 12,
      situation: '요리할 때 레시피는?',
      emoji: '📖',
      choices: [
        { text: '참고만 하고 감으로 한다', emoji: '🎯', scores: { skill: 3, creativity: 2 } },
        { text: '그대로 정확히 따라 한다', emoji: '📋', scores: { passion: 2, efficiency: 2 } },
        { text: '레시피를 기반으로 내 버전을 만든다', emoji: '🔄', scores: { creativity: 3, skill: 1 } },
        { text: '레시피? 그냥 대충 넣는다', emoji: '🤙', scores: { efficiency: 3, creativity: 0 } },
      ],
    },
    {
      id: 13,
      situation: '건강한 식단에 대한 내 생각은?',
      emoji: '🥗',
      choices: [
        { text: '영양소 균형 맞춰서 직접 만든다', emoji: '📊', scores: { skill: 3, passion: 1 } },
        { text: '건강식도 맛있게 만들 수 있다!', emoji: '😋', scores: { passion: 3, creativity: 1 } },
        { text: '일반 요리에 건강 재료를 몰래 넣기', emoji: '🥷', scores: { creativity: 3, efficiency: 1 } },
        { text: '건강식은 사 먹는 게 편하다', emoji: '🥡', scores: { efficiency: 3, passion: 0 } },
      ],
    },
    {
      id: 14,
      situation: '집들이 음식을 준비해야 한다.',
      emoji: '🎉',
      choices: [
        { text: '코스 요리처럼 메뉴를 구성', emoji: '📜', scores: { skill: 3, passion: 2 } },
        { text: '정성 가득한 음식으로 감동 줄 거야', emoji: '🥹', scores: { passion: 3, skill: 1 } },
        { text: '아무도 안 해본 퓨전 요리를 내놓는다', emoji: '🌏', scores: { creativity: 3, passion: 2 } },
        { text: '떡볶이 + 치킨 조합이면 다 좋아한다', emoji: '🍗', scores: { efficiency: 3, creativity: 0 } },
      ],
    },
    {
      id: 15,
      situation: '새로운 조리도구가 생겼다.',
      emoji: '🍳',
      choices: [
        { text: '사용법을 완벽히 익혀서 활용한다', emoji: '📚', scores: { skill: 3, efficiency: 1 } },
        { text: '당장 이걸로 뭔가 만들어봐야 해!', emoji: '🏃', scores: { passion: 3, creativity: 1 } },
        { text: '이 도구로 할 수 있는 새로운 요리 구상', emoji: '💭', scores: { creativity: 3, skill: 1 } },
        { text: '간단하게 쓸 수 있는 기능만 쓴다', emoji: '👍', scores: { efficiency: 3, passion: 0 } },
      ],
    },
    {
      id: 16,
      situation: '파스타를 만들려고 한다.',
      emoji: '🍝',
      choices: [
        { text: '면 삶기부터 소스까지 정석대로', emoji: '👨‍🍳', scores: { skill: 3, passion: 1 } },
        { text: '좋아하는 재료 듬뿍 넣어서 풍성하게', emoji: '🤤', scores: { passion: 3, efficiency: 0 } },
        { text: '카레 파스타 같은 퓨전으로!', emoji: '🍛', scores: { creativity: 3, passion: 1 } },
        { text: '전자레인지용 파스타면 충분', emoji: '📦', scores: { efficiency: 3, skill: 0 } },
      ],
    },
    {
      id: 17,
      situation: '요리 대회에 나간다면?',
      emoji: '🏆',
      choices: [
        { text: '자신 있는 메뉴를 완벽하게 만든다', emoji: '💎', scores: { skill: 3, efficiency: 1 } },
        { text: '정성껏 만든 요리로 감동을 주겠다', emoji: '✨', scores: { passion: 3, skill: 1 } },
        { text: '심사위원이 놀랄 창작 요리를 낸다', emoji: '🤯', scores: { creativity: 3, passion: 2 } },
        { text: '요리 대회는... 안 나간다', emoji: '🙅', scores: { efficiency: 2, creativity: 0 } },
      ],
    },
    {
      id: 18,
      situation: '김치찌개를 끓이는 나만의 방식은?',
      emoji: '🫕',
      choices: [
        { text: '재래시장 돼지고기에 묵은지로 정통파', emoji: '🐷', scores: { skill: 3, passion: 2 } },
        { text: '참치, 두부 듬뿍 넣어 푸짐하게', emoji: '🥫', scores: { passion: 2, efficiency: 2 } },
        { text: '치즈나 카레 넣어서 변형 김치찌개', emoji: '🧀', scores: { creativity: 3, skill: 1 } },
        { text: '편의점 김치찌개 데우기', emoji: '🏪', scores: { efficiency: 3, passion: 0 } },
      ],
    },
    {
      id: 19,
      situation: '유행하는 음식이 있다. 나의 반응은?',
      emoji: '📈',
      choices: [
        { text: '원조 레시피를 연구해서 직접 만든다', emoji: '🔬', scores: { skill: 3, creativity: 1 } },
        { text: '바로 재료 사러 가서 도전!', emoji: '🏃', scores: { passion: 3, efficiency: 0 } },
        { text: '내 스타일로 변형해서 만들어본다', emoji: '🎨', scores: { creativity: 3, passion: 1 } },
        { text: '직접 만들 바엔 사 먹지', emoji: '💸', scores: { efficiency: 3, skill: 0 } },
      ],
    },
    {
      id: 20,
      situation: '한 그릇 요리를 만들 때 가장 중요한 건?',
      emoji: '🥘',
      choices: [
        { text: '불 조절과 타이밍', emoji: '🔥', scores: { skill: 3, creativity: 0 } },
        { text: '좋은 재료와 정성', emoji: '❤️', scores: { passion: 3, skill: 1 } },
        { text: '예상 못 한 재료 조합', emoji: '💥', scores: { creativity: 3, efficiency: 0 } },
        { text: '빠르고 간편하게 끝내는 것', emoji: '⏰', scores: { efficiency: 3, passion: 0 } },
      ],
    },
    {
      id: 21,
      situation: '요리 관련 선물을 받는다면?',
      emoji: '🎁',
      choices: [
        { text: '좋은 칼이나 프라이팬 세트', emoji: '🔪', scores: { skill: 3, passion: 1 } },
        { text: '세계 각국의 향신료 세트', emoji: '🌿', scores: { passion: 2, creativity: 2 } },
        { text: '분자요리 키트 같은 특이한 것', emoji: '🧫', scores: { creativity: 3, skill: 1 } },
        { text: '에어프라이어나 전기밥솥', emoji: '🤖', scores: { efficiency: 3, creativity: 0 } },
      ],
    },
    {
      id: 22,
      situation: '볶음밥을 만들 때 나는?',
      emoji: '🍳',
      choices: [
        { text: '센 불에 웍으로 볶아서 불맛을 낸다', emoji: '🔥', scores: { skill: 3, passion: 1 } },
        { text: '냉장고 속 재료 다 넣어서 풍성하게', emoji: '🥗', scores: { passion: 2, creativity: 1 } },
        { text: '카레볶음밥, 김치크림볶음밥 같은 퓨전', emoji: '🌀', scores: { creativity: 3, skill: 1 } },
        { text: '냉동볶음밥 전자레인지에 돌린다', emoji: '📦', scores: { efficiency: 3, skill: 0 } },
      ],
    },
    {
      id: 23,
      situation: '외국 요리에 도전하려고 한다.',
      emoji: '🌏',
      choices: [
        { text: '정통 레시피와 기법을 공부한다', emoji: '📖', scores: { skill: 3, passion: 2 } },
        { text: '현지 재료를 구해서 제대로 만든다', emoji: '🛒', scores: { passion: 3, skill: 1 } },
        { text: '한국 식재료로 퓨전 버전을 만든다', emoji: '🇰🇷', scores: { creativity: 3, efficiency: 1 } },
        { text: '외국 요리는 전문 식당에서 먹는 거지', emoji: '🍴', scores: { efficiency: 3, passion: 0 } },
      ],
    },
    {
      id: 24,
      situation: '명절에 전을 부쳐야 한다.',
      emoji: '🫓',
      choices: [
        { text: '바삭하게 부치는 노하우가 있다', emoji: '👨‍🍳', scores: { skill: 3, efficiency: 1 } },
        { text: '가족이랑 같이 만드는 게 좋다', emoji: '👨‍👩‍👧‍👦', scores: { passion: 3, creativity: 0 } },
        { text: '피자전, 치즈전 같은 신메뉴를 시도', emoji: '🧀', scores: { creativity: 3, passion: 1 } },
        { text: '마트에서 냉동 전 사온다', emoji: '🏪', scores: { efficiency: 3, skill: 0 } },
      ],
    },
    {
      id: 25,
      situation: '마지막 질문! 나에게 요리란?',
      emoji: '🏅',
      choices: [
        { text: '갈고닦는 기술이자 실력', emoji: '⚔️', scores: { skill: 3, passion: 1 } },
        { text: '사랑과 정성을 담는 행위', emoji: '💖', scores: { passion: 3, creativity: 1 } },
        { text: '무한한 창작의 세계', emoji: '🎭', scores: { creativity: 3, skill: 1 } },
        { text: '배고픔을 해결하는 수단', emoji: '🔧', scores: { efficiency: 3, passion: 0 } },
      ],
    },
  ],

  results: [
    {
      id: 'chef',
      title: '타고난 요리사',
      emoji: '👨‍🍳',
      icon: '/icons/results/cooking-chef.png',
      subtitle: '칼질부터 플레이팅까지 완벽한 실력파',
      description: '불 조절은 감으로 하고, 간은 한 번에 맞추며, 칼질은 리듬감이 있다. 요리를 시작하면 집중력이 극대화되어 마치 프로 셰프처럼 척척 해낸다. 주변 사람들이 "너 요리학원 다녔어?"라고 물어보는 건 일상이고, 만들어주는 음식마다 감탄이 나온다. 기본기에 충실하면서도 맛의 밸런스를 잡는 감각이 탁월하다.',
      tags: ['#요리고수', '#타고난손맛', '#프로셰프급'],
      color: '#ef4444',
      gradient: 'from-red-400 to-rose-500',
    },
    {
      id: 'recipe',
      title: '레시피 충실러',
      emoji: '📖',
      icon: '/icons/results/cooking-recipe.png',
      subtitle: '레시피대로만 하면 실패는 없다',
      description: '요리를 시작하기 전에 레시피를 꼼꼼히 읽고, 계량스푼과 저울을 꺼내놓는 정석파. "레시피에 소금 한 꼬집이라고 했는데 한 꼬집이 정확히 몇 그램이야?"라고 물어본 적 있다. 덕분에 실패율이 극히 낮고, 한번 성공한 요리는 매번 같은 맛을 낸다. 요리에 대한 애정이 꾸준해서 실력이 점점 느는 타입이다.',
      tags: ['#레시피맛집', '#계량은필수', '#꾸준한실력'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'instant',
      title: '간편식 마스터',
      emoji: '🍜',
      icon: '/icons/results/cooking-instant.png',
      subtitle: '최소 노력으로 최대 만족을 추구',
      description: '전자레인지와 에어프라이어는 인류 최고의 발명품이라고 진심으로 생각한다. 요리에 30분 이상 쓰는 건 비효율적이라 여기며, 밀키트와 즉석식품을 예술의 경지로 활용한다. "굳이 힘들게 만들어 먹어?"가 입버릇이지만, 가끔 간편식을 조합하는 센스가 놀라울 정도로 뛰어나다. 효율은 곧 생존 전략이라는 확고한 철학이 있다.',
      tags: ['#간편식장인', '#효율최고', '#밀키트마니아'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 'baker',
      title: '베이킹 장인',
      emoji: '🧁',
      icon: '/icons/results/cooking-baker.png',
      subtitle: '오븐 앞에서 가장 행복한 사람',
      description: '밀가루와 버터의 비율을 소수점 단위로 맞추고, 오븐 온도 5도 차이에도 민감하게 반응하는 정밀한 요리 장인. 케이크와 쿠키를 만들 때의 행복감은 다른 무엇과도 비교할 수 없다. 정확한 계량과 타이밍이 만들어내는 결과물에 큰 보람을 느끼며, 완성된 디저트를 주변에 나눠줄 때 가장 뿌듯해한다. 베이킹은 과학이자 예술이라는 신념으로 오늘도 오븐을 예열한다.',
      tags: ['#베이킹러버', '#디저트장인', '#오븐예열중'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      id: 'health',
      title: '건강식 연구가',
      emoji: '🥗',
      icon: '/icons/results/cooking-health.png',
      subtitle: '맛있으면서도 몸에 좋은 음식을 추구',
      description: '식재료의 영양 성분표를 읽는 게 취미이고, "이거 항산화 성분이 풍부해"라는 말을 자연스럽게 한다. 설탕 대신 대추야자, 밀가루 대신 통밀가루를 쓰며, 건강한 식단도 충분히 맛있게 만들 수 있다는 걸 몸소 증명한다. 주변 사람들에게 식단 조언을 해주는 것도 즐기며, 건강과 맛 두 마리 토끼를 잡는 데 진심인 사람이다.',
      tags: ['#건강식전문', '#영양분석가', '#클린이팅'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'experiment',
      title: '창작 요리왕',
      emoji: '🧪',
      icon: '/icons/results/cooking-experiment.png',
      subtitle: '레시피는 참고일 뿐, 나만의 길을 간다',
      description: '김치찌개에 크림치즈, 라면에 땅콩버터, 된장찌개에 토마토를 넣는 미친 조합을 시도하고 실제로 맛있게 만든다. "이거 넣어봐도 되나?"라는 고민 없이 일단 넣어보는 과감함이 있다. 10번 중 3번은 대실패하지만, 나머지 7번은 "이건 진짜 맛있다!"라는 극찬을 받는다. 기존의 레시피에 얽매이지 않고 새로운 맛의 영역을 개척하는 진정한 요리 모험가다.',
      tags: ['#퓨전요리', '#창작본능', '#맛의개척자'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'delivery',
      title: '배달의 민족',
      emoji: '📱',
      icon: '/icons/results/cooking-delivery.png',
      subtitle: '요리는 전문가에게, 나는 주문만',
      description: '배달앱 쿠폰 알림은 절대 놓치지 않고, 리뷰 분석 능력은 데이터 사이언티스트급이다. "직접 만드는 것보다 시켜 먹는 게 시간도 절약되고 맛도 보장되잖아"라는 합리적 사고방식의 소유자. 가끔 라면 정도는 끓이지만, 그마저도 귀찮으면 편의점에서 해결한다. 하지만 어떤 가게가 맛있는지, 어떤 메뉴가 가성비 좋은지는 누구보다 잘 아는 미식 큐레이터이기도 하다.',
      tags: ['#배달전문가', '#리뷰분석가', '#주문의달인'],
      color: '#f97316',
      gradient: 'from-orange-400 to-amber-500',
    },
    {
      id: 'social',
      title: '집들이 호스트',
      emoji: '🏠',
      icon: '/icons/results/cooking-social.png',
      subtitle: '먹이는 재미에 요리하는 사람',
      description: '혼자 먹을 때는 대충이지만, 누군가에게 해줄 요리라면 갑자기 열정이 폭발한다. 친구들 초대하면 전날부터 메뉴를 고민하고, 상대방 취향에 맞는 음식을 준비하는 센스가 있다. "맛있어?"라고 물어보고 "응!"이라는 대답을 들을 때 세상 모든 보람을 느낀다. 요리 실력 자체보다 함께 먹는 시간과 분위기를 만드는 데 진짜 재능이 있는 타입이다.',
      tags: ['#요리로소통', '#집들이장인', '#먹이는재미'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-blue-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { skill = 0, passion = 0, creativity = 0, efficiency = 0 } = scores
    const max = Math.max(skill, passion, creativity, efficiency)

    // 효율 압도적 우세: 배달의 민족 or 간편식 마스터
    if (efficiency === max && efficiency > skill + 3) return 'delivery'
    if (efficiency === max && efficiency > passion) return 'instant'

    // 기술 압도적 우세: 타고난 요리사 or 베이킹 장인
    if (skill === max && skill > creativity + 2) return 'baker'
    if (skill === max && skill > passion) return 'chef'

    // 창의력 우세: 창작 요리왕
    if (creativity === max && creativity > efficiency) return 'experiment'

    // 열정 우세: 집들이 호스트 or 레시피 충실러
    if (passion === max && passion > skill + 2) return 'social'
    if (passion === max && passion > creativity) return 'recipe'

    // 건강식 연구가: 기술 + 열정 밸런스
    if (skill > efficiency && passion > efficiency && creativity <= skill) return 'health'

    // 균형형 → 레시피 충실러
    const range = max - Math.min(skill, passion, creativity, efficiency)
    if (range <= 3) return 'recipe'

    return 'chef'
  },
}

export default cookingTest
