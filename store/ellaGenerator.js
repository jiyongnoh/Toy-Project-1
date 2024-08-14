// 엘라 기분관리 훈련 프로그램 배열
export const ellaMood_Round_Array = [
  ellaMood_Round_first,
  ellaMood_Round_second,
  ellaMood_Round_third,
  ellaMood_Round_fourth,
];

// TODO# 쇼케이스용 1회기 - 2024.08.20 이후 삭제
function* ellaMood_Round_first() {
  let answerArr = [];

  // 인사말
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      // { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' },
      {
        key: 'text',
        value: '오늘은 인지행동치료를 시작해보자! ☺',
      },
    ],
  };

  // 인지행동 치료 시작
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `방학이지만 부모님이 출근하셔서 나도 일찍 학원에 가야 해. 어떻게 할까?`,
      },
      {
        key: 'img',
        value:
          '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive1_IMG.png',
      }, // 인지행동 문항 이미지
    ],
  };

  const answer1 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      {
        selection: '방학에 쉬고 싶은 마음을 부모님과 나누고 방법을 찾아볼래.',
        value: 2,
      },
      { selection: '나만 방학에 쉬지도 못해. 억울하다고 말할 거야.', value: 1 },
      {
        selection: '어떤 시간이 조정되면 좋을지 생각해보고 부모님과 상의할래.',
        value: 3,
      },
      { selection: '학원 가기 싫어. 늦잠 잘래.', value: 0 },
    ],
  };
  answerArr.push(parseInt(answer1));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `나보다 키 큰 아래 학년 동생이 나를 작다고 무시해. 어떻게 할까?`,
      },
      {
        key: 'img',
        value:
          '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive2_IMG.png',
      }, // 인지행동 문항 이미지
    ],
  };
  const answer2 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      {
        selection: '예의 없는 애라고 생각하면서 나도 무시하고 지나가.',
        value: 2,
      },
      { selection: '기분 나쁘지만 대꾸하지 않고 자리를 떠.', value: 3 },
      { selection: '무시하지 못하도록 한 대 때려줘야지.', value: 0 },
      { selection: '흥분해서 화내고 따져.', value: 1 },
    ],
  };
  answerArr.push(parseInt(answer2));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `기대했던 여행인데 부모님께 갑자기 일이 생겨서 못 가. 어떻게 할까?`,
      },
      {
        key: 'img',
        value:
          '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive3_IMG.png',
      }, // 인지행동 문항 이미지
    ],
  };
  const answer3 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '가고 싶은데 못 가게 돼서 짜증낼 것 같아.', value: 0 },
      { selection: '시무룩한 상태로 하루를 보낼 거야.', value: 1 },
      { selection: '다음 기회에 가면 되니까 괜찮아.', value: 2 },
      { selection: '너무 아쉽지만 부모님 일도 중요하지.', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer3));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `머리도 아프고 속도 안 좋은 거 같고 학교에 가기 싫어. 어떻게 할까?`,
      },
      {
        key: 'img',
        value:
          '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive4_IMG.png',
      }, // 인지행동 문항 이미지
    ],
  };
  const answer4 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '오늘은 가지 말아야지.', value: 0 },
      { selection: '왜 가야하냐고 투정부려.', value: 1 },
      { selection: '일단 학교에 가서 몸이 어떤지 살펴볼래.', value: 2 },
      {
        selection: '약 먹고 학교에 가서 더 아프면 양호실에 가야겠어.',
        value: 3,
      },
    ],
  };
  answerArr.push(parseInt(answer4));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `너무 화가 나서 물건을 부수고 싶어. 어떻게 할까?`,
      },
      {
        key: 'img',
        value:
          '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive5_IMG.png',
      }, // 인지행동 문항 이미지
    ],
  };
  const answer5 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '다 쾅쾅 부숴버릴 거야.', value: 0 },
      { selection: '꾹 참으면 괜찮아질 거야.', value: 1 },
      {
        selection: '무엇 때문에 물건을 부수고 싶을 만큼 화가 났을까?',
        value: 2,
      },
      {
        selection: '잠깐 멈추고 심호흡을 한 뒤에 무엇이 문제인지 생각해봐.',
        value: 3,
      },
    ],
  };
  answerArr.push(parseInt(answer5));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `밤에 잠도 잘 안 오고, 누울 때마다 내일이 안 왔으면 좋겠다는 생각이 들어. 어떻게 할까?`,
      },
      {
        key: 'img',
        value:
          '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive6_IMG.png',
      }, // 인지행동 문항 이미지
    ],
  };
  const answer6 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '지구가 멸망하는 것밖에는 답이 없어.', value: 0 },
      { selection: '이게 무슨 마음인지 모르겠어.', value: 1 },
      { selection: '친구들에게 얘기하고 위로 받고 싶어.', value: 2 },
      {
        selection: '나 지금 많이 힘든가봐, 어른들에게 상담을 받아보고 싶어.',
        value: 3,
      },
    ],
  };
  answerArr.push(parseInt(answer6));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `아무것도 제대로 못하는 나에게 너무 화가 나서 내 머리를 쳤어. 어떻게 생각해?`,
      },
      {
        key: 'img',
        value:
          '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive7_IMG.png',
      }, // 인지행동 문항 이미지
    ],
  };
  const answer7 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '잘못했으니 벌을 받아야지.', value: 0 },
      { selection: '너무 화가 나면 그럴 수도 있지.', value: 1 },
      {
        selection: '엄청 화가 나지만 머리를 치지 말고 말로 표현해보자.',
        value: 2,
      },
      {
        selection: '누구나 실수할 수 있잖아, 나를 너무 몰아붙이지 말자.',
        value: 3,
      },
    ],
  };

  answerArr.push(parseInt(answer7));

  const mood_cognitive_score = answerArr.reduce((acc, cur) => acc + cur);

  // 개발용 - 추후 삭제
  // yield {
  //   role: 'assistant',
  //   type: 'fix',
  //   fix_content: [
  //     {
  //       key: 'text',
  //       value: `Result: ${mood_cognitive_score}점 (개발용)`,
  //     },
  //   ],
  // };

  return {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value:
          mood_cognitive_score >= 13
            ? '좋았어! 멋진 생각을 나눠준 너에게 씨앗을 줄게. 마음을 가꾸듯 잘 키워봐. 다음에 또 만나 ☺'
            : '수고했어. 좀 더 분발해서 다음엔 씨앗을 받아보자. 다음 시간에 만나 ☺',
      },
    ],
    sava_data: {
      type: 'first',
      // mood_name: '',
      // mood_situation: '',
      // mood_thought: '',
      // mood_different_solution: '',
      // mood_different_thought: '',
      // mood_cognitive_score,
    },
  };
}
// function* ellaMood_Round_first() {
//   let answerArr = [];
//   // yield {
//   //   role: 'assistant',
//   //   type: 'fix',
//   //   fix_content: [
//   //     {
//   //       key: 'text',
//   //       value: '1회기 (개발용)',
//   //     },
//   //   ],
//   // };

