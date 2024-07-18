import React from 'react';
import styled from 'styled-components';

const EBTResultCard = ({
  ebt_class,
  img_url,
  title,
  backColor,
  color,
  onClick,
}) => {
  return (
    <CardContainer
      backColor={backColor}
      onClick={() => {
        onClick(ebt_class);
      }}
    >
      <Icon src={img_url} alt={title} />
      <Title color={color}>{title}</Title>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backColor || '#fff'};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 10px;

  gap: 4rem;

  cursor: pointer;
`;

const Icon = styled.img`
  width: 124px;
  height: 124px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  font-family: AppleSDGothicNeoM00;
  color: ${(props) => (props.color ? props.color : 'black')};
`;

export default EBTResultCard;
