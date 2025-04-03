/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ContentBlock = ({
  title,
  subtitle,
  iconPath,
  linkUrl,
  backColor,
  color,
  consult,
}) => {
  return (
    <Container backColor={backColor} consult={consult}>
      <img
        src={iconPath}
        alt="Content_Icon"
        width={40}
        height={40}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <TextContainer>
        <StyledLink href={linkUrl}>
          <Title color={color}>{title}</Title>
        </StyledLink>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
      <PlayButton consult={consult}>
        <Link href={linkUrl}>
          <img
            src="/src/Content_IMG/Frame_재생버튼.png"
            alt="재생버튼"
            width={50}
            height={50}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Link>
      </PlayButton>
    </Container>
  );
};
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Container = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.5rem;
  padding: 1rem;
  background-color: ${(props) => props.backColor || '#FFFBE9'};
  gap: 1rem;

  border: 2.11px solid #e7e7e7;

  @media (max-width: 768px) {
    width: 100%;
    height: 125px;
    gap: 1rem;
    padding: 1rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.color || '#9c6ef3'};
  font-size: 1.2rem;
  font-family: AppleSDGothicNeoM00;
  letter-spacing: -0.1rem;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }

  user-select: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  color: #333;
  font-size: 1.1rem;
  font-weight: 400;

  font-family: AppleSDGothicNeoM00;
  letter-spacing: -0.1rem;

  user-select: none;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PlayButton = styled.button`
  display: ${(props) => (props.consult ? 'flex' : 'none')};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  color: #e7a500;
  &:hover {
    color: #888;
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 1rem;
  }
`;

export default ContentBlock;
