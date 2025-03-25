7; /* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

import { handleDiaryCreate } from '@/fetchAPI/northDiaryAPI';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CareerTestBubble from '@/component/Test_Component/CareerTestBubble';
import DiaryInput from '@/component/North_Component/DiaryInput';
import LoadingAnimation from '@/component/Chat_Component/LoadingAnimation';

export default function NorthEmotionDiary() {
  const [isPending, setIsPending] = useState(false);
  const [tag, setTag] = useState('');
  const [bottom, setBottom] = useState(false); // scrollToBottom 메서드 발동 트리거

  // 제너레이터는 리렌더링 시점에 초기화 => useRef를 통해 인스턴스 고정
  const boxBody = useRef(null); // scrollToBottom 컴포넌트 고정

  const scrollToBottom_useRef = () => {
    const ptBoxBody = boxBody.current;
    if (ptBoxBody.scrollHeight > 1000)
      window.scrollTo({
        top: ptBoxBody.scrollHeight, // 세로 스크롤 위치
        left: 0, // 가로 스크롤 위치
        behavior: 'smooth', // 스크롤 애니메이션 (옵션: 'auto' 또는 'smooth')
      });
  };

  // API 호출 메서드
  const handleClickSubmitBtn = async (input) => {
    try {
      // 감정 분석 API 호출 이후 state 갱신
      await handleDiaryCreate({
        ...input,
        pUid: localStorage.getItem('id'),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 페이지 초기설정 - 검사 첫 문항 제시
  useEffect(() => {}, []);

  // 스크롤 바텀
  useEffect(() => {
    if (bottom) {
      scrollToBottom_useRef();
      setBottom(false);
    }
  }, [bottom]);

  return (
    <MainContainer>
      <CareerBox ref={boxBody}>
        <CareerBoxBody>
          <CareerTestBubble
            message={`안녕! 나는 네가 평소에 어떻게 행동하는지 알아보는 시간을 가질거야.
너무 부담갖진 말고 편하게 대답해줘`}
            role="assistant"
          />
          <DiaryInput tag={tag} handleClickSubmitBtn={handleClickSubmitBtn} />
          {/* 로딩바 */}
          {isPending ? <LoadingAnimation /> : null}
        </CareerBoxBody>
      </CareerBox>
    </MainContainer>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['shop', 'nav'])),
    },
  };
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  background-image: url('/src/NorthDiary_IMG/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

const CareerBox = styled.div`
  width: 70%;
  padding: 0 5rem;
  border-radius: 8px;

  background-image: url('/src/NorthDiary_IMG/content_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  min-height: 100vh;
  height: 100%;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    max-width: 37rem;
    padding: 0;
  }
`;

const CareerBoxBody = styled.div`
  min-height: 75vh;
  height: 100%;

  margin-top: 6rem;
  padding: 1rem;

  background: inherit;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  @media (max-width: 768px) {
    height: 86%;
    min-height: 70vh;
  }
`;
