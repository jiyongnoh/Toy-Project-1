/* eslint-disable @next/next/no-sync-scripts */
import "@/styles/globals.css";
import Head from "next/head";
import Nav from "@/component/Nav";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SoyesKids AI Avatar Platform</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/half-moon.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0"
        />
      </Head>
      <RecoilRoot>
        <Nav />
        <Component {...pageProps} />
      </RecoilRoot>
      <script src="https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js"></script>
      <script src="https://cdn.jsdelivr.net/gh/dylanNew/live2d/webgl/Live2D/lib/live2d.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/pixi.js@6.5.2/dist/browser/pixi.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/pixi-live2d-display/dist/index.min.js"></script>
      <script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.min.js"
        integrity="sha384-6MFdIr0zOira1CHQkedUqJVql0YtcZA1P0nbPrQYJXVJZUkTk/oX4U9GhUIs3/z8"
        crossorigin="anonymous"
      ></script>
      {/* <script src="https://cdn.jsdelivr.net/npm/request/index.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/request/request.js"></script> */}
    </>
  );
}
