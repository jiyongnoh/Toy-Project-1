import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../styled-component/common";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";
import { log } from "../store/state";

export default function MyPage() {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useRecoilState(log);

  // 1초 뒤에 로딩 상태 true로 변경. 최초 1번만 실행
  useEffect(() => {
    if (!login) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    }
  }, [login]);

  return (
    <MainContainer>
      <FlexContainer justify="center" align="center" dir="col" height="100vh">
        <MyPageSpan>This is MyPage</MyPageSpan>
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

const MainContainer = styled.div`
  background-image: url("/src/img.jpg");
`;

const MyPageSpan = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  // 애니메이션 인스턴스는 문자열 리터럴과 동일하게 $ + {} 사용
  animation: ${FadeInSpan} 0.6s linear alternate;

  transition: 0.5s;
`;
