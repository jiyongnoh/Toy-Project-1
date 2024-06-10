import React from 'react';
import styled from 'styled-components';
import AudioPlayerButton from './AudioPlayerButton';
import VideoModal from './VideoModal';

const InitChatBubble = ({ message, isMine, role, btn, setTestType }) => {
  // console.log(media);
  return (
    <>
      {btn ? (
        <AudioContanier message={message}>
          <StyledBubble isMine={isMine} role={role}>
            <MessageP>
              <button
                value={message}
                onClick={(e) => {
                  setTestType(e.target.value);
                }}
              >
                {message}
              </button>
            </MessageP>
          </StyledBubble>
        </AudioContanier>
      ) : (
        <StyledBubble isMine={isMine} role={role}>
          <p>{message}</p>
        </StyledBubble>
      )}
    </>
  );
};

// Styled Components
const StyledBubble = styled.div`
  max-width: 100%;
  padding: 10px;
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

const MessageP = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AudioContanier = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.message.length < 30 ? 'row' : 'column')};
  justify-content: ${(props) =>
    props.message.length < 30 ? 'flex-start' : 'center'};
  align-items: ${(props) =>
    props.message.length < 30 ? 'center' : 'flex-start'};
`;

const MediaButton = styled.button`
  font-size: 1rem;
  max-width: 100%;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 0.2rem 0.1rem;
  color: white;
  background-color: #a374db;
  cursor: pointer;
`;

export default InitChatBubble;
