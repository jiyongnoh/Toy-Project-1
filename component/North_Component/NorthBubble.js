import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const NorthBubble = ({ message, role }) => {
  return (
    <CareerTestBubbleContainer>
      <Image
        src="/src/Consult_IMG/Icon/Consult_North_Icon_IMG.png"
        alt={'avartar_icon'}
        width={80}
        height={80}
      />
      <TextContanier>
        {role !== 'user' ? (
          <AvartarTitle>{`감정 일기 북극이`}</AvartarTitle>
        ) : null}
        <StyledBubble role={role}>
          <MessageP>{message}</MessageP>
        </StyledBubble>
      </TextContanier>
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
  margin-left: 0.5rem;

  font-family: AppleSDGothicNeoM00;
  font-size: 1.3rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TextContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

export default NorthBubble;
