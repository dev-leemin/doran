import { TestConfig, CATEGORY_COLORS } from './types'

const loveTest: TestConfig = {
  id: 'love',
  title: '나의 연애 유형은?',
  emoji: '💘',
  icon: '/icons/tests/love.png',
  description: '당신의 연애 스타일을 알아보세요',
  category: 'relationship',
  color: CATEGORY_COLORS.relationship,
  tags: ['연애', '사랑', '연애유형', '심리테스트'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['affection', 'independence', 'romance', 'stability'],

  questions: [
    {
      id: 1,
      situation: '좋아하는 사람이 생겼다! 첫 행동은?',
      emoji: '💓',
      choices: [
        { text: '매일 연락하면서 존재감 어필', emoji: '📱', scores: { affection: 3, romance: 2 } },
        { text: '상대 SNS 몰래 분석부터', emoji: '🔍', scores: { independence: 2, stability: 2 } },
        { text: '우연을 가장한 만남을 연출', emoji: '🎬', scores: { romance: 3, independence: 1 } },
        { text: '친구 그룹에서 자연스럽게 친해지기', emoji: '👫', scores: { stability: 3, affection: 1 } },
      ],
    },
    {
      id: 2,
      situation: '첫 데이트 장소를 정해야 한다.',
      emoji: '📍',
      choices: [
        { text: '분위기 좋은 레스토랑 예약', emoji: '🍽️', scores: { romance: 3, stability: 1 } },
        { text: '같이 요리 만들어 먹기', emoji: '👩‍🍳', scores: { affection: 3, stability: 2 } },
        { text: '놀이공원에서 하루 종일 놀기', emoji: '🎢', scores: { romance: 2, independence: 2 } },
        { text: '카페에서 편하게 이야기 나누기', emoji: '☕', scores: { stability: 3, independence: 1 } },
      ],
    },
    {
      id: 3,
      situation: '연인에게 하루 연락이 없다.',
      emoji: '📵',
      choices: [
        { text: '불안해서 계속 카톡 보냄', emoji: '😰', scores: { affection: 3, romance: 1 } },
        { text: '나도 내 할 일 하면서 기다림', emoji: '💅', scores: { independence: 3, stability: 2 } },
        { text: '"혹시 무슨 일 있어?" 한 번만 물어봄', emoji: '🤔', scores: { stability: 3, affection: 1 } },
        { text: '일부러 나도 읽씹해서 밀당', emoji: '😏', scores: { independence: 2, romance: 2 } },
      ],
    },
    {
      id: 4,
      situation: '연인과 심하게 싸웠다.',
      emoji: '💥',
      choices: [
        { text: '바로 찾아가서 안아줌', emoji: '🫂', scores: { affection: 3, romance: 2 } },
        { text: '서로 냉각기 갖자고 제안', emoji: '❄️', scores: { independence: 3, stability: 1 } },
        { text: '편지 써서 진심을 전달', emoji: '💌', scores: { romance: 3, affection: 1 } },
        { text: '차분하게 대화로 해결하자고 함', emoji: '🗣️', scores: { stability: 3, independence: 2 } },
      ],
    },
    {
      id: 5,
      situation: '기념일에 어떤 선물을 줄까?',
      emoji: '🎁',
      choices: [
        { text: '상대가 평소 갖고 싶었던 거 기억해뒀다가 선물', emoji: '🎯', scores: { affection: 3, stability: 2 } },
        { text: '깜짝 이벤트와 함께 감동적인 선물', emoji: '✨', scores: { romance: 3, affection: 2 } },
        { text: '"같이 고르러 가자" 데이트 제안', emoji: '🛍️', scores: { independence: 2, stability: 2 } },
        { text: '직접 만든 수제 선물 (편지, 앨범 등)', emoji: '🎨', scores: { romance: 2, affection: 3 } },
      ],
    },
    {
      id: 6,
      situation: '연인이 이성 친구와 둘이 밥을 먹었다고 한다.',
      emoji: '😤',
      choices: [
        { text: '"누구야? 어디서 먹었어?" 디테일 질문', emoji: '🧐', scores: { affection: 3, stability: 1 } },
        { text: '별 거 아니겠지 하고 넘김', emoji: '😌', scores: { independence: 3, stability: 2 } },
        { text: '질투 나지만 티 안 내고 속으로 삭임', emoji: '😶', scores: { stability: 2, independence: 2 } },
        { text: '"나도 질투 나게 해줄까~" 장난치며 밀당', emoji: '😜', scores: { romance: 2, affection: 2 } },
      ],
    },
    {
      id: 7,
      situation: '연인이 "나 요즘 좀 힘들어"라고 했다.',
      emoji: '😢',
      choices: [
        { text: '바로 달려가서 옆에 있어줌', emoji: '🏃', scores: { affection: 3, romance: 1 } },
        { text: '"힘들면 쉬어, 내가 맛있는 거 사갈게"', emoji: '🍕', scores: { stability: 3, affection: 2 } },
        { text: '영화 같은 위로 이벤트 기획', emoji: '🎬', scores: { romance: 3, affection: 1 } },
        { text: '"너 시간이 필요하면 기다릴게"', emoji: '⏳', scores: { independence: 3, stability: 1 } },
      ],
    },
    {
      id: 8,
      situation: '주말인데 연인이 친구 약속이 있다고 한다.',
      emoji: '📅',
      choices: [
        { text: '"나도 같이 가면 안 돼?" 합류 시도', emoji: '🙋', scores: { affection: 3, romance: 1 } },
        { text: '나도 내 친구 만나면서 각자 시간 보내기', emoji: '🤙', scores: { independence: 3, stability: 1 } },
        { text: '아쉽지만 "잘 놀고 와~" 보내줌', emoji: '👋', scores: { stability: 3, independence: 2 } },
        { text: '"돌아오면 나한테 와 ♥" 귀엽게 밀당', emoji: '💕', scores: { romance: 2, affection: 2 } },
      ],
    },
    {
      id: 9,
      situation: '연인의 옷 스타일이 맘에 안 든다.',
      emoji: '👔',
      choices: [
        { text: '직접 옷 사줌 (내 취향으로)', emoji: '🛒', scores: { affection: 2, romance: 2 } },
        { text: '상대 취향을 존중, 뭘 입든 예쁘다고 함', emoji: '😍', scores: { stability: 3, independence: 2 } },
        { text: '"이런 스타일은 어때?" 넌지시 제안', emoji: '💁', scores: { romance: 2, stability: 2 } },
        { text: '솔직하게 말함. 사이가 좋으면 괜찮잖아', emoji: '🗯️', scores: { independence: 3, affection: 1 } },
      ],
    },
    {
      id: 10,
      situation: '전 애인에게서 연락이 왔다.',
      emoji: '📲',
      choices: [
        { text: '현재 연인에게 바로 말함', emoji: '💑', scores: { stability: 3, affection: 2 } },
        { text: '무시하고 차단', emoji: '🚫', scores: { independence: 3, stability: 1 } },
        { text: '궁금하지만 답장은 안 함', emoji: '🤐', scores: { stability: 2, romance: 1 } },
        { text: '가볍게 안부만 주고받음', emoji: '👋', scores: { independence: 2, romance: 2 } },
      ],
    },
    {
      id: 11,
      situation: '연인과 여행을 계획하고 있다.',
      emoji: '✈️',
      choices: [
        { text: '분 단위로 완벽한 일정표 작성', emoji: '📋', scores: { stability: 3, affection: 2 } },
        { text: '숙소만 잡고 나머지는 즉흥으로!', emoji: '🎲', scores: { independence: 2, romance: 2 } },
        { text: '인스타 감성 장소 리스트업', emoji: '📸', scores: { romance: 3, stability: 1 } },
        { text: '상대가 원하는 곳 위주로 맞춤', emoji: '💝', scores: { affection: 3, stability: 1 } },
      ],
    },
    {
      id: 12,
      situation: '연인이 나 몰래 서프라이즈를 준비했다.',
      emoji: '🎉',
      choices: [
        { text: '감동받아서 눈물 흘림', emoji: '🥹', scores: { affection: 3, romance: 2 } },
        { text: '"이런 거 안 해도 되는데~" 쑥스러움', emoji: '😊', scores: { stability: 2, independence: 2 } },
        { text: '"나도 다음엔 더 크게 해줄 거야!" 경쟁심', emoji: '🔥', scores: { romance: 3, affection: 1 } },
        { text: '고마우면서도 부담스러운 마음', emoji: '😅', scores: { independence: 3, stability: 1 } },
      ],
    },
    {
      id: 13,
      situation: '연인의 부모님을 처음 만나게 됐다.',
      emoji: '👨‍👩‍👧',
      choices: [
        { text: '선물 뭐 사갈지 일주일 전부터 고민', emoji: '🎁', scores: { stability: 3, affection: 2 } },
        { text: '있는 그대로의 나를 보여주겠다', emoji: '💪', scores: { independence: 3, romance: 1 } },
        { text: '연인에게 부모님 취향 세세하게 물어봄', emoji: '📝', scores: { affection: 3, stability: 1 } },
        { text: '긴장되지만 설렘이 더 큼', emoji: '🥰', scores: { romance: 2, affection: 2 } },
      ],
    },
    {
      id: 14,
      situation: '연인이 다른 도시로 발령이 났다.',
      emoji: '🏙️',
      choices: [
        { text: '"나도 따라갈게" 즉답', emoji: '🧳', scores: { affection: 3, romance: 2 } },
        { text: '장거리 연애 계획을 차근차근 세움', emoji: '📆', scores: { stability: 3, independence: 1 } },
        { text: '"힘들겠지만 우리 해보자" 로맨틱하게', emoji: '🌹', scores: { romance: 3, stability: 1 } },
        { text: '각자 성장 기회로 삼자고 응원', emoji: '🙌', scores: { independence: 3, stability: 2 } },
      ],
    },
    {
      id: 15,
      situation: '커플 SNS 계정을 만들자는 제안을 받았다.',
      emoji: '📱',
      choices: [
        { text: '"좋아! 바로 만들자!" 신남', emoji: '🤩', scores: { affection: 3, romance: 2 } },
        { text: '개인 계정도 벅찬데... 정중히 거절', emoji: '🙅', scores: { independence: 3, stability: 1 } },
        { text: '"대신 기념일마다 같이 사진 올리자"로 타협', emoji: '📷', scores: { stability: 3, romance: 1 } },
        { text: '"비밀스러운 게 더 로맨틱하지 않아?"', emoji: '🤫', scores: { romance: 2, independence: 2 } },
      ],
    },
    {
      id: 16,
      situation: '연인이 내 취미를 별로 안 좋아한다.',
      emoji: '🎮',
      choices: [
        { text: '연인 취향에 맞춰서 새 취미 찾기', emoji: '🔄', scores: { affection: 3, stability: 1 } },
        { text: '"내 취미는 내 거!" 변함없이 즐김', emoji: '🎯', scores: { independence: 3, romance: 1 } },
        { text: '같이 즐길 수 있는 공통 취미를 개발', emoji: '🎳', scores: { stability: 3, affection: 2 } },
        { text: '내 취미의 매력을 열정적으로 설득', emoji: '✨', scores: { romance: 2, independence: 2 } },
      ],
    },
    {
      id: 17,
      situation: '연인이 "우리 좀 식은 것 같아"라고 했다.',
      emoji: '💔',
      choices: [
        { text: '바로 깜짝 데이트 계획 시작', emoji: '🗓️', scores: { romance: 3, affection: 2 } },
        { text: '"뭐가 아쉬워? 같이 고쳐보자"', emoji: '🤝', scores: { stability: 3, affection: 1 } },
        { text: '"설렘이 다가 아니야, 우린 편한 거야"', emoji: '🛋️', scores: { stability: 2, independence: 2 } },
        { text: '뜨거웠던 초반을 재현하려고 노력', emoji: '🔥', scores: { affection: 3, romance: 2 } },
      ],
    },
    {
      id: 18,
      situation: '데이트 중 길에서 연인의 전 애인과 마주쳤다.',
      emoji: '😳',
      choices: [
        { text: '연인 팔짱 끼고 당당하게 인사', emoji: '💪', scores: { affection: 2, romance: 2 } },
        { text: '별 거 아닌 듯 자연스럽게 지나감', emoji: '🚶', scores: { independence: 3, stability: 2 } },
        { text: '집에 가서 은근히 캐물어봄', emoji: '🧐', scores: { affection: 3, stability: 1 } },
        { text: '"옛날 사람이네~ 난 지금이 좋아" 쿨하게', emoji: '😎', scores: { independence: 2, romance: 2 } },
      ],
    },
    {
      id: 19,
      situation: '연인이 나를 친구들에게 소개하려 한다.',
      emoji: '👥',
      choices: [
        { text: '최대한 잘 보이려고 옷부터 고민', emoji: '👗', scores: { affection: 3, romance: 1 } },
        { text: '편하게 가서 자연스럽게 어울리기', emoji: '😄', scores: { independence: 2, stability: 2 } },
        { text: '과일이나 디저트 사가서 호감 어필', emoji: '🍰', scores: { stability: 3, affection: 2 } },
        { text: '좀 긴장되지만 연인 친구들과 빨리 친해지고 싶음', emoji: '🤗', scores: { romance: 2, affection: 2 } },
      ],
    },
    {
      id: 20,
      situation: '연인과 같은 영화를 보는데 의견이 다르다.',
      emoji: '🎬',
      choices: [
        { text: '"맞아맞아~" 연인 의견에 맞춰줌', emoji: '👍', scores: { affection: 3, stability: 1 } },
        { text: '내 의견을 논리적으로 설명함', emoji: '🧠', scores: { independence: 3, romance: 1 } },
        { text: '"그런 시각도 있구나!" 서로 존중', emoji: '🤓', scores: { stability: 3, independence: 2 } },
        { text: '귀엽게 토론하면서 시간 보내기', emoji: '💬', scores: { romance: 2, affection: 2 } },
      ],
    },
    {
      id: 21,
      situation: '연인 생일에 써줄 편지를 쓰고 있다.',
      emoji: '✍️',
      choices: [
        { text: 'A4 세 장 분량의 대서사시', emoji: '📜', scores: { affection: 3, romance: 3 } },
        { text: '짧지만 진심 담긴 한 줄', emoji: '💎', scores: { independence: 2, stability: 2 } },
        { text: '웃긴 에피소드 위주로 재밌게', emoji: '😂', scores: { independence: 2, romance: 2 } },
        { text: '앞으로의 계획과 약속을 담아서', emoji: '🌈', scores: { stability: 3, affection: 1 } },
      ],
    },
    {
      id: 22,
      situation: '연인이 늦은 밤에 갑자기 보고 싶다고 한다.',
      emoji: '🌙',
      choices: [
        { text: '바로 택시 타고 달려감', emoji: '🚕', scores: { affection: 3, romance: 2 } },
        { text: '"내일 보자~ 좋은 꿈 꿔"', emoji: '😴', scores: { independence: 3, stability: 1 } },
        { text: '영상통화로 대체하자고 제안', emoji: '📹', scores: { stability: 3, independence: 1 } },
        { text: '"별 보면서 나올까?" 로맨틱 드라이브 제안', emoji: '🌟', scores: { romance: 3, affection: 1 } },
      ],
    },
    {
      id: 23,
      situation: '연인이 나한테 "사랑해"를 먼저 말했다.',
      emoji: '🥰',
      choices: [
        { text: '"나도 사랑해!!!" 바로 답하고 안아줌', emoji: '💕', scores: { affection: 3, romance: 2 } },
        { text: '쑥스럽지만 눈 마주치며 조용히 "나도"', emoji: '🫣', scores: { stability: 2, independence: 2 } },
        { text: '"갑자기? ㅋㅋ" 하면서 속으론 심장 터짐', emoji: '💗', scores: { independence: 2, romance: 2 } },
        { text: '말 대신 행동으로 표현 (꼭 안아주기)', emoji: '🤗', scores: { stability: 3, affection: 1 } },
      ],
    },
    {
      id: 24,
      situation: '연인과 동거/결혼 이야기가 나왔다.',
      emoji: '🏠',
      choices: [
        { text: '"당장 같이 살자!" 적극적', emoji: '🔑', scores: { affection: 3, romance: 2 } },
        { text: '경제적 계획부터 꼼꼼하게 세움', emoji: '💰', scores: { stability: 3, independence: 2 } },
        { text: '"아직은 좀 이른 것 같아" 신중론', emoji: '🤔', scores: { independence: 3, stability: 1 } },
        { text: '로맨틱한 프로포즈를 상상하며 설렘', emoji: '💍', scores: { romance: 3, affection: 1 } },
      ],
    },
    {
      id: 25,
      situation: '연인과의 관계에서 가장 중요한 건?',
      emoji: '💡',
      choices: [
        { text: '무조건적인 사랑과 애정 표현', emoji: '💝', scores: { affection: 3, romance: 2 } },
        { text: '서로의 개인 시간과 공간 존중', emoji: '🏖️', scores: { independence: 3, stability: 1 } },
        { text: '설렘과 특별한 순간들', emoji: '🎆', scores: { romance: 3, independence: 1 } },
        { text: '신뢰와 안정감 있는 미래', emoji: '🤝', scores: { stability: 3, affection: 1 } },
      ],
    },
  ],

  results: [
    {
      id: 'devoted',
      title: '올인형 연인',
      emoji: '💝',
      icon: '/icons/results/love-devoted.png',
      subtitle: '온 마음을 다 바치는',
      description: '사랑하면 세상의 중심이 연인이 되는 타입. 연인의 사소한 표정 변화도 놓치지 않고, "밥 먹었어?"가 하루 열 번은 기본이다. 기념일은 한 달 전부터 준비하고, 상대가 힘들면 자기 일정 다 취소하고 달려간다. 가끔 "너무 집착하는 거 아니야?"라는 소리를 듣기도 하지만, 사랑에 올인하는 것이 이 사람의 방식이다. 진심을 다하는 만큼 상대에게도 같은 크기의 사랑을 기대한다.',
      tags: ['#올인러', '#사랑꾼', '#애정폭발'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      id: 'independent',
      title: '마이웨이 연인',
      emoji: '🚶',
      icon: '/icons/results/love-independent.png',
      subtitle: '내 생활도 중요한',
      description: '"연애도 중요하지만 나도 중요해"가 인생 모토인 사람. 연인과 함께하는 시간도 좋지만, 혼자만의 취미와 친구 관계도 절대 포기하지 않는다. 상대에게 집착하지 않고 적당한 거리를 유지하는 게 건강한 연애라고 믿는다. 연인이 "좀 더 연락해줘"라고 하면 당황하지만, 나름의 방식으로 사랑을 표현한다. 쿨해 보이지만 이별 후에 가장 오래 그리워하는 타입이기도 하다.',
      tags: ['#마이웨이', '#독립적연애', '#쿨내나는'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'romantic',
      title: '로맨티스트',
      emoji: '🌹',
      icon: '/icons/results/love-romantic.png',
      subtitle: '영화 같은 사랑을 꿈꾸는',
      description: '연애는 곧 한 편의 영화라고 생각하는 사람. 비 오는 날 우산 하나 쓰고 걷기, 야경 보며 고백하기, 100일마다 편지 쓰기... 상상만으로도 심장이 뛴다. 데이트 코스는 항상 인스타 감성이고, "오늘 달이 예쁘다"는 말을 진지하게 할 수 있는 몇 안 되는 사람이다. 가끔 현실과 이상의 괴리에 실망하지만, 그래도 꿈같은 사랑을 포기하지 않는 진정한 로맨티스트.',
      tags: ['#영화같은연애', '#감성충만', '#로맨스장인'],
      color: '#ef4444',
      gradient: 'from-red-400 to-rose-500',
    },
    {
      id: 'steady',
      title: '안정지향 연인',
      emoji: '🏠',
      icon: '/icons/results/love-steady.png',
      subtitle: '편안하고 따뜻한 사랑',
      description: '화려한 이벤트보다 매일 "잘 자" 한마디가 더 중요한 사람. 연애에서 가장 중요한 건 신뢰와 안정감이라고 생각하고, 흔들리지 않는 관계를 만들어간다. 싸워도 대화로 풀고, 감정적으로 폭발하는 법이 없다. "좋은 연인"의 교과서 같은 존재이지만, 가끔 너무 예측 가능해서 상대가 심심해할 수도 있다. 하지만 오래된 연인들이 부러워하는 건 결국 이런 안정감이다.',
      tags: ['#안정감', '#믿음직한연인', '#장기연애장인'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 'push-pull',
      title: '밀당고수',
      emoji: '🎭',
      icon: '/icons/results/love-push-pull.png',
      subtitle: '밀고 당기기의 달인',
      description: '읽씹은 전략이고, 답장 타이밍은 예술인 사람. "너무 쉬우면 재미없잖아"가 연애 철학이고, 상대가 다가오면 살짝 빠지고 상대가 빠지면 확 다가간다. 연인은 이 사람 때문에 하루에도 열 두 번 감정이 오르락내리락한다. 연애 초반 설렘을 가장 오래 유지하는 타입이지만, 상대가 지치면 갑자기 진지해지는 반전 매력도 있다.',
      tags: ['#밀당장인', '#연애전략가', '#쉽지않은사람'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'friend-lover',
      title: '친구같은 연인',
      emoji: '🤝',
      icon: '/icons/results/love-friend-lover.png',
      subtitle: '편한 게 최고',
      description: '연인이자 베스트 프렌드. "오빠/언니"보다 이름이나 별명으로 부르는 게 편하고, 데이트도 카페보다 편의점 앞 벤치에서 삼각김밥 먹는 게 더 재밌다. 서로 화장실 문 열어놓고 대화할 수 있는 사이가 이상적이고, TMI를 매일 공유하는 게 일상이다. "너네 진짜 사귀는 거 맞아?"라는 질문을 자주 받지만, 이런 편안함이야말로 진짜 사랑이라고 확신한다.',
      tags: ['#베프같은연인', '#편안한사이', '#자연스러운사랑'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'tsundere',
      title: '츤데레 연인',
      emoji: '😤',
      icon: '/icons/results/love-tsundere.png',
      subtitle: '겉은 차갑고 속은 따뜻한',
      description: '"별로 안 보고 싶었는데 왜 왔어" 하면서 맛집 리스트 세 개나 준비해온 사람. 표현은 서툴지만 행동은 누구보다 따뜻하고, "사랑해"라는 말보다 직접 만든 도시락으로 마음을 전한다. 연인이 아플 때 "에이 별 거 아닐 거야" 하면서 약국에서 약 다섯 가지를 사오는 게 바로 이 타입. 겉과 속의 갭 때문에 상대가 혼란스럽기도 하지만, 알면 알수록 빠져드는 매력이 있다.',
      tags: ['#츤데레', '#겉바속촉', '#표현치하극상'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      id: 'adventurer',
      title: '모험형 연인',
      emoji: '🎢',
      icon: '/icons/results/love-adventurer.png',
      subtitle: '매일이 새로운 데이트',
      description: '"오늘 뭐 하지?"가 아니라 "오늘은 어디까지 가볼까?"인 사람. 평범한 데이트는 지루하고, 번지점프도 같이 뛸 수 있는 연인이 이상적이다. 즉흥 여행, 새벽 드라이브, 처음 가보는 맛집 탐방이 일상이고, SNS에는 항상 새로운 곳에서 찍은 사진이 올라온다. 안정적인 관계보다 매 순간의 설렘을 추구하지만, 함께 모험할 파트너만 있다면 세상 어디든 갈 수 있다.',
      tags: ['#모험가커플', '#즉흥데이트', '#새로움추구'],
      color: '#f97316',
      gradient: 'from-orange-400 to-amber-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { affection = 0, independence = 0, romance = 0, stability = 0 } = scores
    const total = affection + independence + romance + stability

    const max = Math.max(affection, independence, romance, stability)

    if (affection === max && affection > independence) {
      if (romance >= affection - 2) return 'devoted'
      if (stability > romance) return 'devoted'
      return 'devoted'
    }
    if (independence === max && independence > affection) {
      if (romance > stability) return 'push-pull'
      if (stability >= independence - 2) return 'friend-lover'
      return 'independent'
    }
    if (romance === max) {
      if (affection > independence) return 'romantic'
      if (independence >= romance - 2) return 'adventurer'
      return 'romantic'
    }
    if (stability === max) {
      if (independence > affection) return 'tsundere'
      if (affection >= stability - 2) return 'steady'
      return 'friend-lover'
    }

    // fallback
    if (total < 15) return 'friend-lover'
    return 'steady'
  },
}

export default loveTest
