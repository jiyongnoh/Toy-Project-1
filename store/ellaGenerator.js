// 엘라 기분관리 훈련 프로그램
// 1회기
export function* ellaMood_1() {
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

  // const answer1 = yield {
  //   question:
  //     '오늘 처음 유치원에 가는 날이야. 반에 들어가니 친구들이 많이 와 있어. 나는 어떻게 할까?”',
  //   selection: [
  //     '빈자리에서 선생님을 기다릴 거야',
  //     '새 친구에게 말을 건네 볼 거야',
  //   ],
  //   question_imgURL: '/src/PT_IMG/Test/PT_Question_IMG_1.png',
  //   selection_imgURL: [
  //     '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
  //     '/src/PT_IMG/tegami_yomu_woman_hagaki.png',
  //   ],
  // };

  return { result: '종료' };
}
