import React, { useState } from 'react';

import styled from 'styled-components';
import CareerResultCard from '@/component/Test_Component/CareerResultCard';
import CareerTypeCard from './CareerTypeCard';
import CareerRadarChart from './CareerRadarChart';
import Image from 'next/image';
import Modal from 'react-modal';

// 모달 스타일 지정
Modal.setAppElement('#__next');

// 적성검사 결과 분석 레이블
const labels = [
  { text: '실재형', subText: 'Realistic', color: '#ff4151', maxCount: 6 }, // R (Red)
  { text: '탐구형', subText: 'Investigative', color: '#ff8d54', maxCount: 5 }, // I (Orange)
  { text: '예술형', subText: 'Artistic', color: '#7756ff', maxCount: 7 }, // A (Purple)
  { text: '사회형', subText: 'Social', color: '#1571ff', maxCount: 5 }, // S (Blue)
  { text: '진취형', subText: 'Enterprising', color: '#00db81', maxCount: 5 }, // E (Green)
  { text: '관습형', subText: 'Conventional', color: '#ffc55c', maxCount: 5 }, // C (Yellow)
];

const CareerResultBubble = ({ content, role, careerTypeMap }) => {
  const [analysisModalIsOpen, setAnalysisModalIsOpen] = useState(false);
  const handleModalClose = () => setAnalysisModalIsOpen(false);

  const labelsData = labels.map((label) => [
    label.subText[0],
    parseInt((careerTypeMap[label.subText[0]] / label.maxCount) * 100) || 5,
  ]);

  // 선호 유형 순위
  const sortedEntries = labelsData.slice().sort((a, b) => b[1] - a[1]);

  const [firstValue, secondValue] = [
    ...new Set(sortedEntries.map((el) => el[1])),
  ].slice(0, 2);

  const labelsDataRank = sortedEntries
    .filter(([_, value]) => value === firstValue || value === secondValue)
    .map(([key]) => key);

  return (
    <>
      <CareerResultBubbleContainer>
        {role !== 'user' ? (
          <Image
            src="/src/Consult_IMG/Icon/Consult_Soyes_Icon_IMG.png"
            alt={'avartar_icon'}
            width={45}
            height={45}
          />
        ) : null}
        <ImgContanier>
          {role !== 'user' ? <AvartarTitle>심리상담 소예</AvartarTitle> : null}
          <StyledBubble role={role}>
            {/* Detail Button */}
            <DetailButton onClick={() => setAnalysisModalIsOpen(true)}>
              <Image
                src={`/src/Career_IMG/Deatil.png`}
                alt={'Soyes_Career_Img'}
                width={35}
                height={35}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              {`자세히 보기`}
            </DetailButton>
            <BubbleContainer>
              {content.map((el, index) => {
                return (
                  // 1~3위까지의 직업 결과 카드
                  <CareerResultCard
                    key={el?.careerName}
                    careerName={el?.careerName}
                    careerIntroduce={el?.careerIntroduce}
                    careerType={el?.careerType}
                    carrerAbility={el?.carrerAbility}
                    careerContents={el?.careerContents}
                    carrerAptitudeInterest={el?.carrerAptitudeInterest}
                    imgURL={el?.imgURL}
                    rank={index + 1}
                  />
                );
              })}
            </BubbleContainer>
          </StyledBubble>
        </ImgContanier>
      </CareerResultBubbleContainer>
      {/* Modal */}
      <Modal
        isOpen={analysisModalIsOpen}
        onRequestClose={handleModalClose}
        style={modalStyles}
      >
        <ModalContent>
          <ModalSection>
            <strong>적성검사 결과</strong>
            {/* Chart Section (Row)*/}
            <ChartSection>
              {/* 레이더 차트 */}
              <CareerRadarChart
                labels={labels}
                labelsData={labelsData.map((el) => el[1])}
                careerTypeMap={careerTypeMap}
              />
              {/* 선호 유형 순위 및 타입 설명 */}
              <TypeContainer>
                {labelsDataRank.map((el, index) => {
                  const labelData = labels.find(
                    (label) => label.subText[0] === el
                  );

                  return (
                    <div key={JSON.stringify(el)}>
                      <TypeLabel>
                        {!index
                          ? '가장 선호하는 적성 유형은 다음과 같습니다'
                          : index === 1
                            ? '두 번째로 선호하는 적성 유형은 다음과 같습니다'
                            : ''}
                      </TypeLabel>
                      <TypeContent backColor={labelData.color}>
                        {labelData.text} {labelData.subText[0]},{' '}
                        {labelData.subText} Type
                      </TypeContent>
                    </div>
                  );
                })}
              </TypeContainer>
            </ChartSection>
            {/* 선호 유형 순위 및 타입 상세 설명 */}
            {labelsDataRank.map((el) => {
              return (
                <CareerTypeCard
                  key={el}
                  careerType={el}
                  type="result"
                  role="assistant"
                />
              );
            })}
          </ModalSection>
          <CloseButton onClick={handleModalClose}>닫기</CloseButton>
        </ModalContent>
      </Modal>
    </>
  );
};

