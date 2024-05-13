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
    112: "S",
    212: "S",
    122: "S",
    111: "S",
    211: "I",
    121: "I",
    222: "I",
    221: "I",
  };
  // OF 유형 - 노가다 (법칙이 없음)
  let scores_OF = {
    121: "O",
    221: "O",
    211: "O",
    122: "F",
    111: "F",
    112: "F",
    212: "F",
    222: "O",
  };

  let scoreStr_SI = "",
    scoreStr_OF = "";

  // CP 문항
  const answer1 = yield {
    question:
      "오늘 처음 유치원에 가는 날이야. 반에 들어가니 친구들이 많이 와 있어. 나는 어떻게 할까?”",
    selection: [
      "1. 빈자리에서 선생님을 기다릴 거야",
      "2: 새 친구에게 말을 건네 볼 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer1 === "1" ? "P" : "C"] += 1;

  // OF 문항
  const answer2 = yield {
    question:
      "오늘은 종이접기를 하는 날이야. 풀잎반에서는 선생님께서 종이접기를 가르쳐 주시고, 꽃잎반에서는 내 마음대로 종이접기를 할 수 있어. 나는 어떤 반으로 갈까?",
    selection: [
      "1: 풀잎반에서 선생님께서 가르쳐 주시는 대로 종이접기를 할 거야",
      "2: 꽃잎반에서 내 마음대로 종이접기를 할 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_OF += answer2;

  // SI 문항
  const answer3 = yield {
    question:
      "선생님께서 신발정리를 도와줄 친구가 한 명 필요하다고 하셔. 나는 어떻게 할까?",
    selection: [
      "1: 칭찬 받고 싶어서 내가 한다고 할 거야",
      "2: 하고 싶지 않아서 가만히 있을 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_SI += answer3;

  // ER 문항
  const answer4 = yield {
    question:
      "점토놀이를 하는데 짝꿍이 갑자기 슬픈 표정을 하더니 울기 시작해. 나는 어떻게 할까?",
    selection: [
      "1: 무슨 일인지 물어보고 위로해 줄 거야",
      "2: 그만 울고 점토놀이를 하자고 할 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer4 === "1" ? "E" : "R"] += 1;

  // ER 문항
  const answer5 = yield {
    question:
      "주말에 맛집에 갔는데 너무 맛있어서 친구에게 알려주고 싶어. 나라면 어떻게 할까?",
    selection: [
      "1: 정말 맛있었다고 신나게 말해 줄 거야",
      "2: 어떤 게 맛있었는지 하나씩 천천히 말해 줄 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer5 === "1" ? "E" : "R"] += 1;

  // SI 문항
  const answer6 = yield {
    question:
      "친구는 역할놀이를 하자고 하고 나는 블록놀이를 하고 싶어. 나는 어떻게 할까?",
    selection: [
      "1: 친구가 하고 싶은 역할놀이를 할 거야.",
      "2: 내가 하고 싶은 블록놀이를 할 거야",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_SI += answer6;

  // OF 문항
  const answer7 = yield {
    question: "키즈카페에 놀러 왔어. 어떤 놀이기구를 먼저 탈까?",
    selection: [
      "1: 전에 탔던 놀이기구를 먼저 탈래",
      "2: 새로운 놀이기구를 먼저 탈래",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_OF += answer7;

  // CP 문항
  const answer8 = yield {
    question:
      "소풍을 왔어. 처음 보는 친구들이 재밌는 장난감을 갖고 놀고 있어. 나는 어떻게 할까?",
    selection: [
      "1: 처음 보는 친구들이라 가까이 가지 않을래",
      "2: 처음 보는 친구들한테 가서 물어볼래",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer8 === "1" ? "P" : "C"] += 1;

  // CP 문항
  const answer9 = yield {
    question:
      "놀이터에서 무서운 개를 만난 적이 있어. 친구들이 다시 그 놀이터에 가자고 해. 나라면 어떻게 할까?",
    selection: [
      "1: 개가 나타날 수 있으니 안 갈래",
      "2: 개가 나타나지 않을 거라 생각하고 갈래",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer9 === "1" ? "P" : "C"] += 1;

  // SI 문항
  const answer10 = yield {
    question:
      "엄마가 읽으라고 한 책을 다 읽고 이제 자유롭게 놀 수 있어. 무얼 하고 놀까?",
    selection: ["1: 혼자 하고 싶은 걸 할 래", "2: 친구들이랑 같이 놀래"],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_SI += answer10;

  // ER 문항
  const answer11 = yield {
    question:
      "TV에서 한 아이가 강아지가 많이 아파서 울기 시작해. 나는 어떨 거 같아?",
    selection: ["1: 나도 눈물이 날 거 같아", "2: 어떻게 되는지 계속 볼 래"],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scores_CPER[answer11 === "1" ? "E" : "R"] += 1;

  // OF 문항
  const answer12 = yield {
    question:
      "마트에 너무 갖고 싶은 장난감이 있는데 어제 다른 장남감을 샀어. 어떻게 하면 좋을까?",
    selection: [
      "1: 너무 갖고 싶어서 또 사 달라고 할래",
      "2: 너무 갖고 싶지만 어제 샀으니 안 사도 돼",
    ],
    question_imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    selection_imgURL: [
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    ],
  };
  scoreStr_OF += answer12;

  // 성격 유형 계산
  const type = `${scores_SI[scoreStr_SI]}${scores_OF[scoreStr_OF]}${
    scores_CPER.C >= scores_CPER.P ? "C" : "P"
  }${scores_CPER.E >= scores_CPER.R ? "E" : "R"}`;

  return { result: `당신의 성격 유형은 ${type} 입니다.`, type };
}
// 정서행동 검사 - 학교생활
export function* ebtSchool() {
  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: "학교생활 하는 건 어때?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["별로야", "그냥 그래", "좋아"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: "담임 선생님은 어떠셔?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["별로야", "그냥 그래", "좋아"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: "숙제는 잘 해 가?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: [
        "아니 잘 안해",
        "가끔 빠트리기도 하지만 보통은 잘해가",
        "응 잘해가",
      ],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: "수업에 집중하는 건 어때?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["못하겠어", "그냥 그래", "잘할 수 있어"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: "좋아하는 과목이 있어?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["없어", "1~2 과목", "많아"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content: "공부 잘 하는 편이야?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["아니 못해", "보통이야", "응 잘해"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer6);
  // 학교생활 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 학교생활 결과 계산
  const result = scoreSum > 7.6 ? "경고" : scoreSum > 6.5 ? "주의" : "양호";

  return {
    result: `너의 학교생활 만족도와 적응 수준은 ${result} 단계야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 친구관계
export function* ebtFriend() {
  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: "같은 반에 친한 친구가 몇 명 있니?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["하나도 없어", "조금 있어", "많이 있어"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: "같은 반이 아닌 친구 중에 친한 친구가 몇 명이야?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["하나도 없어", "조금 있어", "많이 있어"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: "친구가 더 많았으면 좋겠니?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["응 훨씬 더~", "응 조금 더~", "딱 좋은 것 같아"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: "친구들과 얼마나 자주 어울려 놀아?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["일주일에 1번~", "일주일에 2~3번~", "일주일에 4번 이상~"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: "친구들이랑 잘 지내는 것 같아?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["아니 별로야", "그냥 그래", "응 잘 지내"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content: "다른 친구들에게 인기가 많니?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["아니 없어", "그냥 그래", "인기 많아"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer6);

  const answer7 = yield {
    question: {
      content: "친구들이 괴롭힐 때가 있어?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["아니 없어", "가끔 있어", "자주 있어"],
      score: [0, 1, 2],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer7);

  const answer8 = yield {
    question: {
      content: "친구들과 싸울 때가 있니?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["아니 없어", "가끔 있어", "자주 있어"],
      score: [0, 1, 2],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer8);

  // 학교생활 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 학교생활 결과 계산
  const result = scoreSum > 9.6 ? "경고" : scoreSum > 8.2 ? "주의" : "양호";

  return {
    result: `너의 친구관계 만족도와 적응 수준은 ${result} 단계야.`,
    ebtScore,
  };
}
// 정서행동 검사 - 가족관계
export function* ebtFamily() {
  let ebtScore = [],
    scoreSum = 0;

  const answer1 = yield {
    question: {
      content: "너와 엄마 사이는 어때?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["안 좋아", "그냥 그래", "좋아", "엄마 없어"],
      score: [2, 1, 0, -1],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer1);

  const answer2 = yield {
    question: {
      content: "너와 아빠 사이는 어때?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["안 좋아", "그냥 그래", "좋아", "아빠 없어"],
      score: [2, 1, 0, -1],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer2);

  const answer3 = yield {
    question: {
      content: "너와 형제자매 사이는 어때?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["안 좋아", "그냥 그래", "좋아", "형제 없어"],
      score: [2, 1, 0, -1],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer3);

  const answer4 = yield {
    question: {
      content: "부모님 사이는 어떤 것 같아?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["안 좋아", "그냥 그래", "좋아", "부모 없어"],
      score: [2, 1, 0, -1],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer4);

  const answer5 = yield {
    question: {
      content: "부모님께서 다투실 때는 없어?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["거의 없어", "가끔 그래", "자주 그래", "부모 없어"],
      score: [0, 1, 2, -1],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer5);

  const answer6 = yield {
    question: {
      content:
        "가족끼리 밥을 먹거나 대화를 나누거나 어떤 활동을 하면서 함께 시간을 보내니?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["거의 없어", "가끔 그래", "자주 그래"],
      score: [0, 1, 2],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer6);

  const answer7 = yield {
    question: {
      content: "가족끼리 서로에 대한 관심과 사랑을 표현하니?",
      imgURL: "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
    },
    selection: {
      content: ["거의 안 그래", "가끔 그래", "자주 그래"],
      score: [2, 1, 0],
      imgURL: [
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
        "/src/PT_IMG/tegami_yomu_woman_hagaki.png",
      ],
    },
  };
  ebtScore.push(answer7);

  // 학교생활 점수 총합
  scoreSum = ebtScore.reduce((acc, cur) => acc + cur);
  // 학교생활 결과 계산
  const result = scoreSum > 8 ? "경고" : scoreSum > 7 ? "주의" : "양호";

  return {
    result: `너의 가족관계 만족도와 적응 수준은 ${result} 단계야.`,
    ebtScore,
  };
}
