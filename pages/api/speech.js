/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const client_id = "tcxypw1fkm";
const client_secret = "hdVu9xHqyW1Kzw1m0w6vnHGtQagKKeYwGR91UciV";

import axios from "axios";
import fs from "fs";
import path from "path";

export default async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { text } = req.body;
  const api_url = "https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts";

  try {
    const response = await axios.post(
      api_url,
      {
        speaker: "nara",
        volume: "0",
        speed: "0",
        pitch: "0",
        text,
        format: "mp3",
      },
      {
        responseType: "stream",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-NCP-APIGW-API-KEY-ID": client_id,
          "X-NCP-APIGW-API-KEY": client_secret,
        },
      }
    );

    const filePath = path.join(process.cwd(), "public", "tts1.mp3");
    const writer = fs.createWriteStream(filePath);

    response.data.pipe(writer);

    writer.on("finish", () => res.status(200).send("File saved successfully"));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "서버에서 오류가 발생했습니다." });
  }
};
