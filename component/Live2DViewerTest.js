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
  "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json";
const cubism2Model_Mao =
  "https://cdn.jsdelivr.net/gh/Live2D/CubismWebSamples/Samples/Resources/Mao/Mao.model3.json";

export default function Live2DViewerTest({ emotion }) {
  const canvasRef = useRef(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const app = new PIXI.Application({
      view: canvasRef.current,
      width: 160, // 캔버스 너비
      height: 250, // 캔버스 높이
      transparent: true,
    });
    cubismModelCall(cubism2Model_Mao).then((model) => {
      app.stage.addChild(model);
      model.scale.set(0.03);
      // console.log(emotion);

      if (emotion === "긍정") {
        model.motion("TapBody", 3);
      } else if (emotion === "부정") {
        model.motion("TapBody", 1);
      } else {
        model.motion("TapBody", 0);
      }

      return () => {
        app.destroy(true, true);
      };
    });
  }, [emotion]);

  return <canvas ref={canvasRef}></canvas>;
}
