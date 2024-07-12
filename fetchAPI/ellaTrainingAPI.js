import axios from 'axios';

// PT 결과 분석 API 호출 함수
export const handleTrainingMoodElla = async (input) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/openAI/training_mood_ella`,
      { data: input },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(response);
    return response.data;
  } catch (err) {
    console.log('엘라 기분 훈련 API 호출 실패');
    console.error(err);
    return {
      message: '해당 서비스는 로그인 후 사용 가능합니다!',
      emotion: 0,
    };
  }
};
