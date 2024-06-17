import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const ContentComponent = ({ title, subtitle, iconPath, linkUrl }) => {
  return (
    <Container>
      <Image
        src={iconPath}
        alt="Content_Icon"
        width={84}
        height={84}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
      <PlayButton>
        <Link href={linkUrl}>
          <Image
            src="/src/Content_IMG/Frame_재생버튼.png"
            alt="재생버튼"
            width={60}
            height={60}
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

const Container = styled.div`
  width: 990px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 400px;
    height: 125px;
    gap: 1rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  color: #9c6ef3;
  font-size: 2.5rem;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  color: #333;
  font-size: 1.65rem;
  font-weight: bold;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  color: #bbb;
  &:hover {
    color: #888;
  }
`;

export default ContentComponent;
