import React from 'react';
import styled from 'styled-components';

import TestButton from './TestButton';
import ConsultButton from './ConsultButton';
import AvartarLogo from './AvartarLogo';

const avatarBtnInfo = {
  soyes: {
    backColor: '#ffd700',
    color: 'black',
    title: '',
  },
  lala: {
    backColor: '#FF6489',
    color: 'white',
    title: '엘라 체험하기',
  },
  pupu: {
    backColor: '#8C9FFF',
    color: 'black',
    title: '푸푸와 상담하러 가기',
  },
  ubi: {
    backColor: '#FF9900',
    color: 'black',
    title: '우비와 명상하러 가기',
  },
  north: {
    backColor: '#FFB1B1',
    color: 'black',
    title: '북극이와 일기쓰러 가기',
  },
  default: {
    backColor: '#ffd700',
    color: 'black',
    title: '엘라 체험하기',
  },
};

const IntroBlock = ({ avartar }) => {
  return (
    <IntroAvatarContainer>
      <AvartarLogo
        iconImgUrl={avartar.iconImgUrl}
        name={avartar.name}
        backImgUrl={avartar.logoBackImgUrl}
      />
      <Container>
        <ButtonContainer>
          {avartar.codeName === 'soyes' && <TestButton testClass="ebt" />}
          {avartar.codeName === 'soyes' && <TestButton testClass="pt" />}
          {avartar.codeName === 'soyes' && <TestButton testClass="career" />}
        </ButtonContainer>
        {avartar.codeName !== 'soyes' && (
          <ConsultButton
            avartar={avartar}
            backColor={avatarBtnInfo[avartar.codeName].backColor}
            color={avatarBtnInfo[avartar.codeName].color}
            title={avatarBtnInfo[avartar.codeName].title}
          />
        )}
      </Container>
    </IntroAvatarContainer>
  );
};

export default IntroBlock;

const IntroAvatarContainer = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 50vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 15px;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;

  /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr); */
`;
