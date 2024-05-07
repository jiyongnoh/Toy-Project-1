import axios from "axios";

// READ
export const handlePayReady = async (data) => {
  try {
    const response = await axios.post(
      `https://open-api.kakaopay.com/online/v1/payment/ready`,
      {
        headers: {
          Authorization: `SECRET_KEY ${process.env.NEXT_PUBLIC_KAKAO_PAY_SERCERT_KEY}`,
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      },
      data
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log("handlePayReady 호출 실패");
    console.error(err);
  }
};
// CREATE
export const handlePayCreate = async (input) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/review`,
      { ReviewData: input },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    // console.log(response);
    return response;
  } catch (err) {
    console.log("ReviewCreate API 호출 실패");
    console.error(err);
    return {
      status: 400,
    };
  }
};
// DELETE
export const handlePayDelete = async () => {
  try {
    const response = await axios.delete(`${process.env.NEXT_PUBLIC_URL}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    // console.log(response);
    return response;
  } catch (err) {
    console.error(err);
  }
};
// UPDATE
export const handlePayUpdate = async (input) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/review/update`,
      { ReviewData: input },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    // console.log(response);
    return response;
  } catch (err) {
    console.log("Gpt API 호출 실패");
    console.error(err);
    return {
      status: err.response.status,
      message: "미안해 지금은 대화가 힘들어...조금 뒤에 다시 말해줄래?",
      emotion: 0,
    };
  }
};
