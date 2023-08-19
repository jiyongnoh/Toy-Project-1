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
  background-color: pink;
  border: none;
  color: white;
  padding: 13px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 15px;
  cursor: pointer;
`;
