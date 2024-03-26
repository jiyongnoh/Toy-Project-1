import React from "react";
import styled from "styled-components";
import AudioPlayerButton from "./AudioPlayerButton";

const ChatBubble = ({ message, isMine, role, audioURL }) => {
  return (
    <>
      {audioURL ? (
        <AudioContanier message={message}>
          <StyledBubble isMine={isMine} role={role}>
            <p>{message}</p>
          </StyledBubble>
          {audioURL ? <AudioPlayerButton src={audioURL} /> : null}
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

const AudioContanier = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.message.length < 44 ? "row" : "column")};
  justify-content: ${(props) =>
    props.message.length < 44 ? "flex-start" : "center"};
  align-items: ${(props) =>
    props.message.length < 44 ? "center" : "flex-start"};
`;

export default ChatBubble;
