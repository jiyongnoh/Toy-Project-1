/* eslint-disable react-hooks/exhaustive-deps */

import styled from 'styled-components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRecoilState } from 'recoil';
import { avarta } from '../store/state';

import IntroBlock from '@/component/Intro_Avartar_Component/IntroBlock';

const avatarMap = {
  soyes: {
    name: '소예',
    codeName: 'soyes',
    iconImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_Soyes_Logo_Main_IMG.png',
    logoBackImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_Soyes_Logo_Back_IMG.png',
    backgroundImgUrl: '/src/EBT_IMG/background.jpg',
  },
  lala: {
    name: '엘라',
    codeName: 'lala',
    iconImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_Ella_Logo_Main_IMG.png',
    logoBackImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_Ella_Logo_Back_IMG.png',
    backgroundImgUrl: '/src/Ella_Mood_IMG/Background/background_ella.jpg',
  },
  pupu: {
    name: '푸푸',
    codeName: 'pupu',
    iconImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_Pupu_Logo_Main_IMG.png',
    logoBackImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_Pupu_Logo_Back_IMG.png',
    backgroundImgUrl: '/src/Consult_IMG/background_pupu.jpg',
  },
  ubi: {
    name: '우비',
    codeName: 'ubi',
    iconImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_Ubi_Logo_Main_IMG.png',
    logoBackImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_Ubi_Logo_Back_IMG.png',
    backgroundImgUrl: '/src/Ubi_IMG/backgroung_ubi.jpg',
  },
  north: {
    name: '북극이',
    codeName: 'north',
    iconImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_North_Logo_Main_IMG.png',
    logoBackImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_North_Logo_Back_IMG.png',
    backgroundImgUrl: '/src/NorthDiary_IMG/background.png',
  },
  default: {
    name: '소예',
    codeName: 'soyes',
    iconImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_Soyes_Logo_Main_IMG.png',
    logoBackImgUrl: '/src/Intro_IMG/Intro_Logo/Intro_Soyes_Logo_Back_IMG.png',
    backgroundImgUrl: '/src/Background_IMG/Web/Intro_SoyesBackgroung_IMG.png',
  },
};

export default function Avartar_Intro() {
  const [avartaAI] = useRecoilState(avarta);

  return (
    <IntroContainer backgroundImgUrl={avatarMap[avartaAI].backgroundImgUrl}>
      <IntroBlock avartar={avatarMap[avartaAI]} />
    </IntroContainer>
  );
}

// Translation 파일 적용
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'nav'])), // 파일 다중 적용 가능
    },
  };
}

const IntroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 2rem;

  background-image: ${(props) =>
    `url(${props.backgroundImgUrl})` ||
    `url('/src/Background_IMG/Web/Intro_Backgroung_IMG.png')`};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
