7; /* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';

import { handleDiaryCreate } from '@/fetchAPI/northDiaryAPI';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CareerTestBubble from '@/component/Test_Component/CareerTestBubble';
import DiaryInput from '@/component/North_Component/DiaryInput';

function getRandomTag() {
  return ['mood', 'friend', 'family', 'school'][Math.floor(Math.random() * 4)];
}

export default function NorthEmotionDiary() {
  const [disabled, setDisabled] = useState(false);
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
    if (confirm(`작성한 일기를 저장하시겠습니까?`)) {
      try {
        // 감정 분석 API 호출 이후 state 갱신
        await handleDiaryCreate({
          ...input,
          tag,
          pUid: localStorage.getItem('id'),
        });
        setDisabled(true);
        setBottom(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 랜덤 태그 생성
  useEffect(() => {
    setTag(getRandomTag());
  }, []);

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
          <CareerTestBubble message={`${tag}`} role="assistant" />
          <DiaryInput
            disabled={disabled}
            handleClickSubmitBtn={handleClickSubmitBtn}
          />
        </CareerBoxBody>
        {disabled && (
          <CareerTestBubble
            message={`일기가 저장되었습니다.`}
            role="assistant"
          />
        )}
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
  min-height: 100vh;
  height: 100%;
  padding: 8rem 5rem;

  background-image: url('/src/NorthDiary_IMG/content_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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
