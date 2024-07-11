import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const FixBubble = ({ fix_content }) => {
  return (
    <PTestBubbleContainer>
      <Image
        src="/src/Consult_IMG/Icon/Consult_Soyes_Icon_IMG.png"
        alt={'avartar_icon'}
        width={45}
        height={45}
      />
      <AvartarTitle>심리상담 소예</AvartarTitle>
      <StyledBubble role="assistant">
        {fix_content.map((el) => {
          const { key, value } = el;
          return key === 'img' ? (
            <ImgContanier>
              <Image
                src={value}
                alt={'avartar_icon'}
                width={400}
                height={300}
              />
            </ImgContanier>
          ) : (
            <TextContanier>
              <MessageP>{value}</MessageP>
            </TextContanier>
          );
        })}
      </StyledBubble>
    </PTestBubbleContainer>
  );
};

// Styled Components
const PTestBubbleContainer = styled.div`
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
// const StyledBubble = styled.div`
//   max-width: 100%;
//   padding: 10px;
//   border-radius: 10px;
//   margin: 0.2rem 0.1rem;

//   word-wrap: break-word;
//   color: ${(props) => (props.role === 'assistant' ? 'white' : 'black')};

//   background-color: ${(props) =>
//     props.role === 'assistant' ? '#0b93f6' : '#e5e5ea'};
//   align-self: ${(props) => (props.role === 'user' ? 'flex-end' : 'flex-start')};

//   p {
//     margin: 0;
//   }

//   text-align: ${(props) => (props.role === 'user' ? 'right' : 'left')};
//   margin-left: ${(props) => (props.role === 'user' ? 'auto' : null)};

//   white-space: pre-wrap;
//   display: flex;
//   align-items: center;
// `;

const ImgContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  /* flex-direction: ${(props) =>
    props.message.length < 30 ? 'row' : 'column'};
  justify-content: ${(props) =>
    props.message.length < 30 ? 'flex-start' : 'center'};
  align-items: ${(props) =>
    props.message.length < 30 ? 'center' : 'flex-start'}; */
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
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) =>
    props.role === 'user' ? 'flex-end' : 'flex-start'};
  gap: 0.3rem;

  @media (max-width: 768px) {
  }
`;

// const BubbleContainer = styled.div`
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   gap: 1rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

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

export default FixBubble;
