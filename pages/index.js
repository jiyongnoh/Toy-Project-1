import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { log } from "../store/state";
import Live2DViewerMain from "@/component/Live2DViewerMain";
import Footer from "@/component/Footer";

// Home 페이지
export default function Home() {
  const [loading, setLoading] = useState(false);
  const login = useRecoilValue(log);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(!login);
    }, 1000);

    return () => clearTimeout(timer);
  }, [login]);

  return (
    <PageContainer>
      <Section>
        {/* 첫 번째 섹션 내용 */}
        <MainContainer />
      </Section>
      <Section style={{ backgroundColor: "lightgreen" }}>
        {/* 두 번째 섹션 내용 */}
        <SubContainer>
          <Title>AI Avartar Soyes</Title>
          <Live2DViewerMain avartar="mao" />
        </SubContainer>
      </Section>
      <Section style={{ backgroundColor: "lightcoral" }}>
        {/* 세 번째 섹션 내용 */}
        <SubContainer>
          <Title>AI Avartar Pupu</Title>
          <Live2DViewerMain avartar="shizuku" />
        </SubContainer>
      </Section>
      <FooterSection>
        <Footer />
      </FooterSection>
    </PageContainer>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
`;

const Section = styled.div`
  scroll-snap-align: start;
  height: 100vh;
  width: 100%;
`;

const FooterSection = styled(Section)`
  height: max-content;
`;

const MainContainer = styled.div`
  background-image: url("/src/soyesKids_Background_image.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  scroll-snap-align: start;
  height: 100vh;
`;

const SubContainer = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  scroll-snap-align: start;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  text-align: center;
  animation: ${fadeIn} 1s ease;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #ffffff;
  animation: ${fadeIn} 1.5s ease;
  margin-bottom: 0.5rem;
`;