//   // 인사말
//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       // { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' },
//       {
//         key: 'text',
//         value: '엘라와 함께 불쾌한 기분은 줄이고 즐거운 기분은 늘려보자 ☺',
//       },
//     ],
//   };

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `슬프거나 아무 것도 하기 싫을 때가 있니?
// 그 마음을 떠올려 봐
// 그리고 그 마음에 이름을 붙여주자
// `,
//       },
//     ],
//     delay: 2000,
//   };

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'img',
//         value: '/src/Ella_Mood_IMG/1st/Ella_Mood_1st_Shadow_IMG.png',
//       },
//       {
//         key: 'text',
//         value: '넌 이 마음을 뭐라고 부를래?',
//       },
//     ],
//   };

//   // 오늘은 인지행동치료를 시작해보자!

//   const mood_name = yield {
//     role: 'assistant',
//     type: 'input',
//   };

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `니 마음의 이름은 ${mood_name}(이)구나`,
//       },
//     ],
//   };

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'img',
//         value: '/src/Ella_Mood_IMG/1st/Ella_Mood_1st_Shadow_IMG.png',
//       }, // 눈코입 없는 사람 이미지
//     ],
//   };

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `어떨 때 ${mood_name}(을)를 만나?`,
//       },
//     ],
//   };

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'img',
//         value: '/src/Ella_Mood_IMG/1st/Ella_Mood_1st_Kids1_IMG.png',
//       }, // 다른 애들이 말하는 이미지
//     ],
//   };

