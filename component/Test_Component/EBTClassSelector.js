import React, { useState } from "react";
import { css } from "styled-components";
import styled from "styled-components";
import { useRouter } from "next/router";

// EBTClassSelector 컴포넌트
const EBTClassSelector = ({ isProceeding }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const EBTArr = [{ name: "School" }, { name: "Friend" }, { name: "Family" }];

  const toggleMenu = () => setIsOpen(!isOpen);
  // 아바타 변경 핸들러
  const ebtChangeHandler = (e) => {
    if (isProceeding) {
      alert("검사 진행 중엔 바꿀 수 없어!");
      return;
    }
    localStorage.setItem("EBTClass", e.target.value);
    router.reload();
    // window.location.reload(true);
    // setIsOpen(!isOpen);
  };

  return (
    <EBTSelectorContainer>
      <NavBtn onClick={toggleMenu}>EBT</NavBtn>
      <ButtonsContainer>
        {EBTArr.map((ebt, index) => (
          <NavBtn
            value={ebt.name}
            key={ebt.name}
            hidden={!isOpen}
            style={{
              transitionDelay: `${isOpen ? index * 100 : (3 - index) * 100}ms`,
            }}
            onClick={ebtChangeHandler}
          >
            {ebt.name}
          </NavBtn>
        ))}
      </ButtonsContainer>
    </EBTSelectorContainer>
  );
};

const EBTSelectorContainer = styled.div`
  position: absolute;
  top: 4rem;
  right: 2rem;

  @media (max-width: 768px) {
    top: 2rem;
    right: 37%;
  }

  z-index: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  border-radius: 15px;
  margin: 4px 2px;
  padding: 13px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgba(0, 42, 255, 0.5);
  }

  ${(props) =>
    props.hidden &&
    css`
      visibility: hidden;
      opacity: 0;
      transform: translateY(-20px);
      transition: visibility 0s 0.5s, opacity 0.5s ease, transform 0.5s ease;
    `}
`;
export default EBTClassSelector;
