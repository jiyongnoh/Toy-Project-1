/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRef, useEffect, useState } from "react";
// import styled from "styled-components";
// import * as PIXI from "pixi.js";
// import { Live2DModel } from "pixi-live2d-display";

async function cubismModelCall(model) {
  const result = await PIXI.live2d.Live2DModel.from(model);
  return result;
}

const cubism2Model_shizuku =
  "https://cdn.jsdelivr.net/gh/jiyongnoh/pixi-live2d-display/test/assets/shizuku/shizuku.model.json";
const cubism2Model_haru =
  "https://cdn.jsdelivr.net/gh/jiyongnoh/pixi-live2d-display/test/assets/haru/haru_greeter_t03.model3.json";
const cubism2Model_Mao =
  "https://cdn.jsdelivr.net/gh/jiyongnoh/CubismWebSamples/Samples/Resources/Mao/Mao.model3.json";
const cubism2Model_Hiyori =
  "https://cdn.jsdelivr.net/gh/jiyongnoh/CubismWebSamples/Samples/Resources/Hiyori/Hiyori.model3.json";
const cubism2Model_Wanko =
  "https://cdn.jsdelivr.net/gh/jiyongnoh/CubismWebSamples/Samples/Resources/Wanko/Wanko.model3.json";

const model_class = {
  pupu: {
    avarta_model: cubism2Model_shizuku,
    scale: 0.14,
  },
  ubi: { avarta_model: cubism2Model_haru, scale: 0.07 },
  lala: { avarta_model: cubism2Model_Hiyori, scale: 0.057 },
  soyes: { avarta_model: cubism2Model_Wanko, scale: 0.14 },
};

export default function Live2DViewerTest({ emotion, avarta }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const { avarta_model, scale } = model_class[avarta];
    const app = new PIXI.Application({
      view: canvasRef.current,
      width: 160, // 캔버스 너비
      height: 250, // 캔버스 높이
      transparent: true,
    });
    cubismModelCall(avarta_model).then((model) => {
      app.stage.addChild(model);
      model.scale.set(scale);
      // console.log(emotion);

      // 표정 및 모션 처리
      if (emotion.includes("긍정")) {
        model.expression(3); // 맑눈광 표정
        model.motion("TapBody", 3);
      } else if (emotion.includes("부정")) {
        model.expression(7); // 불쌍한 표정
        model.motion("TapBody", 1);
      } else {
        model.expression(1); // 웃는 표정
        model.motion("TapBody", 0);
      }

      // clean up 함수. 해당 컴포넌트 언마운트 시 실행
      return () => {
        app.destroy(true, true);
      };
    });
  }, [emotion]);

  return <canvas ref={canvasRef}></canvas>;
}
