import React from "react";
import styled from "styled-components";

const PTSelectCard = ({
  message,
  imgURL,
  selectHandler,
  value,
  type,
  role,
}) => {
  return (
    <CardContainer
      onClick={selectHandler ? () => selectHandler(value) : null}
      type={type}
      role={role}
    >
      <img
        width={!type ? "160px" : "64px"}
        height={!type ? "180px" : "72px"}
        src={imgURL}
      />
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

  border: ${(props) => (props.role === "user" ? "1px solid gray" : null)};
  border-radius: 10px;

  width: ${(props) => (props.type === "EBT" ? "11rem" : "16rem")};
  height: ${(props) => (props.type === "EBT" ? "9rem" : "100%")};
  gap: 0.4rem;
  padding: 10px;
  cursor: pointer;
`;

const CardText = styled.p`
  text-align: center;
`;
export default PTSelectCard;
