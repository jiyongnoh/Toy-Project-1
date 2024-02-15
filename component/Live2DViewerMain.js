/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
// import * as PIXI from "pixi.js";
// import { Live2DModel } from "pixi-live2d-display";

async function cubismModelCall(model) {
  const result = await PIXI.live2d.Live2DModel.from(model);
  return result;
}

const cubism2Model_shizuku =
  "https://cdn.jsdelivr.net/gh/jiyongnoh/pixi-live2d-display/test/assets/shizuku/shizuku.model.json";
const cubism2Model_Mao =
  "https://cdn.jsdelivr.net/gh/Live2D/CubismWebSamples/Samples/Resources/Mao/Mao.model3.json";

export default function Live2DViewerMain() {
  const canvasRef = useRef(null);
  // console.log(emotion);
  useEffect(() => {
    const app = new PIXI.Application({
      view: canvasRef.current,
      width: 570, // 캔버스 너비
      height: 830, // 캔버스 높이
      transparent: true,
    });
    cubismModelCall(cubism2Model_Mao).then((model) => {
      app.stage.addChild(model);
      model.scale.set(0.1);

      // 클릭 이벤트
      model.on("click", () => {
        // 랜덤한 표정 및 동작 발생
        model.motion("TapBody", parseInt(Math.random() * 10) % 6);
        model.expression(parseInt(Math.random() * 10) % 8);
      });
      return () => {
        app.destroy(true, true);
      };
    });
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

const Canvas = styled.canvas`
  background-color: #ffffff;
`;
