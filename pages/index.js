/* eslint-disable react-hooks/exhaustive-deps */

import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import Live2DViewerMain from '@/component/Live2D_Component/Live2DViewerMain';
// import ScrollDownIndicator from '@/component/Home_Component/ScrollDownIndicator';
// import ScrollUpIndicator from '@/component/Home_Component/ScrollUpIndicator';
// import { motion } from "framer-motion";

import Carousel from '@/component/Home_Component/Carousel';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Home 페이지
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  // const { t } = useTranslation("nav");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
    setScrollY(window.scrollY);
  };

  // 스크롤 이벤트 리스너 추가 및 제거
  useEffect(() => {
    // Loading (1 sec)
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
    // 모바일 width 확인
    if (window.innerWidth < 768) setMobile(true);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <MasterContainer>
      <MainContainer>
        {mobile && loading && <Title>AI Avartar Project</Title>}
        {/* {!mobile && loading && <ScrollDownIndicator />} */}
      </MainContainer>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <TopButton show={showTopButton} onClick={scrollToTop} scrollY={scrollY}>
        Top
      </TopButton>
    </MasterContainer>

    // <PageContainer>
    //   <Section>
    //     {/* 첫 번째 섹션 내용 */}
    //     <MainContainer>
    //       {mobile && loading && <Title>AI Avartar Project</Title>}
    //       {!mobile && loading && <ScrollDownIndicator />}
    //     </MainContainer>
    //   </Section>
    //   <Section style={{ backgroundColor: 'lightgreen' }}>
    //     {/* 두 번째 섹션 내용 */}
    //     <SubContainer>
    //       {!mobile && <ScrollUpIndicator />}
    //       <Title>AI Avartar Soyes</Title>
    //       <Live2DViewerMain avartar="mao" />
    //       {!mobile && <ScrollDownIndicator />}
    //     </SubContainer>
    //   </Section>
    //   <Section style={{ backgroundColor: 'lightcoral' }}>
    //     {/* 세 번째 섹션 내용 */}
    //     <SubContainer>
    //       {!mobile && <ScrollUpIndicator />}
    //       <Title>AI Avartar Pupu</Title>
    //       <Live2DViewerMain avartar="shizuku" />
    //     </SubContainer>
    //   </Section>
    //   {/* Footer 섹션  */}
    //   <FooterSection>
    //     <Footer />
    //   </FooterSection>
    // </PageContainer>
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

const MasterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: -1;
  @media (max-width: 768px) {
    background-image: url('/src/soyes_mobile.jpg');
    justify-content: center;
  }
`;

const MainContainer = styled.div`
  width: 100vw;
  height: 130vh;

  background-image: url('/src/soyesKids_Background_image.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    background-image: url('/src/soyes_mobile.jpg');
    justify-content: center;
  }
`;

const CarouselContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-image: url('/src/soyes_mobile.jpg');
    justify-content: center;
  }
`;

// 스타일링된 버튼 컴포넌트
const TopButton = styled.button`
  position: fixed;
  top: ${(props) => `${props.scrollY + 800}px`};
  right: 2%;

  width: 50px;
  height: 50px;

  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 50%;
  display: ${({ show }) => (show ? 'block' : 'none')};
  cursor: pointer;
  z-index: 2;
  transition: opacity 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// const PageContainer = styled.div`
//   scroll-snap-type: y mandatory;
//   overflow-y: scroll;
//   height: 100vh;
//   scroll-behavior: smooth;
// `;

// const Section = styled.div`
//   scroll-snap-align: start;
//   height: 100vh;
//   width: 100%;
// `;

// const FooterSection = styled(Section)`
//   height: max-content;
// `;

// const SubContainer = styled.div`
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;

//   width: 100%;
//   height: 100vh;

//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   gap: 2rem;

//   scroll-snap-align: start;
//   height: 100vh;

//   @media (max-width: 768px) {
//     gap: 0;
//   }
// `;

// const ContentWrapper = styled.div`
//   text-align: center;
//   animation: ${fadeIn} 1s ease;
// `;

const Title = styled.h1`
  font-size: 4rem;
  color: #ffffff;
  animation: ${fadeIn} 1.5s ease;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
