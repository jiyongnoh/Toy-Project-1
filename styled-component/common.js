import styled from "styled-components";

export const FlexContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => (props.dir === "col" ? "column" : "row")};
  flex-wrap: ${(props) => props.wrap};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  gap: ${(props) => props.gap || "1rem"};
  background-color: ${(props) => props.backColor || "none"};
  border-radius: ${(props) => props.borderRadius || "none"};
  flex-grow: ${(props) => props.grow};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  padding: ${(props) => props.padding};
  overflow: ${(props) => props.overflow};
  top: ${(props) => props.top};
  min-height: ${(props) => props.min};
`;

export const StyledButton = styled.button`
  background-color: white;
  color: black;

  border: 0.5px solid black;
  border-radius: 15px;

  margin: 4px 2px;
  padding: 13px 23px;

  text-align: center;
  text-decoration: none;

  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    padding: 15px 25px;
    background-color: blueviolet;
    color: white;
  }

  transition: 0.5s;
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: 0.5px solid white;
  color: white;

  padding: 13px 18px;
  text-align: left;
  text-decoration: none;

  display: flex;
  font-size: 16px;
  border-radius: 20px;

  transition: 0.5s;

  &:focus {
    padding: 15px 20px;
  }

  &::placeholder {
    color: wheat;
  }
`;
