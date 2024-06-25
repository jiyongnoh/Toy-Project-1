import styled, { keyframes } from 'styled-components';
import { FlexContainer } from '../styled-component/common';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { log } from '../store/state';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Calendar from '@/component/MyPage_Component/Calendar';

// MyPage 페이지
export default function MyPage() {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useRecoilState(log);

  // 1초 뒤에 로딩 상태 true로 변경. 최초 1번만 실행
  useEffect(() => {
    if (!login) {
      setTimeout(() => {
        setLoading(true);
      }, 1000);
    }
  }, [login]);

  return (
    <MainContainer>
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

const MyPageSpan = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  // 애니메이션 인스턴스는 문자열 리터럴과 동일하게 $ + {} 사용
  animation: ${FadeInSpan} 0.6s linear alternate;

  transition: 0.5s;
`;
