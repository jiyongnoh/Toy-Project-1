import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../styled-component/common";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  // 1초 뒤에 로딩 상태 true로 변경. 최초 1번만 실행
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <MainContainer>
      <FlexContainer justify="center" align="center" dir="col" height="100vh">
        <HomeSpan>Welcome My Toy Project</HomeSpan>
        {loading ? (
          <Link href="/login" style={{ textDecoration: "none" }}>
            <MainButton>Login</MainButton>
          </Link>
        ) : null}
      </FlexContainer>
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
  background-image: url("/src/img.jpg");
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
  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.05);
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
    padding: 15px 25px;
    background-color: blueviolet;
  }

  animation: ${FadeIn} 1s linear alternate;

  transition: 0.5s;
`;
