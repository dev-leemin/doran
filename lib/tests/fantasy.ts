import { TestConfig, CATEGORY_COLORS } from './types'

const fantasyTest: TestConfig = {
  id: 'fantasy',
  title: '판타지 세계 속 나는?',
  emoji: '🧙',
  icon: '/icons/tests/fantasy.png',
  description: '판타지 세계에서 나의 직업을 알아보세요',
  category: 'fun',
  color: CATEGORY_COLORS.fun,
  tags: ['판타지', 'RPG', '직업', '게임'],
  avgTime: '3분',
  createdAt: '2026-02-25',
  axes: ['strength', 'intelligence', 'charisma', 'agility'],

  questions: [
    {
      id: 1,
      situation: '던전 입구에 도착했다. 어둡고 으스스한 분위기.',
      emoji: '🏚️',
      choices: [
        { text: '문을 발로 차고 들어간다', emoji: '🦶', scores: { strength: 3, agility: 1 } },
        { text: '마법으로 내부를 먼저 탐지한다', emoji: '🔮', scores: { intelligence: 3, charisma: 1 } },
        { text: '동료들에게 "내가 선두에 설게!"', emoji: '🛡️', scores: { charisma: 3, strength: 1 } },
        { text: '조용히 그림자 속으로 스며들어 정찰한다', emoji: '🌑', scores: { agility: 3, intelligence: 1 } },
      ],
    },
    {
      id: 2,
      situation: '마을 광장에서 왕의 칙령이 내려왔다. "용을 퇴치할 용사를 구합니다!"',
      emoji: '📜',
      choices: [
        { text: '"내가 가겠소!" 당장 나선다', emoji: '⚔️', scores: { strength: 3, charisma: 1 } },
        { text: '용에 대한 정보부터 수집한다', emoji: '📚', scores: { intelligence: 3, agility: 1 } },
        { text: '모험 파티를 구성하기 위해 동료를 모은다', emoji: '👥', scores: { charisma: 3, intelligence: 1 } },
        { text: '보상금이 얼마인지부터 확인한다', emoji: '💰', scores: { agility: 3, strength: 1 } },
      ],
    },
    {
      id: 3,
      situation: '숲속에서 정체불명의 빛나는 물약을 발견했다.',
      emoji: '✨',
      choices: [
        { text: '고민 없이 벌컥 마셔본다', emoji: '🧪', scores: { strength: 3, agility: 1 } },
        { text: '성분을 분석하고 효과를 연구한다', emoji: '🔬', scores: { intelligence: 3, charisma: 1 } },
        { text: '지나가는 여행자에게 보여주고 의견을 묻는다', emoji: '🗣️', scores: { charisma: 3, strength: 1 } },
        { text: '일단 가방에 넣고 나중에 팔 생각을 한다', emoji: '🎒', scores: { agility: 3, intelligence: 1 } },
      ],
    },
    {
      id: 4,
      situation: '길을 걷다가 산적 무리에게 둘러싸였다!',
      emoji: '🗡️',
      choices: [
        { text: '주먹을 쥐고 정면으로 돌파한다', emoji: '👊', scores: { strength: 3, charisma: 1 } },
        { text: '환상 마법으로 분신을 만들어 혼란을 준다', emoji: '🌀', scores: { intelligence: 3, agility: 1 } },
        { text: '"형님들 대화로 해결합시다!" 협상을 시도한다', emoji: '🤝', scores: { charisma: 3, intelligence: 1 } },
        { text: '연막탄을 터뜨리고 재빠르게 도주한다', emoji: '💨', scores: { agility: 3, strength: 1 } },
      ],
    },
    {
      id: 5,
      situation: '판타지 세계에서 스킬 하나를 배울 수 있다면?',
      emoji: '📖',
      choices: [
        { text: '전설의 검술 — 무엇이든 베어낼 수 있다', emoji: '⚔️', scores: { strength: 3, agility: 2 } },
        { text: '고대 마법 — 세상의 이치를 꿰뚫는 힘', emoji: '🧙', scores: { intelligence: 3, charisma: 1 } },
        { text: '치유의 빛 — 모든 상처와 질병을 치료', emoji: '💚', scores: { charisma: 3, intelligence: 1 } },
        { text: '그림자 걸음 — 어디든 순간이동', emoji: '👤', scores: { agility: 3, strength: 1 } },
      ],
    },
    {
      id: 6,
      situation: '현실에서 회사 프로젝트 발표일인데 준비가 덜 됐다.',
      emoji: '💼',
      choices: [
        { text: '밤새서라도 무조건 끝낸다, 체력으로 버틴다', emoji: '💪', scores: { strength: 3, intelligence: 1 } },
        { text: '핵심만 추려서 완벽한 논리 구조를 세운다', emoji: '🧠', scores: { intelligence: 3, agility: 1 } },
        { text: '팀원들에게 도움을 요청하고 역할을 분배한다', emoji: '🤗', scores: { charisma: 3, strength: 1 } },
        { text: '발표 순서를 슬쩍 뒤로 미루는 꼼수를 쓴다', emoji: '🫣', scores: { agility: 3, charisma: 1 } },
      ],
    },
    {
      id: 7,
      situation: '마법 학교 입학 시험! 어떤 과목에서 자신 있을까?',
      emoji: '🏫',
      choices: [
        { text: '전투 실기 — 몸으로 직접 부딪히며 배운다', emoji: '🥊', scores: { strength: 3, agility: 1 } },
        { text: '마법 이론 — 원리를 이해하는 게 먼저', emoji: '📖', scores: { intelligence: 3, strength: 1 } },
        { text: '외교술 — 다양한 종족과 소통하는 법', emoji: '🌐', scores: { charisma: 3, agility: 1 } },
        { text: '은밀 행동 — 탐지를 피하고 정보를 수집하기', emoji: '🕵️', scores: { agility: 3, intelligence: 1 } },
      ],
    },
    {
      id: 8,
      situation: '파티원이 함정에 빠져 위험에 처했다!',
      emoji: '⚠️',
      choices: [
        { text: '맨손으로 함정 장치를 부숴버린다', emoji: '🔨', scores: { strength: 3, charisma: 1 } },
        { text: '함정의 구조를 분석해서 해제한다', emoji: '⚙️', scores: { intelligence: 3, agility: 1 } },
        { text: '"버텨! 내가 구해줄게!" 격려하며 밧줄을 던진다', emoji: '🪢', scores: { charisma: 3, strength: 1 } },
        { text: '함정 주변의 안전한 루트를 빠르게 찾아낸다', emoji: '🏃', scores: { agility: 3, intelligence: 1 } },
      ],
    },
    {
      id: 9,
      situation: '친구들과 보드게임 중! 어떤 전략을 쓸까?',
      emoji: '🎲',
      choices: [
        { text: '공격 올인! 무조건 밀어붙이기', emoji: '🔥', scores: { strength: 3, agility: 1 } },
        { text: '상대방 패턴을 분석하고 최적의 수를 둔다', emoji: '♟️', scores: { intelligence: 3, strength: 1 } },
        { text: '동맹을 맺고 외교전으로 승리한다', emoji: '🤝', scores: { charisma: 3, intelligence: 1 } },
        { text: '남들이 싸울 때 조용히 점수를 모아간다', emoji: '🤫', scores: { agility: 3, charisma: 1 } },
      ],
    },
    {
      id: 10,
      situation: '마을 축제에 참여하게 됐다. 어떤 역할을 맡을까?',
      emoji: '🎪',
      choices: [
        { text: '씨름 대회나 격투 시합에 출전한다', emoji: '🤼', scores: { strength: 3, charisma: 1 } },
        { text: '불꽃놀이 마법을 연출한다', emoji: '🎆', scores: { intelligence: 3, agility: 1 } },
        { text: '무대 위에서 노래와 연설로 사람들을 사로잡는다', emoji: '🎤', scores: { charisma: 3, strength: 1 } },
        { text: '곡예와 묘기를 선보이며 관객을 즐겁게 한다', emoji: '🤸', scores: { agility: 3, intelligence: 1 } },
      ],
    },
    {
      id: 11,
      situation: '현실에서 뷔페에 왔다. 어떻게 먹을까?',
      emoji: '🍖',
      choices: [
        { text: '고기 코너 직행, 접시에 산처럼 쌓는다', emoji: '🥩', scores: { strength: 3, agility: 1 } },
        { text: '모든 메뉴를 조금씩 맛보며 최적의 조합을 찾는다', emoji: '🍽️', scores: { intelligence: 3, charisma: 1 } },
        { text: '같이 온 사람들 먹을 것도 같이 가져다준다', emoji: '😊', scores: { charisma: 3, intelligence: 1 } },
        { text: '사람 없는 타이밍에 재빠르게 인기 메뉴를 확보한다', emoji: '🏃‍♂️', scores: { agility: 3, strength: 1 } },
      ],
    },
    {
      id: 12,
      situation: '마법 무기 상점에 왔다. 어떤 아이템을 고를까?',
      emoji: '🏪',
      choices: [
        { text: '전설의 대검 — 한 방에 모든 걸 끝낸다', emoji: '🗡️', scores: { strength: 3, intelligence: 1 } },
        { text: '마법 지팡이 — 무한한 가능성의 도구', emoji: '🪄', scores: { intelligence: 3, agility: 1 } },
        { text: '신성한 목걸이 — 착용자와 주변을 보호한다', emoji: '📿', scores: { charisma: 3, strength: 1 } },
        { text: '그림자 망토 — 투명해져서 어디든 잠입 가능', emoji: '🧥', scores: { agility: 3, charisma: 1 } },
      ],
    },
    {
      id: 13,
      situation: '드래곤과 마주쳤다! 어떻게 대응할까?',
      emoji: '🐉',
      choices: [
        { text: '검을 뽑아들고 정면에서 돌격한다', emoji: '⚔️', scores: { strength: 3, agility: 1 } },
        { text: '드래곤의 약점을 기억해내고 마법으로 공략한다', emoji: '🎯', scores: { intelligence: 3, strength: 1 } },
        { text: '드래곤에게 말을 걸어본다... "대화 가능하신가요?"', emoji: '🐲', scores: { charisma: 3, intelligence: 1 } },
        { text: '드래곤의 사각지대로 빠르게 이동해 기습한다', emoji: '💨', scores: { agility: 3, charisma: 1 } },
      ],
    },
    {
      id: 14,
      situation: '현실에서 SNS에 올릴 프로필 사진을 고르는 중.',
      emoji: '📸',
      choices: [
        { text: '운동하는 모습이나 역동적인 사진', emoji: '🏋️', scores: { strength: 3, charisma: 1 } },
        { text: '독서하거나 작업 중인 지적인 분위기 사진', emoji: '📚', scores: { intelligence: 3, agility: 1 } },
        { text: '친구들과 함께 환하게 웃는 단체 사진', emoji: '😄', scores: { charisma: 3, strength: 1 } },
        { text: '감성적이고 미스터리한 분위기의 셀카', emoji: '🌙', scores: { agility: 3, intelligence: 1 } },
      ],
    },
    {
      id: 15,
      situation: '왕국의 왕이 너에게 직책을 하나 내려준다면?',
      emoji: '👑',
      choices: [
        { text: '왕국 수호 기사단장', emoji: '⚔️', scores: { strength: 3, charisma: 2 } },
        { text: '궁정 수석 마법사', emoji: '🧙', scores: { intelligence: 3, agility: 1 } },
        { text: '외교 대신 — 주변국과의 평화 담당', emoji: '🕊️', scores: { charisma: 3, intelligence: 1 } },
        { text: '왕실 정보부 수장 — 비밀 정보 총괄', emoji: '🕵️‍♂️', scores: { agility: 3, strength: 1 } },
      ],
    },
    {
      id: 16,
      situation: '동료 모험가가 배신하고 보물을 독차지하려 한다!',
      emoji: '😡',
      choices: [
        { text: '힘으로 제압하고 보물을 되찾는다', emoji: '💢', scores: { strength: 3, agility: 1 } },
        { text: '이미 예상했다는 듯 함정을 발동시킨다', emoji: '🪤', scores: { intelligence: 3, charisma: 1 } },
        { text: '"다시 생각해봐... 우리 같이 가면 더 크게 벌 수 있어"', emoji: '🗣️', scores: { charisma: 3, agility: 1 } },
        { text: '보물을 먼저 챙겨서 도주한다', emoji: '🏃‍♂️', scores: { agility: 3, strength: 1 } },
      ],
    },
    {
      id: 17,
      situation: '현실에서 갑자기 1주일 휴가가 생겼다!',
      emoji: '🎉',
      choices: [
        { text: '등산, 서핑 등 아웃도어 액티비티를 즐긴다', emoji: '🏔️', scores: { strength: 3, agility: 1 } },
        { text: '이 참에 관심 있던 분야를 집중 공부한다', emoji: '📖', scores: { intelligence: 3, strength: 1 } },
        { text: '연락 못 했던 사람들 만나며 시간을 보낸다', emoji: '🥂', scores: { charisma: 3, intelligence: 1 } },
        { text: '아무 계획 없이 즉흥적으로 여행을 떠난다', emoji: '🧳', scores: { agility: 3, charisma: 1 } },
      ],
    },
    {
      id: 18,
      situation: '미지의 섬에 표류했다. 가장 먼저 할 일은?',
      emoji: '🏝️',
      choices: [
        { text: '나무를 베어 임시 거처를 짓는다', emoji: '🪓', scores: { strength: 3, intelligence: 1 } },
        { text: '주변 환경을 관찰하고 식수와 식량을 분석한다', emoji: '🔍', scores: { intelligence: 3, agility: 1 } },
        { text: '혹시 있을 원주민이나 다른 표류자를 찾아나선다', emoji: '🤝', scores: { charisma: 3, strength: 1 } },
        { text: '높은 곳에 올라가 지형을 파악하고 탈출로를 찾는다', emoji: '🗺️', scores: { agility: 3, intelligence: 1 } },
      ],
    },
    {
      id: 19,
      situation: '마법사 길드에서 퀘스트를 골라야 한다.',
      emoji: '📋',
      choices: [
        { text: '몬스터 소탕 퀘스트 — 보상이 가장 크다', emoji: '👹', scores: { strength: 3, charisma: 1 } },
        { text: '고대 유적 조사 퀘스트 — 잃어버린 마법서를 찾아라', emoji: '🏛️', scores: { intelligence: 3, agility: 1 } },
        { text: '마을 분쟁 중재 퀘스트 — 두 마을의 갈등 해결', emoji: '⚖️', scores: { charisma: 3, intelligence: 1 } },
        { text: '비밀 호위 퀘스트 — VIP를 몰래 목적지까지 호송', emoji: '🤫', scores: { agility: 3, strength: 1 } },
      ],
    },
    {
      id: 20,
      situation: '현실에서 친구가 이사하는데 도와달라고 했다.',
      emoji: '📦',
      choices: [
        { text: '짐 나르기 담당! 무거운 것도 거뜬하다', emoji: '💪', scores: { strength: 3, charisma: 1 } },
        { text: '가구 배치 계획을 세워주고 효율적으로 정리한다', emoji: '📐', scores: { intelligence: 3, agility: 1 } },
        { text: '다른 친구들도 불러서 다 같이 도와준다', emoji: '📞', scores: { charisma: 3, strength: 1 } },
        { text: '포장과 분류를 빠르고 깔끔하게 해낸다', emoji: '📋', scores: { agility: 3, intelligence: 1 } },
      ],
    },
    {
      id: 21,
      situation: '전쟁이 터졌다! 왕국의 군대에서 네 포지션은?',
      emoji: '🏰',
      choices: [
        { text: '최전선 돌격대 — 선두에서 적을 무찌른다', emoji: '🪖', scores: { strength: 3, agility: 2 } },
        { text: '마법 포병대 — 후방에서 광역 마법 지원', emoji: '🔥', scores: { intelligence: 3, strength: 1 } },
        { text: '군의관 및 사기 진작 부대', emoji: '💚', scores: { charisma: 3, agility: 1 } },
        { text: '정찰대 — 적진에 잠입해 정보를 빼온다', emoji: '🥷', scores: { agility: 3, intelligence: 1 } },
      ],
    },
    {
      id: 22,
      situation: '현실에서 길 가다 지갑을 주웠다. 어떻게 할까?',
      emoji: '👛',
      choices: [
        { text: '직접 경찰서에 가서 맡긴다', emoji: '🚔', scores: { strength: 2, charisma: 2 } },
        { text: '신분증 보고 주인을 찾아 직접 연락한다', emoji: '🔎', scores: { intelligence: 3, agility: 1 } },
        { text: '주변 가게에 맡기면서 주인이 올 수 있도록 안내한다', emoji: '🏪', scores: { charisma: 3, intelligence: 1 } },
        { text: '분실물 센터에 빠르게 접수하고 간다', emoji: '📝', scores: { agility: 3, strength: 1 } },
      ],
    },
    {
      id: 23,
      situation: '마법의 거울이 미래의 너를 보여준다. 어떤 모습일까?',
      emoji: '🪞',
      choices: [
        { text: '전장에서 적을 무찌르는 위대한 영웅', emoji: '🦸', scores: { strength: 3, charisma: 1 } },
        { text: '마법탑에서 진리를 연구하는 현자', emoji: '🏗️', scores: { intelligence: 3, agility: 1 } },
        { text: '수많은 사람들에게 존경받는 지도자', emoji: '👑', scores: { charisma: 3, strength: 1 } },
        { text: '세계 곳곳을 누비는 전설의 모험가', emoji: '🗺️', scores: { agility: 3, intelligence: 1 } },
      ],
    },
    {
      id: 24,
      situation: '현실에서 팀 프로젝트를 맡게 됐다. 어떤 역할을 할까?',
      emoji: '🧑‍💻',
      choices: [
        { text: '실행력 담당 — 말보다 행동, 바로 결과물을 만든다', emoji: '🔨', scores: { strength: 3, intelligence: 1 } },
        { text: '기획 및 분석 — 데이터 기반으로 전략을 세운다', emoji: '📊', scores: { intelligence: 3, charisma: 1 } },
        { text: '발표 및 소통 — 팀을 이끌고 의견을 조율한다', emoji: '🎤', scores: { charisma: 3, agility: 1 } },
        { text: '멀티태스커 — 이것저것 빠르게 처리하며 빈틈을 메운다', emoji: '⚡', scores: { agility: 3, strength: 1 } },
      ],
    },
    {
      id: 25,
      situation: '최종 보스전! 마왕 앞에 섰다. 마지막 한마디는?',
      emoji: '👿',
      choices: [
        { text: '"내 주먹의 맛을 보여주지!"', emoji: '👊', scores: { strength: 3, agility: 1 } },
        { text: '"네 약점은 이미 파악했다. 끝이야."', emoji: '🧠', scores: { intelligence: 3, strength: 1 } },
        { text: '"내 뒤에는 나를 믿는 사람들이 있다!"', emoji: '🌟', scores: { charisma: 3, intelligence: 1 } },
        { text: '말 없이 빠르게 뒤를 잡아 급소를 노린다', emoji: '🥷', scores: { agility: 3, charisma: 1 } },
      ],
    },
  ],

  results: [
    {
      id: 'warrior',
      title: '용감한 전사',
      emoji: '⚔️',
      icon: '/icons/results/fantasy-warrior.png',
      subtitle: '두려움 없는 최전선의 영웅',
      description: '당신은 판타지 세계에서 가장 먼저 전장에 뛰어드는 용감한 전사! 말보다 행동이 앞서고, 어떤 위기 상황에서도 물러서지 않는 강인한 의지를 가지고 있어요. 동료들이 위험에 처하면 몸을 사리지 않고 앞장서서 지켜주는 타입이죠. 가끔은 너무 무모해 보일 수도 있지만, 그런 당신의 용기가 주변 사람들에게 큰 힘이 됩니다.',
      tags: ['#용기만렙', '#행동파', '#든든한방패'],
      color: '#ef4444',
      gradient: 'from-red-400 to-rose-500',
    },
    {
      id: 'mage',
      title: '대마법사',
      emoji: '🧙',
      icon: '/icons/results/fantasy-mage.png',
      subtitle: '지식과 지혜의 수호자',
      description: '당신은 끝없는 지적 호기심으로 마법의 진리를 탐구하는 대마법사! 감정보다 논리를 앞세우고, 어떤 문제든 분석적으로 접근하는 것이 특기예요. 다른 사람들이 패닉에 빠질 때도 냉철하게 해법을 찾아내죠. 책과 지식이 곧 당신의 무기이며, "아는 것이 힘이다"를 온몸으로 실천하는 진정한 지성인입니다.',
      tags: ['#두뇌풀가동', '#분석의달인', '#지식이힘'],
      color: '#8b5cf6',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      id: 'healer',
      title: '성스러운 힐러',
      emoji: '💚',
      icon: '/icons/results/fantasy-healer.png',
      subtitle: '모두를 치유하는 따뜻한 빛',
      description: '당신은 상처받은 영혼까지 치유할 수 있는 성스러운 힐러! 공감 능력이 뛰어나고, 주변 사람들의 감정 변화를 누구보다 먼저 알아채요. 갈등 상황에서도 중재자 역할을 자처하며, 모두가 행복할 수 있는 방법을 찾으려 노력하죠. 당신이 있는 곳에는 언제나 평화롭고 따뜻한 기운이 감돕니다.',
      tags: ['#치유의손길', '#공감력MAX', '#평화주의자'],
      color: '#10b981',
      gradient: 'from-emerald-400 to-teal-500',
    },
    {
      id: 'thief',
      title: '그림자 도적',
      emoji: '🗡️',
      icon: '/icons/results/fantasy-thief.png',
      subtitle: '어둠 속의 전략가',
      description: '당신은 그림자처럼 움직이며 누구도 예상 못한 방법으로 목표를 달성하는 그림자 도적! 정면 승부보다는 효율적인 방법을 찾는 현실주의자예요. 위험을 감지하는 직감이 뛰어나고, 불필요한 충돌은 피하면서도 원하는 것은 반드시 손에 넣죠. 겉으로는 조용해 보이지만, 그 안에는 날카로운 판단력이 숨어있습니다.',
      tags: ['#은밀한행동', '#효율주의자', '#날카로운직감'],
      color: '#475569',
      gradient: 'from-slate-500 to-gray-700',
    },
    {
      id: 'ranger',
      title: '자유로운 궁수',
      emoji: '🏹',
      icon: '/icons/results/fantasy-ranger.png',
      subtitle: '자연과 함께하는 자유인',
      description: '당신은 넓은 들판을 누비며 자유롭게 활을 쏘는 궁수 타입! 한 곳에 정착하기보다 끊임없이 새로운 곳을 탐험하고 싶어하는 모험가의 영혼을 가졌어요. 민첩하면서도 강인한 체력을 겸비해, 어떤 환경에서도 살아남는 서바이벌 능력이 뛰어나죠. 규칙에 얽매이지 않는 자유로운 영혼이야말로 당신의 가장 큰 매력입니다.',
      tags: ['#자유로운영혼', '#모험가기질', '#만능서바이버'],
      color: '#f59e0b',
      gradient: 'from-amber-400 to-yellow-500',
    },
    {
      id: 'bard',
      title: '매혹의 음유시인',
      emoji: '🎵',
      icon: '/icons/results/fantasy-bard.png',
      subtitle: '말과 노래로 세상을 움직이는',
      description: '당신은 달콤한 말과 매력적인 카리스마로 모든 이의 마음을 사로잡는 음유시인! 어떤 상황에서도 분위기를 주도하고, 사람들의 사기를 높이는 천부적인 재능이 있어요. 적도 내 편으로 만드는 설득력은 어떤 무기보다 강력하죠. 모임의 중심에는 항상 당신이 있고, 당신이 없으면 왠지 허전하다는 말을 자주 듣습니다.',
      tags: ['#매력만점', '#분위기메이커', '#설득의귀재'],
      color: '#ec4899',
      gradient: 'from-pink-400 to-rose-500',
    },
    {
      id: 'paladin',
      title: '정의의 기사',
      emoji: '🛡️',
      icon: '/icons/results/fantasy-paladin.png',
      subtitle: '힘과 신념으로 지키는 수호자',
      description: '당신은 강한 힘과 확고한 신념을 모두 갖춘 정의의 기사! 약한 자를 돕고, 불의를 보면 참지 못하는 정의로운 성격의 소유자예요. 전사의 무력과 힐러의 따뜻함을 동시에 가지고 있어, 리더로서의 자질이 뛰어나죠. 당신의 등 뒤에 서면 세상 어떤 것도 무섭지 않다는 안정감을 주는 진정한 수호자입니다.',
      tags: ['#정의구현', '#수호자본능', '#리더의자질'],
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
    },
    {
      id: 'alchemist',
      title: '천재 연금술사',
      emoji: '🧪',
      icon: '/icons/results/fantasy-alchemist.png',
      subtitle: '호기심과 실험정신의 화신',
      description: '당신은 끝없는 호기심과 손재주로 무에서 유를 창조하는 천재 연금술사! 지식을 쌓되 그것을 실제로 활용하는 능력이 탁월해요. 남들이 불가능하다고 말하는 것도 실험과 도전으로 가능하게 만들죠. 머리도 좋고 손도 빠른 만능 타입이라, 어떤 상황에서든 창의적인 해결책을 뚝딱 만들어내는 것이 당신의 특기입니다.',
      tags: ['#창의력폭발', '#실험정신', '#만능제조기'],
      color: '#f97316',
      gradient: 'from-orange-400 to-amber-500',
    },
  ],

  calculateResult(scores: Record<string, number>): string {
    const { strength = 0, intelligence = 0, charisma = 0, agility = 0 } = scores

    const max = Math.max(strength, intelligence, charisma, agility)

    // 전사 계열: 힘이 최고
    if (strength === max && strength > intelligence) {
      // 힘 + 카리스마 높으면 기사
      if (charisma >= strength - 3) return 'paladin'
      // 힘 + 민첩 높으면 궁수
      if (agility >= strength - 3) return 'ranger'
      return 'warrior'
    }

    // 마법사 계열: 지능이 최고
    if (intelligence === max && intelligence > charisma) {
      // 지능 + 민첩 높으면 연금술사
      if (agility >= intelligence - 3) return 'alchemist'
      return 'mage'
    }

    // 카리스마 계열
    if (charisma === max) {
      // 카리스마 + 힘 높으면 기사
      if (strength >= charisma - 3) return 'paladin'
      // 카리스마 + 지능 높으면 힐러
      if (intelligence >= charisma - 3) return 'healer'
      return 'bard'
    }

    // 민첩 계열
    if (agility === max) {
      // 민첩 + 힘 높으면 궁수
      if (strength >= agility - 3) return 'ranger'
      // 민첩 + 지능 높으면 연금술사
      if (intelligence >= agility - 3) return 'alchemist'
      return 'thief'
    }

    // fallback — 균형형은 기사
    return 'paladin'
  },
}

export default fantasyTest
