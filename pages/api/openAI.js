/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";

export default async (req, res) => {
  const { messageArr, pUid } = req.body;
  const api_url = `${process.env.NEXT_PUBLIC_URL}/openAI/consulting_emotion_v3`;
  let parseMessageArr;

  try {
    if (typeof messageArr === "string") {
      parseMessageArr = JSON.parse(messageArr);
    } else parseMessageArr = [...messageArr];

    const response = await axios
      .post(
        api_url,
        {
          messageArr,
          pUid,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => res.data);
    // console.log(response);
    res.json(response);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Next.js 서버리스(openAI)에서 오류가 발생했습니다." });
  }
};