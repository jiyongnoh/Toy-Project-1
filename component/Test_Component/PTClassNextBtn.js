import React from 'react';
import { css } from 'styled-components';
import styled from 'styled-components';
import { useRouter } from 'next/router';

// EBTClassSelector 컴포넌트
const PTClassNextBtn = ({ resultType }) => {
  const router = useRouter();

  const ebtChangeHandler = () => {
    // 로컬 스토리지에 EBTClass값 저장 후 리로드
    localStorage.setItem('PTResult', resultType);
    router.push('/test_pt/result');
  };

  return (
    <EBTSelectorContainer>
      <NavBtn value={resultType} onClick={ebtChangeHandler}>
        {'성격검사 결과보기'}
      </NavBtn>
    </EBTSelectorContainer>
  );
};

const EBTSelectorContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    left: 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBtn = styled.button`
  background-color: ${(props) =>
    props.selected ? 'rgba(0, 42, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  border-radius: 15px;
  margin: 2px 2px;
  padding: 13px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  transition-delay: ${(props) => props.transitionDelay};

  &:hover {
    background-color: rgba(0, 42, 255, 0.5);
    transition-delay: 0ms;
  }

  ${(props) =>
    props.hidden &&
    css`
      visibility: hidden;
      opacity: 0;
      transform: translateY(-20px);
      transition:
        visibility 0s 0.5s,
        opacity 0.5s ease,
        transform 0.5s ease;
    `}
`;

export default PTClassNextBtn;
