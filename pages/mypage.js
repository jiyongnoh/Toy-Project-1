import styled, { keyframes } from 'styled-components';
import { FlexContainer } from '../styled-component/common';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { log, uid } from '../store/state';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Calendar from '@/component/MyPage_Component/Calendar';
import ContentBlock from '@/component/Home_Component/Content/ContentBlock';
import UserGreeting from '@/component/MyPage_Component/UserGreeting';

// MyPage 페이지
export default function MyPage() {
  const [userId, setUserId] = useRecoilState(uid);

  useEffect(() => {
    setUserId(localStorage.getItem('id'));
  }, []);

  return (
    <MainContainer>
      <IntroContainer>
        <UserGreeting
          username={userId}
          daysLeft="30"
          purchaseDate="2024년 3월 10일"
        />
        <ContentBlock
          title="전문가 상담 예약"
          subtitle="전문가와의 심리상담을 예약할 수 있어요."
          iconPath="/src/Content_IMG/Icon_IMG/Icon_전문가상담.png"
          linkUrl="/meditation_music"
          color="#E14615"
          backColor="#FFE296"
          consult={true}
        />
      </IntroContainer>
      <Calendar />
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

// styled-component의 animation 설정 방법 (keyframes 메서드 사용)
const FadeInSpan = keyframes`
  0% {
    opacity: 0;
    font-size: 1rem;
  }
  100% {
    opacity: 1;
    font-size: 3rem;
  }
`;

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  padding: 5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  @media (max-width: 768px) {
    background-image: url('/src/Background_IMG/Mobile/mobile_background_2.png');
    justify-content: center;
  }
`;

const IntroContainer = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;
`;

const MyPageSpan = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  // 애니메이션 인스턴스는 문자열 리터럴과 동일하게 $ + {} 사용
  animation: ${FadeInSpan} 0.6s linear alternate;

  transition: 0.5s;
`;
