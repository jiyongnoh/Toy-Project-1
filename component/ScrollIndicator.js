import styled, { keyframes } from "styled-components";

// 애니메이션 정의
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// 스크롤 인디케이터 컴포넌트 스타일링
const ScrollIndi = styled.div`
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  animation: ${bounce} 2s infinite;

  &:before {
    content: "⬇"; // 여기에 원하는 스크롤 아이콘을 사용하세요
    font-size: 2rem;
    color: #fff;
  }
`;

// 페이지나 섹션 컴포넌트에 사용
const ScrollIndicator = () => {
  return <ScrollIndi />;
};

export default ScrollIndicator;
