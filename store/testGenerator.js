const careers = [
  {
    careerId: 'firefighter',
    careerName: '소방관',
    careerType: 'R',
    imgURL: '/src/Career_IMG/Test/R/firefighter.png',
    // careerIntroduce: '소방관은 불을 끄는 사람입니다.',
    // careerContents: '직업 설명 스크립트',
    // carrerAptitudeInterest: '적성 및 흥미 스크립트',
  },
  {
    careerId: 'police_officer',
    careerName: '경찰관',
    careerType: 'R',
    imgURL: '/src/Career_IMG/Test/R/police_officer.png',
  },
  {
    careerId: 'soldier',
    careerName: '직업군인',
    careerType: 'R',
    imgURL: '/src/Career_IMG/Test/R/soldier.png',
  },
  {
    careerId: 'athlete',
    careerName: '운동선수',
    careerType: 'R',
    imgURL: '/src/Career_IMG/Test/R/athlete.png',
  },
  {
    careerId: 'pilot',
    careerName: '항공기 조종사',
    careerType: 'R',
    imgURL: '/src/Career_IMG/Test/R/pilot.png',
  },
  {
    careerId: 'chef',
    careerName: '조리사 및 주방장',
    careerType: 'R',
    imgURL: '/src/Career_IMG/Test/R/chef.png',
  },
  {
    careerId: 'doctor',
    careerName: '의사',
    careerType: 'I',
    imgURL: '/src/Career_IMG/Test/I/doctor.png',
  },
  {
    careerId: 'veterinarian',
    careerName: '수의사',
    careerType: 'I',
    imgURL: '/src/Career_IMG/Test/I/veterinarian.png',
  },
  {
    careerId: 'computer_programmer',
    careerName: '컴퓨터프로그래머',
    careerType: 'I',
    imgURL: '/src/Career_IMG/Test/I/computer_programmer.png',
  },
  {
    careerId: 'automotive_engineer',
    careerName: '자동차공학기술자',
    careerType: 'I',
    imgURL: '/src/Career_IMG/Test/I/automotive_engineer.png',
  },
  {
    careerId: 'robotics_engineer',
    careerName: '로봇공학기술자',
    careerType: 'I',
    imgURL: '/src/Career_IMG/Test/I/robotics_engineer.png',
  },

  {
    careerId: 'singer',
    careerName: '가수',
    careerType: 'A',
    imgURL: '/src/Career_IMG/Test/A/singer.png',
  },
  {
    careerId: 'actor',
    careerName: '연기자',
    careerType: 'A',
    imgURL: '/src/Career_IMG/Test/A/actor.png',
  },
  {
    careerId: 'dancer',
    careerName: '무용가',
    careerType: 'A',
    imgURL: '/src/Career_IMG/Test/A/dancer.png',
  },
  {
    careerId: 'painter',
    careerName: '화가',
    careerType: 'A',
    imgURL: '/src/Career_IMG/Test/A/painter.png',
  },
  {
    careerId: 'cartoonist',
    careerName: '만화가',
    careerType: 'A',
    imgURL: '/src/Career_IMG/Test/A/cartoonist.png',
  },
  {
    careerId: 'makeup_artist',
    careerName: '메이크업아티스트',
    careerType: 'A',
    imgURL: '/src/Career_IMG/Test/A/makeup_artist.png',
  },
  {
    careerId: 'youtuber',
    careerName: '유튜브 크리에이터',
    careerType: 'A',
    imgURL: '/src/Career_IMG/Test/A/youtuber.png',
  },

  {
    careerId: 'psychologist',
    careerName: '심리상담사(임상심리사)',
    careerType: 'S',
    imgURL: '/src/Career_IMG/Test/S/psychologist.png',
  },
  {
    careerId: 'nurse',
    careerName: '간호사',
    careerType: 'S',
    imgURL: '/src/Career_IMG/Test/S/nurse.png',
  },
  {
    careerId: 'kindergarten_teacher',
    careerName: '유치원교사',
    careerType: 'S',
    imgURL: '/src/Career_IMG/Test/S/kindergarten_teacher.png',
  },
  {
    careerId: 'school_teacher',
    careerName: '초중등 교사',
    careerType: 'S',
    imgURL: '/src/Career_IMG/Test/S/school_teacher.png',
  },
  {
    careerId: 'clergy',
    careerName: '성직자',
    careerType: 'S',
    imgURL: '/src/Career_IMG/Test/S/clergy.png',
  },

  {
    careerId: 'lawyer',
    careerName: '변호사',
    careerType: 'E',
    imgURL: '/src/Career_IMG/Test/E/lawyer.png',
  },
  {
    careerId: 'diplomat',
    careerName: '외교관',
    careerType: 'E',
    imgURL: '/src/Career_IMG/Test/E/diplomat.png',
  },
  {
    careerId: 'congressman',
    careerName: '국회의원',
    careerType: 'E',
    imgURL: '/src/Career_IMG/Test/E/congressman.png',
  },
  {
    careerId: 'journalist',
    careerName: '기자',
    careerType: 'E',
    imgURL: '/src/Career_IMG/Test/E/journalist.png',
  },
  {
    careerId: 'broadcast_producer',
    careerName: '방송연출가(PD)',
    careerType: 'E',
    imgURL: '/src/Career_IMG/Test/E/broadcast_producer.png',
  },

  {
    careerId: 'public_official',
    careerName: '공무원',
    careerType: 'C',
    imgURL: '/src/Career_IMG/Test/C/public_official.png',
  },
  {
    careerId: 'librarian',
    careerName: '사서',
    careerType: 'C',
    imgURL: '/src/Career_IMG/Test/C/librarian.png',
  },
  {
    careerId: 'banker',
    careerName: '은행원',
    careerType: 'C',
    imgURL: '/src/Career_IMG/Test/C/banker.png',
  },
  {
    careerId: 'air_traffic_controller',
    careerName: '항공교통관제사',
    careerType: 'C',
    imgURL: '/src/Career_IMG/Test/C/air_traffic_controller.png',
  },
  {
    careerId: 'security_specialist',
    careerName: '정보보안전문가',
    careerType: 'C',
    imgURL: '/src/Career_IMG/Test/C/security_specialist.png',
  },
];

