/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const backColorArray = ['#FF6759', '#FFC447', '#388CFF'];
const CareerSelectCard = ({ message, imgURL, type, role, clickHandler }) => {
  const backColor = useMemo(
    () => backColorArray[Math.floor(Math.random() * backColorArray.length)],
    []
  );
  return (
    <CardContainer type={type} role={role}>
      <ImgContainer
        backColor={backColor}
        onClick={clickHandler}
        active={typeof clickHandler === 'function'}
      >
        <StyledImage
          src={imgURL}
          alt={'Soyes_Career_Img'}
          width={300}
          height={300}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </ImgContainer>
      <MessageP>{message}</MessageP>
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled.div`
  width: 100%;
  height: 400px;

  color: ${(props) =>
    props.selected ? 'black' : props.role === 'user' ? 'white' : 'black'};

  border: ${(props) => (props.role === 'user' ? '1px solid #A278BD' : null)};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: ${(props) => (props.role === 'user' ? '0.5rem 1.5rem' : '0')};
    gap: 1rem;
  }
`;

const ImgContainer = styled.div`
  width: 300px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.backColor || 'none'};
  border: 2px solid white;
  border-radius: 10px;

  user-select: none;

  overflow: hidden; /* 원 밖으로 넘치는 부분 숨김 */
  position: relative;

  ${(props) =>
    props.active &&
    `
    &:active {
      border: 2px solid red;
    }
    
    &:hover{
      opacity: 0.8
    };

    cursor: pointer;
  `}

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover; /* 이미지를 원형 컨테이너에 맞춤 */
  width: 100%;
  height: 100%;
`;

const MessageP = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: AppleSDGothicNeoM00;

  font-size: 1.5rem;
  font-weight: 400;

  user-select: none;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default CareerSelectCard;