//   const mood_situation = yield {
//     role: 'assistant',
//     type: 'input',
//   };

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `${mood_name}(을)를 만나면 기분이 어때?`,
//       },
//     ],
//   };

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'img',
//         value: '/src/Ella_Mood_IMG/1st/Ella_Mood_1st_Kids2_IMG.png',
//       }, // 다른 애들이 말하는 이미지
//     ],
//   };

//   yield {
//     role: 'assistant',
//     type: 'input',
//   };

//   // 단순 공감 반응
//   yield {
//     role: 'assistant',
//     type: 'gpt',
//     code: 'emotion',
//     gpt_input: {},
//     // delay: 3000,
//   };

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `또 어떤 생각이 들어?`,
//       },
//       {
//         key: 'img',
//         value: '/src/Ella_Mood_IMG/1st/Ella_Mood_1st_Kids3_IMG.png',
//       }, // 다른 애들이 말하는 이미지
//     ],
//   };

//   const mood_thought = yield {
//     role: 'assistant',
//     type: 'input',
//   };

//   // 단순 공감 반응
//   yield {
//     role: 'assistant',
//     type: 'gpt',
//     code: 'emotion',
//     gpt_input: {},
//   };

//   // situation 프롬프트 적용 텍스트 생성
//   yield {
//     role: 'assistant',
//     type: 'gpt',
//     code: 'situation',
//     gpt_input: { mood_situation },
//   };

//   const mood_different_solution = yield {
//     role: 'assistant',
//     type: 'input',
//   };

//   // solution 프롬프트 적용 텍스트 생성
//   yield {
//     role: 'assistant',
//     type: 'gpt',
//     code: 'solution',
//     gpt_input: {},
//   };

//   // thought 프롬프트 적용 텍스트 생성
//   yield {
//     role: 'assistant',
//     type: 'gpt',
//     code: 'thought',
//     gpt_input: { mood_thought },
//   };

//   const mood_different_thought = yield {
//     role: 'assistant',
//     type: 'input',
//   };

//   // another 프롬프트 적용 텍스트 생성
//   yield {
//     role: 'assistant',
//     type: 'gpt',
//     code: 'another',
//     gpt_input: {},
//     delay: 3000,
//   };

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `이젠 다른 걸 해볼까? 내가 물어보는 상황에 어떻게 할지 대답해 봐 ☺`,
//       },
//     ],
//   };

//   // 인지행동 치료 시작
//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `방학이지만 부모님이 출근하셔서 나도 일찍 학원에 가야 해. 어떻게 할까?`,
//       },
//       {
//         key: 'img',
//         value:
//           '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive1_IMG.png',
//       }, // 인지행동 문항 이미지
//     ],
//   };

