/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// PT Result 페이지
export default function PersnalityTestResult() {
  const [ptResult, setPtResult] = useState(''); // PT 결과 분석 요청
  const router = useRouter();

  const handleNotePageClick = () => {
    router.push('/test_pt/result/note'); // 결과 유의사항 페이지 이동
  };

  const handleDetailPageClick = (el) => {
    localStorage.setItem('PTDetailSelectedType', el);
    router.push('/test_pt/result/detail');
  };

  useEffect(() => {
    const ptResult = localStorage.getItem('PTResult');
    if (ptResult === null) {
      alert('정상적인 경로로 접근해주세요!');
      router.replace('/');
      return;
    }
    setPtResult(ptResult);

    // return () => {
    //   localStorage.removeItem('PTResult'); // 페이지 이동 시 localStorage 초기화
    // };
  }, []);

  return (
    <MainContainer>
      <PTResultBox>
        {ptResult ? (
          <>
            {/* PT 결과 카드 */}
            <PtResultCardContainer>
              <Image
                src={`/src/PT_IMG/PT_Result_Card/${ptResult}.png`}
                alt={'avartar_icon'}
                width={878}
                height={1228}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </PtResultCardContainer>
            {/* PT 결과 아이콘 */}
            <PtResultIconContainer>
              {ptResult.split('').map((el, index) => {
                return (
                  <PtResultIcon
                    key={el + index}
                    onClick={() => handleDetailPageClick(el)}
                  >
                    <Image
                      src={`/src/PT_IMG/PT_Result_Icon/${el}.png`}
                      alt={'avartar_icon'}
                      width={500}
                      height={500}
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </PtResultIcon>
                );
              })}
            </PtResultIconContainer>
            {/* 결과 자세히 보기 버튼 */}
            <PtNextPageButton
              onClick={handleNotePageClick}
            >{`결과 자세히 보기`}</PtNextPageButton>
          </>
        ) : (
          '결과를 불러오는 중입니다...'
        )}
      </PTResultBox>
    </MainContainer>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['pt', 'nav'])),
    },
  };
}

// styled-component의 animation 설정 방법 (keyframes 메서드 사용)

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  background-image: url('/src/EBT_IMG/background.jpg');
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

const PTResultBox = styled.div`
  width: 70%;
  min-height: 100vh;
  height: 100%;
  padding: 8rem 5rem;

  background-image: url('/src/NorthDiary_IMG/content_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5rem;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    max-width: 37rem;
    padding: 8rem 0;
  }
`;

const PtResultCardContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    padding: 0;
  }
`;

const PtResultIconContainer = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3rem;

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    padding: 0;
  }
`;

const PtResultIcon = styled.div`
  width: 7rem;
  height: 7rem;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const PtNextPageButton = styled.button`
  padding: 1rem 3rem;
  border-radius: 1rem;
  border: none;
  background-color: #a378bd;
  color: white;

  font-family: AppleSDGothicNeoM00;
  font-size: 1.3rem;
  font-weight: 400;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;
