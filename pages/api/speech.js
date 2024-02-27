/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const client_id = "tcxypw1fkm";
const client_secret = "hdVu9xHqyW1Kzw1m0w6vnHGtQagKKeYwGR91UciV";
const fs = require("fs");
const path = require("path");

export default async (req, res) => {
  const { text } = req.body;

  var api_url = "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts";
  var request = require("request");

  if (req.method === "POST") {
    try {
      var options = {
        url: api_url,
        form: {
          speaker: "nara",
          volume: "0",
          speed: "0",
          pitch: "0",
          text,
          format: "mp3",
        },
        headers: {
          "X-NCP-APIGW-API-KEY-ID": client_id,
          "X-NCP-APIGW-API-KEY": client_secret,
        },
      };
      const filePath = path.join(process.cwd(), "public", "tts1.mp3");
      const writeStream = fs.createWriteStream(filePath);
      const _req = request.post(options).on("response", function (response) {
        console.log(response.statusCode); // 200
        console.log(response.headers["content-type"]);
      });

      _req.pipe(writeStream); // file로 출력
      _req.pipe(res); // 브라우저로 출력
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