//   const answer1 = yield {
//     role: 'user',
//     type: 'select',
//     select_content: [
//       {
//         selection: '방학에 쉬고 싶은 마음을 부모님과 나누고 방법을 찾아볼래.',
//         value: 2,
//       },
//       { selection: '나만 방학에 쉬지도 못해. 억울하다고 말할 거야.', value: 1 },
//       {
//         selection: '어떤 시간이 조정되면 좋을지 생각해보고 부모님과 상의할래.',
//         value: 3,
//       },
//       { selection: '학원 가기 싫어. 늦잠 잘래.', value: 0 },
//     ],
//   };
//   answerArr.push(parseInt(answer1));

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `나보다 키 큰 아래 학년 동생이 나를  작다고 무시해. 어떻게 할까?`,
//       },
//       {
//         key: 'img',
//         value:
//           '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive2_IMG.png',
//       }, // 인지행동 문항 이미지
//     ],
//   };
//   const answer2 = yield {
//     role: 'user',
//     type: 'select',
//     select_content: [
//       {
//         selection: '예의 없는 애라고 생각하면서 나도 무시하고 지나가.',
//         value: 2,
//       },
//       { selection: '기분 나쁘지만 대꾸하지 않고 자리를 떠.', value: 3 },
//       { selection: '무시하지 못하도록 한 대 때려줘야지.', value: 0 },
//       { selection: '흥분해서 화내고 따져.', value: 1 },
//     ],
//   };
//   answerArr.push(parseInt(answer2));

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `기대했던 여행인데 부모님께 갑자기 일이 생겨서 못 가. 어떻게 할까?`,
//       },
//       {
//         key: 'img',
//         value:
//           '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive3_IMG.png',
//       }, // 인지행동 문항 이미지
//     ],
//   };
//   const answer3 = yield {
//     role: 'user',
//     type: 'select',
//     select_content: [
//       { selection: '가고 싶은데 못 가게 돼서 짜증낼 것 같아.', value: 0 },
//       { selection: '시무룩한 상태로 하루를 보낼 거야.', value: 1 },
//       { selection: '다음 기회에 가면 되니까 괜찮아.', value: 2 },
//       { selection: '너무 아쉽지만 부모님 일도 중요하지.', value: 3 },
//     ],
//   };
//   answerArr.push(parseInt(answer3));

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `머리도 아프고 속도 안 좋은 거 같고 학교에 가기 싫어. 어떻게 할까?`,
//       },
//       {
//         key: 'img',
//         value:
//           '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive4_IMG.png',
//       }, // 인지행동 문항 이미지
//     ],
//   };
//   const answer4 = yield {
//     role: 'user',
//     type: 'select',
//     select_content: [
//       { selection: '오늘은 가지 말아야지.', value: 0 },
//       { selection: '왜 가야하냐고 투정부려.', value: 1 },
//       { selection: '일단 학교에 가서 몸이 어떤지 살펴볼래.', value: 3 },
//       {
//         selection: '약 먹고 학교에 가서 더 아프면 양호실에 가야겠어.',
//         value: 3,
//       },
//     ],
//   };
//   answerArr.push(parseInt(answer4));

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `너무 화가 나서 물건을 부수고 싶어. 어떻게 할까?`,
//       },
//       {
//         key: 'img',
//         value:
//           '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive5_IMG.png',
//       }, // 인지행동 문항 이미지
//     ],
//   };
//   const answer5 = yield {
//     role: 'user',
//     type: 'select',
//     select_content: [
//       { selection: '다 쾅쾅 부숴버릴 거야.', value: 0 },
//       { selection: '꾹 참으면 괜찮아질 거야.', value: 1 },
//       {
//         selection: '무엇 때문에 물건을 부수고 싶을 만큼 화가 났을까?',
//         value: 2,
//       },
//       {
//         selection: '잠깐 멈추고 심호흡을 한 뒤에 무엇이 문제인지 생각해봐.',
//         value: 3,
//       },
//     ],
//   };
//   answerArr.push(parseInt(answer5));

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `밤에 잠도 잘 안 오고, 누울 때마다 내일이 안 왔으면 좋겠다는 생각이 들어. 어떻게 할까?`,
//       },
//       {
//         key: 'img',
//         value:
//           '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive6_IMG.png',
//       }, // 인지행동 문항 이미지
//     ],
//   };
//   const answer6 = yield {
//     role: 'user',
//     type: 'select',
//     select_content: [
//       { selection: '지구가 멸망하는 것밖에는 답이 없어.', value: 0 },
//       { selection: '이게 무슨 마음인지 모르겠어.', value: 1 },
//       { selection: '친구들에게 얘기하고 위로 받고 싶어.', value: 2 },
//       {
//         selection: '나 지금 많이 힘든가봐, 어른들에게 상담을 받아보고 싶어.',
//         value: 3,
//       },
//     ],
//   };
//   answerArr.push(parseInt(answer6));

