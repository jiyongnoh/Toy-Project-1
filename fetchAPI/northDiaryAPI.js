import axios from 'axios';

// #TODO: READ
export const handleDiaryGet = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_URL}/openAI/north_load`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    // console.log(response.data);
    return response;
  } catch (err) {
    console.log('Gpt Diary READ API 호출 실패');
    console.error(err);
    return {
      status: err.response.status,
    };
  }
};
// CREATE
export const handleDiaryCreate = async (input) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/openAI/north_save`,
      { data: input },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log('Gpt Diary CREATE API 호출 실패');
    console.error(err);
    return {
      status: 400,
    };
  }
};
// #TODO: DELETE
export const handleDiaryDelete = async (input) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/openAI/north_delete`,
      { data: input },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log('Gpt Diary DELETE API 호출 실패');
    console.error(err);
    return {
      status: 400,
    };
  }
};

// #TODO: UPDATE
// export const handleDiaryUpdate = async (input) => {
//   try {
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_URL}/review/update`,
//       { ReviewData: input },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       }
//     );
//     // console.log(response);
//     return response;
//   } catch (err) {
//     console.log('Gpt API 호출 실패');
//     console.error(err);
//     return {
//       status: err.response.status,
//       message: '미안해 지금은 대화가 힘들어...조금 뒤에 다시 말해줄래?',
//       emotion: 0,
//     };
//   }
// };
