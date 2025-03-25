import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ConsultButton = ({ avartar, backColor, color, title }) => {
  const router = useRouter();
  const { name } = avartar;

  const clickHandler = () => {
    if (name === '엘라') router.push('/ella/mood');
    else if (name === '우비') router.push('/ubi');
    else if (name === '북극이') router.push('/north');
    else router.push('/test_all');
  };
  return (
    <StyledLink onClick={clickHandler} href={''}>
      <YellowButton backColor={backColor} color={color} title={title}>
        {title}
      </YellowButton>
    </StyledLink>
  );
};

export default ConsultButton;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const YellowButton = styled.div`
  font-family: 'AppleSDGothicNeoM00';

  display: flex;
  align-items: center;
  justify-content: center;
  width: 610px;
  height: 130px;

  background-color: ${(props) => props.backColor || '#ffd700'};
  color: ${(props) => props.color || 'black'};
  border-radius: 25px;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;

  border: 10px solid white;

  @media (max-width: 768px) {
    width: 305px;
    height: 65px;
    font-size: 20px;
    border: 5px solid white;
  }
`;
