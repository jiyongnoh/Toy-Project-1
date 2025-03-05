import React from 'react';
import styled from 'styled-components';
import CareerSelectCard from './CareerSelectCard';
import Image from 'next/image';

import { mobile } from '@/store/state';
import { useRecoilState } from 'recoil';

const CareerTestBubble = ({ message, role, imgURL, setSelect, setNext }) => {
  const [mobileFlag] = useRecoilState(mobile);

  const selectHandler = (value) => {
    setSelect(value);
    setNext(true);
  };

  return (
    <CareerTestBubbleContainer>
      {role !== 'user' ? (
        <Image
          src="/src/Consult_IMG/Icon/Consult_Soyes_Icon_IMG.png"
          alt={'avartar_icon'}
          width={45}
          height={45}
        />
      ) : null}
      {imgURL ? (
        <ImgContanier>
          {role !== 'user' ? <AvartarTitle>심리상담 소예</AvartarTitle> : null}
          <StyledBubble role={role}>
            <BubbleContainer>
              <CareerSelectCard message={message} imgURL={imgURL} />
              <SelectContainer>
                <SelectButton
                  backgroundColor={'#F5403F'}
                  onClick={setSelect ? () => selectHandler('1') : null}
                  active={typeof setSelect === 'function'}
                >
                  <Image
                    src="/src/Career_IMG/O.png"
                    alt={'avartar_icon'}
                    width={mobileFlag ? 40 : 74}
                    height={mobileFlag ? 40 : 74}
                  />
                  {'좋아요!'}
                </SelectButton>
                <SelectButton
                  backgroundColor={'#1779FF'}
                  onClick={setSelect ? () => selectHandler('0') : null}
                  active={typeof setSelect === 'function'}
                >
                  <Image
                    src="/src/Career_IMG/X.png"
                    alt={'avartar_icon'}
                    width={mobileFlag ? 35 : 64}
                    height={mobileFlag ? 35 : 64}
                  />
                  {'별로에요!'}
                </SelectButton>
              </SelectContainer>
            </BubbleContainer>
          </StyledBubble>
        </ImgContanier>
      ) : (
        <TextContanier>
          {role !== 'user' ? <AvartarTitle>심리상담 소예</AvartarTitle> : null}
          <StyledBubble role={role}>
            <MessageP>{message}</MessageP>
          </StyledBubble>
        </TextContanier>
      )}
    </CareerTestBubbleContainer>
  );
};

// Styled Components
const CareerTestBubbleContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.role === 'user' ? 'right' : 'left')};
  gap: 0.3rem;

  @media (max-width: 768px) {
  }
`;

const StyledBubble = styled.div`
  max-width: 45vw;
  padding: ${(props) => (props.role === 'assistant' ? '1rem' : '0')};
  border-radius: 1rem;
  margin: 0.2rem 0.1rem;
  word-wrap: break-word;

  color: ${(props) => (props.role === 'assistant' ? 'black' : 'black')};
  background-color: ${(props) => (props.role === 'assistant' ? 'white' : null)};
  align-self: ${(props) => (props.role === 'user' ? 'flex-end' : 'flex-start')};

  p {
    margin: 0;
  }

  border: ${(props) => (props.role === 'user' ? '0' : '3px solid #ececec')};
  text-align: left;
  margin-left: ${(props) => (props.role === 'user' ? 'auto' : null)};
  white-space: pre-wrap;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const AvartarTitle = styled.span`
  font-size: 1.2rem;
  margin-left: 0.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImgContanier = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TextContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BubbleContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const MessageP = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: AppleSDGothicNeoM00;

  font-size: 1.5rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SelectButton = styled.button`
  width: 160px;
  height: 160px;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;

  padding: 1rem;
  border-radius: 100%;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-family: AppleSDGothicNeoM00;
  font-size: 1.2rem;
  font-weight: 400;

  ${(props) =>
    props.active &&
    `
    &:active{
      opacity: 0.8
    };

    cursor: pointer;
  `}

  @media (max-width: 768px) {
    font-size: 0.9rem;
    width: 100px;
    height: 100px;

    gap: 0.5rem;
  }
`;

export default CareerTestBubble;
