import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const ContentBlock = ({
  title,
  subtitle,
  iconPath,
  linkUrl,
  backColor,
  color,
}) => {
  return (
    <Container backColor={backColor}>
      <Image
        src={iconPath}
        alt="Content_Icon"
        width={62}
        height={62}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <TextContainer>
        <Title color={color}>{title}</Title>
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
  width: 435px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.5rem;
  padding: 2.5rem;
  background-color: #fffbe9;
  /* ${(props) => props.backColor || '#FFFBE9'} */
  gap: 3rem;

  border: 2.11px solid #e7e7e7;

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
  color: ${(props) => props.color || '#9c6ef3'};
  font-size: 1.8rem;
  font-family: AppleSDGothicNeoM00;
  letter-spacing: -0.1rem;
  font-weight: 600;

  user-select: none;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  color: #333;
  font-size: 1.3rem;
  font-weight: 400;

  font-family: AppleSDGothicNeoM00;
  letter-spacing: -0.1rem;

  user-select: none;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PlayButton = styled.button`
  display: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  color: #bbb;
  &:hover {
    color: #888;
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 1rem;
  }
`;

export default ContentBlock;
