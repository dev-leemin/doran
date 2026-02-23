import { TestConfig, CATEGORY_COLORS } from './types'

const officeTest: TestConfig = {
  id: 'office',
  title: '회사에서 나는?',
  emoji: '🏢',
  icon: '/icons/tests/office.png',
  description: '당신의 직장생활 캐릭터를 알아보세요',
  category: 'personality',
  color: CATEGORY_COLORS.personality,
  tags: ['직장인', '성격유형', '회사생활', 'MBTI'],
  avgTime: '3분',
  createdAt: '2026-02-18',
  axes: ['efficiency', 'social', 'initiative', 'passion'],

  questions: [
    {
      id: 1,
      situation: '월요일 아침, 회사에 도착했다.',
      emoji: '🌅',
      choices: [
        { text: '커피 내리면서 오늘 할 일 정리', emoji: '☕', scores: { efficiency: 3, initiative: 2 } },
        { text: '동료한테 주말 얘기부터', emoji: '💬', scores: { social: 3, passion: 1 } },
        { text: '일단 메일함부터 확인', emoji: '📧', scores: { efficiency: 2, passion: 2 } },
        { text: '출근한 것만으로 대단해... 좀 쉬자', emoji: '😴', scores: { social: 1, initiative: 0 } },
      ],
    },
    {
      id: 2,
      situation: '회의가 30분째 산으로 가고 있다.',
      emoji: '🗣️',
      choices: [
        { text: '"정리하면 이거 아닌가요?" 핵심 요약', emoji: '✋', scores: { efficiency: 3, initiative: 3 } },
        { text: '흐름 맞춰주면서 분위기 관리', emoji: '🤝', scores: { social: 3, initiative: 1 } },
        { text: '열심히 메모하고 있음', emoji: '📝', scores: { passion: 3, efficiency: 1 } },
        { text: '몰래 카톡 확인 중', emoji: '📱', scores: { social: 1, passion: 0 } },
      ],
    },
    {
      id: 3,
      situation: '팀장님이 갑자기 야근을 요청했다.',
      emoji: '😱',
      choices: [
        { text: '"내일 아침에 하면 안 될까요?"', emoji: '🙋', scores: { efficiency: 3, initiative: 2 } },
        { text: '일단 남는다 (속으론 화남)', emoji: '😤', scores: { passion: 2, social: 2 } },
        { text: '투덜대면서도 결국 해냄', emoji: '💪', scores: { passion: 3, efficiency: 1 } },
        { text: '이미 PC 끄고 있었는데...', emoji: '🏃', scores: { initiative: 1, social: 0 } },
      ],
    },
    {
      id: 4,
      situation: '점심시간, 메뉴를 정해야 한다.',
      emoji: '🍽️',
      choices: [
        { text: '"여기 새로 생긴 데 가보자!" 맛집 리딩', emoji: '🗺️', scores: { initiative: 3, social: 2 } },
        { text: '"다 좋아~ 뭐든 ㄱ"', emoji: '😊', scores: { social: 3, efficiency: 0 } },
        { text: '혼밥하면서 유튜브', emoji: '📺', scores: { efficiency: 2, passion: 1 } },
        { text: '이미 밀프렙 해왔음', emoji: '🍱', scores: { efficiency: 3, passion: 2 } },
      ],
    },
    {
      id: 5,
      situation: '새 프로젝트에 투입됐다.',
      emoji: '🚀',
      choices: [
        { text: '바로 기획안 작성 시작', emoji: '📋', scores: { initiative: 3, passion: 3 } },
        { text: '팀원들이랑 먼저 이야기 나눔', emoji: '👥', scores: { social: 3, initiative: 1 } },
        { text: '레퍼런스 조사부터 꼼꼼히', emoji: '🔍', scores: { efficiency: 3, passion: 2 } },
        { text: '일단 지켜보면서 감 잡기', emoji: '👀', scores: { social: 1, efficiency: 1 } },
      ],
    },
    {
      id: 6,
      situation: '옆자리 동료가 업무 때문에 스트레스를 받고 있다.',
      emoji: '😣',
      choices: [
        { text: '커피 하나 사다줌 (말없이)', emoji: '☕', scores: { social: 3, passion: 1 } },
        { text: '"뭐 도와줄까?" 직접 물어봄', emoji: '🤗', scores: { social: 2, initiative: 3 } },
        { text: '퇴근하고 술 한잔 제안', emoji: '🍻', scores: { social: 3, initiative: 1 } },
        { text: '나도 바빠서 못 본 척...', emoji: '😅', scores: { efficiency: 2, passion: 1 } },
      ],
    },
    {
      id: 7,
      situation: '대표가 갑자기 전체 회의를 소집했다.',
      emoji: '📢',
      choices: [
        { text: '무슨 일인지 미리 정보 수집', emoji: '🕵️', scores: { initiative: 3, efficiency: 2 } },
        { text: '동료들이랑 "뭐래" 수군수군', emoji: '🤫', scores: { social: 3, initiative: 0 } },
        { text: '노트 펴고 핵심만 기록 준비', emoji: '📝', scores: { efficiency: 3, passion: 2 } },
        { text: '"또...?" 한숨', emoji: '😮‍💨', scores: { social: 1, passion: 0 } },
      ],
    },
    {
      id: 8,
      situation: '금요일 오후 4시, 주말 계획은?',
      emoji: '🎉',
      choices: [
        { text: '남은 업무 다 끝내고 깔끔하게 퇴근', emoji: '✅', scores: { efficiency: 3, passion: 2 } },
        { text: '동료들이랑 퇴근 후 회식/술약', emoji: '🍺', scores: { social: 3, initiative: 1 } },
        { text: '4시 30분부터 이미 퇴근 모드', emoji: '🏖️', scores: { initiative: 2, social: 1 } },
        { text: '주말에도 좀 해야 하는데...', emoji: '💻', scores: { passion: 3, efficiency: 1 } },
      ],
    },
    {
      id: 9,
      situation: '내가 만든 보고서에 수정 요청이 왔다.',
      emoji: '📄',
      choices: [
        { text: '바로 수정해서 30분 안에 재전송', emoji: '⚡', scores: { efficiency: 3, passion: 2 } },
        { text: '"어떤 부분이요?" 구체적으로 확인', emoji: '🤔', scores: { initiative: 3, efficiency: 1 } },
        { text: '속상하지만 티 안 내고 수정', emoji: '😌', scores: { social: 2, passion: 2 } },
        { text: '약간 짜증나지만 일단 알겠다고 함', emoji: '😑', scores: { social: 1, initiative: 0 } },
      ],
    },
    {
      id: 10,
      situation: '이직 제안이 들어왔다!',
      emoji: '💼',
      choices: [
        { text: '연봉/복지 꼼꼼히 비교 분석', emoji: '📊', scores: { efficiency: 3, initiative: 2 } },
        { text: '현재 동료들이 아쉬움...', emoji: '🥺', scores: { social: 3, passion: 1 } },
        { text: '성장할 수 있는 곳이면 GO', emoji: '🔥', scores: { passion: 3, initiative: 3 } },
        { text: '"지금도 나쁘지 않은데..." 현상 유지', emoji: '🛋️', scores: { social: 1, efficiency: 1 } },
      ],
    },
    {
      id: 11,
      situation: '엘리베이터에서 사장님과 둘이 탔다.',
      emoji: '🛗',
      choices: [
        { text: '"안녕하세요!" 밝게 인사하고 스몰톡', emoji: '😃', scores: { social: 3, initiative: 2 } },
        { text: '인사만 하고 핸드폰 봄', emoji: '📱', scores: { efficiency: 1, social: 1 } },
        { text: '이 기회에 프로젝트 근황 보고', emoji: '📈', scores: { initiative: 3, passion: 2 } },
        { text: '계단으로 갈걸... 내심 후회', emoji: '😰', scores: { social: 0, efficiency: 2 } },
      ],
    },
    {
      id: 12,
      situation: '팀에 신입사원이 들어왔다.',
      emoji: '🐣',
      choices: [
        { text: '점심 같이 먹자고 먼저 말 걸기', emoji: '🤝', scores: { social: 3, initiative: 2 } },
        { text: '업무 매뉴얼 만들어서 전달', emoji: '📚', scores: { efficiency: 3, passion: 2 } },
        { text: '물어보면 친절하게 알려줌', emoji: '😊', scores: { social: 2, passion: 1 } },
        { text: '나도 아직 적응 중인데...', emoji: '😶', scores: { efficiency: 1, initiative: 0 } },
      ],
    },
    {
      id: 13,
      situation: '내 아이디어가 회의에서 무시당했다.',
      emoji: '💡',
      choices: [
        { text: '데이터 근거를 추가해서 다시 제안', emoji: '📊', scores: { initiative: 3, passion: 3 } },
        { text: '동료한테 먼저 공감대 형성 후 재시도', emoji: '🤝', scores: { social: 3, initiative: 2 } },
        { text: '속으로 삼키고 다음 기회를 노림', emoji: '😤', scores: { passion: 2, efficiency: 1 } },
        { text: '그냥 시키는 대로 하자...', emoji: '😞', scores: { social: 1, initiative: 0 } },
      ],
    },
    {
      id: 14,
      situation: '복사기가 고장났다. 급한 서류가 있는데...',
      emoji: '🖨️',
      choices: [
        { text: '다른 층 복사기 위치 파악해서 바로 이동', emoji: '🏃', scores: { efficiency: 3, initiative: 2 } },
        { text: '총무팀에 연락해서 수리 요청', emoji: '📞', scores: { initiative: 2, efficiency: 2 } },
        { text: '옆 팀한테 가서 빌려 쓸 수 있냐고 물어봄', emoji: '🙏', scores: { social: 3, efficiency: 1 } },
        { text: 'PDF로 보내면 안 되나... 디지털로 전환', emoji: '💻', scores: { efficiency: 3, initiative: 3 } },
      ],
    },
    {
      id: 15,
      situation: '연말 인사평가 시즌이 다가왔다.',
      emoji: '📋',
      choices: [
        { text: '올해 성과 정리 PPT 미리 준비', emoji: '📑', scores: { efficiency: 3, initiative: 3 } },
        { text: '팀장님이랑 면담 시간 잡아서 소통', emoji: '💬', scores: { social: 2, initiative: 2 } },
        { text: '내가 한 일 동료들한테 은근히 어필', emoji: '🦊', scores: { social: 3, passion: 1 } },
        { text: '열심히 했으니 알아서 잘 나오겠지', emoji: '🤷', scores: { passion: 1, efficiency: 0 } },
      ],
    },
    {
      id: 16,
      situation: '퇴근 10분 전, 급한 업무 요청이 들어왔다.',
      emoji: '⏰',
      choices: [
        { text: '10분 안에 끝낼 수 있으면 해치움', emoji: '⚡', scores: { efficiency: 3, passion: 2 } },
        { text: '"내일 첫 번째로 처리할게요" 협상', emoji: '🤝', scores: { initiative: 2, efficiency: 2 } },
        { text: '어쩔 수 없지... 야근 각오', emoji: '😮‍💨', scores: { passion: 3, social: 1 } },
        { text: '못 봤다 치고 퇴근', emoji: '🏃‍♂️', scores: { social: 0, initiative: 1 } },
      ],
    },
    {
      id: 17,
      situation: '회사 워크숍에서 장기자랑을 해야 한다.',
      emoji: '🎤',
      choices: [
        { text: '노래 하나 신나게 부르기', emoji: '🎶', scores: { social: 2, passion: 3 } },
        { text: '팀원들이랑 단체 퍼포먼스 기획', emoji: '🕺', scores: { social: 3, initiative: 3 } },
        { text: '사회자/진행 역할로 참여', emoji: '🎙️', scores: { initiative: 2, social: 2 } },
        { text: '화장실에 숨어있기', emoji: '🚽', scores: { efficiency: 1, passion: 0 } },
      ],
    },
    {
      id: 18,
      situation: '동료 두 명이 업무 갈등으로 싸우고 있다.',
      emoji: '⚔️',
      choices: [
        { text: '중간에서 양쪽 의견 조율해주기', emoji: '⚖️', scores: { social: 3, initiative: 3 } },
        { text: '한 쪽 편 들어주기 (내가 보기에 맞는 쪽)', emoji: '🤔', scores: { initiative: 2, passion: 2 } },
        { text: '팀장님한테 상황 보고', emoji: '📢', scores: { efficiency: 2, social: 1 } },
        { text: '이어폰 끼고 모른 척', emoji: '🎧', scores: { efficiency: 2, initiative: 0 } },
      ],
    },
    {
      id: 19,
      situation: '재택근무 하는 날이다.',
      emoji: '🏠',
      choices: [
        { text: '출근할 때보다 더 빡세게 집중', emoji: '💪', scores: { passion: 3, efficiency: 2 } },
        { text: '화상회의 때만 카메라 켜고 나머진 자유', emoji: '😎', scores: { efficiency: 2, initiative: 1 } },
        { text: '슬랙/메신저로 동료들이랑 수다도 치면서', emoji: '💬', scores: { social: 3, passion: 1 } },
        { text: '침대와 책상을 왔다갔다...', emoji: '🛌', scores: { social: 0, efficiency: 0 } },
      ],
    },
    {
      id: 20,
      situation: '다른 팀에서 협업 요청이 왔다.',
      emoji: '🤝',
      choices: [
        { text: '일정 확인하고 가능한 범위 명확히 전달', emoji: '📅', scores: { efficiency: 3, initiative: 2 } },
        { text: '"좋죠! 같이 해봐요" 적극 수락', emoji: '🙌', scores: { social: 2, passion: 3 } },
        { text: '우리 팀장님한테 먼저 확인 받기', emoji: '👆', scores: { social: 2, efficiency: 2 } },
        { text: '우리 팀 일도 바쁜데... 부담', emoji: '😥', scores: { passion: 1, initiative: 0 } },
      ],
    },
    {
      id: 21,
      situation: '회사 시스템이 갑자기 다운됐다.',
      emoji: '🖥️',
      choices: [
        { text: 'IT팀에 바로 연락하고 대안 찾기', emoji: '🔧', scores: { initiative: 3, efficiency: 3 } },
        { text: '커피 타임으로 활용하며 동료들과 잡담', emoji: '☕', scores: { social: 3, efficiency: 0 } },
        { text: '오프라인으로 할 수 있는 업무 정리', emoji: '📝', scores: { efficiency: 3, passion: 2 } },
        { text: '합법적 휴식이다! 잠깐 쉬기', emoji: '😌', scores: { social: 1, passion: 0 } },
      ],
    },
    {
      id: 22,
      situation: '팀장님이 나를 칭찬했다.',
      emoji: '🏆',
      choices: [
        { text: '겸손하게 받고 더 열심히 하자고 다짐', emoji: '🙏', scores: { passion: 3, efficiency: 2 } },
        { text: '"팀원들 덕분이에요~" 공 돌리기', emoji: '👏', scores: { social: 3, initiative: 1 } },
        { text: '기분 좋지만 티 안 냄', emoji: '😏', scores: { efficiency: 2, social: 1 } },
        { text: '동료들한테 자랑하고 싶은 거 참기', emoji: '🤭', scores: { social: 2, passion: 2 } },
      ],
    },
    {
      id: 23,
      situation: '출장 가서 호텔에 혼자 있는 밤이다.',
      emoji: '🌙',
      choices: [
        { text: '내일 미팅 자료 한 번 더 점검', emoji: '📂', scores: { efficiency: 3, passion: 2 } },
        { text: '동료한테 전화해서 수다', emoji: '📞', scores: { social: 3, initiative: 0 } },
        { text: '근처 맛집 찾아서 혼밥 투어', emoji: '🍜', scores: { initiative: 2, passion: 2 } },
        { text: '넷플릭스 켜고 푹 쉬기', emoji: '📺', scores: { social: 0, efficiency: 1 } },
      ],
    },
    {
      id: 24,
      situation: '실수로 전체 메일을 잘못 보냈다!',
      emoji: '🚨',
      choices: [
        { text: '즉시 정정 메일 발송 + 관련자에게 사과', emoji: '📧', scores: { initiative: 3, efficiency: 3 } },
        { text: '팀장님한테 먼저 보고하고 대처 방안 논의', emoji: '🗣️', scores: { social: 2, initiative: 2 } },
        { text: '가만히 있으면 아무도 모르지 않을까...', emoji: '🤫', scores: { efficiency: 1, social: 1 } },
        { text: '멘탈 나갔지만 일단 수습 시작', emoji: '😱', scores: { passion: 2, efficiency: 2 } },
      ],
    },
    {
      id: 25,
      situation: '후배가 같은 질문을 세 번째 하고 있다.',
      emoji: '🔄',
      choices: [
        { text: '문서로 정리해서 공유 (다시 안 물어보게)', emoji: '📄', scores: { efficiency: 3, initiative: 2 } },
        { text: '그래도 웃으면서 다시 설명해줌', emoji: '😊', scores: { social: 3, passion: 1 } },
        { text: '"이건 이렇게 생각해봐" 원리를 알려줌', emoji: '🧠', scores: { initiative: 3, passion: 3 } },
        { text: '슬슬 짜증나지만 참는 중', emoji: '😬', scores: { social: 1, efficiency: 1 } },
      ],
    },
    {
      id: 26,
      situation: '회사에서 동호회 가입을 권유받았다.',
      emoji: '⚽',
      choices: [
        { text: '운동 동호회 가입! 건강도 챙기고 인맥도', emoji: '🏃', scores: { social: 3, passion: 2 } },
        { text: '봉사활동 동호회로 의미 있는 활동', emoji: '💛', scores: { passion: 3, initiative: 2 } },
        { text: '퇴근 후엔 내 시간... 정중히 거절', emoji: '🙅', scores: { efficiency: 3, initiative: 1 } },
        { text: '가입만 하고 안 나갈 예정', emoji: '👻', scores: { social: 1, efficiency: 1 } },
      ],
    },
    {
      id: 27,
      situation: '업무 중 유튜브 알림이 떴다. 관심 있는 영상!',
      emoji: '▶️',
      choices: [
        { text: '나중에 보기에 저장하고 업무 집중', emoji: '🔖', scores: { efficiency: 3, passion: 1 } },
        { text: '1분만... 하고 결국 10분 봄', emoji: '😅', scores: { passion: 2, social: 0 } },
        { text: '동료한테 "이거 봤어?" 공유', emoji: '📤', scores: { social: 3, initiative: 1 } },
        { text: '점심시간까지 참는다!', emoji: '⏳', scores: { efficiency: 2, initiative: 2 } },
      ],
    },
    {
      id: 28,
      situation: '연봉 협상 시즌이 왔다.',
      emoji: '💰',
      choices: [
        { text: '업계 평균 연봉 데이터 조사해서 논리적으로 어필', emoji: '📊', scores: { efficiency: 3, initiative: 3 } },
        { text: '팀장님이랑 편하게 커피 마시면서 이야기', emoji: '☕', scores: { social: 3, initiative: 1 } },
        { text: '올해 성과를 열정적으로 프레젠테이션', emoji: '🔥', scores: { passion: 3, initiative: 2 } },
        { text: '그냥 회사에서 주는 대로... 말하기 어렵다', emoji: '😶', scores: { social: 1, passion: 0 } },
      ],
    },
    {
      id: 29,
      situation: '퇴근 후 팀 단톡방에 업무 메시지가 왔다.',
      emoji: '📲',
      choices: [
        { text: '급한 건지 확인하고 필요하면 간단히 답변', emoji: '✔️', scores: { efficiency: 2, passion: 2 } },
        { text: '읽씹하고 내일 출근해서 확인', emoji: '🙈', scores: { efficiency: 3, initiative: 1 } },
        { text: '바로 답변하고 추가로 필요한 것도 챙겨줌', emoji: '💪', scores: { passion: 3, initiative: 3 } },
        { text: '답장은 하되 "내일 얘기해요~" 선 긋기', emoji: '🤚', scores: { social: 2, efficiency: 2 } },
      ],
    },
    {
      id: 30,
      situation: '회사에서 무료 교육/세미나 기회가 생겼다.',
      emoji: '🎓',
      choices: [
        { text: '업무와 관련된 거면 바로 신청!', emoji: '✍️', scores: { passion: 3, efficiency: 2 } },
        { text: '동료들이랑 같이 들으면 좋겠다고 제안', emoji: '👥', scores: { social: 3, initiative: 1 } },
        { text: '새로운 분야라도 일단 도전해보기', emoji: '🌟', scores: { initiative: 3, passion: 3 } },
        { text: '업무 시간에 빠지기 애매해서 고민 중', emoji: '🤔', scores: { efficiency: 1, social: 1 } },
      ],
    },
  ],

  results: [
    {
      id: 'time-master',
      title: '칼퇴의 신',
      emoji: '⚡',
      icon: '/icons/results/office-clock-out.png',
      subtitle: '효율의 끝판왕',
      description: '오후 5시 59분, 이미 가방 챙긴 상태로 퇴근 버튼을 누르는 사람. "야근은 능력 부족의 증거"라는 확고한 철학이 있고, 실제로 업무 시간 안에 모든 걸 해치운다. 동료들이 "어떻게 그렇게 빨리 해?"라고 물으면 "집중하면 돼요 ㅎㅎ"이라고 하지만 사실 업무 루틴이 기가 막히게 최적화되어 있다. 퇴근 후엔 운동이든 넷플릭스든 자기만의 시간이 확보되어 있고, 카톡 답장은 내일 출근해서 한다. 워라밸의 수호자이자 회사에서 가장 부러운 존재.',
      tags: ['#칼퇴장인', '#효율충', '#워라밸수호자'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'mood-maker',
      title: '분위기 메이커',
      emoji: '🎪',
      icon: '/icons/results/office-mood-maker.png',
      subtitle: '없으면 허전한 사람',
      description: '이 사람이 연차 쓰는 날이면 팀 전체가 조용해진다. 아침에 출근하면 "다들 잘 잤어~?"부터 시작, 점심엔 메뉴 투표 주도, 오후엔 간식 돌리기까지. 신입이 들어오면 첫날 점심 같이 먹으러 가고, 누가 힘들어 보이면 커피 한 잔 슬쩍 놓아두는 따뜻한 사람. 회식 장소는 당연히 이 사람이 정하고, 팀 단톡방에서 제일 먼저 반응하는 것도 이 사람이다. 가끔 "나도 좀 쉬고 싶다"고 하지만, 결국 또 총대를 멘다.',
      tags: ['#인싸력MAX', '#팀의비타민', '#소통왕'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 'silent-ace',
      title: '조용한 에이스',
      emoji: '🎯',
      icon: '/icons/results/office-silent-ace.png',
      subtitle: '말은 적지만 성과는 큰',
      description: '회의에서 말 한마디 안 하다가 마지막에 핵심 한 줄로 정리하는 사람. 존재감이 없다고? 이 사람이 휴가 쓰는 날 팀 전체가 멘붕에 빠진다. 이메일은 짧고 정확하며, 슬랙 메시지도 이모티콘 하나 없이 깔끔하다. 동료들이 모르는 사이에 이미 보고서를 완성해놓고, "아 그거요? 그냥 해놨어요"라고 말하는 게 일상. 조용하지만 팀장이 가장 신뢰하는 사람, 그래서 연말 인사평가가 늘 좋다.',
      tags: ['#묵묵히일잘', '#숨은MVP', '#프로일잘러'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      id: 'passion-worker',
      title: '열정 파이터',
      emoji: '🔥',
      icon: '/icons/results/office-passion.png',
      subtitle: '일이 곧 삶의 원동력',
      description: '월요일 아침에 출근해서 "이번 주 뭐 해볼까요?"라고 눈을 반짝이는 유일한 사람. 새 프로젝트가 생기면 가장 먼저 손 들고, 야근하면서도 "이거 진짜 재밌지 않아요?"라며 열정을 불태운다. 주말에도 업무 관련 유튜브를 보다가 영감을 얻어 월요일에 제안서를 들고 온 적이 한두 번이 아니다. 동료들은 이 사람의 에너지에 감탄하면서도 약간 지친다. 가끔 "좀 쉬어"라는 말을 듣지만, 쉬는 것도 스트레스인 타입.',
      tags: ['#성장중독', '#도전러', '#야근도즐거움'],
      color: '#ef4444',
      gradient: 'from-red-400 to-rose-500',
    },
    {
      id: 'office-fox',
      title: '사내 여우',
      emoji: '🦊',
      icon: '/icons/results/office-fox.png',
      subtitle: '눈치와 처세의 달인',
      description: '사내 정치라고 하기엔 너무 자연스럽고, 처세술이라 하기엔 진심이 담겨 있다. 팀장님한테는 적절한 타이밍에 보고하고, 동기한테는 정보를 먼저 공유하고, 후배한테는 밥을 산다. 누가 갈등 중이면 양쪽 얘기를 다 듣고 자연스럽게 중재하는 능력이 있다. 회사에서 일어나는 일은 공식 발표 전에 이미 알고 있고, "누가 그러는데~"가 항상 정확하다. 적이 없는 게 최강의 스킬이라는 걸 몸으로 증명하는 사람.',
      tags: ['#눈치9단', '#정보통', '#처세술마스터'],
      color: '#f97316',
      gradient: 'from-orange-400 to-amber-500',
    },
    {
      id: 'leader-type',
      title: '타고난 리더',
      emoji: '👑',
      icon: '/icons/results/office-leader.png',
      subtitle: '앞에서 이끄는 스타일',
      description: '"자 그러면 제가 정리할게요" — 이 한마디로 혼돈의 회의를 끝내는 사람. 누가 시키지 않아도 화이트보드 앞에 서고, 팀 프로젝트에서는 자연스럽게 PM 역할을 맡는다. 의견을 말할 때 주저함이 없고, "이건 이렇게 하는 게 맞을 것 같은데요"가 대부분 진짜로 맞다. 책임감이 강해서 팀원이 못 끝낸 일도 결국 자기가 해결하고, 그래서 가끔 번아웃이 오기도 한다. 후배들에겐 롤모델이고, 팀장님은 이 사람한테 야근 맡기면 안심이 된다.',
      tags: ['#리더십', '#책임감MAX', '#앞장서는편'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'swiss-neutral',
      title: '사내 스위스',
      emoji: '🏔️',
      icon: '/icons/results/office-switzerland.png',
      subtitle: '영원한 중립',
      description: '"그래 그래, 다 좋아~" 어떤 회식 메뉴에도 OK, 어떤 프로젝트 배정에도 OK. 하지만 속으로는 자기만의 판단 기준이 확고하다. 누가 뒤에서 욕해도 내 귀에는 안 들리고, 팀 내 갈등이 생겨도 양쪽 다 웃으면서 인사한다. "~씨는 참 편한 사람이야"라는 말을 제일 많이 듣고, 실제로 누구랑이든 점심을 먹을 수 있다. 무해한 존재 같지만, 사실 이런 사람이 조직의 버팀목이라는 걸 팀장만 알고 있다.',
      tags: ['#평화주의', '#중립국', '#무해한존재'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'lunch-king',
      title: '점심 대장',
      emoji: '🍜',
      icon: '/icons/results/office-lunch-captain.png',
      subtitle: '밥이 곧 업무의 원동력',
      description: '오전 10시부터 "점심 뭐 먹지?"가 머릿속을 지배하는 사람. 회사 반경 2km 내 맛집은 전부 섭렵했고, 새로 생긴 가게가 있으면 출근길에 이미 체크한다. 네이버 지도 저장 목록이 100개를 넘었고, 팀 점심은 이 사람이 정하면 실패가 없다. "오늘은 새로 생긴 우동집 가볼까? 근데 비 오니까 국물 있는 게 낫지 않아?"라는 분석력은 업무에도 썼으면 진작 승진했을 거다. 하지만 맛있는 밥이 업무 효율을 올린다는 확고한 신념이 있다.',
      tags: ['#맛집탐험가', '#밥이보약', '#먹는게낙'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { efficiency = 0, social = 0, initiative = 0, passion = 0 } = scores
    const total = efficiency + social + initiative + passion

    // 돌출 성향 기반 판별
    const max = Math.max(efficiency, social, initiative, passion)

    if (efficiency === max && efficiency > social) {
      if (initiative > passion) return 'time-master'
      return 'silent-ace'
    }
    if (social === max && social > efficiency) {
      if (initiative > passion) return 'mood-maker'
      if (social > initiative + 2) return 'swiss-neutral'
      return 'office-fox'
    }
    if (initiative === max) {
      if (passion >= initiative - 2) return 'passion-worker'
      return 'leader-type'
    }
    if (passion === max) {
      if (social > efficiency) return 'lunch-king'
      return 'passion-worker'
    }

    // fallback
    if (total < 15) return 'swiss-neutral'
    return 'silent-ace'
  },
}

export default officeTest
