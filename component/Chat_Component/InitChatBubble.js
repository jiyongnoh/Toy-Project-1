import React from 'react';
import styled from 'styled-components';
// import AudioPlayerButton from './AudioPlayerButton';
// import VideoModal from './VideoModal';

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
    <>
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
        <StyledBubble isMine={isMine} role={role}>
          <MessageP>{message}</MessageP>
        </StyledBubble>
      )}
    </>
  );
};

// Styled Components
const StyledBubble = styled.div`
  max-width: 100%;
  padding: ${(props) => (props.btn ? '0px' : '10px')};
  border-radius: 10px;
  margin: 0.2rem 0.1rem;
  word-wrap: break-word;
  color: ${(props) => (props.role === 'assistant' ? 'white' : 'black')};
  background-color: ${(props) =>
    props.role === 'assistant' ? '#0b93f6' : '#e5e5ea'};
  align-self: ${(props) => (props.role === 'user' ? 'flex-end' : 'flex-start')};
  p {
    margin: 0;
  }
  text-align: ${(props) => (props.role === 'user' ? 'right' : 'left')};
  margin-left: ${(props) => (props.role === 'user' ? 'auto' : null)};
  white-space: pre-wrap;
  display: flex;
  align-items: center;
`;

const InitContanier = styled.div`
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
