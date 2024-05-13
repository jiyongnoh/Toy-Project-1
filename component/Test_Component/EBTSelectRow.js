import React from "react";
import styled from "styled-components";

const EBTSelectRow = ({
  message,
  imgURL,
  selectHandler,
  value,
  type,
  role,
  selected,
}) => {
  return (
    <CardContainer
      onClick={selectHandler ? () => selectHandler(value) : null}
      type={type}
      role={role}
      selected={selected}
    >
      <img
        width={role === "assistant" ? "160px" : "16rem"}
        height={role === "assistant" ? "180px" : "18rem"}
        src={imgURL}
      />
      <CardText>{message}</CardText>
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.role === "user" ? "row" : "column")};
  justify-content: center;
  align-items: center;

  border: ${(props) => (props.role === "user" ? "1px solid gray" : null)};
  border-radius: 10px;
  background-color: ${(props) =>
    props.role === "user" && props.selected ? "yellow" : null};
  font-weight: ${(props) =>
    props.role === "user" && props.selected ? "bold" : null};

  width: 100%;
  height: 100%;
  gap: 0.4rem;
  padding: 10px;
  cursor: pointer;
`;

const CardText = styled.p`
  text-align: center;
`;
export default EBTSelectRow;
