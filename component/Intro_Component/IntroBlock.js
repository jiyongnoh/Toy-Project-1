import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import TestButton from './TestButton';
import ConsultButton from './ConsultButton';

const IntroBlock = ({ avartar }) => {
  return (
    <IntroAvatarContainer>
      <Image
        src={avartar.iconImgUrl}
        alt={avartar.name}
        width={547}
        height={499}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Container>
        <ButtonContainer>
          <TestButton testClass="ebt" />
          <TestButton testClass="pt" />
        </ButtonContainer>
        {/* {avartar.codeName === 'soyes' && (
          <ButtonContainer>
            <TestButton testClass="ebt" />
            <TestButton testClass="pt" />
          </ButtonContainer>
        )} */}
        <ConsultButton avartar={avartar} />
      </Container>
    </IntroAvatarContainer>
  );
};

export default IntroBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  gap: 1rem;
`;

const IntroAvatarContainer = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;
