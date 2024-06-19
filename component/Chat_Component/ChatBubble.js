import React from 'react';
import styled from 'styled-components';
import AudioPlayerButton from './AudioPlayerButton';
import VideoModal from './VideoModal';
import Image from 'next/image';

const ChatBubble = ({ message, isMine, role, audioURL, media }) => {
  // console.log(media);
  return (
    <BubbleContainer role={role}>
      {role !== 'user' ? (
        <Image
          src="/src/Consult_IMG/Consult_Soyes_Icon_IMG.png"
          alt={'soyes_logo'}
          width={45}
          height={45}
        />
      ) : null}

      {audioURL ? (
        <AudioContanier message={message}>
          {role !== 'user' ? <AvartarTitle>심리상담 소예</AvartarTitle> : null}
          <StyledBubble isMine={isMine} role={role}>
            <MessageP>
              {message}
              {audioURL ? <AudioPlayerButton src={audioURL} /> : null}
            </MessageP>
          </StyledBubble>
          {media ? (
            <div>
              <MediaButton onClick={media.openModal}>
                {media.videoInfo.type === 'candle' ? '촛불 명상' : '호흡 명상'}
              </MediaButton>
              <VideoModal
                isOpen={media.modalIsOpen}
                onRequestClose={media.closeModal}
                videoId={media.videoInfo.url}
              />
            </div>
          ) : null}
        </AudioContanier>
      ) : (
        <StyledBubble isMine={isMine} role={role}>
          <MessageP>{message}</MessageP>
        </StyledBubble>
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
  padding: 10px;
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

const MessageP = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const AvartarTitle = styled.span`
  margin-left: 0.2rem;
  font-size: 15px;
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

export default ChatBubble;
