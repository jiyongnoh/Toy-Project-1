/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ptTypeDetailMap = {
  S: {
    typeName: '관계형',
    typeSubName: 'Social Type',
    title: '아동은 독립형보다는 관계형에 가깝습니다.',
    content:
      '관계형은 다른 사람들과 어울리며 관계 맺는 것을 좋아하는 특질을 말합니다. 관계형은 사람을 좋아하는 강아지에 비유할 수 있습니다.',
  },
  I: {
    typeName: '독립형',
    typeSubName: 'Independent Type',
    title: '아동은 관계형보다는 독립형에 가깝습니다.',
    content:
      '독립형은 독립적으로 활동하는 것을 선호하는 특질을 말합니다. 독립적인 생활을 추구하는 고양이에 비유할 수 있습니다.',
  },
  O: {
    typeName: '개방형',
    typeSubName: 'Openess to Novelty Type',
    title: '아동은 안정형보다는 개방형에 가깝습니다.',
    content:
      '개방형은 새로운 자극에 마음이 열려 있고 모험을 즐기는 특질을 말합니다. 개방형은 새로운 자극이 많아 모험을 펼칠 수 있는 들판에 비유할 수 있습니다.',
  },
  F: {
    typeName: '안정형',
    typeSubName: 'pursuit of Familiarity type',
    title: '아동은 개방형보다는 안전형에 가깝습니다.',
    content:
      '안정형은 익숙하고 예측이 되는 대상이나 환경을 선호하고 안정을 추구하는 특질을 말합니다. 안정형은 익숙하고 편안한 집에 비유할 수 있습니다.',
  },
  C: {
    typeName: '용기형',
    typeSubName: 'Courageous Type',
    title: '아동은 신중형보다는 용기형에 가깝습니다.',
    content:
      '신중형은 위험과 실패를 대비하여 행동을 미리 조심할 줄 아는 신중한 특질을 말합니다. 신중형은 자기보호와 신중성을 상징하는 방패에 비유할 수 있습니다.',
  },
  P: {
    typeName: '신중형',
    typeSubName: 'Prudent Type',
    title: '아동은 용기형보다는 신중형에 가깝습니다.',
    content:
      '신중형은 위험과 실패를 대비하여 행동을 미리 조심할 줄 아는 신중한 특질을 말합니다. 신중형은 자기 보호와 신중성을 상징하는 방패에 비유할 수 있습니다.',
  },
  E: {
    typeName: '감정형',
    typeSubName: 'Emotional Type',
    title: '아동은 이성형보다는 감정형에 가깝습니다. ',
    content:
      '감정형은 감수성이 풍부하고 감정이 드러나기 쉬운 특질을 말합니다. 감정형은 뜨거움과 열정을 상징하는 불에 비유할 수 있습니다.',
  },
  R: {
    typeName: '이성형',
    typeSubName: 'Reasonable Type',
    title: '아동은 감정형보다는 이성형에 가깝습니다.',
    content:
      '이성형은 이성적인 판단이 앞서고 침착한 특질을 말합니다. 이성형은 차가움과 침착함을 상징하는 물에 비유할 수 있습니다.',
  },
};

// PT Result Detail 페이지
export default function PersnalityTestResultDetail() {
  const [ptResult, setPtResult] = useState(''); // PT 결과 분석 요청
  const [ptResultSelectedType, setPtResultSelectedType] = useState(''); // PT 결과 분석 요청
  const router = useRouter();

  const handleMainPageClick = () => {
    router.push('/'); // 결과 유의사항 페이지 이동
  };

  useEffect(() => {
    const ptResult = localStorage.getItem('PTResult');

    if (ptResult === null) {
      alert('정상적인 경로로 접근해주세요!');
      router.replace('/');
      return;
    }

    setPtResult(ptResult);
    setPtResultSelectedType(
      localStorage.getItem('PTDetailSelectedType') || ptResult[0]
    );

    // return () => {
    //   localStorage.removeItem('PTDetailSelectedType'); // 페이지 이동 시 localStorage 초기화
    // };
  }, []);

  return (
    <MainContainer>
      <PTResultBox>
        {ptResult ? (
          <>
            {/* PT 결과 아이콘 */}
            <PtResultIconContainer>
              {ptResult.split('').map((el, index) => {
                return (
                  <PtResultIcon
                    key={el + index}
                    selected={el === ptResultSelectedType}
                    onClick={() => {
                      localStorage.setItem('PTDetailSelectedType', el);
                      setPtResultSelectedType(el);
                    }}
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
            {/* Type 카드 */}
            <PtResultCardContainer>
              <Image
                src={`/src/PT_IMG/PT_Result_Detail_Card/${ptResultSelectedType}.png`}
                alt={'avartar_icon'}
                width={638}
                height={890}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </PtResultCardContainer>
            {/* Type 설명 */}
            <PtResultInfoContainer>
              <PtResultInfoTypeNameContainer type={ptResultSelectedType}>
                <h1>{ptTypeDetailMap[ptResultSelectedType].typeName}</h1>
                <h2>{ptTypeDetailMap[ptResultSelectedType].typeSubName}</h2>
              </PtResultInfoTypeNameContainer>
              <PTResultInfoContentContainer>
                <u>{ptTypeDetailMap[ptResultSelectedType].title}</u>
                <p>{ptTypeDetailMap[ptResultSelectedType].content}</p>
                <Image src={`/src/PT_IMG/note.png`} alt={'note'} fill />
              </PTResultInfoContentContainer>
            </PtResultInfoContainer>
            {/* 결과 자세히 보기 버튼 */}
            <PtNextPageButton
              onClick={handleMainPageClick}
            >{`메인 페이지`}</PtNextPageButton>
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

    gap: 2rem;
  }
`;

const PtResultCardContainer = styled.div`
  width: 35%;

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

    gap: 1rem;
  }
`;

const PtResultIcon = styled.div`
  width: 7rem;
  height: 7rem;

  cursor: pointer;

  opacity: ${(props) => (props.selected ? 1 : 0.5)};

  @media (max-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
`;

const PtResultInfoContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    padding: 0;
  }
`;

const PtResultInfoTypeNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: AppleSDGothicNeoM00;
    color: ${(props) =>
      ['S', 'O', 'C', 'E'].includes(props.type) ? '#fd5f5f' : '#67bcea'};
  }

  h2 {
    font-family: AppleSDGothicNeoM00;
    font-weight: 400;
  }

  @media (max-width: 768px) {
  }
`;

const PTResultInfoContentContainer = styled.div`
  height: 300px;
  padding: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  gap: 1rem;

  u {
    font-family: AppleSDGothicNeoM00;
    font-size: 1.3rem;
    font-weight: 600;

    padding-bottom: 2px;
    text-decoration: none;
    border-bottom: 1px solid #000;

    z-index: 1;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    font-family: AppleSDGothicNeoM00;
    font-size: 1.3rem;
    font-weight: 400;
    z-index: 1;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    height: 220px;
    padding: 1.2rem;
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
    width: 40%;
    padding: 0.5rem 2rem;
    font-size: 1rem;
  }
`;
