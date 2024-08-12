/* eslint-disable react-hooks/exhaustive-deps */

import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AvartarListCard from '@/component/Intro_Consult_Component/AvartarListCard';

const avatarArr = [
  {
    name: '소예',
    codeName: 'soyes',
    role: '심리검사',
    subMent: '친구의 정서행동검사 성격검사 나와 같이 해보자!',
    cardImgUrl: '/src/AvatarList_IMG/Card/AvatarList_Soyes_Card_IMG.png',
    backColor: '#B88CD4',
    borderColor: '#A278BD',
  },
  {
    name: '엘라',
    codeName: 'lala',
    role: '심리치료',
    subMent: '친구의 심리치료를 나와 같이 해볼까?',
    cardImgUrl: '/src/AvatarList_IMG/Card/AvatarList_Ella_Card_IMG.png',
    backColor: '#E79999',
    borderColor: '#CD9898',
  },
  {
    name: '푸푸',
    codeName: 'pupu',
    role: '고민상담',
    subMent: '친구의 고민은 내가 상담해 줄께!',
    cardImgUrl: '/src/AvatarList_IMG/Card/AvatarList_Pupu_Card_IMG.png',
    backColor: '#93BE84',
    borderColor: '#7AA46B',
  },
  {
    name: '우비',
    codeName: 'ubi',
    role: '명상',
    subMent: '나와 같이 명상의 세계로 떠나볼까?',
    cardImgUrl: '/src/AvatarList_IMG/Card/AvatarList_Ubi_Card_IMG.png',
    backColor: '#35A19B',
    borderColor: '#388581',
  },
  {
    name: '북극이',
    codeName: 'north',
    role: '부모님 상담',
    subMent: '우리 자녀의 문제를 같이 생각해봐요.',
    cardImgUrl: '/src/AvatarList_IMG/Card/AvatarList_North_Card_IMG.png',
    backColor: '#5289CD',
    borderColor: '#4170AA',
  },
  {
    name: '랜덤',
    codeName: 'random',
    role: '친구찿기',
    subMent: '랜덤으로 선택된 친구와 대화하기!',
    cardImgUrl: '/src/AvatarList_IMG/Card/AvatarList_Random_Card_IMG.png',
  },
];

export default function Consult_Intro() {
  return (
    <MainContainer>
      <AvartarListContainer>
        {avatarArr.map((el, index) => {
          return (
            <AvartarListCard
              key={index}
              backColor={el.backColor}
              borderColor={el.borderColor}
              cardImgUrl={el.cardImgUrl}
              name={el.name}
              codeName={el.codeName}
              role={el.role}
              subMent={el.subMent}
            />
          );
        })}
      </AvartarListContainer>
    </MainContainer>
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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 1rem;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AvartarListContainer = styled.div`
  margin-top: 4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    justify-content: center;
  }
`;
