import React from "react";
import styled from "styled-components";
import AudioPlayerButton from "./AudioPlayerButton";
import VideoModal from "./VideoModal";

const ChatBubble = ({ message, isMine, role, audioURL, media }) => {
  // console.log(media);
  return (
    <>
      {audioURL ? (
        <AudioContanier message={message}>
          <StyledBubble isMine={isMine} role={role}>
            <MessageP>
              {message}
              {audioURL ? <AudioPlayerButton src={audioURL} /> : null}
            </MessageP>
          </StyledBubble>
          {media ? (
            <div>
              <MediaButton onClick={media.openModal}>
                {media.videoInfo.type === "candle" ? "촛불 명상" : "호흡 명상"}
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
  color: ${(props) => (props.role === "assistant" ? "white" : "black")};
  background-color: ${(props) =>
    props.role === "assistant" ? "#0b93f6" : "#e5e5ea"};
  align-self: ${(props) => (props.role === "user" ? "flex-end" : "flex-start")};
  p {
    margin: 0;
  }
  text-align: ${(props) => (props.role === "user" ? "right" : "left")};
  margin-left: ${(props) => (props.role === "user" ? "auto" : null)};
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
  flex-direction: ${(props) => (props.message.length < 30 ? "row" : "column")};
  justify-content: ${(props) =>
    props.message.length < 30 ? "flex-start" : "center"};
  align-items: ${(props) =>
    props.message.length < 30 ? "center" : "flex-start"};
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
