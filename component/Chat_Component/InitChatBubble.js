import React from 'react';
import styled from 'styled-components';
// import AudioPlayerButton from './AudioPlayerButton';
// import VideoModal from './VideoModal';
import Image from 'next/image';

const ebtClassMapKorean = {
  School: '학업/성적',
  Friend: '대인관계',
  Family: '가족관계',
  Mood: '기분',
  Health: '신체증상',
  Self: '자기이해',
};

const InitChatBubble = ({
  message,
  isMine,
  role,
  btn,
  setTestType,
  testType,
}) => {
  // console.log(media);
  return (
    <BubbleContainer role={role}>
      {!btn && role !== 'user' ? (
        <Image
          src="/src/Consult_IMG/Consult_Soyes_Icon_IMG.png"
          alt={'soyes_logo'}
          width={45}
          height={45}
        />
      ) : null}
      {btn ? (
        <InitContanier message={message}>
          <StyledBubble isMine={isMine} role={role} btn={btn}>
            <InitButton
              value={message}
              onClick={(e) => {
                if (!testType) setTestType(e.target.value);
              }}
            >
              {ebtClassMapKorean[message]}
            </InitButton>
          </StyledBubble>
        </InitContanier>
      ) : (
        <InitContanier message={message}>
          {role !== 'user' ? <AvartarTitle>심리상담 소예</AvartarTitle> : null}
          <StyledBubble isMine={isMine} role={role}>
            <MessageP>{message}</MessageP>
          </StyledBubble>
        </InitContanier>
      )}
    </BubbleContainer>
  );
};
const BubbleContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.role === 'user' ? 'right' : 'left')};
  gap: 0.3rem;
`;

// Styled Components
const StyledBubble = styled.div`
  max-width: 100%;
  padding: ${(props) => (props.btn ? '0px' : '10px')};
  border-radius: 10px;
  margin: 0.2rem 0.1rem;
  word-wrap: break-word;
  color: ${(props) => (props.role === 'assistant' ? 'black' : 'black')};
  background-color: ${(props) =>
    props.role === 'assistant' ? 'white' : '#e5e5ea'};
  align-self: ${(props) => (props.role === 'user' ? 'flex-end' : 'flex-start')};
  p {
    margin: 0;
  }

  border: ${(props) => (props.btn ? '0' : '3px solid #ececec')};

  text-align: left;
  margin-left: ${(props) => (props.role === 'user' ? 'auto' : null)};
  white-space: pre-wrap;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const InitContanier = styled.div`
  margin-top: 0.2rem;
  display: flex;
  flex-direction: ${(props) => (props.message.length < 30 ? 'row' : 'column')};
  justify-content: ${(props) =>
    props.message.length < 30 ? 'flex-start' : 'center'};
  align-items: ${(props) =>
    props.message.length < 30 ? 'center' : 'flex-start'};
`;

const MessageP = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AvartarTitle = styled.span`
  margin-left: 0.2rem;
  font-size: 15px;
`;

const InitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background-color: #a374db;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8a5bbf; /* hover 색상 변경 */
  }

  &:active {
    background-color: #096bb6; /* active 색상도 비슷하게 변경 */
  }
`;

export default InitChatBubble;
