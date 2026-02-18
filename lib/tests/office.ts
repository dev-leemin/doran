import { TestConfig, CATEGORY_COLORS } from './types'

const officeTest: TestConfig = {
  id: 'office',
  title: '회사에서 나는?',
  emoji: '🏢',
  icon: '/icons/office.png',
  description: '당신의 직장생활 캐릭터를 알아보세요',
  category: 'personality',
  color: CATEGORY_COLORS.personality,
  tags: ['직장인', '성격유형', '회사생활', 'MBTI'],
  avgTime: '3분',
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
      subtitle: '효율의 끝판왕',
      description: '업무 시간 안에 모든 걸 끝내는 타입. 야근은 곧 비효율의 증거라고 생각한다. 퇴근 후 자기 시간이 진짜 인생.',
      tags: ['#칼퇴장인', '#효율충', '#워라밸수호자'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'mood-maker',
      title: '분위기 메이커',
      emoji: '🎪',
      subtitle: '없으면 허전한 사람',
      description: '팀 분위기를 책임지는 사람. 회식 총대도 메고, 신입 케어도 하고. 이 사람이 없으면 팀이 조용해진다.',
      tags: ['#인싸력MAX', '#팀의비타민', '#소통왕'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-orange-500',
    },
    {
      id: 'silent-ace',
      title: '조용한 에이스',
      emoji: '🎯',
      subtitle: '말은 적지만 성과는 큰',
      description: '조용히 자기 할 일 하고, 묵묵히 성과를 내는 타입. 존재감은 없지만 없으면 일이 안 돌아간다.',
      tags: ['#묵묵히일잘', '#숨은MVP', '#프로일잘러'],
      color: '#6366f1',
      gradient: 'from-indigo-400 to-purple-500',
    },
    {
      id: 'passion-worker',
      title: '열정 파이터',
      emoji: '🔥',
      subtitle: '일이 곧 삶의 원동력',
      description: '새 프로젝트에 불타오르고, 야근도 마다하지 않는 열정가. 성장과 도전이 이 사람의 키워드.',
      tags: ['#성장중독', '#도전러', '#야근도즐거움'],
      color: '#ef4444',
      gradient: 'from-red-400 to-rose-500',
    },
    {
      id: 'office-fox',
      title: '사내 여우',
      emoji: '🦊',
      subtitle: '눈치와 처세의 달인',
      description: '윗사람, 아랫사람 모두에게 잘 맞추는 타입. 갈등 중재도 잘하고, 정보도 빠르다.',
      tags: ['#눈치9단', '#정보통', '#처세술마스터'],
      color: '#f97316',
      gradient: 'from-orange-400 to-amber-500',
    },
    {
      id: 'leader-type',
      title: '타고난 리더',
      emoji: '👑',
      subtitle: '앞에서 이끄는 스타일',
      description: '누가 시키지 않아도 앞장서는 타입. 의견 제시도 확실하고, 책임감도 강하다.',
      tags: ['#리더십', '#책임감MAX', '#앞장서는편'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'swiss-neutral',
      title: '사내 스위스',
      emoji: '🏔️',
      subtitle: '영원한 중립',
      description: '어디에도 적을 만들지 않는 평화주의자. 누구와든 잘 지내고, 조용히 자기 갈 길을 간다.',
      tags: ['#평화주의', '#중립국', '#무해한존재'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'lunch-king',
      title: '점심 대장',
      emoji: '🍜',
      subtitle: '밥이 곧 업무의 원동력',
      description: '맛집 리스트는 기본, 오늘 뭐 먹을지가 하루의 최대 관심사. 이 사람 따라가면 점심이 행복하다.',
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