//   yield {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value: `아무것도 제대로 못하는 나에게 너무 화가 나서 내 머리를 쳤어. 어떻게 생각해?`,
//       },
//       {
//         key: 'img',
//         value:
//           '/src/Ella_Mood_IMG/1st/Cognitive/Ella_Mood_1st_Congnitive7_IMG.png',
//       }, // 인지행동 문항 이미지
//     ],
//   };
//   const answer7 = yield {
//     role: 'user',
//     type: 'select',
//     select_content: [
//       { selection: '잘못했으니 벌을 받아야지.', value: 0 },
//       { selection: '너무 화가 나면 그럴 수도 있지.', value: 1 },
//       {
//         selection: '엄청 화가 나지만 머리를 치지 말고 말로 표현해보자.',
//         value: 2,
//       },
//       {
//         selection: '누구나 실수할 수 있잖아, 나를 너무 몰아붙이지 말자.',
//         value: 3,
//       },
//     ],
//   };

//   answerArr.push(parseInt(answer7));

//   const mood_cognitive_score = answerArr.reduce((acc, cur) => acc + cur);

//   // 개발용 - 추후 삭제
//   // yield {
//   //   role: 'assistant',
//   //   type: 'fix',
//   //   fix_content: [
//   //     {
//   //       key: 'text',
//   //       value: `Result: ${mood_cognitive_score}점 (개발용)`,
//   //     },
//   //   ],
//   // };

//   return {
//     role: 'assistant',
//     type: 'fix',
//     fix_content: [
//       {
//         key: 'text',
//         value:
//           mood_cognitive_score >= 13
//             ? '좋았어! 멋진 생각을 나눠준 너에게 씨앗을 줄게. 마음을 가꾸듯 잘 키워봐. 다음에 또 만나 ☺'
//             : '수고했어. 좀 더 분발해서 다음엔 씨앗을 받아보자. 다음 시간에 만나 ☺',
//       },
//     ],
//     sava_data: {
//       type: 'first',
//       mood_name,
//       mood_situation,
//       mood_thought,
//       mood_different_solution,
//       mood_different_thought,
//       mood_cognitive_score,
//     },
//   };
// }

