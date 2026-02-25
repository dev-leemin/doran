import { TestConfig, CATEGORY_COLORS } from './types'

const hobbyTest: TestConfig = {
  id: 'hobby',
  title: '나의 취미 유형은?',
  emoji: '🎯',
  icon: '/icons/tests/hobby.png',
  description: '나에게 딱 맞는 취미 스타일을 알아보세요',
  category: 'lifestyle',
  color: CATEGORY_COLORS.lifestyle,
  tags: ['취미', '여가', '관심사', '라이프'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['active', 'creative', 'social', 'intellectual'],

  questions: [
    {
      id: 1,
      situation: '주말 아침, 눈을 떴다. 오늘 하루 뭘 하지?',
      emoji: '🌅',
      choices: [
        { text: '조깅이나 자전거 타고 한 바퀴 돌기', emoji: '🏃', scores: { active: 3, social: 1 } },
        { text: '밀린 그림 그리기나 글쓰기 하기', emoji: '✏️', scores: { creative: 3, intellectual: 1 } },
        { text: '친구들한테 연락해서 모임 잡기', emoji: '📱', scores: { social: 3, active: 1 } },
        { text: '관심 있던 다큐 몰아보기', emoji: '🎬', scores: { intellectual: 3, creative: 1 } },
      ],
    },
    {
      id: 2,
      situation: '서점에 갔다. 어느 코너로 발이 먼저 향할까?',
      emoji: '📖',
      choices: [
        { text: '등산, 서핑, 운동 관련 잡지 코너', emoji: '🏔️', scores: { active: 3, intellectual: 1 } },
        { text: '사진집, 디자인, 예술 서적 코너', emoji: '🎨', scores: { creative: 3, intellectual: 1 } },
        { text: '자기계발, 대화법, 심리학 코너', emoji: '🧠', scores: { social: 2, intellectual: 2 } },
        { text: '과학, 역사, 철학 코너', emoji: '🔬', scores: { intellectual: 3, creative: 1 } },
      ],
    },
    {
      id: 3,
      situation: '친구가 "같이 새로운 거 배워볼래?" 한다.',
      emoji: '🤔',
      choices: [
        { text: '클라이밍이나 수영 같은 스포츠!', emoji: '🧗', scores: { active: 3, social: 1 } },
        { text: '도예나 가죽공예 원데이 클래스', emoji: '🏺', scores: { creative: 3, social: 1 } },
        { text: '같이 봉사활동이나 동아리 가입', emoji: '🤝', scores: { social: 3, active: 1 } },
        { text: '코딩이나 외국어 온라인 강의', emoji: '💻', scores: { intellectual: 3, creative: 1 } },
      ],
    },
    {
      id: 4,
      situation: '스트레스가 쌓였다. 해소 방법은?',
      emoji: '😤',
      choices: [
        { text: '헬스장에서 땀 흠뻑 빼기', emoji: '💪', scores: { active: 3, intellectual: 0 } },
        { text: '좋아하는 음악 들으며 드로잉하기', emoji: '🎶', scores: { creative: 3, social: 0 } },
        { text: '친구 만나서 수다 떨고 웃기', emoji: '😂', scores: { social: 3, creative: 0 } },
        { text: '조용히 퍼즐이나 독서에 집중하기', emoji: '🧩', scores: { intellectual: 3, active: 0 } },
      ],
    },
    {
      id: 5,
      situation: '유튜브 알고리즘이 추천해준 영상, 뭘 클릭할까?',
      emoji: '📺',
      choices: [
        { text: '극한 스포츠 하이라이트 모음', emoji: '🏄', scores: { active: 3, creative: 1 } },
        { text: 'DIY 인테리어 꿀팁 영상', emoji: '🔧', scores: { creative: 3, active: 1 } },
        { text: '인기 보드게임 리뷰 및 플레이 영상', emoji: '🎲', scores: { social: 2, intellectual: 2 } },
        { text: '우주의 미스터리 과학 다큐', emoji: '🌌', scores: { intellectual: 3, creative: 1 } },
      ],
    },
    {
      id: 6,
      situation: '생일 선물로 체험권을 받았다. 뭐가 좋을까?',
      emoji: '🎁',
      choices: [
        { text: '번지점프 or 스카이다이빙 체험권', emoji: '🪂', scores: { active: 3, social: 1 } },
        { text: '도자기 만들기 or 향수 제조 체험권', emoji: '🫙', scores: { creative: 3, intellectual: 1 } },
        { text: '방탈출 카페 or 파티룸 이용권', emoji: '🔐', scores: { social: 3, intellectual: 1 } },
        { text: '천체 관측 or 와인 테이스팅 체험권', emoji: '🔭', scores: { intellectual: 3, social: 1 } },
      ],
    },
    {
      id: 7,
      situation: '회사에서 동호회를 만든다면?',
      emoji: '🏢',
      choices: [
        { text: '풋살, 배드민턴 같은 운동 동호회', emoji: '⚽', scores: { active: 3, social: 2 } },
        { text: '사진, 일러스트 같은 창작 동호회', emoji: '📷', scores: { creative: 3, social: 1 } },
        { text: '봉사, 네트워킹 같은 사교 동호회', emoji: '🫂', scores: { social: 3, active: 1 } },
        { text: '독서, 토론 같은 지식 동호회', emoji: '📚', scores: { intellectual: 3, social: 1 } },
      ],
    },
    {
      id: 8,
      situation: '여행지에서 자유 시간이 반나절 생겼다.',
      emoji: '🗓️',
      choices: [
        { text: '래프팅이나 짚라인 같은 액티비티', emoji: '🚣', scores: { active: 3, creative: 0 } },
        { text: '현지 공방에서 기념품 만들기 체험', emoji: '🎭', scores: { creative: 3, social: 1 } },
        { text: '현지인이랑 대화하며 골목 탐방', emoji: '🚶', scores: { social: 3, active: 1 } },
        { text: '미술관이나 박물관 둘러보기', emoji: '🏛️', scores: { intellectual: 3, creative: 2 } },
      ],
    },
    {
      id: 9,
      situation: '앱스토어에서 새 앱을 깔려고 한다.',
      emoji: '📲',
      choices: [
        { text: '운동 기록 & 루틴 관리 앱', emoji: '🏋️', scores: { active: 3, intellectual: 1 } },
        { text: '사진 편집 or 드로잉 앱', emoji: '🖌️', scores: { creative: 3, active: 0 } },
        { text: '소셜 모임 & 동호회 매칭 앱', emoji: '👥', scores: { social: 3, creative: 0 } },
        { text: '뉴스 & 학습 큐레이션 앱', emoji: '📰', scores: { intellectual: 3, social: 0 } },
      ],
    },
    {
      id: 10,
      situation: '로또에 당첨됐다! 취미에 투자한다면?',
      emoji: '💰',
      choices: [
        { text: '프라이빗 헬스장 & 최고급 운동 장비', emoji: '🏟️', scores: { active: 3, social: 0 } },
        { text: '작업실 하나 차려서 창작 활동 올인', emoji: '🖼️', scores: { creative: 3, intellectual: 1 } },
        { text: '파티룸 빌려서 지인들 초대 행사', emoji: '🎉', scores: { social: 3, active: 1 } },
        { text: '서재 꾸미고 세계 곳곳의 강의 수강', emoji: '🏫', scores: { intellectual: 3, creative: 1 } },
      ],
    },
    {
      id: 11,
      situation: '카페에 앉아있다. 자연스럽게 하는 행동은?',
      emoji: '☕',
      choices: [
        { text: '가만히 못 있고 다리 떨며 밖을 보게 됨', emoji: '🦵', scores: { active: 2, social: 1 } },
        { text: '냅킨에 낙서하거나 메모 적기', emoji: '✍️', scores: { creative: 3, intellectual: 1 } },
        { text: '옆 테이블 사람들 대화에 관심이 감', emoji: '👂', scores: { social: 3, creative: 0 } },
        { text: '가져온 책이나 아티클 읽기', emoji: '📄', scores: { intellectual: 3, active: 0 } },
      ],
    },
    {
      id: 12,
      situation: '비 오는 날, 집에서 할 수 있는 건?',
      emoji: '🌧️',
      choices: [
        { text: '실내 홈트레이닝 유튜브 틀기', emoji: '🤸', scores: { active: 3, intellectual: 0 } },
        { text: '감성 플레이리스트 만들거나 그림 그리기', emoji: '🎵', scores: { creative: 3, social: 0 } },
        { text: '화상 통화로 친구들과 수다 타임', emoji: '💬', scores: { social: 3, intellectual: 0 } },
        { text: '밀린 강의 듣거나 다큐 정주행', emoji: '🖥️', scores: { intellectual: 3, creative: 1 } },
      ],
    },
    {
      id: 13,
      situation: 'SNS에 올리고 싶은 콘텐츠는?',
      emoji: '📸',
      choices: [
        { text: '운동 인증샷 & 개인 기록 갱신', emoji: '🏅', scores: { active: 3, social: 1 } },
        { text: '내가 만든 작품이나 손글씨 사진', emoji: '🖋️', scores: { creative: 3, social: 1 } },
        { text: '친구들과 함께한 모임 사진', emoji: '🤳', scores: { social: 3, active: 0 } },
        { text: '인상 깊었던 책 구절이나 영화 리뷰', emoji: '🎞️', scores: { intellectual: 3, creative: 1 } },
      ],
    },
    {
      id: 14,
      situation: '연말 버킷리스트를 적고 있다.',
      emoji: '📝',
      choices: [
        { text: '마라톤 완주 or 새로운 스포츠 도전', emoji: '🏁', scores: { active: 3, social: 1 } },
        { text: '나만의 작품집 만들기 or 전시 참여', emoji: '🖼️', scores: { creative: 3, intellectual: 1 } },
        { text: '새로운 사람 50명 만나기', emoji: '🌐', scores: { social: 3, active: 1 } },
        { text: '올해 100권 읽기 or 새 자격증 취득', emoji: '🎓', scores: { intellectual: 3, active: 0 } },
      ],
    },
    {
      id: 15,
      situation: '이상적인 데이트 코스는?',
      emoji: '💕',
      choices: [
        { text: '같이 볼링이나 탁구 치면서 놀기', emoji: '🎳', scores: { active: 3, social: 2 } },
        { text: '함께 도자기 or 캔들 만들기', emoji: '🕯️', scores: { creative: 3, social: 2 } },
        { text: '맛집 투어하면서 이야기 나누기', emoji: '🍝', scores: { social: 3, creative: 1 } },
        { text: '전시회 보고 감상 나누기', emoji: '🖼️', scores: { intellectual: 2, creative: 2 } },
      ],
    },
    {
      id: 16,
      situation: '무인도에 딱 하나만 가져갈 수 있다면?',
      emoji: '🏝️',
      choices: [
        { text: '서바이벌 키트 (칼, 로프, 텐트)', emoji: '🔪', scores: { active: 3, intellectual: 1 } },
        { text: '스케치북과 색연필 세트', emoji: '🎨', scores: { creative: 3, active: 0 } },
        { text: '위성 전화기 (사람과 연락할 수 있도록)', emoji: '📡', scores: { social: 3, intellectual: 0 } },
        { text: '전자책 리더기 (책 1만 권 내장)', emoji: '📱', scores: { intellectual: 3, creative: 1 } },
      ],
    },
    {
      id: 17,
      situation: '학교/회사 축제에서 맡고 싶은 역할은?',
      emoji: '🎪',
      choices: [
        { text: '체육대회 종목 운영 및 참가', emoji: '🏆', scores: { active: 3, social: 1 } },
        { text: '포스터, 영상 같은 콘텐츠 제작', emoji: '🎬', scores: { creative: 3, intellectual: 1 } },
        { text: '사회자 or 이벤트 진행', emoji: '🎤', scores: { social: 3, creative: 1 } },
        { text: '기획 및 예산 관리 총괄', emoji: '📊', scores: { intellectual: 3, social: 1 } },
      ],
    },
    {
      id: 18,
      situation: '갑자기 일주일 휴가가 생겼다!',
      emoji: '🎊',
      choices: [
        { text: '제주 올레길 종주 or 서핑 캠프', emoji: '🌊', scores: { active: 3, creative: 0 } },
        { text: '공방 집중 수업 or 음악 작업', emoji: '🎸', scores: { creative: 3, active: 0 } },
        { text: '친구들이랑 단체 여행 떠나기', emoji: '🚗', scores: { social: 3, active: 2 } },
        { text: '집에서 밀린 책 & 온라인 강의 몰아듣기', emoji: '🏠', scores: { intellectual: 3, social: 0 } },
      ],
    },
    {
      id: 19,
      situation: '새로운 동네로 이사 왔다. 제일 먼저 찾아볼 곳은?',
      emoji: '🏡',
      choices: [
        { text: '근처 헬스장, 공원, 운동 시설', emoji: '🏋️', scores: { active: 3, social: 0 } },
        { text: '예쁜 소품샵, 공방, 갤러리', emoji: '🪴', scores: { creative: 3, intellectual: 1 } },
        { text: '동네 맛집, 단골 카페, 모임 장소', emoji: '🍻', scores: { social: 3, creative: 0 } },
        { text: '도서관, 서점, 문화센터', emoji: '📚', scores: { intellectual: 3, active: 0 } },
      ],
    },
    {
      id: 20,
      situation: '어린 시절 가장 좋아했던 놀이는?',
      emoji: '👶',
      choices: [
        { text: '술래잡기, 축구 등 뛰어노는 놀이', emoji: '⚡', scores: { active: 3, social: 1 } },
        { text: '레고, 찰흙, 그림 그리기', emoji: '🧱', scores: { creative: 3, intellectual: 1 } },
        { text: '소꿉놀이, 역할극 같은 친구와 하는 놀이', emoji: '🎭', scores: { social: 3, creative: 1 } },
        { text: '퍼즐, 보드게임, 책 읽기', emoji: '📕', scores: { intellectual: 3, social: 0 } },
      ],
    },
    {
      id: 21,
      situation: '꿈에서 능력 하나를 얻었다!',
      emoji: '✨',
      choices: [
        { text: '초인적인 체력과 운동 신경', emoji: '🦸', scores: { active: 3, creative: 0 } },
        { text: '무엇이든 상상한 걸 만들어내는 손', emoji: '🪄', scores: { creative: 3, intellectual: 1 } },
        { text: '모든 사람의 마음을 여는 카리스마', emoji: '💫', scores: { social: 3, active: 0 } },
        { text: '한 번 본 건 절대 잊지 않는 두뇌', emoji: '🧠', scores: { intellectual: 3, social: 0 } },
      ],
    },
    {
      id: 22,
      situation: '온라인 쇼핑몰에서 장바구니에 담는 건?',
      emoji: '🛒',
      choices: [
        { text: '운동화, 스포츠 웨어, 트레이닝 용품', emoji: '👟', scores: { active: 3, social: 0 } },
        { text: '물감, 공예 재료, 악기 소품', emoji: '🎨', scores: { creative: 3, active: 0 } },
        { text: '파티 용품, 보드게임, 매칭 굿즈', emoji: '🎈', scores: { social: 3, creative: 1 } },
        { text: '책, 전자기기, 강의 수강권', emoji: '📚', scores: { intellectual: 3, social: 0 } },
      ],
    },
    {
      id: 23,
      situation: '퇴근 후 가장 자주 하는 루틴은?',
      emoji: '🌆',
      choices: [
        { text: '러닝이나 홈트로 하루 마무리', emoji: '🏃', scores: { active: 3, intellectual: 0 } },
        { text: '취미 작업 (그림, 음악, 만들기) 조금씩', emoji: '🎹', scores: { creative: 3, active: 0 } },
        { text: '동료나 친구와 저녁 약속', emoji: '🍺', scores: { social: 3, active: 1 } },
        { text: '팟캐스트 듣거나 독서하며 지식 충전', emoji: '🎧', scores: { intellectual: 3, creative: 1 } },
      ],
    },
    {
      id: 24,
      situation: '10년 후 이상적인 주말 모습은?',
      emoji: '🔮',
      choices: [
        { text: '아침 서핑하고 오후에 등산하는 액티브 라이프', emoji: '🏄', scores: { active: 3, creative: 1 } },
        { text: '개인 작업실에서 작품 활동에 몰두', emoji: '🖌️', scores: { creative: 3, intellectual: 2 } },
        { text: '가족, 친구들 모아놓고 홈파티', emoji: '🏡', scores: { social: 3, creative: 1 } },
        { text: '서재에서 커피 마시며 논문이나 에세이 읽기', emoji: '☕', scores: { intellectual: 3, active: 0 } },
      ],
    },
    {
      id: 25,
      situation: '나를 가장 행복하게 만드는 순간은?',
      emoji: '😊',
      choices: [
        { text: '몸을 움직이며 에너지가 폭발하는 순간', emoji: '🔥', scores: { active: 3, social: 1 } },
        { text: '무언가를 직접 만들어서 완성한 순간', emoji: '🌟', scores: { creative: 3, intellectual: 1 } },
        { text: '좋아하는 사람들과 함께 웃고 있는 순간', emoji: '❤️', scores: { social: 3, active: 0 } },
        { text: '새로운 지식을 깨달아 시야가 넓어지는 순간', emoji: '💡', scores: { intellectual: 3, creative: 1 } },
      ],
    },
  ],

  results: [
    {
      id: 'sports',
      title: '스포츠 마니아',
      emoji: '⚽',
      icon: '/icons/results/hobby-sports.png',
      subtitle: '땀 흘려야 사는 맛',
      description: '가만히 앉아 있으면 온몸이 근질근질한 당신은 타고난 스포츠 마니아다. 축구, 농구, 테니스 가리지 않고 공만 보면 눈이 반짝이고, 주말 아침 알람 없이도 운동하러 일어나는 유일한 사람이다. 운동 후 흘리는 땀이 최고의 스트레스 해소제이자 에너지 충전기. 당신의 일상은 운동 루틴을 중심으로 돌아가며, "몸이 건강해야 정신도 건강하다"가 인생 모토다.',
      tags: ['#운동중독', '#스포츠덕후', '#땀이보약'],
      color: '#ef4444',
      gradient: 'from-red-400 to-orange-500',
    },
    {
      id: 'art',
      title: '예술 감성러',
      emoji: '🎨',
      icon: '/icons/results/hobby-art.png',
      subtitle: '감성이 넘치는 창작자',
      description: '세상을 남들과 다른 시선으로 바라보는 당신은 타고난 예술 감성의 소유자다. 하늘의 색이 바뀌는 것에도 감동하고, 일상의 소소한 장면을 작품으로 승화시키는 능력이 있다. 그림이든 글이든 음악이든 표현 방식은 다양하지만, 무언가를 창작하는 시간이 당신에게는 명상과도 같다. 당신의 SNS는 마치 작은 갤러리처럼 감성으로 가득 차 있다.',
      tags: ['#감성충만', '#창작러', '#예술혼'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'game',
      title: '게임 덕후',
      emoji: '🎮',
      icon: '/icons/results/hobby-game.png',
      subtitle: '전략과 몰입의 달인',
      description: '게임 속 세계관에 빠지면 시간 가는 줄 모르는 당신은 진정한 게임 덕후다. 단순한 오락을 넘어 전략을 짜고, 퍼즐을 풀고, 새로운 세계를 탐험하는 지적 쾌감에 빠져든다. 보드게임이든 비디오게임이든 승부욕과 분석력이 남다르며, "한 판만 더"가 입버릇이다. 게임을 통해 사고력과 판단력을 키우는 당신은 놀면서 배우는 천재형 취미인이다.',
      tags: ['#게임광', '#전략가', '#몰입장인'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      id: 'reading',
      title: '독서 탐험가',
      emoji: '📚',
      icon: '/icons/results/hobby-reading.png',
      subtitle: '책 속에서 세상을 만나는',
      description: '한 권의 책이면 어디든 갈 수 있고, 누구든 될 수 있다고 믿는 당신은 진정한 독서 탐험가다. 서점에 가면 두 시간이 순식간에 지나가고, 잠들기 전 책 읽기는 양보할 수 없는 루틴이다. 소설, 에세이, 학술서 가리지 않는 잡식성 독서가이며, 읽은 책에 대해 이야기하면 눈빛이 달라진다. 당신의 머릿속은 무한한 지식과 상상력의 도서관이다.',
      tags: ['#책벌레', '#지식탐험가', '#독서광'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 'outdoor',
      title: '아웃도어 모험가',
      emoji: '🏔️',
      icon: '/icons/results/hobby-outdoor.png',
      subtitle: '자연이 곧 놀이터',
      description: '콘크리트 숲보다 진짜 숲이 좋은 당신은 타고난 아웃도어 모험가다. 등산, 캠핑, 서핑, 자전거 등 자연 속에서 몸을 움직이는 모든 활동이 당신의 취미이자 삶이다. 새벽 산 정상에서 일출을 보는 감동을 아는 사람이고, 텐트 안에서 듣는 빗소리가 최고의 ASMR이라고 믿는다. 당신의 인스타에는 늘 푸른 하늘과 산, 바다가 가득하다.',
      tags: ['#자연인', '#모험가', '#아웃도어라이프'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'music',
      title: '음악 감상러',
      emoji: '🎵',
      icon: '/icons/results/hobby-music.png',
      subtitle: '귀가 행복한 감성파',
      description: '이어폰 없이는 외출할 수 없는 당신은 음악이 삶의 일부인 감성파다. 장르 불문 좋은 음악이라면 찾아 듣고, 나만의 플레이리스트를 큐레이션하는 것에 진심이다. 비 오는 날의 재즈, 새벽의 클래식, 운동할 때의 힙합까지 상황별 음악이 모두 준비되어 있다. 콘서트와 페스티벌은 당신에게 가장 설레는 이벤트이며, 음악을 통해 감정을 정리하는 당신만의 방식이 있다.',
      tags: ['#음악중독', '#플레이리스트장인', '#감성귀'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      id: 'craft',
      title: 'DIY 만들기왕',
      emoji: '🔨',
      icon: '/icons/results/hobby-craft.png',
      subtitle: '손으로 만드는 세상',
      description: '머릿속 아이디어를 직접 손으로 만들어내야 직성이 풀리는 당신은 타고난 DIY 장인이다. 가죽공예, 목공, 뜨개질, 3D프린팅까지 재료와 도구만 있으면 무엇이든 만들어낸다. "이거 사지 말고 내가 만들어줄게"가 입버릇이고, 완성품을 볼 때의 뿌듯함이 최고의 보상이다. 당신의 방은 작은 공방 같고, 손때 묻은 작품들이 곳곳에 놓여 있다.',
      tags: ['#DIY장인', '#손재주꾼', '#만들기덕후'],
      color: '#f97316',
      gradient: 'from-orange-400 to-amber-500',
    },
    {
      id: 'social',
      title: '모임 활동가',
      emoji: '🤝',
      icon: '/icons/results/hobby-social.png',
      subtitle: '사람이 곧 에너지',
      description: '사람을 만나는 것 자체가 취미이자 에너지 충전인 당신은 타고난 모임 활동가다. 동호회, 스터디, 봉사활동, 네트워킹 등 사람이 모이는 곳이라면 어디든 달려간다. 모르는 사람과도 10분이면 친구가 되고, 단체 카톡방은 항상 당신이 활기를 불어넣는다. "같이 하면 더 재밌잖아!"가 당신의 인생 모토이며, 혼자보다 함께하는 모든 순간을 사랑한다.',
      tags: ['#인싸력만렙', '#사교달인', '#모임왕'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { active = 0, creative = 0, social = 0, intellectual = 0 } = scores
    const max = Math.max(active, creative, social, intellectual)

    if (active === max && active > creative) {
      if (social >= active - 2) return 'sports'
      return 'outdoor'
    }
    if (creative === max && creative > social) {
      if (intellectual >= creative - 2) return 'art'
      if (active > social) return 'craft'
      return 'art'
    }
    if (social === max && social > intellectual) {
      if (active > creative) return 'sports'
      return 'social'
    }
    if (intellectual === max) {
      if (creative > active) return 'reading'
      if (social > creative) return 'game'
      return 'reading'
    }

    // 복합 유형 판별
    if (active > 0 && creative > 0 && active === creative) return 'craft'
    if (creative > 0 && intellectual > 0 && creative === intellectual) return 'music'
    if (active > 0 && social > 0 && active === social) return 'sports'
    if (social > 0 && intellectual > 0 && social === intellectual) return 'game'

    // fallback
    const total = active + creative + social + intellectual
    if (total < 15) return 'music'
    return 'outdoor'
  },
}

export default hobbyTest