// Styled Components
const CareerResultBubbleContainer = styled.div`
  display: flex;
  justify-content: ${(props) => (props.role === 'user' ? 'right' : 'left')};
  gap: 0.3rem;

  @media (max-width: 768px) {
  }
`;

const StyledBubble = styled.div`
  max-width: 100%;
  margin: 0.2rem 0.1rem;
  padding: ${(props) => (props.role === 'assistant' ? '1rem' : '0')};
  border-radius: 1rem;

  word-wrap: break-word;
  color: ${(props) => (props.role === 'assistant' ? 'black' : 'black')};
  background-color: ${(props) => (props.role === 'assistant' ? 'white' : null)};
  align-self: ${(props) => (props.role === 'user' ? 'flex-end' : 'flex-start')};

  border: ${(props) => (props.role === 'user' ? '0' : '3px solid #ececec')};
  text-align: left;
  margin-left: ${(props) => (props.role === 'user' ? 'auto' : null)};
  white-space: pre-wrap;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

const AvartarTitle = styled.span`
  font-size: 1.2rem;
  margin-left: 0.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImgContanier = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const BubbleContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

// 모달 스타일
const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
  },
  content: {
    width: '90%',
    maxWidth: '900px',
    height: 'auto',
    margin: 'auto',
    padding: '20px',
    borderRadius: '10px',
    background: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  strong {
    margin-bottom: 1rem;
    padding: 0.4rem 1rem;

    background-color: #ff6969;
    color: white;

    border-radius: 16px;

    font-family: AppleSDGothicNeoM00;
    text-align: center;
  }
`;

const CloseButton = styled.button`
  padding: 10px;

  border: none;
  border-radius: 5px;

  background-color: #ff6759;
  color: white;

  font-size: 1rem;
  font-family: AppleSDGothicNeoM00;

  cursor: pointer;
`;

const DetailButton = styled.button`
  width: 80px;
  height: 80px;

  border: none;
  border-radius: 100%;

  background-color: #ff6759;
  color: white;

  font-size: 0.8rem;
  font-family: AppleSDGothicNeoM00;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 0.2rem;

  position: absolute;
  top: 2rem;
  right: 2rem;

  cursor: pointer;
`;

const ChartSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const TypeContainer = styled.div`
  width: 350px;
  padding: 0.8rem 1rem;
  border: 2px solid #efd1b5;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TypeLabel = styled.div`
  width: 300px;
  margin: 0.4rem 0;

  font-size: 0.8rem;
  font-family: AppleSDGothicNeoM00;

  text-align: center;
`;

const TypeContent = styled.div`
  width: 300px;
  padding: 0.4rem 1rem;
  background-color: ${(props) => props.backColor || 'none'};
  color: white;
  border-radius: 5px;

  font-family: AppleSDGothicNeoM00;

  text-align: center;
`;

export default CareerResultBubble;
