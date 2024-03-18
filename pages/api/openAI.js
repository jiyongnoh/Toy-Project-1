/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";

export default async (req, res) => {
  const { messageArr, pUid } = req.body;
  const api_url = `${process.env.NEXT_PUBLIC_URL}/openAI/consulting_emotion_pupu`;
  let parseMessageArr;

  if (req.method === "POST") {
    try {
      if (typeof messageArr === "string") {
        parseMessageArr = JSON.parse(messageArr);
      } else parseMessageArr = [...messageArr];

      const response = await axios
        .post(
          api_url,
          {
            EBTData: { messageArr, pUid },
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
  } else {
    // POST 이외의 요청에 대해 405 Method Not Allowed 반환
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
