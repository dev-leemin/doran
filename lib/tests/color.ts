import { TestConfig, CATEGORY_COLORS } from './types'

const colorTest: TestConfig = {
  id: 'color',
  title: '나의 색깔 유형은?',
  emoji: '🎨',
  icon: '/icons/tests/color.png',
  description: '나를 표현하는 색깔을 찾아보세요',
  category: 'personality',
  color: CATEGORY_COLORS.personality,
  tags: ['색깔', '성격', '심리테스트', '컬러'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['warmth', 'energy', 'depth', 'clarity'],

  questions: [
    {
      id: 1,
      situation: '주말 아침, 특별한 약속이 없는 날이다.',
      emoji: '🌤️',
      choices: [
        { text: '친구한테 연락해서 급 브런치 약속 잡기', emoji: '📱', scores: { warmth: 3, energy: 2 } },
        { text: '신나는 음악 틀고 밀린 집안일 척척', emoji: '🎵', scores: { energy: 3, clarity: 1 } },
        { text: '좋아하는 책이랑 커피 한 잔의 여유', emoji: '📖', scores: { depth: 3, clarity: 2 } },
        { text: '오늘 하루 계획표를 깔끔하게 정리', emoji: '📝', scores: { clarity: 3, depth: 1 } },
      ],
    },
    {
      id: 2,
      situation: '친구가 갑자기 울면서 전화를 했다.',
      emoji: '😢',
      choices: [
        { text: '바로 달려가서 안아주기', emoji: '🤗', scores: { warmth: 3, energy: 2 } },
        { text: '"일단 맛있는 거 먹으러 가자!" 기분 전환 유도', emoji: '🍕', scores: { energy: 3, warmth: 1 } },
        { text: '조용히 들어주면서 공감해주기', emoji: '👂', scores: { depth: 3, warmth: 2 } },
        { text: '상황을 정리해주고 해결책을 같이 찾기', emoji: '💡', scores: { clarity: 3, depth: 1 } },
      ],
    },
    {
      id: 3,
      situation: '새로운 동네로 이사를 왔다.',
      emoji: '🏠',
      choices: [
        { text: '이웃에게 먼저 인사하고 맛집 추천 받기', emoji: '👋', scores: { warmth: 3, energy: 1 } },
        { text: '동네 구석구석 탐험하며 숨은 명소 찾기', emoji: '🗺️', scores: { energy: 3, depth: 1 } },
        { text: '조용한 카페 먼저 찾아서 나만의 아지트 만들기', emoji: '☕', scores: { depth: 3, clarity: 1 } },
        { text: '동선 파악하고 생활 동선 최적화하기', emoji: '📍', scores: { clarity: 3, energy: 1 } },
      ],
    },
    {
      id: 4,
      situation: '회사에서 자유 주제로 발표를 해야 한다.',
      emoji: '🎤',
      choices: [
        { text: '팀원들과 함께한 프로젝트 이야기', emoji: '👥', scores: { warmth: 3, clarity: 1 } },
        { text: '요즘 핫한 트렌드에 대한 분석', emoji: '🔥', scores: { energy: 3, clarity: 2 } },
        { text: '내가 깊이 빠져있는 취미에 대해', emoji: '🎭', scores: { depth: 3, warmth: 1 } },
        { text: '데이터 기반의 깔끔한 인사이트 공유', emoji: '📊', scores: { clarity: 3, depth: 2 } },
      ],
    },
    {
      id: 5,
      situation: '길에서 길을 잃은 외국인을 만났다.',
      emoji: '🌍',
      choices: [
        { text: '직접 데려다주면서 맛집도 추천', emoji: '🚶', scores: { warmth: 3, energy: 2 } },
        { text: '보디랭귀지 총동원해서 신나게 설명', emoji: '🙌', scores: { energy: 3, warmth: 2 } },
        { text: '번역기 꺼내서 차근차근 도와주기', emoji: '📲', scores: { depth: 2, clarity: 3 } },
        { text: '지도 앱으로 최단 경로 찾아서 보여주기', emoji: '🗺️', scores: { clarity: 3, energy: 1 } },
      ],
    },
    {
      id: 6,
      situation: '카페에서 음료를 고르고 있다.',
      emoji: '🥤',
      choices: [
        { text: '따뜻한 바닐라 라떼처럼 포근한 음료', emoji: '☕', scores: { warmth: 3, depth: 1 } },
        { text: '상큼한 자몽 에이드처럼 톡 쏘는 음료', emoji: '🍊', scores: { energy: 3, clarity: 1 } },
        { text: '핸드드립 싱글 오리진 원두 커피', emoji: '🫘', scores: { depth: 3, clarity: 2 } },
        { text: '심플한 아메리카노, 깔끔한 게 최고', emoji: '🖤', scores: { clarity: 3, warmth: 0 } },
      ],
    },
    {
      id: 7,
      situation: '단체 여행에서 자유시간이 생겼다.',
      emoji: '✈️',
      choices: [
        { text: '같이 온 친구들이랑 뭐 할지 의논', emoji: '💬', scores: { warmth: 3, energy: 1 } },
        { text: '즉흥적으로 아무 골목이나 들어가 보기', emoji: '🏃', scores: { energy: 3, depth: 1 } },
        { text: '혼자 미술관이나 조용한 곳 산책', emoji: '🖼️', scores: { depth: 3, warmth: 0 } },
        { text: '미리 찜해둔 맛집 리스트 꺼내기', emoji: '📋', scores: { clarity: 3, energy: 1 } },
      ],
    },
    {
      id: 8,
      situation: '친구 생일 선물을 고르고 있다.',
      emoji: '🎁',
      choices: [
        { text: '손편지와 함께 정성스러운 수제 선물', emoji: '💌', scores: { warmth: 3, depth: 2 } },
        { text: '요즘 유행하는 핫한 아이템', emoji: '✨', scores: { energy: 3, clarity: 1 } },
        { text: '그 친구가 요즘 관심 있어 하는 걸 기억해서 맞춤 선물', emoji: '🎯', scores: { depth: 3, warmth: 2 } },
        { text: '실용적이고 쓸모 있는 선물', emoji: '🛍️', scores: { clarity: 3, warmth: 1 } },
      ],
    },
    {
      id: 9,
      situation: '비 오는 날 퇴근길이다.',
      emoji: '🌧️',
      choices: [
        { text: '우산 없는 동료한테 같이 쓰자고 제안', emoji: '☂️', scores: { warmth: 3, energy: 1 } },
        { text: '빗속을 뛰어가면서 나름 즐기기', emoji: '🏃‍♂️', scores: { energy: 3, warmth: 1 } },
        { text: '빗소리 들으며 감성에 젖어보기', emoji: '🎧', scores: { depth: 3, clarity: 0 } },
        { text: '날씨 앱 확인하고 잠잠해질 때 출발', emoji: '📱', scores: { clarity: 3, depth: 1 } },
      ],
    },
    {
      id: 10,
      situation: '새해 목표를 세우려고 한다.',
      emoji: '📅',
      choices: [
        { text: '소중한 사람들과 더 많은 시간 보내기', emoji: '❤️', scores: { warmth: 3, depth: 1 } },
        { text: '새로운 취미 3개 이상 도전하기', emoji: '🚀', scores: { energy: 3, clarity: 1 } },
        { text: '내면의 성장에 집중하기', emoji: '🧘', scores: { depth: 3, clarity: 2 } },
        { text: '구체적인 계획표와 체크리스트 만들기', emoji: '✅', scores: { clarity: 3, energy: 1 } },
      ],
    },
    {
      id: 11,
      situation: '모임에서 처음 보는 사람이 옆자리에 앉았다.',
      emoji: '🪑',
      choices: [
        { text: '먼저 말 걸고 편하게 대화 시작', emoji: '😊', scores: { warmth: 3, energy: 2 } },
        { text: '재미있는 얘기로 분위기 띄우기', emoji: '😄', scores: { energy: 3, warmth: 2 } },
        { text: '상대방이 말할 때 깊이 경청하기', emoji: '🤔', scores: { depth: 3, warmth: 1 } },
        { text: '자연스럽게 관찰하다가 공통점 발견하면 대화', emoji: '👀', scores: { clarity: 2, depth: 2 } },
      ],
    },
    {
      id: 12,
      situation: '스트레스를 풀 방법을 찾고 있다.',
      emoji: '😤',
      choices: [
        { text: '친한 친구한테 전화해서 수다 떨기', emoji: '📞', scores: { warmth: 3, energy: 1 } },
        { text: '운동이나 댄스 같은 몸을 움직이는 활동', emoji: '💃', scores: { energy: 3, clarity: 1 } },
        { text: '혼자만의 시간 갖고 일기 쓰기', emoji: '📓', scores: { depth: 3, clarity: 2 } },
        { text: '집 정리하면서 머릿속도 정리', emoji: '🧹', scores: { clarity: 3, depth: 1 } },
      ],
    },
    {
      id: 13,
      situation: '영화를 고를 때 보통 어떤 장르?',
      emoji: '🎬',
      choices: [
        { text: '따뜻한 가족 이야기나 힐링 영화', emoji: '🏡', scores: { warmth: 3, depth: 2 } },
        { text: '액션이나 어드벤처 같은 스릴 넘치는 영화', emoji: '💥', scores: { energy: 3, warmth: 0 } },
        { text: '심리 스릴러나 예술 영화', emoji: '🎭', scores: { depth: 3, energy: 0 } },
        { text: '다큐멘터리나 논픽션 기반 영화', emoji: '📽️', scores: { clarity: 3, depth: 2 } },
      ],
    },
    {
      id: 14,
      situation: '팀 프로젝트에서 역할을 정해야 한다.',
      emoji: '📂',
      choices: [
        { text: '팀원들 의견 조율하고 분위기 챙기기', emoji: '🤝', scores: { warmth: 3, energy: 1 } },
        { text: '아이디어 브레인스토밍 담당', emoji: '⚡', scores: { energy: 3, depth: 1 } },
        { text: '자료 조사하고 분석하는 역할', emoji: '🔍', scores: { depth: 3, clarity: 2 } },
        { text: '일정 관리하고 전체 진행 체크', emoji: '📆', scores: { clarity: 3, energy: 1 } },
      ],
    },
    {
      id: 15,
      situation: '갑자기 하루 휴가가 생겼다!',
      emoji: '🎊',
      choices: [
        { text: '보고 싶었던 사람 만나러 약속 잡기', emoji: '💕', scores: { warmth: 3, energy: 2 } },
        { text: '평소 해보고 싶었던 새로운 경험 도전', emoji: '🪂', scores: { energy: 3, depth: 1 } },
        { text: '아무것도 안 하고 나만의 시간 즐기기', emoji: '🛋️', scores: { depth: 3, warmth: 0 } },
        { text: '밀린 용무와 할 일 목록 깔끔히 정리', emoji: '✔️', scores: { clarity: 3, warmth: 0 } },
      ],
    },
    {
      id: 16,
      situation: 'SNS에 사진을 올린다면 어떤 사진?',
      emoji: '📸',
      choices: [
        { text: '친구들이나 가족과 함께한 따뜻한 순간', emoji: '👨‍👩‍👧‍👦', scores: { warmth: 3, energy: 1 } },
        { text: '여행지에서 역동적으로 찍은 인생샷', emoji: '🏔️', scores: { energy: 3, clarity: 1 } },
        { text: '감성 있는 풍경이나 분위기 있는 사진', emoji: '🌅', scores: { depth: 3, warmth: 1 } },
        { text: '깔끔하게 정돈된 데일리룩이나 플랫레이', emoji: '🤳', scores: { clarity: 3, energy: 1 } },
      ],
    },
    {
      id: 17,
      situation: '주말에 요리를 하려고 한다.',
      emoji: '🍳',
      choices: [
        { text: '가족이나 친구 초대해서 집밥 대접', emoji: '🍲', scores: { warmth: 3, depth: 1 } },
        { text: '유튜브 보면서 처음 해보는 이색 요리 도전', emoji: '🧑‍🍳', scores: { energy: 3, clarity: 1 } },
        { text: '정성 들여 한 가지 메뉴를 제대로 만들기', emoji: '🥘', scores: { depth: 3, clarity: 2 } },
        { text: '레시피대로 정확한 계량으로 깔끔하게', emoji: '⚖️', scores: { clarity: 3, depth: 1 } },
      ],
    },
    {
      id: 18,
      situation: '좋아하는 아이돌/아티스트 콘서트 티켓팅 날이다.',
      emoji: '🎶',
      choices: [
        { text: '친구들이랑 같이 들어가서 서로 응원', emoji: '🫂', scores: { warmth: 3, energy: 2 } },
        { text: '열정적으로 새벽부터 대기하고 준비', emoji: '🔥', scores: { energy: 3, warmth: 1 } },
        { text: '실패해도 괜찮아, 음악은 어디서든 들을 수 있으니까', emoji: '🎵', scores: { depth: 3, clarity: 0 } },
        { text: '인터넷 속도, 결제 수단 미리 완벽 세팅', emoji: '💻', scores: { clarity: 3, energy: 2 } },
      ],
    },
    {
      id: 19,
      situation: '동료가 나와 다른 의견을 강하게 주장한다.',
      emoji: '⚡',
      choices: [
        { text: '상대 의견도 존중하면서 부드럽게 조율', emoji: '🕊️', scores: { warmth: 3, clarity: 1 } },
        { text: '내 의견을 열정적으로 설득해보기', emoji: '🗣️', scores: { energy: 3, depth: 1 } },
        { text: '왜 그렇게 생각하는지 깊이 들어보기', emoji: '🧐', scores: { depth: 3, warmth: 2 } },
        { text: '객관적인 근거로 논리적으로 정리', emoji: '📎', scores: { clarity: 3, depth: 2 } },
      ],
    },
    {
      id: 20,
      situation: '이상적인 방 인테리어 스타일은?',
      emoji: '🛏️',
      choices: [
        { text: '따뜻한 조명에 쿠션 많은 포근한 공간', emoji: '🕯️', scores: { warmth: 3, depth: 2 } },
        { text: '다양한 소품과 컬러풀한 활기 넘치는 공간', emoji: '🪩', scores: { energy: 3, warmth: 1 } },
        { text: '빈티지하고 개성 있는 나만의 세계', emoji: '🖼️', scores: { depth: 3, energy: 0 } },
        { text: '미니멀하고 깔끔하게 정돈된 공간', emoji: '🤍', scores: { clarity: 3, energy: 0 } },
      ],
    },
    {
      id: 21,
      situation: '갑자기 10만원이 생겼다!',
      emoji: '💸',
      choices: [
        { text: '소중한 사람에게 선물 사주기', emoji: '🎀', scores: { warmth: 3, energy: 1 } },
        { text: '평소 하고 싶었던 경험에 투자', emoji: '🎢', scores: { energy: 3, depth: 1 } },
        { text: '좋아하는 책이나 음반 여러 개 사기', emoji: '📚', scores: { depth: 3, clarity: 1 } },
        { text: '저축하거나 필요한 물건 구매', emoji: '🏦', scores: { clarity: 3, warmth: 0 } },
      ],
    },
    {
      id: 22,
      situation: '단체 사진을 찍을 때 나는?',
      emoji: '📷',
      choices: [
        { text: '옆 사람 어깨 감싸며 자연스럽게', emoji: '🤗', scores: { warmth: 3, energy: 1 } },
        { text: '맨 앞에서 브이 하거나 재밌는 포즈', emoji: '✌️', scores: { energy: 3, warmth: 2 } },
        { text: '구석에서 은근 자연스러운 표정', emoji: '😌', scores: { depth: 2, clarity: 2 } },
        { text: '찍기 전에 구도랑 배경 체크', emoji: '🖼️', scores: { clarity: 3, depth: 1 } },
      ],
    },
    {
      id: 23,
      situation: '잠들기 전에 주로 하는 것은?',
      emoji: '🌙',
      choices: [
        { text: '소중한 사람에게 "잘 자~" 메시지 보내기', emoji: '💬', scores: { warmth: 3, depth: 1 } },
        { text: '유튜브/틱톡 숏폼 보다가 시간 훌쩍', emoji: '📱', scores: { energy: 2, warmth: 2 } },
        { text: '오늘 하루를 돌아보며 생각 정리', emoji: '🤔', scores: { depth: 3, clarity: 2 } },
        { text: '내일 할 일 리스트 정리하고 알람 세팅', emoji: '⏰', scores: { clarity: 3, energy: 1 } },
      ],
    },
    {
      id: 24,
      situation: '누군가 나에게 고민을 털어놓았다.',
      emoji: '💭',
      choices: [
        { text: '"힘들었겠다..." 먼저 마음을 알아주기', emoji: '🫶', scores: { warmth: 3, depth: 2 } },
        { text: '"괜찮아! 잘 될 거야!" 긍정 에너지 주기', emoji: '💪', scores: { energy: 3, warmth: 2 } },
        { text: '조용히 옆에 있어주면서 기다려주기', emoji: '🤝', scores: { depth: 3, warmth: 1 } },
        { text: '현실적인 조언과 해결 방법 제시', emoji: '🧠', scores: { clarity: 3, depth: 1 } },
      ],
    },
    {
      id: 25,
      situation: '나를 가장 잘 표현하는 단어를 고른다면?',
      emoji: '🏷️',
      choices: [
        { text: '따뜻함', emoji: '🌸', scores: { warmth: 3, depth: 1 } },
        { text: '활력', emoji: '⚡', scores: { energy: 3, clarity: 1 } },
        { text: '깊이', emoji: '🌊', scores: { depth: 3, energy: 0 } },
        { text: '명확함', emoji: '💎', scores: { clarity: 3, warmth: 0 } },
      ],
    },
  ],

  results: [
    {
      id: 'red',
      title: '열정의 빨강',
      emoji: '❤️',
      icon: '/icons/results/color-red.png',
      subtitle: '뜨거운 심장의 소유자',
      description: '당신은 어디서든 에너지를 뿜어내는 열정적인 사람이에요! 좋아하는 일에는 밤새라도 매달리고, 함께하는 사람들에게 따뜻한 영향력을 전파하는 타입이죠. 가끔 너무 뜨거워서 주변 사람들이 살짝 지칠 수 있지만, 당신의 진심은 언제나 사람들의 마음을 움직여요. 당신이 있는 곳엔 항상 열기가 가득합니다!',
      tags: ['#열정가득', '#따뜻한리더', '#뜨거운심장'],
      color: '#ef4444',
      gradient: 'from-red-400 to-rose-500',
    },
    {
      id: 'blue',
      title: '차분한 파랑',
      emoji: '💙',
      icon: '/icons/results/color-blue.png',
      subtitle: '깊은 바다 같은 사람',
      description: '당신은 고요한 바다처럼 깊고 넓은 내면을 가진 사람이에요. 감정에 휘둘리지 않고 상황을 명확하게 판단하는 능력이 뛰어나죠. 주변 사람들이 혼란스러울 때 당신에게 조언을 구하는 이유가 있어요. 차분하지만 결코 차갑지 않은, 신뢰할 수 있는 존재입니다!',
      tags: ['#차분한지성', '#깊은생각', '#신뢰의아이콘'],
      color: '#3b82f6',
      gradient: 'from-blue-400 to-indigo-500',
    },
    {
      id: 'yellow',
      title: '밝은 노랑',
      emoji: '💛',
      icon: '/icons/results/color-yellow.png',
      subtitle: '걸어다니는 비타민',
      description: '당신이 있는 곳은 자동으로 밝아지는 마법이 일어나요! 긍정 에너지가 넘치고, 새로운 것에 대한 호기심이 가득한 당신은 주변 사람들의 에너지 충전소 같은 존재죠. 가끔 산만해 보일 수 있지만, 그 안에는 순수한 열정이 숨어 있어요. 당신의 밝은 웃음은 전염성이 강합니다!',
      tags: ['#긍정왕', '#에너지충전소', '#밝은미소'],
      color: '#eab308',
      gradient: 'from-yellow-400 to-amber-500',
    },
    {
      id: 'green',
      title: '안정의 초록',
      emoji: '💚',
      icon: '/icons/results/color-green.png',
      subtitle: '모두의 안식처 같은 사람',
      description: '당신은 숲속의 큰 나무처럼 묵묵하고 든든한 사람이에요. 주변 사람들이 당신 곁에 있으면 왠지 마음이 편안해지고, 자연스럽게 속 이야기를 꺼내게 되죠. 급하게 서두르지 않고 자기만의 속도로 나아가는 당신의 모습은 많은 사람들에게 위안이 됩니다. 조용하지만 누구보다 강한 내면의 힘을 가지고 있어요!',
      tags: ['#힐링존재', '#듬직한사람', '#마음의쉼터'],
      color: '#22c55e',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      id: 'purple',
      title: '신비한 보라',
      emoji: '💜',
      icon: '/icons/results/color-purple.png',
      subtitle: '독특한 세계관의 소유자',
      description: '당신은 남들과는 다른 독특한 감성과 깊은 내면의 세계를 가진 사람이에요. 예술적 감각이 뛰어나고, 평범한 것에서도 특별한 의미를 찾아내는 눈이 있죠. 쉽게 자신을 드러내지 않지만, 한번 마음을 열면 누구보다 깊은 관계를 맺어요. 당신의 신비로운 매력에 빠진 사람은 헤어나오기 어렵습니다!',
      tags: ['#감성충만', '#예술가기질', '#신비로운매력'],
      color: '#a855f7',
      gradient: 'from-purple-400 to-violet-500',
    },
    {
      id: 'orange',
      title: '활기찬 주황',
      emoji: '🧡',
      icon: '/icons/results/color-orange.png',
      subtitle: '어디서든 분위기 메이커',
      description: '당신은 따뜻함과 에너지를 동시에 가진 매력적인 사람이에요! 사람들 사이에서 자연스럽게 웃음을 만들어내고, 어색한 분위기도 금세 편하게 바꿔놓는 재주가 있죠. 새로운 사람을 만나는 것도, 새로운 도전을 하는 것도 두렵지 않은 용감한 타입이에요. 당신과 함께하면 지루할 틈이 없습니다!',
      tags: ['#분위기메이커', '#사교성만렙', '#도전정신'],
      color: '#f97316',
      gradient: 'from-orange-400 to-amber-500',
    },
    {
      id: 'pink',
      title: '사랑스런 핑크',
      emoji: '🩷',
      icon: '/icons/results/color-pink.png',
      subtitle: '사랑을 전하는 사람',
      description: '당신은 사랑과 배려가 넘치는 따뜻한 영혼의 소유자예요! 주변 사람들의 작은 변화도 놓치지 않고 챙기며, 누구에게나 다정하게 다가가는 능력이 있죠. 감수성이 풍부해서 영화 한 편에도 폭풍 눈물을 흘리지만, 그만큼 공감 능력이 뛰어나요. 당신의 다정함은 세상을 조금 더 따뜻하게 만듭니다!',
      tags: ['#다정한사람', '#공감능력자', '#사랑가득'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      id: 'white',
      title: '순수한 하양',
      emoji: '🤍',
      icon: '/icons/results/color-white.png',
      subtitle: '맑고 깨끗한 영혼',
      description: '당신은 복잡한 세상 속에서도 본질을 꿰뚫어 보는 맑은 눈을 가진 사람이에요. 군더더기 없이 깔끔한 사고방식과 정돈된 생활이 당신의 매력이죠. 감정에 휩쓸리지 않고 객관적으로 상황을 바라보는 능력은 많은 사람들이 부러워하는 점이에요. 심플하지만 그래서 더 빛나는, 당신은 순수 그 자체입니다!',
      tags: ['#미니멀리스트', '#깔끔한사고', '#순수한영혼'],
      color: '#94a3b8',
      gradient: 'from-slate-300 to-gray-400',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { warmth = 0, energy = 0, depth = 0, clarity = 0 } = scores
    const max = Math.max(warmth, energy, depth, clarity)

    // warmth 높은 경우: 빨강, 주황, 핑크
    if (warmth === max && warmth > energy) {
      if (depth > clarity) return 'pink'
      if (energy > depth) return 'orange'
      return 'red'
    }

    // energy 높은 경우: 노랑, 주황
    if (energy === max && energy > depth) {
      if (warmth > clarity) return 'orange'
      return 'yellow'
    }

    // depth 높은 경우: 파랑, 보라, 초록
    if (depth === max && depth > clarity) {
      if (warmth > energy) return 'green'
      if (clarity > warmth) return 'blue'
      return 'purple'
    }

    // clarity 높은 경우: 파랑, 하양
    if (clarity === max) {
      if (depth > warmth) return 'blue'
      if (energy > depth) return 'white'
      return 'blue'
    }

    // fallback: 동점 등 예외 처리
    const total = warmth + energy + depth + clarity
    if (total < 20) return 'green'
    return 'purple'
  },
}

export default colorTest
