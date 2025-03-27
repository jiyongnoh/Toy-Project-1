import axios from 'axios';

// PT 결과 분석 API 호출 함수
export const handlePtAnalsys = async (input) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/openAI/analysis_pt`,
      { data: input },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    // console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    return {
      status: err.response.status,
      message: err.response.data.message,
      emotion: 0,
    };
  }
};

// EBT 결과 분석 API 호출 함수
export const handleEbtAnalsys = async (input) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/openAI/analysis`,
      { EBTData: input },
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
    console.log('EBT 결과 분석 API 호출 실패');
    console.error(err);

    return {
      message: '해당 서비스는 로그인 후 사용 가능합니다!',
      emotion: 0,
    };
  }
};

// CT 결과 저장 API 호출 함수
export const handleCtAnalsys = async (input) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/career/create`,
      { data: input },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    // console.log(response);
    return response.data;
  } catch (err) {
    console.log('CT 결과 분석 API 호출 실패');
    console.error(err);
    return {
      message: '해당 서비스는 로그인 후 사용 가능합니다!',
    };
  }
};
