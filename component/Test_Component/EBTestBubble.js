import React from "react";
import styled from "styled-components";
import EBTSelectRow from "./EBTSelectRow";
import { motion } from "framer-motion";

const EBTestBubble = ({ message, role, imgURL, setSelect, setNext, score }) => {
  const selectHandler = (value) => {
    setSelect(value);
    setNext(true);
  };

  return (
    <StyledBubble role={role}>
      {imgURL ? (
        <ImgContanier message={message[0]}>
          {role === "user" ? (
            <BubbleContainer role={role}>
              {message.map((el, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 1.0 }}
                >
                  <EBTSelectRow
                    selectHandler={setSelect && selectHandler}
                    value={score[index]}
                    message={message[index]}
                    imgURL={imgURL[index]}
                    role={role}
                  />
                </motion.div>
              ))}
            </BubbleContainer>
          ) : role === "assistant" ? (
            <EBTSelectRow message={message} imgURL={imgURL} role={role} />
          ) : (
            <button>{message}</button>
          )}
        </ImgContanier>
      ) : (
        <NoImgP>{message}</NoImgP>
      )}
    </StyledBubble>
  );
};

// Styled Components
const StyledBubble = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin: 0.2rem 0.1rem;

  word-wrap: break-word;
  color: ${(props) => (props.role !== "user" ? "white" : "black")};
  background-color: ${(props) =>
    props.role !== "user" ? "#0b93f6" : "#e5e5ea"};
  align-self: ${(props) => (props.role === "user" ? "flex-end" : "flex-start")};
  white-space: pre-wrap;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BubbleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.5rem;
`;

const NoImgP = styled.p`
  text-align: left;
`;

export default EBTestBubble;
