// 엘라 기분관리 훈련 프로그램
// 1회기
export function* ellaMood_Round_first() {
  let answerArr = [];
  // 인사말
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' },
      {
        key: 'text',
        value: '엘라와 함께 불쾌한 기분은 줄이고 즐거운 기분은 늘려보자 ',
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' },
      {
        key: 'text',
        value: '슬프거나 아무 것도 하기 싫을 때가 있니?',
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' },
      {
        key: 'text',
        value: '넌 이 마음을 뭐라고 부를래?',
      },
    ],
  };

  const mood_name = yield {
    role: 'assistant',
    type: 'input',
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `니 마음의 이름은 ${mood_name}(이)구나`,
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 눈코입 없는 사람 이미지
      {
        key: 'text',
        value: `어떨 때 ${mood_name}(을)를 만나?`,
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 다른 애들이 말하는 이미지
    ],
  };

  const mood_situation = yield {
    role: 'assistant',
    type: 'input',
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `${mood_name}(을)를 만나면 기분이 어때?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 다른 애들이 말하는 이미지
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

  yield {
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

  // situation 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'thought',
    gpt_input: { mood_thought },
  };

  yield {
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
        value: `이젠 다른 걸 해볼까? 내가 물어보는 상황에 어떻게 할지 대답해 봐`,
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
        value: `인지행동 문항 1`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };

  const answer1 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer1));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 2`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer2 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer2));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 3`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer3 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer3));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 4`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer4 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer4));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 5`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer5 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer5));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 6`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer6 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer6));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 7`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer7 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };

  answerArr.push(parseInt(answer7));

  const congnitive_score = answerArr.reduce((acc, cur) => acc + cur);

  return {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value:
          congnitive_score >= 18
            ? '좋았어! 멋진 생각을 나눠준 너에게 씨앗을 줄게. 마음을 가꾸듯 잘 키워봐. 다음에 또 만나'
            : '수고했어. 좀 더 분발해서 다음엔 씨앗을 받아보자. 다음 시간에 만나',
      },
    ],
    sava_data: {
      mood_name,
      congnitive_score,
    },
  };
}

export function* ellaMood_Round_second() {
  let answerArr = [];
  // 인사말
  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' },
      {
        key: 'text',
        value: '2회차 시작 멘트',
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' },
      {
        key: 'text',
        value: '슬프거나 아무 것도 하기 싫을 때가 있니?',
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' },
      {
        key: 'text',
        value: '넌 이 마음을 뭐라고 부를래?',
      },
    ],
  };

  const mood_name = yield {
    role: 'assistant',
    type: 'input',
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `니 마음의 이름은 ${mood_name}(이)구나`,
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 눈코입 없는 사람 이미지
      {
        key: 'text',
        value: `어떨 때 ${mood_name}(을)를 만나?`,
      },
    ],
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 다른 애들이 말하는 이미지
    ],
  };

  const mood_situation = yield {
    role: 'assistant',
    type: 'input',
  };

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `${mood_name}(을)를 만나면 기분이 어때?`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 다른 애들이 말하는 이미지
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

  yield {
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

  // situation 프롬프트 적용 텍스트 생성
  yield {
    role: 'assistant',
    type: 'gpt',
    code: 'thought',
    gpt_input: { mood_thought },
  };

  yield {
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
        value: `이젠 다른 걸 해볼까? 내가 물어보는 상황에 어떻게 할지 대답해 봐`,
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
        value: `인지행동 문항 1`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };

  const answer1 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer1));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 2`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer2 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer2));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 3`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer3 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer3));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 4`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer4 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer4));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 5`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer5 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer5));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 6`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer6 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };
  answerArr.push(parseInt(answer6));

  yield {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value: `인지행동 문항 7`,
      },
      { key: 'img', value: '/src/PT_IMG/Test/PT_Question_IMG_1.png' }, // 인지행동 문항 이미지
    ],
  };
  const answer7 = yield {
    role: 'user',
    type: 'select',
    select_content: [
      { selection: '선택지1', value: 0 },
      { selection: '선택지2', value: 1 },
      { selection: '선택지3', value: 2 },
      { selection: '선택지4', value: 3 },
    ],
  };

  answerArr.push(parseInt(answer7));

  const congnitive_score = answerArr.reduce((acc, cur) => acc + cur);

  return {
    role: 'assistant',
    type: 'fix',
    fix_content: [
      {
        key: 'text',
        value:
          congnitive_score >= 18
            ? '좋았어! 멋진 생각을 나눠준 너에게 씨앗을 줄게. 마음을 가꾸듯 잘 키워봐. 다음에 또 만나'
            : '수고했어. 좀 더 분발해서 다음엔 씨앗을 받아보자. 다음 시간에 만나',
      },
    ],
    sava_data: {
      mood_name,
      congnitive_score,
    },
  };
}
