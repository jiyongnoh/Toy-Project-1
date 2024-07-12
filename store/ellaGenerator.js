// 엘라 기분관리 훈련 프로그램
// 1회기
export function* ellaMood_Round_first() {
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

  return { result: '종료' };
}
