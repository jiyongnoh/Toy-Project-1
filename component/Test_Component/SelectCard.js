import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SelectCard = ({ message, imgURL, selectHandler, value }) => {
  return (
    <CardContainer onClick={selectHandler ? () => selectHandler(value) : null}>
      <img width="150px" height="180px" src={imgURL} />
      <CardText>{message}</CardText>
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid gray;
  border-radius: 10px;
  width: 16rem;
  height: 100%;
  gap: 0.4rem;
  padding: 10px;
  cursor: pointer;
`;

const CardText = styled.p`
  text-align: center;
`;
export default SelectCard;
