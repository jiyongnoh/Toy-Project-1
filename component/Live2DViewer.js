"use client";
import { useRef, useEffect } from "react";
import styled from "styled-components";
// import * as PIXI from "pixi.js";
// import { Live2DModel } from "pixi-live2d-display";

async function cubismModelCall(cubism2Model) {
  const result = await PIXI.live2d.Live2DModel.from(cubism2Model);
  return result;
}

export default function Live2DViewer() {
  const canvasRef = useRef(null);
  const cubism2Model =
    "https://cdn.jsdelivr.net/gh/guansss/pixi-live2d-display/test/assets/shizuku/shizuku.model.json";
  const cubism2Model_Mao = "public/live2D/Mao/Mao.model3.json";
  useEffect(() => {
    const app = new PIXI.Application({
      view: canvasRef.current,
      width: 350, // 캔버스 너비
      height: 400, // 캔버스 높이
      transparent: true,
    });
    cubismModelCall(cubism2Model).then((model2) => {
      app.stage.addChild(model2);
      model2.scale.set(0.3);
    });

    // Live2DModel.from("../public/live2D/Mao/Mao.model3.json").then((model) => {
    //   app.stage.addChild(model);
    //   model.x = app.screen.width * 0.5;
    //   model.y = app.screen.height * 0.5;
    //   model.scale.set(0.5);
    // });

    return () => {
      app.destroy(true, true);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

const Canvas = styled.canvas`
  background-color: #ffffff;
`;
