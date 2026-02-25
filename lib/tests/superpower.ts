import { TestConfig, CATEGORY_COLORS } from './types'

const superpowerTest: TestConfig = {
  id: 'superpower',
  title: '나의 초능력은?',
  emoji: '⚡',
  icon: '/icons/tests/superpower.png',
  description: '당신에게 숨겨진 초능력을 발견하세요',
  category: 'fun',
  color: CATEGORY_COLORS.fun,
  tags: ['초능력', '판타지', '재미', '상상'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['power', 'wisdom', 'stealth', 'charm'],

  questions: [
    {
      id: 1,
      situation: '아침에 일어났더니 손에서 불꽃이 튀기고 있다.',
      emoji: '🔥',
      choices: [
        { text: '일단 불꽃을 더 크게 만들어 본다', emoji: '💥', scores: { power: 3, charm: 1 } },
        { text: '왜 이런 일이 생겼는지 원인부터 분석한다', emoji: '🔬', scores: { wisdom: 3, stealth: 1 } },
        { text: '아무에게도 들키지 않게 숨긴다', emoji: '🤫', scores: { stealth: 3, wisdom: 1 } },
        { text: '셀카 찍어서 SNS에 올린다', emoji: '📸', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 2,
      situation: '길을 걷다가 시간이 멈춘 것 같은 순간을 경험했다.',
      emoji: '⏱️',
      choices: [
        { text: '멈춘 시간 동안 하고 싶은 걸 마음껏 한다', emoji: '🏃', scores: { power: 3, stealth: 1 } },
        { text: '시간이 멈춘 원리를 파악하려 한다', emoji: '🧐', scores: { wisdom: 3, power: 1 } },
        { text: '남들 몰래 유리한 위치로 이동한다', emoji: '👤', scores: { stealth: 3, charm: 1 } },
        { text: '주변 사람들을 도와줄 기회로 삼는다', emoji: '🤝', scores: { charm: 3, wisdom: 1 } },
      ],
    },
    {
      id: 3,
      situation: '갑자기 다른 사람의 생각이 들리기 시작했다.',
      emoji: '🧠',
      choices: [
        { text: '이 능력으로 세상을 바꿀 수 있다고 생각한다', emoji: '🌍', scores: { power: 3, wisdom: 1 } },
        { text: '능력을 제어하는 방법을 연구한다', emoji: '📖', scores: { wisdom: 3, stealth: 1 } },
        { text: '남들의 비밀을 몰래 수집한다', emoji: '🕵️', scores: { stealth: 3, power: 1 } },
        { text: '상대방이 원하는 걸 미리 알아서 챙겨준다', emoji: '💝', scores: { charm: 3, wisdom: 1 } },
      ],
    },
    {
      id: 4,
      situation: '하늘을 날 수 있게 됐다! 첫 비행에서 뭘 할까?',
      emoji: '🦅',
      choices: [
        { text: '최고 속도로 하늘을 가로지른다', emoji: '🚀', scores: { power: 3, charm: 1 } },
        { text: '높이 올라가서 세상을 관찰한다', emoji: '🔭', scores: { wisdom: 3, stealth: 1 } },
        { text: '밤에 몰래 날아다니며 도시를 탐험한다', emoji: '🌃', scores: { stealth: 3, wisdom: 1 } },
        { text: '친구를 태워주고 같이 하늘을 난다', emoji: '👫', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 5,
      situation: '투명인간이 될 수 있는 약을 발견했다.',
      emoji: '👻',
      choices: [
        { text: '한번에 다 마셔서 어디까지 되나 본다', emoji: '🧪', scores: { power: 3, stealth: 1 } },
        { text: '성분을 분석해서 더 좋은 약을 만든다', emoji: '🔬', scores: { wisdom: 3, charm: 1 } },
        { text: '조금만 마시고 몰래 여기저기 다녀본다', emoji: '🥷', scores: { stealth: 3, wisdom: 1 } },
        { text: '마술쇼처럼 사람들 앞에서 보여준다', emoji: '🎩', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 6,
      situation: '어느 날 동물과 대화할 수 있게 됐다.',
      emoji: '🐾',
      choices: [
        { text: '맹수들에게 명령을 내려본다', emoji: '🦁', scores: { power: 3, charm: 1 } },
        { text: '동물들의 생태를 더 깊이 연구한다', emoji: '📝', scores: { wisdom: 3, stealth: 1 } },
        { text: '새들에게 정찰을 시켜 정보를 모은다', emoji: '🐦', scores: { stealth: 3, wisdom: 1 } },
        { text: '유기동물 보호소에 가서 아이들 이야기를 들어준다', emoji: '🐶', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 7,
      situation: '순간이동 능력이 생겼다. 가장 먼저 어디로?',
      emoji: '✨',
      choices: [
        { text: '에베레스트 정상에 서본다', emoji: '🏔️', scores: { power: 3, wisdom: 1 } },
        { text: '세계 유명 도서관과 박물관을 순회한다', emoji: '🏛️', scores: { wisdom: 3, charm: 1 } },
        { text: '아무도 모르게 세계 각국을 돌아다닌다', emoji: '🌏', scores: { stealth: 3, power: 1 } },
        { text: '보고 싶은 사람에게 깜짝 방문한다', emoji: '🎁', scores: { charm: 3, stealth: 1 } },
      ],
    },
    {
      id: 8,
      situation: '꿈에서 본 것이 현실이 되는 능력을 얻었다.',
      emoji: '💤',
      choices: [
        { text: '세상에서 가장 강해지는 꿈을 꾼다', emoji: '💪', scores: { power: 3, stealth: 1 } },
        { text: '미래를 미리 보는 꿈을 꿔서 대비한다', emoji: '🔮', scores: { wisdom: 3, charm: 1 } },
        { text: '남들 모르게 유리한 상황을 만든다', emoji: '🃏', scores: { stealth: 3, power: 1 } },
        { text: '주변 사람들이 행복해지는 꿈을 꾼다', emoji: '🌈', scores: { charm: 3, wisdom: 1 } },
      ],
    },
    {
      id: 9,
      situation: '초능력자 팀에 스카우트 제안이 왔다.',
      emoji: '🦸',
      choices: [
        { text: '팀의 리더 자리를 요구한다', emoji: '👑', scores: { power: 3, charm: 1 } },
        { text: '팀의 전략가 역할을 맡겠다고 한다', emoji: '📊', scores: { wisdom: 3, stealth: 1 } },
        { text: '정보 수집 및 잠입 담당을 자처한다', emoji: '🕶️', scores: { stealth: 3, wisdom: 1 } },
        { text: '팀의 분위기 메이커를 자처한다', emoji: '🎭', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 10,
      situation: '빌런이 도시를 위협하고 있다! 어떻게 대응할까?',
      emoji: '🦹',
      choices: [
        { text: '정면으로 돌격해서 힘으로 제압한다', emoji: '⚔️', scores: { power: 3, stealth: 1 } },
        { text: '빌런의 약점을 분석하고 함정을 판다', emoji: '🧩', scores: { wisdom: 3, charm: 1 } },
        { text: '몰래 접근해서 기습 공격을 한다', emoji: '🌙', scores: { stealth: 3, power: 1 } },
        { text: '시민들을 안심시키고 대피를 돕는다', emoji: '🛡️', scores: { charm: 3, wisdom: 1 } },
      ],
    },
    {
      id: 11,
      situation: '초능력 학교에 입학했다. 어떤 수업을 들을까?',
      emoji: '🏫',
      choices: [
        { text: '전투 훈련 — 능력의 파괴력을 극대화', emoji: '🥊', scores: { power: 3, wisdom: 1 } },
        { text: '이론 수업 — 초능력의 원리와 과학', emoji: '📚', scores: { wisdom: 3, stealth: 1 } },
        { text: '은신술 — 기척 없이 움직이는 기술', emoji: '🥷', scores: { stealth: 3, charm: 1 } },
        { text: '카리스마 훈련 — 사람들을 이끄는 법', emoji: '🌟', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 12,
      situation: '초능력을 잃을 위기에 처했다. 어떻게 할까?',
      emoji: '😱',
      choices: [
        { text: '모든 힘을 쏟아 능력을 지켜낸다', emoji: '🔥', scores: { power: 3, charm: 1 } },
        { text: '능력을 잃지 않는 방법을 연구한다', emoji: '💡', scores: { wisdom: 3, stealth: 1 } },
        { text: '위기 상황에서 조용히 빠져나간다', emoji: '🚪', scores: { stealth: 3, wisdom: 1 } },
        { text: '동료들에게 도움을 요청한다', emoji: '📣', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 13,
      situation: '물건을 만지면 그 물건의 기억이 보인다.',
      emoji: '🔍',
      choices: [
        { text: '전설적인 무기를 찾아 만져본다', emoji: '⚔️', scores: { power: 3, stealth: 1 } },
        { text: '역사적 유물로 과거의 진실을 밝힌다', emoji: '🏺', scores: { wisdom: 3, charm: 1 } },
        { text: '남들 모르는 비밀을 조용히 알아낸다', emoji: '🗝️', scores: { stealth: 3, power: 1 } },
        { text: '분실물을 찾아 주인에게 돌려준다', emoji: '💫', scores: { charm: 3, wisdom: 1 } },
      ],
    },
    {
      id: 14,
      situation: '날씨를 조종할 수 있게 됐다. 어떻게 쓸까?',
      emoji: '🌤️',
      choices: [
        { text: '번개를 내리쳐서 힘을 과시한다', emoji: '⛈️', scores: { power: 3, wisdom: 1 } },
        { text: '기후 변화 해결에 능력을 활용한다', emoji: '🌱', scores: { wisdom: 3, charm: 1 } },
        { text: '안개를 만들어 나의 행적을 숨긴다', emoji: '🌫️', scores: { stealth: 3, power: 1 } },
        { text: '소풍 날 맑은 날씨를 선물해준다', emoji: '☀️', scores: { charm: 3, stealth: 1 } },
      ],
    },
    {
      id: 15,
      situation: '과거로 시간 여행을 할 수 있다면?',
      emoji: '⏳',
      choices: [
        { text: '역사 속 전쟁의 영웅이 되어본다', emoji: '🏰', scores: { power: 3, charm: 1 } },
        { text: '위대한 발명가들을 만나 배운다', emoji: '🎓', scores: { wisdom: 3, stealth: 1 } },
        { text: '미래에 도움이 될 정보를 슬쩍 가져온다', emoji: '📜', scores: { stealth: 3, wisdom: 1 } },
        { text: '사랑하는 사람의 힘든 시절을 위로해준다', emoji: '🫂', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 16,
      situation: '눈에서 레이저가 나온다! 어떻게 활용할까?',
      emoji: '👁️',
      choices: [
        { text: '위력을 테스트하며 더 강하게 만든다', emoji: '💥', scores: { power: 3, stealth: 1 } },
        { text: '레이저의 원리를 분석하고 세기를 조절한다', emoji: '⚙️', scores: { wisdom: 3, power: 1 } },
        { text: '선글라스를 끼고 비밀로 유지한다', emoji: '🕶️', scores: { stealth: 3, charm: 1 } },
        { text: '불꽃놀이처럼 예쁘게 쏴서 보여준다', emoji: '🎆', scores: { charm: 3, wisdom: 1 } },
      ],
    },
    {
      id: 17,
      situation: '도플갱어를 만들 수 있는 능력이 생겼다.',
      emoji: '👥',
      choices: [
        { text: '여러 명으로 분신해서 한꺼번에 싸운다', emoji: '⚡', scores: { power: 3, wisdom: 1 } },
        { text: '분신으로 동시에 여러 가지를 공부한다', emoji: '📚', scores: { wisdom: 3, charm: 1 } },
        { text: '분신을 미끼로 보내고 나는 숨는다', emoji: '🪤', scores: { stealth: 3, power: 1 } },
        { text: '분신으로 여러 친구의 약속에 다 간다', emoji: '🎉', scores: { charm: 3, stealth: 1 } },
      ],
    },
    {
      id: 18,
      situation: '초능력 대회에 참가하게 됐다. 전략은?',
      emoji: '🏆',
      choices: [
        { text: '압도적인 파워로 정면 승부한다', emoji: '👊', scores: { power: 3, charm: 1 } },
        { text: '상대방의 패턴을 분석해서 허를 찌른다', emoji: '🧠', scores: { wisdom: 3, stealth: 1 } },
        { text: '나의 진짜 능력은 감추고 기회를 노린다', emoji: '🎭', scores: { stealth: 3, wisdom: 1 } },
        { text: '관중들의 응원을 받으며 쇼맨십을 발휘한다', emoji: '🎤', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 19,
      situation: '외계인이 지구에 왔다. 어떻게 대응할까?',
      emoji: '👽',
      choices: [
        { text: '지구의 수호자로서 맞서 싸운다', emoji: '🛡️', scores: { power: 3, stealth: 1 } },
        { text: '그들의 기술을 배우고 교류한다', emoji: '🤖', scores: { wisdom: 3, charm: 1 } },
        { text: '몰래 접근해서 그들의 목적을 알아낸다', emoji: '🔎', scores: { stealth: 3, power: 1 } },
        { text: '평화 협상을 위한 대사 역할을 맡는다', emoji: '🕊️', scores: { charm: 3, wisdom: 1 } },
      ],
    },
    {
      id: 20,
      situation: '자기 전 베개 밑에서 신비한 보석을 발견했다.',
      emoji: '💎',
      choices: [
        { text: '보석의 힘을 흡수해서 더 강해진다', emoji: '💪', scores: { power: 3, charm: 1 } },
        { text: '보석의 출처와 능력을 조사한다', emoji: '🔍', scores: { wisdom: 3, stealth: 1 } },
        { text: '아무에게도 보여주지 않고 안전한 곳에 숨긴다', emoji: '🔒', scores: { stealth: 3, wisdom: 1 } },
        { text: '예쁜 목걸이로 만들어 착용한다', emoji: '💍', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 21,
      situation: '물속에서 숨 쉴 수 있게 됐다. 뭘 할까?',
      emoji: '🌊',
      choices: [
        { text: '깊은 바다 속 미지의 세계를 정복한다', emoji: '🐙', scores: { power: 3, wisdom: 1 } },
        { text: '해저 유적을 탐사하고 기록한다', emoji: '📷', scores: { wisdom: 3, charm: 1 } },
        { text: '아무도 찾을 수 없는 해저 비밀기지를 만든다', emoji: '🏝️', scores: { stealth: 3, power: 1 } },
        { text: '돌고래와 놀면서 영상을 찍어 공유한다', emoji: '🐬', scores: { charm: 3, stealth: 1 } },
      ],
    },
    {
      id: 22,
      situation: '만지는 것을 금으로 바꿀 수 있다면?',
      emoji: '🪙',
      choices: [
        { text: '거대한 금 궁전을 짓는다', emoji: '🏛️', scores: { power: 3, charm: 1 } },
        { text: '이 능력의 한계와 부작용을 먼저 파악한다', emoji: '⚠️', scores: { wisdom: 3, stealth: 1 } },
        { text: '조용히 부자가 되되 티 내지 않는다', emoji: '🤑', scores: { stealth: 3, wisdom: 1 } },
        { text: '어려운 사람들을 위해 기부한다', emoji: '🎗️', scores: { charm: 3, power: 1 } },
      ],
    },
    {
      id: 23,
      situation: '꿈속에서 다른 사람의 꿈에 들어갈 수 있다.',
      emoji: '🌙',
      choices: [
        { text: '악몽 속에 나타나 몬스터를 물리쳐준다', emoji: '🐉', scores: { power: 3, stealth: 1 } },
        { text: '잠재의식 속에서 창의적인 아이디어를 얻는다', emoji: '💡', scores: { wisdom: 3, charm: 1 } },
        { text: '상대방의 깊은 속마음을 몰래 엿본다', emoji: '🔮', scores: { stealth: 3, power: 1 } },
        { text: '힘든 사람의 꿈에 들어가 위로해준다', emoji: '🌻', scores: { charm: 3, wisdom: 1 } },
      ],
    },
    {
      id: 24,
      situation: '모든 언어를 이해할 수 있게 됐다. 뭘 할까?',
      emoji: '🗣️',
      choices: [
        { text: '세계를 돌아다니며 각국의 비밀을 알아낸다', emoji: '🌐', scores: { power: 2, stealth: 3 } },
        { text: '고대 문서를 해독해서 잃어버린 지식을 되찾는다', emoji: '📜', scores: { wisdom: 3, power: 1 } },
        { text: '외국 정보를 몰래 수집하는 첩보원이 된다', emoji: '🕵️', scores: { stealth: 3, wisdom: 1 } },
        { text: '통역사가 되어 전 세계 사람들을 연결한다', emoji: '🤝', scores: { charm: 3, wisdom: 1 } },
      ],
    },
    {
      id: 25,
      situation: '마지막으로, 초능력을 하나만 영원히 가질 수 있다면?',
      emoji: '⭐',
      choices: [
        { text: '무한한 힘 — 누구도 막을 수 없는 파워', emoji: '💪', scores: { power: 3, charm: 1 } },
        { text: '전지적 지혜 — 모든 것을 알 수 있는 능력', emoji: '🧠', scores: { wisdom: 3, stealth: 1 } },
        { text: '완벽한 은신 — 원하면 존재를 지울 수 있는 능력', emoji: '👻', scores: { stealth: 3, power: 1 } },
        { text: '절대적 매력 — 모든 사람의 마음을 사로잡는 힘', emoji: '💫', scores: { charm: 3, wisdom: 1 } },
      ],
    },
  ],

  results: [
    {
      id: 'teleport',
      title: '순간이동',
      emoji: '✨',
      icon: '/icons/results/superpower-teleport.png',
      subtitle: '시공간을 초월하는 자유로운 영혼',
      description: '당신의 초능력은 순간이동! 어디든 원하는 곳으로 순식간에 이동할 수 있는 능력이에요. 한 곳에 머무르기보다 끊임없이 새로운 세계를 탐험하고 싶어하는 당신의 성격이 그대로 반영된 결과입니다. 지루함을 견디지 못하고, 항상 다음 모험을 꿈꾸는 당신에게 딱 맞는 초능력이죠. 자유로운 영혼답게, 세상 어디든 당신의 무대가 될 거예요!',
      tags: ['#자유로운영혼', '#모험가', '#경계없는삶'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'mind-read',
      title: '독심술',
      emoji: '🧠',
      icon: '/icons/results/superpower-mind-read.png',
      subtitle: '마음을 읽는 지적 탐구자',
      description: '당신의 초능력은 독심술! 상대방의 생각과 감정을 읽어내는 능력이에요. 평소에도 눈치가 빠르고 사람의 마음을 잘 파악하는 당신답죠. 분석적인 사고와 깊은 통찰력으로 복잡한 상황도 한눈에 꿰뚫어 볼 수 있어요. 다만 모든 걸 알아버리는 건 때로 외로운 일일 수도 있다는 것, 기억하세요.',
      tags: ['#통찰력', '#분석가', '#마음읽기'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      id: 'time-stop',
      title: '시간 정지',
      emoji: '⏱️',
      icon: '/icons/results/superpower-time-stop.png',
      subtitle: '시간을 지배하는 전략가',
      description: '당신의 초능력은 시간 정지! 세상의 시간을 멈추고 혼자만 움직일 수 있는 능력이에요. 항상 신중하게 판단하고, 충분히 생각한 후에 행동하는 당신의 성격과 완벽하게 맞아떨어집니다. 급한 상황에서도 냉정함을 잃지 않고, 최적의 타이밍을 찾아내는 당신이야말로 진정한 전략가예요.',
      tags: ['#전략가', '#냉철한판단', '#시간지배자'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'invisible',
      title: '투명인간',
      emoji: '👻',
      icon: '/icons/results/superpower-invisible.png',
      subtitle: '그림자처럼 움직이는 관찰자',
      description: '당신의 초능력은 투명인간! 원하면 존재를 완전히 숨길 수 있는 능력이에요. 조용히 관찰하고 정보를 수집하는 것을 좋아하며, 불필요한 주목을 받는 것을 피하는 당신에게 딱 맞는 초능력입니다. 누구보다 많이 보고 많이 알지만, 그 모든 걸 드러내지 않는 미스터리한 매력의 소유자.',
      tags: ['#미스터리', '#관찰자', '#그림자전사'],
      color: '#94a3b8',
      gradient: 'from-slate-400 to-gray-500',
    },
    {
      id: 'fly',
      title: '하늘을 나는 능력',
      emoji: '🦅',
      icon: '/icons/results/superpower-fly.png',
      subtitle: '하늘을 지배하는 도전자',
      description: '당신의 초능력은 비행! 중력을 무시하고 하늘을 자유롭게 날 수 있는 능력이에요. 한계를 두지 않고 끊임없이 더 높이, 더 멀리 도전하는 당신의 모습 그 자체입니다. 넓은 시야로 세상을 내려다보며 큰 그림을 그리는 당신, 주변 사람들에게 영감을 주는 존재예요.',
      tags: ['#도전정신', '#자유비행', '#큰그림'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-yellow-500',
    },
    {
      id: 'heal',
      title: '치유의 손',
      emoji: '🩹',
      icon: '/icons/results/superpower-heal.png',
      subtitle: '상처를 어루만지는 따뜻한 치유자',
      description: '당신의 초능력은 치유! 손길 하나로 모든 상처와 아픔을 낫게 할 수 있는 능력이에요. 주변 사람들의 아픔에 공감하고, 도움을 주는 것에서 가장 큰 보람을 느끼는 당신다운 결과입니다. 당신 곁에 있는 것만으로도 사람들은 편안함과 안정감을 느끼고, 그것이야말로 세상에서 가장 강력한 힘이에요.',
      tags: ['#따뜻한마음', '#치유자', '#공감능력'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'fire',
      title: '불의 지배자',
      emoji: '🔥',
      icon: '/icons/results/superpower-fire.png',
      subtitle: '열정으로 불타오르는 강력한 전사',
      description: '당신의 초능력은 불! 손끝에서 화염을 만들어내고 조종할 수 있는 능력이에요. 열정적이고 에너지가 넘치며, 한번 시작하면 끝까지 밀고 나가는 당신의 성격이 그대로 담겨 있어요. 가끔 너무 뜨거워서 주변이 놀라기도 하지만, 추운 겨울 같은 상황에서 모두를 따뜻하게 해주는 건 바로 당신이에요.',
      tags: ['#열정가', '#불꽃전사', '#파워풀'],
      color: '#ef4444',
      gradient: 'from-red-400 to-orange-500',
    },
    {
      id: 'charm',
      title: '매력 조종',
      emoji: '💫',
      icon: '/icons/results/superpower-charm.png',
      subtitle: '모든 마음을 사로잡는 매력의 달인',
      description: '당신의 초능력은 매력 조종! 어떤 사람이든 당신의 매력에 빠지게 만드는 능력이에요. 타고난 사교성과 공감 능력으로 사람들의 마음을 자연스럽게 사로잡는 당신에게 가장 잘 어울리는 초능력입니다. 싸움이 아닌 대화로, 힘이 아닌 매력으로 세상을 바꿀 수 있다는 것을 증명하는 존재예요.',
      tags: ['#인간매력', '#사교의달인', '#마음도둑'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { power = 0, wisdom = 0, stealth = 0, charm = 0 } = scores
    const max = Math.max(power, wisdom, stealth, charm)

    // 힘(power) 최고
    if (power === max) {
      if (charm >= power - 2) return 'fly'
      return 'fire'
    }

    // 지혜(wisdom) 최고
    if (wisdom === max) {
      if (stealth >= wisdom - 2) return 'time-stop'
      return 'mind-read'
    }

    // 은신(stealth) 최고
    if (stealth === max) {
      if (wisdom >= stealth - 2) return 'teleport'
      return 'invisible'
    }

    // 매력(charm) 최고
    if (charm === max) {
      if (power >= charm - 2) return 'heal'
      return 'charm'
    }

    // fallback
    return 'teleport'
  },
}

export default superpowerTest
