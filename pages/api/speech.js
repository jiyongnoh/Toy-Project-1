/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const client_id = "tcxypw1fkm";
const client_secret = "hdVu9xHqyW1Kzw1m0w6vnHGtQagKKeYwGR91UciV";

export default async (req, res) => {
  const { text } = req.body;

  if (req.method === "POST") {
    try {
      const apiResponse = await fetch(
        "https://naveropenapi.apigw.ntruss.com/voice/v1/tts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-NCP-APIGW-API-KEY-ID": client_id,
            "X-NCP-APIGW-API-KEY": client_secret,
          },
          body: `speaker=mijin&speed=0&text=${encodeURIComponent(text)}`,
        }
      );

      const data = await apiResponse.blob();
      res.setHeader("Content-Type", "audio/mp3");
      res.send(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "서버에서 오류가 발생했습니다." });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
