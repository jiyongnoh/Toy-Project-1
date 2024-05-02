/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import * as PIXI from "pixi.js";
import dynamic from "next/dynamic";
const PixiLive2DDisplay = dynamic(() => import("pixi-live2d-display"), {
  ssr: false, // 서버 사이드 렌더링 비활성화
});

async function cubismModelCall(model, Live2DModel, app) {
  const result = await new Live2DModel(app, model);
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
  shizuku: {
    avarta_model: cubism2Model_shizuku,
    scale: 0.3,
  },
  mao: {
    avarta_model: cubism2Model_Mao,
    scale: 0.065,
  },
  haru: { avarta_model: cubism2Model_haru, scale: 0.12 },
  Hiyori: { avarta_model: cubism2Model_Hiyori, scale: 0.057 },
  Wanko: { avarta_model: cubism2Model_Wanko, scale: 0.37 },
};

export default function Live2DViewerMain2({ avartar }) {
  const canvasRef = useRef(null);
  const constraintsRef = useRef(null);

  useEffect(() => {
    const { avarta_model, scale } = model_class[avartar];
    const app = new PIXI.Application({
      view: canvasRef.current,
      // width: window.innerWidth < 768 ? 160 : 370,
      width: 370, // 캔버스 너비
      height: 630, // 캔버스 높이
      transparent: true,
    });

    import("pixi-live2d-display").then((module) => {
      console.log(module);
      const { Live2DModel } = module;

      const model = new Live2DModel(app, avarta_model);
      app.stage.addChild(model);
    });

    return () => {
      app.destroy(true, true);
    };
  }, []);

  return (
    <motion.div ref={constraintsRef}>
      <motion.div drag dragConstraints={constraintsRef}>
        <canvas ref={canvasRef}></canvas>
      </motion.div>
    </motion.div>
  );
}