// 진로검사 제너레이터 (1차시)
export function* careerFirst() {
  const interestedCareerArray = [];
  const interestedCareerTypeMap = {
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  };
  const shuffledCareers = careers.sort(() => Math.random() - 0.5);

  // 1차시 진로검사 문항
  for (let i = 0; i < shuffledCareers.length; i++) {
    const answer = yield {
      question: shuffledCareers[i].careerName,
      question_imgURL:
        shuffledCareers[i].imgURL || `/src/PT_IMG/Test/PT_Question_IMG_1.png`,
      career: shuffledCareers[i],
      session: 'first',
    };
    if (answer === '1') {
      interestedCareerArray.push(shuffledCareers[i]);
      interestedCareerTypeMap[shuffledCareers[i].careerType]++;
    }
  }

  // 2차시 진로검사 문항
  if (interestedCareerArray.length === 0) {
    return { rankCareers: [], comparisons: {} };
  }
  if (interestedCareerArray.length === 1) {
    return { rankCareers: [interestedCareerArray[0]], comparisons: {} };
  }

  let rounds = [interestedCareerArray.slice()];
  let comparisons = {};
  let rankCareers = [];
  let league = 0;

  // ⚔️ 메인 토너먼트 진행
  while (rounds[league].length > 1) {
    let nextRound = [];
    for (let i = 0; i < rounds[league].length; i += 2) {
      if (i + 1 >= rounds[league].length) {
        // 홀수일 경우 부전승 처리
        nextRound.push(rounds[league][i]);
        continue;
      }

      let left = rounds[league][i];
      let right = rounds[league][i + 1];

      const userChoice = yield { left, right, session: 'second' };
      const winner = userChoice === 'left' ? left : right;
      const loser = userChoice === 'left' ? right : left;

      comparisons[winner] = loser;
      nextRound.push(winner);
    }
    rounds.push(nextRound);
    league++;
  }

  // 1위 결정
  const winner = rounds[league][0];
  rankCareers.push(winner);

  // 2위 결정 (결승에서 패배한 항목)
  if (league > 0) {
    const finalists = rounds[league - 1];
    const secondPlace = finalists.find((c) => c !== winner);
    rankCareers.push(secondPlace);
  }

  // 3위 결정전 (최소 4개 이상일 경우)
  if (rounds[0].length > 2) {
    const finalists = rounds[league - 1];
    const losers = rounds[0].filter((c) => !finalists.includes(c));
    if (losers.length >= 2) {
      const thirdChoice = yield {
        left: losers[0],
        right: losers[1],
        session: 'second',
      };
      const thirdWinner = thirdChoice === 'left' ? losers[0] : losers[1];
      rankCareers.push(thirdWinner);
    } else {
      // 3위 결정전 불가능 시 남은 항목 중 첫 번째를 3위로 지정
      rankCareers.push(losers[0] || '없음');
    }
  }

  return {
    rankCareers,
    interestedCareerTypeMap,
    interestedCareerTypeCount: interestedCareerArray.length,
  };

  // const type = 'CPER';
  // console.log(interestedCareerArray);
  // return { result: `당신의 성격 유형은 ${type} 입니다.`, type };
}

