import React from 'react';
import styled from 'styled-components';
import CareerSelectCard from './CareerSelectCard';
import Image from 'next/image';

const CareerTournamentBubble = ({ content, role, setSelect, setNext }) => {
  const selectHandler = (value) => {
    setSelect(value);
    setNext(true);
  };
  const [left, right] = content;

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
      <ImgContanier>
        {role !== 'user' ? <AvartarTitle>심리상담 소예</AvartarTitle> : null}
        <StyledBubble role={role}>
          <BubbleContainer>
            <CareerSelectCard
              message={left?.careerName}
              imgURL={left?.imgURL}
              clickHandler={setSelect ? () => selectHandler('left') : null}
            />
            <CareerSelectCard
              message={right?.careerName}
              imgURL={right?.imgURL}
              clickHandler={setSelect ? () => selectHandler('left') : null}
            />
          </BubbleContainer>
        </StyledBubble>
      </ImgContanier>
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
  max-width: 100%;
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

const BubbleContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export default CareerTournamentBubble;
