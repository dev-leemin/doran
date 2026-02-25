import { TestConfig, CATEGORY_COLORS } from './types'

const travelTest: TestConfig = {
  id: 'travel',
  title: '나의 여행 스타일은?',
  emoji: '✈️',
  icon: '/icons/tests/travel.png',
  description: '당신만의 여행 스타일을 알아보세요',
  category: 'lifestyle',
  color: CATEGORY_COLORS.lifestyle,
  tags: ['여행', '라이프스타일', '여행유형', '휴가'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['adventure', 'planning', 'culture', 'relaxation'],

  questions: [
    {
      id: 1,
      situation: '여행지를 고르고 있다. 어디로 갈까?',
      emoji: '🌍',
      choices: [
        { text: '아무도 안 가본 숨은 오지 마을', emoji: '🏔️', scores: { adventure: 3, culture: 1 } },
        { text: '블로그 후기 200개 이상인 검증된 곳', emoji: '📋', scores: { planning: 3, relaxation: 1 } },
        { text: '유네스코 세계문화유산이 있는 도시', emoji: '🏛️', scores: { culture: 3, planning: 1 } },
        { text: '해변 리조트에서 올인클루시브', emoji: '🏖️', scores: { relaxation: 3, planning: 1 } },
      ],
    },
    {
      id: 2,
      situation: '숙소를 골라야 한다.',
      emoji: '🏨',
      choices: [
        { text: '현지인이 운영하는 게스트하우스', emoji: '🏘️', scores: { culture: 3, adventure: 1 } },
        { text: '예약 사이트 평점 9.0 이상만 봄', emoji: '⭐', scores: { planning: 3, relaxation: 1 } },
        { text: '텐트 들고 야영할 수 있는 곳', emoji: '⛺', scores: { adventure: 3, relaxation: 0 } },
        { text: '수영장 딸린 풀빌라가 진리', emoji: '🏊', scores: { relaxation: 3, adventure: 0 } },
      ],
    },
    {
      id: 3,
      situation: '비행기에서 10시간, 뭐 하지?',
      emoji: '✈️',
      choices: [
        { text: '여행 가이드북 읽으며 일정 최종 점검', emoji: '📖', scores: { planning: 3, culture: 2 } },
        { text: '영화 3편 보고 기내식 풀코스 즐기기', emoji: '🎬', scores: { relaxation: 3, culture: 0 } },
        { text: '옆자리 외국인이랑 대화 시도', emoji: '💬', scores: { adventure: 2, culture: 2 } },
        { text: '도착하자마자 할 액티비티 예약 확인', emoji: '🏄', scores: { adventure: 3, planning: 1 } },
      ],
    },
    {
      id: 4,
      situation: '현지에서 길을 잃었다!',
      emoji: '🗺️',
      choices: [
        { text: '오히려 좋아! 모험의 시작이다', emoji: '🤩', scores: { adventure: 3, culture: 1 } },
        { text: '구글맵 켜고 최단 경로 재탐색', emoji: '📍', scores: { planning: 3, adventure: 0 } },
        { text: '현지인한테 말 걸어서 길도 묻고 맛집도 추천받기', emoji: '🙋', scores: { culture: 3, adventure: 1 } },
        { text: '일단 근처 카페 들어가서 쉬면서 생각', emoji: '☕', scores: { relaxation: 3, planning: 1 } },
      ],
    },
    {
      id: 5,
      situation: '여행 짐을 싸고 있다.',
      emoji: '🧳',
      choices: [
        { text: '체크리스트 만들고 하나하나 체크하며 패킹', emoji: '✅', scores: { planning: 3, relaxation: 1 } },
        { text: '배낭 하나에 최소한의 짐만', emoji: '🎒', scores: { adventure: 3, culture: 1 } },
        { text: '현지 날씨에 맞춘 감성 코디 위주로', emoji: '👗', scores: { culture: 2, relaxation: 2 } },
        { text: '출발 30분 전에 급하게 싸는 편', emoji: '😅', scores: { adventure: 2, relaxation: 1 } },
      ],
    },
    {
      id: 6,
      situation: '여행 중 갑자기 비가 쏟아진다.',
      emoji: '🌧️',
      choices: [
        { text: '비 맞으며 걸어도 이것도 추억이지!', emoji: '🌈', scores: { adventure: 3, culture: 1 } },
        { text: '미리 챙겨온 우산과 우비 꺼내기', emoji: '☂️', scores: { planning: 3, adventure: 0 } },
        { text: '근처 박물관이나 미술관으로 대피', emoji: '🎨', scores: { culture: 3, planning: 1 } },
        { text: '숙소 돌아가서 낮잠이나 자자', emoji: '😴', scores: { relaxation: 3, adventure: 0 } },
      ],
    },
    {
      id: 7,
      situation: '현지 재래시장에 도착했다.',
      emoji: '🛒',
      choices: [
        { text: '처음 보는 음식은 일단 다 먹어보기', emoji: '🍢', scores: { adventure: 3, culture: 2 } },
        { text: '블로그에서 추천한 가게부터 찾아가기', emoji: '📱', scores: { planning: 3, culture: 0 } },
        { text: '상인과 대화하며 현지 문화 느끼기', emoji: '🤝', scores: { culture: 3, adventure: 1 } },
        { text: '구경만 하고 깨끗한 식당 가서 먹기', emoji: '🍽️', scores: { relaxation: 2, planning: 2 } },
      ],
    },
    {
      id: 8,
      situation: '여행 일정이 하루 남았다.',
      emoji: '📅',
      choices: [
        { text: '아직 안 가본 곳 전부 돌아보기', emoji: '🏃', scores: { adventure: 3, culture: 1 } },
        { text: '계획표에 남은 마지막 코스 마무리', emoji: '📋', scores: { planning: 3, culture: 1 } },
        { text: '가장 좋았던 곳 다시 가서 여운 즐기기', emoji: '💫', scores: { culture: 2, relaxation: 2 } },
        { text: '호텔에서 늦잠 자고 여유로운 마지막 날', emoji: '🛌', scores: { relaxation: 3, planning: 0 } },
      ],
    },
    {
      id: 9,
      situation: '여행 사진을 찍고 있다.',
      emoji: '📸',
      choices: [
        { text: '점프샷, 클리프 다이빙... 역동적인 사진!', emoji: '🤸', scores: { adventure: 3, relaxation: 0 } },
        { text: '사전에 조사한 포토 스팟에서 인생샷', emoji: '🗼', scores: { planning: 2, culture: 2 } },
        { text: '현지인 일상과 골목길 풍경 위주로', emoji: '🏘️', scores: { culture: 3, adventure: 1 } },
        { text: '사진보다 눈으로 보고 즐기는 게 좋아', emoji: '👀', scores: { relaxation: 3, culture: 1 } },
      ],
    },
    {
      id: 10,
      situation: '여행지에서 먹을 곳을 찾고 있다.',
      emoji: '🍜',
      choices: [
        { text: '골목 안쪽 현지인만 아는 로컬 식당', emoji: '🥘', scores: { adventure: 2, culture: 3 } },
        { text: '미리 저장해둔 맛집 리스트 순서대로', emoji: '📝', scores: { planning: 3, culture: 1 } },
        { text: '눈에 보이는 가게 아무 데나 모험!', emoji: '🎲', scores: { adventure: 3, culture: 0 } },
        { text: '호텔 레스토랑에서 편하게', emoji: '🥂', scores: { relaxation: 3, planning: 1 } },
      ],
    },
    {
      id: 11,
      situation: '자유시간 반나절이 생겼다.',
      emoji: '⏰',
      choices: [
        { text: '번지점프나 래프팅 같은 액티비티!', emoji: '🪂', scores: { adventure: 3, relaxation: 0 } },
        { text: '가이드 투어 예약해서 효율적으로', emoji: '🎧', scores: { planning: 3, culture: 1 } },
        { text: '현지 미술관이나 역사 유적지 탐방', emoji: '🏺', scores: { culture: 3, planning: 1 } },
        { text: '스파에서 마사지 받기', emoji: '💆', scores: { relaxation: 3, adventure: 0 } },
      ],
    },
    {
      id: 12,
      situation: '동행이 "오늘 뭐 할까?" 하고 물어본다.',
      emoji: '🤔',
      choices: [
        { text: '"지도에 없는 곳 가보자!"', emoji: '🧭', scores: { adventure: 3, culture: 1 } },
        { text: '"내가 일정 짜왔어, 이대로 가자"', emoji: '📊', scores: { planning: 3, adventure: 0 } },
        { text: '"그 동네 골목 투어 해볼까?"', emoji: '🚶', scores: { culture: 3, relaxation: 1 } },
        { text: '"일단 늦게 일어나서 카페부터..."', emoji: '☕', scores: { relaxation: 3, culture: 0 } },
      ],
    },
    {
      id: 13,
      situation: '여행 예산이 빠듯하다.',
      emoji: '💸',
      choices: [
        { text: '돈 아끼려고 히치하이킹도 불사', emoji: '🚗', scores: { adventure: 3, planning: 1 } },
        { text: '엑셀로 예산표 만들어서 철저히 관리', emoji: '📊', scores: { planning: 3, relaxation: 0 } },
        { text: '무료 워킹투어나 공공 박물관 위주로', emoji: '🚶‍♂️', scores: { culture: 3, planning: 1 } },
        { text: '경험에는 돈을 아끼지 않는다, 일단 쓰기', emoji: '💳', scores: { relaxation: 2, adventure: 2 } },
      ],
    },
    {
      id: 14,
      situation: '현지에서 축제가 열리고 있다!',
      emoji: '🎉',
      choices: [
        { text: '군중 속으로 뛰어들어 같이 춤추기', emoji: '💃', scores: { adventure: 3, culture: 2 } },
        { text: '축제 프로그램표 구해서 하이라이트만 보기', emoji: '📋', scores: { planning: 3, culture: 1 } },
        { text: '축제의 역사와 의미를 찾아보며 관람', emoji: '📚', scores: { culture: 3, planning: 1 } },
        { text: '멀리서 구경하고 카페에서 분위기 즐기기', emoji: '🥤', scores: { relaxation: 3, culture: 1 } },
      ],
    },
    {
      id: 15,
      situation: '여행 중 현지 언어가 하나도 안 통한다.',
      emoji: '🗣️',
      choices: [
        { text: '보디랭귀지와 용기로 돌파한다!', emoji: '🙌', scores: { adventure: 3, culture: 1 } },
        { text: '미리 준비한 번역 앱과 회화 카드 활용', emoji: '📲', scores: { planning: 3, culture: 1 } },
        { text: '기본 인사말이라도 배워서 현지인과 소통 시도', emoji: '🤗', scores: { culture: 3, adventure: 1 } },
        { text: '관광지 위주로 다니면 영어 되니까 괜찮아', emoji: '🏙️', scores: { relaxation: 2, planning: 2 } },
      ],
    },
    {
      id: 16,
      situation: '이른 아침, 일출을 보러 갈 수 있다.',
      emoji: '🌅',
      choices: [
        { text: '새벽 4시에 등산해서 정상에서 일출 보기', emoji: '⛰️', scores: { adventure: 3, culture: 1 } },
        { text: '전날 알람 맞춰두고 일출 명소로 이동', emoji: '⏰', scores: { planning: 3, adventure: 1 } },
        { text: '일출보다 그 지역의 아침 시장이 더 궁금해', emoji: '🌄', scores: { culture: 3, adventure: 0 } },
        { text: '일출은 사진으로 보면 되지... 더 자기', emoji: '😴', scores: { relaxation: 3, planning: 0 } },
      ],
    },
    {
      id: 17,
      situation: '여행 기념품을 사려고 한다.',
      emoji: '🎁',
      choices: [
        { text: '현지에서만 살 수 있는 특이한 물건 찾기', emoji: '🔮', scores: { adventure: 2, culture: 2 } },
        { text: '미리 조사한 추천 기념품 리스트대로 구매', emoji: '🛍️', scores: { planning: 3, culture: 1 } },
        { text: '현지 장인이 만든 전통 공예품', emoji: '🏺', scores: { culture: 3, relaxation: 1 } },
        { text: '공항 면세점에서 한 번에 사면 편하지', emoji: '✈️', scores: { relaxation: 2, planning: 2 } },
      ],
    },
    {
      id: 18,
      situation: '여행지에서 하루가 끝나고 밤이 됐다.',
      emoji: '🌙',
      choices: [
        { text: '나이트마켓이나 클럽 탐방하기', emoji: '🎶', scores: { adventure: 3, culture: 1 } },
        { text: '내일 일정 정리하고 알람 맞춰두기', emoji: '📝', scores: { planning: 3, relaxation: 1 } },
        { text: '현지 펍에서 동네 사람들과 한 잔', emoji: '🍺', scores: { culture: 3, adventure: 1 } },
        { text: '호텔 루프탑에서 야경 보며 와인 한 잔', emoji: '🍷', scores: { relaxation: 3, culture: 1 } },
      ],
    },
    {
      id: 19,
      situation: '계획에 없던 숨겨진 명소를 발견했다.',
      emoji: '✨',
      choices: [
        { text: '당장 일정 바꿔서 들어가 본다!', emoji: '🏃', scores: { adventure: 3, culture: 1 } },
        { text: '일정에 여유가 있는지 먼저 확인', emoji: '📅', scores: { planning: 3, adventure: 1 } },
        { text: '그곳의 역사와 배경을 검색해보고 결정', emoji: '🔍', scores: { culture: 3, planning: 1 } },
        { text: '사진만 찍고 예정된 코스로 돌아가기', emoji: '📷', scores: { relaxation: 2, planning: 2 } },
      ],
    },
    {
      id: 20,
      situation: '교통편을 선택해야 한다.',
      emoji: '🚌',
      choices: [
        { text: '오토바이 렌트해서 자유롭게!', emoji: '🏍️', scores: { adventure: 3, relaxation: 0 } },
        { text: '교통 패스 미리 구매해서 효율적으로', emoji: '🎫', scores: { planning: 3, culture: 0 } },
        { text: '현지 대중교통 타면서 로컬 체험', emoji: '🚃', scores: { culture: 3, adventure: 1 } },
        { text: '택시나 프라이빗 차량으로 편하게', emoji: '🚕', scores: { relaxation: 3, planning: 1 } },
      ],
    },
    {
      id: 21,
      situation: '여행 친구가 "아무거나 해도 좋아~" 한다.',
      emoji: '😊',
      choices: [
        { text: '"그럼 절벽 다이빙 하러 가자!"', emoji: '🤿', scores: { adventure: 3, relaxation: 0 } },
        { text: '"내가 짜온 코스 B안으로 가자"', emoji: '🗂️', scores: { planning: 3, culture: 0 } },
        { text: '"현지인 추천 골목 투어 어때?"', emoji: '🏘️', scores: { culture: 3, adventure: 1 } },
        { text: '"그냥 카페에서 수다 떨까?"', emoji: '🍰', scores: { relaxation: 3, culture: 1 } },
      ],
    },
    {
      id: 22,
      situation: '여행 중 몸이 좀 피곤하다.',
      emoji: '😩',
      choices: [
        { text: '피곤해도 이 기회를 놓칠 순 없어! 출발!', emoji: '💪', scores: { adventure: 3, culture: 1 } },
        { text: '오후 일정을 가벼운 것으로 조정', emoji: '📋', scores: { planning: 3, relaxation: 1 } },
        { text: '근처 사원이나 정원에서 조용히 산책', emoji: '🌿', scores: { culture: 2, relaxation: 2 } },
        { text: '오늘은 쉬어가는 날로 선언', emoji: '🛏️', scores: { relaxation: 3, adventure: 0 } },
      ],
    },
    {
      id: 23,
      situation: '여행 후기를 남기려고 한다.',
      emoji: '✍️',
      choices: [
        { text: '스릴 넘쳤던 액티비티 영상 편집해서 올리기', emoji: '🎥', scores: { adventure: 3, planning: 1 } },
        { text: '일자별 일정표와 꿀팁 정리 블로그 작성', emoji: '📝', scores: { planning: 3, culture: 1 } },
        { text: '현지 문화와 사람들 이야기 중심으로 기록', emoji: '📓', scores: { culture: 3, relaxation: 1 } },
        { text: '감성 사진 몇 장이면 충분해', emoji: '📸', scores: { relaxation: 2, culture: 2 } },
      ],
    },
    {
      id: 24,
      situation: '다음 여행을 계획하고 있다.',
      emoji: '🗓️',
      choices: [
        { text: '아직 아무도 안 가본 신규 오픈 루트', emoji: '🌋', scores: { adventure: 3, culture: 1 } },
        { text: '항공 + 숙소 + 일정 패키지로 완벽하게', emoji: '📦', scores: { planning: 3, relaxation: 2 } },
        { text: '역사가 깊은 도시 심층 탐방 코스', emoji: '🏰', scores: { culture: 3, planning: 1 } },
        { text: '올인클루시브 리조트에서 아무것도 안 하기', emoji: '🌴', scores: { relaxation: 3, adventure: 0 } },
      ],
    },
    {
      id: 25,
      situation: '여행에서 가장 소중한 순간은?',
      emoji: '💎',
      choices: [
        { text: '심장이 두근거렸던 도전의 순간', emoji: '🔥', scores: { adventure: 3, planning: 0 } },
        { text: '완벽한 일정이 맞아떨어졌을 때의 쾌감', emoji: '✨', scores: { planning: 3, culture: 1 } },
        { text: '현지 사람들과 마음이 통했던 그 찰나', emoji: '🤝', scores: { culture: 3, adventure: 1 } },
        { text: '아무 걱정 없이 평화로웠던 그 시간', emoji: '🕊️', scores: { relaxation: 3, culture: 1 } },
      ],
    },
  ],

  results: [
    {
      id: 'backpacker',
      title: '자유로운 배낭여행자',
      emoji: '🎒',
      icon: '/icons/results/travel-backpacker.png',
      subtitle: '계획 없이 떠나는',
      description: '비행기 티켓 하나 들고 공항에 나타나는 진정한 자유 영혼. "어디 가?" 물으면 "몰라, 가서 정해"가 당신의 시그니처 답변이다. 배낭 하나에 세상 모든 짐을 우겨넣고, 게스트하우스에서 만난 여행자와 내일 동행을 약속하는 것이 일상. 남들이 계획표 짤 때 당신은 이미 지도에도 없는 골목을 걷고 있다. 예상치 못한 상황이야말로 최고의 여행이라는 확고한 철학의 소유자.',
      tags: ['#자유영혼', '#배낭하나면충분', '#즉흥여행'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'planner',
      title: '완벽주의 플래너',
      emoji: '📋',
      icon: '/icons/results/travel-planner.png',
      subtitle: '분 단위 계획표',
      description: '여행 출발 3개월 전부터 엑셀 스프레드시트가 가동된다. 항공편, 숙소, 맛집, 이동 동선까지 분 단위로 짜여진 일정표는 그 자체로 하나의 예술 작품이다. "우리 지금 10분 여유 있어"가 입버릇이고, 동행자들은 당신의 계획 덕분에 아무 생각 없이 따라다니면 된다. 여행 후 정산 엑셀까지 완벽하게 마무리해야 진정한 여행 종료. 당신이 없으면 단체 여행은 카오스가 된다.',
      tags: ['#엑셀여행가', '#분단위일정', '#완벽동선'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'foodie',
      title: '미식 탐험가',
      emoji: '🍽️',
      icon: '/icons/results/travel-foodie.png',
      subtitle: '여행은 곧 먹방',
      description: '여행의 목적이 "그 나라 음식"인 사람. 관광지보다 맛집 동선이 먼저 짜이고, 현지 재래시장에서 정체불명의 음식을 용감하게 시도하는 것이 당신의 여행법이다. "이건 꼭 먹어봐야 해"가 하루에 열 번은 나오고, 여행 사진 앨범의 80%가 음식 사진. 배가 아파도 "마지막 한 곳만 더!" 를 외치는 진정한 미식의 전사다.',
      tags: ['#맛집헌터', '#먹방여행', '#위장이곧여권'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 'culture',
      title: '문화 탐방러',
      emoji: '🏛️',
      icon: '/icons/results/travel-culture.png',
      subtitle: '역사와 예술의 발자취',
      description: '박물관 앞에서 눈이 반짝이고, 유적지 안내판을 끝까지 읽는 유일한 사람. 여행 전에 그 나라의 역사책을 한 권 읽어가고, 현지인보다 그 도시의 역사를 더 잘 아는 경우도 있다. 사원에서 명상하고, 갤러리에서 감동받고, 전통 공연을 보며 눈물 흘리는 감성의 소유자. 당신에게 여행이란 새로운 문화를 온몸으로 흡수하는 깊이 있는 경험이다.',
      tags: ['#역사덕후', '#박물관러버', '#문화감수성'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'resort',
      title: '리조트 힐링러',
      emoji: '🏖️',
      icon: '/icons/results/travel-resort.png',
      subtitle: '호캉스가 진리',
      description: '여행의 핵심은 "쉬는 것"이라는 확고한 신념의 소유자. 수영장 선베드 위에서 칵테일 한 잔 들고 있는 모습이 당신의 이상적인 여행이다. 체크인하자마자 슬리퍼로 갈아신고, 호텔 밖으로 한 발짝도 안 나가는 날이 최고의 하루. "왜 여행 와서까지 힘들게 돌아다녀?"가 인생 모토이며, 돌아올 때는 여행 전보다 더 건강해져 있다.',
      tags: ['#호캉스최고', '#리조트마스터', '#쉼이여행'],
      color: '#f43f5e',
      gradient: 'from-rose-400 to-pink-500',
    },
    {
      id: 'adventure',
      title: '액티비티 마니아',
      emoji: '🏄',
      icon: '/icons/results/travel-adventure.png',
      subtitle: '스릴이 곧 여행',
      description: '번지점프, 스카이다이빙, 래프팅... 당신의 여행 버킷리스트는 보험 설계사를 긴장시킨다. "인생은 한 번뿐이야!"를 외치며 절벽 위에 서는 것이 일상이고, 아드레날린이 솟구치는 순간이 여행의 하이라이트다. 호텔에 가만히 앉아있으면 몸이 근질근질하고, 휴식보다 도전이 당신을 더 충전시킨다. 여행에서 돌아오면 몸은 만신창이지만 표정은 세상에서 제일 행복하다.',
      tags: ['#아드레날린중독', '#스릴시커', '#도전이삶'],
      color: '#f97316',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      id: 'photo',
      title: '감성 포토그래퍼',
      emoji: '📸',
      icon: '/icons/results/travel-photo.png',
      subtitle: '인생샷이 목적',
      description: '골든아워를 위해 한 시간을 기다리고, 구도를 위해 열 번을 오가는 당신은 여행의 예술가다. "잠깐 여기서 사진 한 장만!" 이 열 번 반복되어 동행자가 지쳐도, 결과물을 보면 모두가 인정하는 실력. SNS 피드는 마치 여행 잡지 같고, 사진 한 장에 그때의 바람과 향기까지 담아내는 감성이 있다. 당신에게 카메라는 여권 다음으로 중요한 여행 필수품이다.',
      tags: ['#인생샷장인', '#감성스냅', '#여행잡지급'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      id: 'local',
      title: '현지인 체험러',
      emoji: '🏘️',
      icon: '/icons/results/travel-local.png',
      subtitle: '관광지보단 골목길',
      description: '유명 관광지는 구글로 보면 되지만, 골목길 할머니 식당은 직접 가야만 느낄 수 있다는 게 당신의 여행 철학이다. 현지인이 가는 빨래방 카페를 찾아내고, 동네 슈퍼에서 장을 보며, 로컬 버스를 타고 종점까지 가보는 것이 당신의 여행법. "관광객처럼 보이기 싫어"가 입버릇이고, 여행이 끝나면 그 도시에 아는 사람이 세 명은 생겨있다.',
      tags: ['#로컬감성', '#골목길탐험', '#현지인모드'],
      color: '#64748b',
      gradient: 'from-slate-400 to-gray-600',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { adventure = 0, planning = 0, culture = 0, relaxation = 0 } = scores
    const max = Math.max(adventure, planning, culture, relaxation)

    if (adventure === max && adventure > planning) {
      if (culture >= adventure - 2) return 'backpacker'
      return 'adventure'
    }
    if (planning === max && planning > adventure) {
      if (relaxation > culture) return 'planner'
      return 'planner'
    }
    if (culture === max && culture > relaxation) {
      if (adventure > planning) return 'local'
      if (planning >= culture - 2) return 'foodie'
      return 'culture'
    }
    if (relaxation === max) {
      if (culture > adventure) return 'resort'
      if (planning > adventure) return 'resort'
      return 'resort'
    }

    // 복합 유형 판별
    if (adventure > 0 && culture > 0 && adventure === culture) return 'local'
    if (planning > 0 && culture > 0 && planning === culture) return 'foodie'
    if (adventure > 0 && relaxation > 0 && adventure === relaxation) return 'photo'

    // fallback
    const total = adventure + planning + culture + relaxation
    if (total < 15) return 'photo'
    return 'backpacker'
  },
}

export default travelTest