// 성격검사 제너레이터
export function* psychologicalAsesssment() {
  // CP, ER 유형 - 계산을 통해 특정 가능
  let scores_CPER = {
    C: 0,
    P: 0,
    E: 0,
    R: 0,
  };
  // SI 유형 - 노가다 (법칙이 없음)
  let scores_SI = {
    112: 'S',
    212: 'S',
    122: 'S',
    111: 'S',
    211: 'I',
    121: 'I',
    222: 'I',
    221: 'I',
  };
  // OF 유형 - 노가다 (법칙이 없음)
  let scores_OF = {
    121: 'O',
    221: 'O',
    211: 'O',
    122: 'F',
    111: 'F',
    112: 'F',
    212: 'F',
    222: 'O',
  };

  let scoreStr_SI = '',
    scoreStr_OF = '';

  // CP 문항
  const answer1 = yield {
    question:
      '오늘 처음 유치원에 가는 날이야. 반에 들어가니 친구들이 많이 와 있어. 나는 어떻게 할까?”',
    selection: [
      '빈자리에서 선생님을 기다릴 거야',
      '새 친구에게 말을 건네 볼 거야',
    ],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scores_CPER[answer1 === '1' ? 'P' : 'C'] += 1;

  // OF 문항
  const answer2 = yield {
    question:
      '오늘은 종이접기를 하는 날이야. 풀잎반에서는 선생님께서 종이접기를 가르쳐 주시고, 꽃잎반에서는 내 마음대로 종이접기를 할 수 있어. 나는 어떤 반으로 갈까?',
    selection: [
      '풀잎반에서 선생님께서 가르쳐 주시는 대로 종이접기를 할 거야',
      '꽃잎반에서 내 마음대로 종이접기를 할 거야',
    ],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scoreStr_OF += answer2;

  // SI 문항
  const answer3 = yield {
    question:
      '선생님께서 신발정리를 도와줄 친구가 한 명 필요하다고 하셔. 나는 어떻게 할까?',
    selection: [
      '칭찬 받고 싶어서 내가 한다고 할 거야',
      '하고 싶지 않아서 가만히 있을 거야',
    ],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scoreStr_SI += answer3;

  // ER 문항
  const answer4 = yield {
    question:
      '점토놀이를 하는데 짝꿍이 갑자기 슬픈 표정을 하더니 울기 시작해. 나는 어떻게 할까?',
    selection: [
      '무슨 일인지 물어보고 위로해 줄 거야',
      '그만 울고 점토놀이를 하자고 할 거야',
    ],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scores_CPER[answer4 === '1' ? 'E' : 'R'] += 1;

  // ER 문항
  const answer5 = yield {
    question:
      '주말에 맛집에 갔는데 너무 맛있어서 친구에게 알려주고 싶어. 나라면 어떻게 할까?',
    selection: [
      '정말 맛있었다고 신나게 말해 줄 거야',
      '어떤 게 맛있었는지 하나씩 천천히 말해 줄 거야',
    ],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scores_CPER[answer5 === '1' ? 'E' : 'R'] += 1;

  // SI 문항
  const answer6 = yield {
    question:
      '친구는 역할놀이를 하자고 하고 나는 블록놀이를 하고 싶어. 나는 어떻게 할까?',
    selection: [
      '친구가 하고 싶은 역할놀이를 할 거야.',
      '내가 하고 싶은 블록놀이를 할 거야',
    ],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scoreStr_SI += answer6;

  // OF 문항
  const answer7 = yield {
    question: '키즈카페에 놀러 왔어. 어떤 놀이기구를 먼저 탈까?',
    selection: [
      '전에 탔던 놀이기구를 먼저 탈래',
      '새로운 놀이기구를 먼저 탈래',
    ],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scoreStr_OF += answer7;

  // CP 문항
  const answer8 = yield {
    question:
      '소풍을 왔어. 처음 보는 친구들이 재밌는 장난감을 갖고 놀고 있어. 나는 어떻게 할까?',
    selection: [
      '처음 보는 친구들이라 가까이 가지 않을래',
      '처음 보는 친구들한테 가서 물어볼래',
    ],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scores_CPER[answer8 === '1' ? 'P' : 'C'] += 1;

  // CP 문항
  const answer9 = yield {
    question:
      '놀이터에서 무서운 개를 만난 적이 있어. 친구들이 다시 그 놀이터에 가자고 해. 나라면 어떻게 할까?',
    selection: [
      '개가 나타날 수 있으니 안 갈래',
      '개가 나타나지 않을 거라 생각하고 갈래',
    ],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scores_CPER[answer9 === '1' ? 'P' : 'C'] += 1;

  // SI 문항
  const answer10 = yield {
    question:
      '엄마가 읽으라고 한 책을 다 읽고 이제 자유롭게 놀 수 있어. 무얼 하고 놀까?',
    selection: ['혼자 하고 싶은 걸 할 래', '친구들이랑 같이 놀래'],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scoreStr_SI += answer10;

  // ER 문항
  const answer11 = yield {
    question:
      'TV에서 한 아이가 강아지가 많이 아파서 울기 시작해. 나는 어떨 거 같아?',
    selection: ['나도 눈물이 날 거 같아', '어떻게 되는지 계속 볼 래'],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scores_CPER[answer11 === '1' ? 'E' : 'R'] += 1;

  // OF 문항
  const answer12 = yield {
    question:
      '마트에 너무 갖고 싶은 장난감이 있는데 어제 다른 장남감을 샀어. 어떻게 하면 좋을까?',
    selection: [
      '너무 갖고 싶어서 또 사 달라고 할래',
      '너무 갖고 싶지만 어제 샀으니 안 사도 돼',
    ],
    question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
    selection_imgURL: [
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
      '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
    ],
  };
  scoreStr_OF += answer12;

  // 성격 유형 계산
  const type = `${scores_SI[scoreStr_SI]}${scores_OF[scoreStr_OF]}${
    scores_CPER.C >= scores_CPER.P ? 'C' : 'P'
  }${scores_CPER.E >= scores_CPER.R ? 'E' : 'R'}`;

  return { result: `당신의 성격 유형은 ${type} 입니다.`, type };
}

// 정서행동 검사 ClassMap
export const ebtClassMap = {
  School: {
    type: 'School',
    name: '학교생활',
    generator: ebtSchool,
    next: 'Friend',
  },
  Friend: {
    type: 'Friend',
    name: '친구관계',
    generator: ebtFriend,
    next: 'Family',
  },
  Family: {
    type: 'Family',
    name: '가족관계',
    generator: ebtFamily,
    next: 'Mood',
  },
  Mood: {
    type: 'Mood',
    name: '기분',
    generator: ebtMood,
    next: 'Unrest',
  },
  Unrest: {
    type: 'Unrest',
    name: '불안',
    generator: ebtUnrest,
    next: 'Sad',
  },
  Sad: {
    type: 'Sad',
    name: '우울',
    generator: ebtSad,
    next: 'Health',
  },
  Health: {
    type: 'Health',
    name: '신체증상',
    generator: ebtHealth,
    next: 'Attention',
  },
  Attention: {
    type: 'Attention',
    name: '주의집중',
    generator: ebtAttention,
    next: 'Movement',
  },
  Movement: {
    type: 'Movement',
    name: '과잉행동',
    generator: ebtMovement,
    next: 'Angry',
  },
  Angry: {
    type: 'Angry',
    name: '분노/공격성',
    generator: ebtAngry,
    next: 'Self',
  },
  Self: {
    type: 'Self',
    name: '자기인식',
    generator: ebtSelf,
    next: 'END',
  },
};
// 정서행동 검사 - 학교생활
export function* ebtSchool() {
  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '학교생활 하는 건 어때?',
      imgURL: '/src/EBT_IMG/Test/School/01.png',
    },
    selection: {
      content: ['별로야', '그냥 그래', '좋아'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: '담임 선생님은 어떠셔?',
      imgURL: '/src/EBT_IMG/Test/School/02.png',
    },
    selection: {
      content: ['별로야', '그냥 그래', '좋아'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: '숙제는 잘 해 가?',
      imgURL: '/src/EBT_IMG/Test/School/03.png',
    },
    selection: {
      content: [
        '아니 잘 안해',
        '가끔 빠트리기도 하지만 보통은 잘해가',
        '응 잘해가',
      ],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: '수업에 집중하는 건 어때?',
      imgURL: '/src/EBT_IMG/Test/School/04.png',
    },
    selection: {
      content: ['못하겠어', '그냥 그래', '잘할 수 있어'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: '좋아하는 과목이 있어?',
      imgURL: '/src/EBT_IMG/Test/School/05.png',
    },
    selection: {
      content: ['없어', '1~2 과목', '많아'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content: '공부 잘 하는 편이야?',
      imgURL: '/src/EBT_IMG/Test/School/06.png',
    },
    selection: {
      content: ['아니 못해', '보통이야', '응 잘해'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer6);
  // 학교생활 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 학교생활 결과 계산
  const result = scoreSum >= 7.6 ? '경고' : scoreSum >= 6.5 ? '주의' : '양호';

  return {
    result: `너의 학교생활 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 친구관계
export function* ebtFriend() {
  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '같은 반에 친한 친구가 몇 명 있니?',
      imgURL: '/src/EBT_IMG/Test/Friend/07.png',
    },
    selection: {
      content: ['하나도 없어', '조금 있어', '많이 있어'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: '같은 반이 아닌 친구 중에 친한 친구가 몇 명이야?',
      imgURL: '/src/EBT_IMG/Test/Friend/08.png',
    },
    selection: {
      content: ['하나도 없어', '조금 있어', '많이 있어'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: '친구가 더 많았으면 좋겠니?',
      imgURL: '/src/EBT_IMG/Test/Friend/09.png',
    },
    selection: {
      content: ['응 훨씬 더~', '응 조금 더~', '딱 좋은 것 같아'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: '친구들과 얼마나 자주 어울려 놀아?',
      imgURL: '/src/EBT_IMG/Test/Friend/10.png',
    },
    selection: {
      content: ['일주일에 1번~', '일주일에 2~3번~', '일주일에 4번 이상~'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: '친구들이랑 잘 지내는 것 같아?',
      imgURL: '/src/EBT_IMG/Test/Friend/11.png',
    },
    selection: {
      content: ['아니 별로야', '그냥 그래', '응 잘 지내'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content: '다른 친구들에게 인기가 많니?',
      imgURL: '/src/EBT_IMG/Test/Friend/12.png',
    },
    selection: {
      content: ['아니 없어', '그냥 그래', '인기 많아'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer6);

  const answer7 = yield {
    question: {
      content: '친구들이 괴롭힐 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Friend/13.png',
    },
    selection: {
      content: ['아니 없어', '가끔 있어', '자주 있어'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer7);

  const answer8 = yield {
    question: {
      content: '친구들과 싸울 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Friend/14.png',
    },
    selection: {
      content: ['아니 없어', '가끔 있어', '자주 있어'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer8);

  // 학교생활 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 학교생활 결과 계산
  const result = scoreSum >= 9.6 ? '경고' : scoreSum >= 8.2 ? '주의' : '양호';

  return {
    result: `너의 친구관계 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 가족관계
export function* ebtFamily() {
  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '너와 엄마 사이는 어때?',
      imgURL: '/src/EBT_IMG/Test/Family/15.png',
    },
    selection: {
      content: ['안 좋아', '그냥 그래', '좋아', '엄마 없어'],
      score: [2, 1, 0, -1],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: '너와 아빠 사이는 어때?',
      imgURL: '/src/EBT_IMG/Test/Family/16.png',
    },
    selection: {
      content: ['안 좋아', '그냥 그래', '좋아', '아빠 없어'],
      score: [2, 1, 0, -1],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: '너와 형제자매 사이는 어때?',
      imgURL: '/src/EBT_IMG/Test/Family/17.png',
    },
    selection: {
      content: ['안 좋아', '그냥 그래', '좋아', '형제 없어'],
      score: [2, 1, 0, -1],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: '부모님 사이는 어떤 것 같아?',
      imgURL: '/src/EBT_IMG/Test/Family/18.png',
    },
    selection: {
      content: ['안 좋아', '그냥 그래', '좋아', '부모 없어'],
      score: [2, 1, 0, -1],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: '부모님께서 다투실 때는 없어?',
      imgURL: '/src/EBT_IMG/Test/Family/19.png',
    },
    selection: {
      content: ['거의 없어', '가끔 그래', '자주 그래', '부모 없어'],
      score: [0, 1, 2, -1],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content:
        '가족끼리 밥을 먹거나 대화를 나누거나 어떤 활동을 하면서 함께 시간을 보내니?',
      imgURL: '/src/EBT_IMG/Test/Family/20.png',
    },
    selection: {
      content: ['거의 없어', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer6);

  const answer7 = yield {
    question: {
      content: '가족끼리 서로에 대한 관심과 사랑을 표현하니?',
      imgURL: '/src/EBT_IMG/Test/Family/21.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer7);

  // 학교생활 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 학교생활 결과 계산
  const result = scoreSum >= 8 ? '경고' : scoreSum >= 7 ? '주의' : '양호';

  return {
    result: `너의 가족관계 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 기분
export function* ebtMood() {
  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '평소 너의 기분은 어때?',
      imgURL: '/src/EBT_IMG/Test/Mood/22.png',
    },
    selection: {
      content: ['안 좋아', '그냥 그래', '좋아'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: '마음이 편안하거나 기쁠 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Mood/23.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: '마음이 불편하거나 속상할 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Mood/24.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  // 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 결과 계산
  const result = scoreSum >= 5 ? '경고' : scoreSum >= 4 ? '주의' : '양호';

  return {
    result: `너의 기분 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 불안
export function* ebtUnrest() {
  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '무서움을 잘 타거나 자주 깜짝깜짝 놀라니?',
      imgURL: '/src/EBT_IMG/Test/Unrest/25.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: '어둠이나 귀신, 거미, 개와 같이 무서워하는 게 있어?',
      imgURL: '/src/EBT_IMG/Test/Unrest/26.png',
    },
    selection: {
      content: ['거의 없어', '몇 가지 있어', '많이 있어'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: '새로운 곳에 가거나 처음 해보는 일을 할 때 어떠니?',
      imgURL: '/src/EBT_IMG/Test/Unrest/27.png',
    },
    selection: {
      content: ['긴장이 돼', '괜찮아', '신나'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content:
        '처음 본 사람을 만나면 얼굴이 빨개지거나 말이 잘 안 나오고 긴장돼?',
      imgURL: '/src/EBT_IMG/Test/Unrest/28.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: '무언가 안 좋은 일이 일어날까 봐 걱정을 자주 하니?',
      imgURL: '/src/EBT_IMG/Test/Unrest/29.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content: '부모님과 떨어지는 게 힘들어?',
      imgURL: '/src/EBT_IMG/Test/Unrest/30.png',
    },
    selection: {
      content: ['괜찮아', '힘들 때도~', '많이 힘들어'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer6);

  // 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 결과 계산
  const result = scoreSum >= 10 ? '경고' : scoreSum >= 9 ? '주의' : '양호';

  return {
    result: `너의 불안 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 우울
export function* ebtSad() {
  let ebtClass = '우울';
  let danger_score = 10,
    caution_score = 9;

  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '좋아하거나 관심 가지고 있는 게 있니?',
      imgURL: '/src/EBT_IMG/Test/Sad/31.png',
    },
    selection: {
      content: ['거의 없어', '조금 있어', '많이 있어'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: '슬픈 기분이 들거나 울 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Sad/32.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: '활기차고 기분이 좋을 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Sad/33.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: '기운이 없고 피곤해서 아무것도 하기 싫을 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Sad/34.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: '아무도 나에게 관심이 없는 것 같고 외로울 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Sad/35.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content: '너무 많이 먹거나 너무 적게 먹을 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Sad/36.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer6);

  const answer7 = yield {
    question: {
      content: '너무 많이 자거나 너무 적게 잘 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Sad/37.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer7);

  // 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 결과 계산
  const result =
    scoreSum >= danger_score
      ? '경고'
      : scoreSum >= caution_score
        ? '주의'
        : '양호';

  return {
    result: `너의 ${ebtClass} 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 신체증상
export function* ebtHealth() {
  let ebtClass = '신체증상';
  let danger_score = 7,
    caution_score = 6;

  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '너는 네 몸이 튼튼한 것 같니?',
      imgURL: '/src/EBT_IMG/Test/Health/38.png',
    },
    selection: {
      content: ['아니', '그냥 그래', '응 튼튼해'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: '머리가 아플 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Health/39.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: '배가 아프거나 속이 불편할 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Health/40.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: '피곤하거나 쉽게 지칠 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Health/41.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: '여기저기 아픈 편이니?',
      imgURL: '/src/EBT_IMG/Test/Health/42.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer5);

  // 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 결과 계산
  const result =
    scoreSum >= danger_score
      ? '경고'
      : scoreSum >= caution_score
        ? '주의'
        : '양호';

  return {
    result: `너의 ${ebtClass} 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 주의집중
export function* ebtAttention() {
  let ebtClass = '주의집중';
  let danger_score = 11,
    caution_score = 9;

  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '숙제 같은 걸 할 때 뭔가 빼 먹거나 실수할 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Attention/43.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content:
        '수업을 듣거나, 긴 글을 읽거나, 대화를 할 때 잘 집중하지 못하고 딴 생각을 할 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Attention/44.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content:
        '숙제를 끝내야 하는데 한참 동안 딴짓을 해서 오래 걸리거나 다 끝내지 못할 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Attention/45.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: '숙제를 하거나 긴 글을 읽는 것처럼 머리를 많이 쓰는 일은 어때?',
      imgURL: '/src/EBT_IMG/Test/Attention/46.png',
    },
    selection: {
      content: ['괜찮아', '조금 싫어', '너무 싫어'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: '연필이나 실내화 가방 같이 챙겨야 할 물건을 자주 잃어버리니?',
      imgURL: '/src/EBT_IMG/Test/Attention/47.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content:
        '뭔가에 집중하다가도 주변에서 어떤 소리가 들리거나 하면 주의가 자주 흐트러지니?',
      imgURL: '/src/EBT_IMG/Test/Attention/48.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer6);

  const answer7 = yield {
    question: {
      content: '기억해야 할 것을 자주 깜빡해?',
      imgURL: '/src/EBT_IMG/Test/Attention/49.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer7);

  // 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 결과 계산
  const result =
    scoreSum >= danger_score
      ? '경고'
      : scoreSum >= caution_score
        ? '주의'
        : '양호';

  return {
    result: `너의 ${ebtClass} 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 과잉행동
export function* ebtMovement() {
  let ebtClass = '과잉행동';
  let danger_score = 8,
    caution_score = 7;

  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '손발을 가만두지 못하고 자주 꼼지락거리니?',
      imgURL: '/src/EBT_IMG/Test/Movement/50.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content:
        '수업시간 같이 가만히 앉아 있어야 할 때 허락 받지 않고 자리에서 벗어날 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Movement/51.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: '심하게 뛰어다니거나 위험하게 어딘가를 기어오를 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Movement/52.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: '차분히 앉아서 조용하게 놀기 어려울 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Movement/53.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: '말이 많고 시끄러운 편이니?',
      imgURL: '/src/EBT_IMG/Test/Movement/54.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content: '네 차례가 올 때까지 기다리지 못할 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Movement/55.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer6);

  const answer7 = yield {
    question: {
      content:
        '다른 사람이 이야기 나누고 있거나 무언가 하고 있을 때 자주 방해하거나 끼어드니?',
      imgURL: '/src/EBT_IMG/Test/Movement/56.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer7);

  // 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 결과 계산
  const result =
    scoreSum >= danger_score
      ? '경고'
      : scoreSum >= caution_score
        ? '주의'
        : '양호';

  return {
    result: `너의 ${ebtClass} 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 분노/공격성
export function* ebtAngry() {
  let ebtClass = '분노/공격성';
  let danger_score = 8,
    caution_score = 7;

  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '짜증나거나 신경질 날 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Angry/57.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: '화가 나서 큰 소리를 지를 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Angry/58.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: '화가 나서 물건을 던지거나 부술 때가 있니?',
      imgURL: '/src/EBT_IMG/Test/Angry/59.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: '친구를 못살게 굴 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Angry/60.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: '형제자매와 자주 다투니?',
      imgURL: '/src/EBT_IMG/Test/Angry/61.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content: '부모님이나 선생님 말씀을 안 듣고 네 마음대로 할 때가 있어?',
      imgURL: '/src/EBT_IMG/Test/Angry/62.png',
    },
    selection: {
      content: ['거의 안 그래', '가끔 그래', '자주 그래'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer6);

  // 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 결과 계산
  const result =
    scoreSum >= danger_score
      ? '경고'
      : scoreSum >= caution_score
        ? '주의'
        : '양호';

  return {
    result: `너의 ${ebtClass} 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 자기인식
export function* ebtSelf() {
  let ebtClass = '자기인식';
  let danger_score = 7.1,
    caution_score = 5.9;

  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: '너는 네가 착하고 좋은 사람이라고 느껴져?',
      imgURL: '/src/EBT_IMG/Test/Self/63.png',
    },
    selection: {
      content: ['아니', '그냥 그래', '진짜 그래'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: '네가 사랑받는 소중한 사람이라고 느껴져?',
      imgURL: '/src/EBT_IMG/Test/Self/64.png',
    },
    selection: {
      content: ['아니', '그냥 그래', '진짜 그래'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: '네가 할 일을 항상 잘 해낼 수 있니?',
      imgURL: '/src/EBT_IMG/Test/Self/65.png',
    },
    selection: {
      content: ['아니', '그냥 그래', '진짜 그래'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: '네가 부족한 점이 많다고 생각해?',
      imgURL: '/src/EBT_IMG/Test/Self/66.png',
    },
    selection: {
      content: ['아니', '약간 있어', '진짜 많아'],
      score: [0, 1, 2],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: '네 외모는 어떤 거 같아?',
      imgURL: '/src/EBT_IMG/Test/Self/67.png',
    },
    selection: {
      content: ['별로야', '그냥 그래', '좋아'],
      score: [2, 1, 0],
      imgURL: [
        '/src/EBT_IMG/Icon/EBT_Bad_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Normal_Icon_IMG.png',
        '/src/EBT_IMG/Icon/EBT_Good_Icon_IMG.png',
      ],
    },
  };
  ebtScore.push(answer5);

  // 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 결과 계산
  const result =
    scoreSum >= danger_score
      ? '경고'
      : scoreSum >= caution_score
        ? '주의'
        : '양호';

  return {
    result: `너의 ${ebtClass} 검사 결과는 ${result} 수준이야.`,
    ebtScore,
  };
}
