import styled, { keyframes } from "styled-components";
// import { FlexContainer } from "../styled-component/common";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useRecoilValue } from "recoil";
import { log } from "../store/state";

import Live2DViewerMain from "@/component/Live2DViewerMain";

// import dynamic from "next/dynamic";
// const Live2DViewer = dynamic(() => import("../component/Live2DViewer"), {
//   loading: () => <p>Loading...</p>,
//   ssr: true, // 이 옵션은 서버 사이드 렌더링을 비활성화합니다.
// });

// Home 페이지
export default function Home() {
  const [loading, setLoading] = useState(false);
  const login = useRecoilValue(log);

  // 1초 뒤에 로딩 상태 true로 변경. 최초 1번만 실행
  useEffect(() => {
    if (!login) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [login]);

  return (
    <MainContainer>
      <MainBtnContainer>
        <Live2DViewerMain />
        {/* {loading ? (
          <Link href="/login" style={{ textDecoration: "none" }}>
            <MainButton>Login</MainButton>
          </Link>
        ) : null} */}
      </MainBtnContainer>
    </MainContainer>
  );
}

// styled-component의 animation 설정 방법 (keyframes 메서드 사용)
const FadeInSpan = keyframes`
  0% {
    opacity: 0;
    font-size: 1rem;
  }
  100% {
    opacity: 1;
    font-size: 3rem;
  }
`;
const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const MainContainer = styled.div`
  background-image: url("/src/soyesKids_Background_image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100%;
  padding-top: 61.5%; // 16:9 비율

  // 화면 맞춤 설정
  @media (max-width: 1490px) {
    height: 100vh;
  }
`;

const MainBtnContainer = styled.div`
  position: absolute;
  top: 12%;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeSpan = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  // 애니메이션 인스턴스는 문자열 리터럴과 동일하게 $ + {} 사용
  animation: ${FadeInSpan} 0.6s linear alternate;

  transition: 0.5s;
`;

const MainButton = styled.button`
  background-color: rgba(0, 150, 255, 0.5); // 투명 처리
  backdrop-filter: blur(10px); // 불투명 필터
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  color: white;

  border: none;
  border-radius: 15px;

  margin: 4px 2px;
  padding: 13px 23px;

  text-align: center;
  text-decoration: none;

  display: inline-block;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    padding: 1rem 1.8rem;
    background-color: rgba(0, 42, 255, 0.5);
  }

  animation: ${FadeIn} 1s linear alternate;

  transition: 0.5s;
`;
