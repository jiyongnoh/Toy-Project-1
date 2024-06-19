import React from 'react';
import styled from 'styled-components';
import PTSelectCard from './PTSelectCard';
import { motion } from 'framer-motion';

const PTestBubble = ({ message, role, imgURL, setSelect, setNext }) => {
  const selectHandler = (value) => {
    setSelect(value);
    setNext(true);
  };

  return (
    <>
      {imgURL ? (
        <ImgContanier message={message}>
          <StyledBubble role={role}>
            {role === 'user' ? (
              <BubbleContainer>
                <PTSelectCard
                  selectHandler={setSelect && selectHandler}
                  value="1"
                  message={message[0]}
                  imgURL={imgURL[0]}
                  role={role}
                />
                <PTSelectCard
                  selectHandler={setSelect && selectHandler}
                  value="2"
                  message={message[1]}
                  imgURL={imgURL[1]}
                  role={role}
                />
                {/* <motion.div
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 1 },
                  }}
                  whileTap={{ scale: 1.0 }}
                >
                </motion.div> */}
              </BubbleContainer>
            ) : (
              <BubbleContainer>
                <PTSelectCard message={message} imgURL={imgURL} />
              </BubbleContainer>
            )}
          </StyledBubble>
        </ImgContanier>
      ) : (
        <StyledBubble role={role}>
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

const ImgContanier = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.message.length < 30 ? 'row' : 'column')};
  justify-content: ${(props) =>
    props.message.length < 30 ? 'flex-start' : 'center'};
  align-items: ${(props) =>
    props.message.length < 30 ? 'center' : 'flex-start'};
`;

const BubbleContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default PTestBubble;