// 2회기
function* ellaMood_Round_second(mood_name) {
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: '2회기 (개발용)',
      },
    ],
  };

  // 인사말
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: '안녕 또 만났네',
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 눈코입 없는 그림자 사람 이미지
      {
        key: 'text',
        value: `${mood_name}(이) 기억나? 네가 슬프거나 아무 것도 하고 싶지 않을 때 만나는 마음이야.`,
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `오늘, 또는 이번 주에는 어떨 때 ${mood_name}(이)를 만났어?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 2회기 이미지
    ],
  };

  const mood_situation = yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `${mood_name}(이)를 만나서 어떤 기분이 들었어?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 2회기 이미지2
    ],
  };

  yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `또 어떤 생각이 들어?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 2회기 이미지3
    ],
  };

  const mood_thought = yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  // situation 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'situation',
    gpt_input: { mood_situation },
  };

  const mood_different_solution = yield {
    role: 'assistant',
    type: 'input',
  };

  // solution 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'solution',
    gpt_input: {},
  };

  // thought 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'thought',
    gpt_input: { mood_thought },
  };

  const mood_different_thought = yield {
    role: 'assistant',
    type: 'input',
  };

  // another 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'another',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `이젠 다른 걸 해볼까? 지금 당장 10분 동안 할 수 있는 기분 좋은 일에는 뭐가 있을까?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 다른 애들이 이름을 말하는 이미지
      {
        key: 'text',
        value: `나라면…

줄넘기 30번 넘기
농구공 10번 튀기기
그림 그리기
집에서 물구나무서기
문구점 구경하기
난 이거 지금 당장 할 수 있어~!

너도 한 번 생각해 봐`,
      },
    ],
  };

  const mood_todolist_1 = yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `또 뭐가 있을까?`,
      },
    ],
  };

  const mood_todolist_2 = yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `하나 더 써보자`,
      },
    ],
  };

  const mood_todolist_3 = yield {
    role: 'assistant',
    type: 'input',
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `좋아 너의 즐거운 활동 목록이 완성됐어!`,
      },
    ],
  };

  // listing 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'listing',
    gpt_input: {
      mood_todo_list: [mood_todolist_1, mood_todolist_2, mood_todolist_3],
    },
  };

  return {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value:
          '이 활동들을 지금 한 번 실천해봐. 그리고 언제든 슬픈 마음이 들 때 해보길 바라. 실천한 소감을 감정일기-즐거운 활동하기 코너에 남기면 씨앗을 받을 수 있어~',
      },
    ],
    sava_data: {
      type: 'second',
      mood_situation,
      mood_thought,
      mood_different_solution,
      mood_different_thought,
      mood_todo_list: [mood_todolist_1, mood_todolist_2, mood_todolist_3],
    },
  };
}
// 3회기
function* ellaMood_Round_third(mood_name) {
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: '3회기 (개발용)',
      },
    ],
  };

  // 인사말
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: '안녕, 오늘 하루 잘 보냈어?',
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 눈코입 없는 그림자 사람 이미지
      {
        key: 'text',
        value: `${mood_name}(이) 기억나? 네가 슬프거나 아무 것도 하고 싶지 않을 때 만나는 마음이야.`,
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `오늘, 또는 이번 주에는 어떨 때 ${mood_name}(이)를 만났어?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 3회기 이미지
    ],
  };

  const mood_situation = yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `${mood_name}(이)를 만나서 어떤 기분이 들었어?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 3회기 이미지2
    ],
  };

  yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `또 어떤 생각이 들어?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 2회기 이미지3
    ],
  };

  const mood_thought = yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  // situation 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'situation',
    gpt_input: { mood_situation },
  };

  const mood_different_solution = yield {
    role: 'assistant',
    type: 'input',
  };

  // solution 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'solution',
    gpt_input: {},
  };

  // thought 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'thought',
    gpt_input: { mood_thought },
  };

  const mood_different_thought = yield {
    role: 'assistant',
    type: 'input',
  };

  // another 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'another',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `이젠 다른 걸 해볼까? ${mood_name}에게 붙일 수 있는 치료 밴드를 만들거야`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // Bandage flower
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `네 ${mood_name}에게 어떤 말을 해주고 싶어?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 다른 애들이 말하는 이미지
    ],
  };

  // mood_talk 저장 1
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `이런 말은 어때?`,
      },
    ],
  };
  const mood_talk_1 = yield {
    role: 'user',
    type: 'input&select',
    select_content: [
      { selection: '그럴 수도 있지', value: '그럴 수도 있지' },
      {
        selection: '시간이 지나면 괜찮아질 거야',
        value: '시간이 지나면 괜찮아질 거야',
      },
      { selection: '울어도 괜찮아', value: '울어도 괜찮아' },
      { selection: '넌 멋진 사람이 될 거야', value: '넌 멋진 사람이 될 거야' },
      { selection: '난 널 믿어', value: '난 널 믿어' },
    ],
  };
  // 선택 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {
      mood_talk: mood_talk_1,
    },
  };

  // mood_talk 저장 2
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `이런 말은 어때?`,
      },
    ],
  };
  const mood_talk_2 = yield {
    role: 'user',
    type: 'input&select',
    select_content: [
      { selection: '그럴 수도 있지', value: '그럴 수도 있지' },
      {
        selection: '시간이 지나면 괜찮아질 거야',
        value: '시간이 지나면 괜찮아질 거야',
      },
      { selection: '울어도 괜찮아', value: '울어도 괜찮아' },
      { selection: '넌 멋진 사람이 될 거야', value: '넌 멋진 사람이 될 거야' },
      { selection: '난 널 믿어', value: '난 널 믿어' },
    ],
  };
  // 선택 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: { mood_talk: mood_talk_2 },
  };

  // mood_talk 저장 3
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `이런 말은 어때?`,
      },
    ],
  };
  const mood_talk_3 = yield {
    role: 'user',
    type: 'input&select',
    select_content: [
      { selection: '그럴 수도 있지', value: '그럴 수도 있지' },
      {
        selection: '시간이 지나면 괜찮아질 거야',
        value: '시간이 지나면 괜찮아질 거야',
      },
      { selection: '울어도 괜찮아', value: '울어도 괜찮아' },
      { selection: '넌 멋진 사람이 될 거야', value: '넌 멋진 사람이 될 거야' },
      { selection: '난 널 믿어', value: '난 널 믿어' },
    ],
  };
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `좋아, 치료밴드를 다 만들었어`,
      },
    ],
  };

  // listing 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'talking',
    gpt_input: {
      mood_talk_list: [mood_talk_1, mood_talk_2, mood_talk_3],
    },
  };

  return {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value:
          '이 말들을 메모지에 적어서 잘 보이는 곳에 붙여 봐. 그리고 하루에 한 번씩 읽으면서 마음에 밴드를 붙여 줘. 분명 힘이 될 거야. 다음 시간에 만나',
      },
    ],
    sava_data: {
      type: 'third',
      mood_situation,
      mood_thought,
      mood_different_solution,
      mood_different_thought,
      mood_talk_list: [mood_talk_1, mood_talk_2, mood_talk_3],
    },
  };
}
// 4회기
function* ellaMood_Round_fourth(mood_name) {
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: '4회기 (개발용)',
      },
    ],
  };

  // 인사말
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: '안녕, 오늘은 마지막 시간이야',
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 눈코입 없는 그림자 사람 이미지
      {
        key: 'text',
        value: `${mood_name}(이) 기억나? 네가 슬프거나 아무 것도 하고 싶지 않을 때 만나는 마음이야.`,
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `오늘, 또는 이번 주에는 어떨 때 ${mood_name}(이)를 만났어?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 3회기 이미지
    ],
  };

  const mood_situation = yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `${mood_name}(이)를 만나서 어떤 기분이 들었어?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 3회기 이미지2
    ],
  };

  yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `또 어떤 생각이 들어?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 2회기 이미지3
    ],
  };

  const mood_thought = yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  // situation 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'situation',
    gpt_input: { mood_situation },
  };

  const mood_different_solution = yield {
    role: 'assistant',
    type: 'input',
  };

  // solution 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'solution',
    gpt_input: {},
  };

  // thought 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'thought',
    gpt_input: { mood_thought },
  };

  const mood_different_thought = yield {
    role: 'assistant',
    type: 'input',
  };

  // another 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'another',
    gpt_input: {},
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `이젠 다른 걸 해볼까?
편안한 마음이 들게 하는 명상을 해볼 거야
오늘은 사전 준비가 필요해
편안히 누울 수 있는 곳을 찾아봐
준비가 되면 시작하기 버튼을 눌러 줘`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 편안히 누울 수 있는 장소 이미지
      { key: 'button', value: '시작하기' },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'media', value: 'nKCY3qz30N8' }, // 바닷가 명상
      {
        key: 'text',
        value: `눈을 감고 편안히 누워서 바다의 소리와 풍경을 떠올려볼 거야.`,
      },
      { key: 'button', value: '그만보기' },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'media', value: 'tNao3xp5yjM' }, // 풀밭 명상
      {
        key: 'text',
        value: `눈을 감고 편안히 누워서 풀밭의 소리와 풍경을 떠올려볼 거야. 처음엔 어색하겠지만 아주 편안하고 시원한 곳에 있다고 생각하고 명상을 따라해봐`,
      },
      { key: 'button', value: '그만보기' },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `명상이 어땠니?`,
      },
    ],
  };

  const mood_meditation_feedback = yield {
    role: 'assistant',
    type: 'input',
  };

  // 단순 공감 반응
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'emotion',
    gpt_input: {},
  };

  return {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `마음이 힘들 때 네가 편안히 쉴 수 있는 안전한 곳이 있었으면 좋겠어. 기분 수업(가칭)은 여기까지야. 함께 배운 걸 반복하면서 네 안의 ${mood_name}(이)도 건강하게 자라길 바랄게`,
      },
    ],
    sava_data: {
      type: 'fourth',
      mood_situation,
      mood_thought,
      mood_different_solution,
      mood_different_thought,
      mood_meditation_feedback,
    },
  };
}
