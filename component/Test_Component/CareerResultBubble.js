import React, { useState } from 'react';

import styled from 'styled-components';
import CareerResultCard from '@/component/Test_Component/CareerResultCard';
import CareerRadarChart from './CareerRadarChart';
import Image from 'next/image';
import Modal from 'react-modal';

// 모달 스타일 지정
Modal.setAppElement('#__next');

const CareerResultBubble = ({ content, role }) => {
  const [analysisModalIsOpen, setAnalysisModalIsOpen] = useState(false);
  const handleModalClose = () => setAnalysisModalIsOpen(false);

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
            <BubbleContainer>
              {content.map((el, index) => {
                return (
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
            <button onClick={() => setAnalysisModalIsOpen(true)}>
              자세히 보기
            </button>
          </StyledBubble>
        </ImgContanier>
      </CareerResultBubbleContainer>
      {/* 모달 */}
      <Modal
        isOpen={analysisModalIsOpen}
        onRequestClose={handleModalClose}
        style={modalStyles}
      >
        <ModalContent>
          <ModalSection>
            <strong>Test</strong>
            <CareerRadarChart />
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
  padding: ${(props) => (props.role === 'assistant' ? '1rem' : '0')};
  border-radius: 1rem;
  margin: 0.2rem 0.1rem;
  word-wrap: break-word;

  color: ${(props) => (props.role === 'assistant' ? 'black' : 'black')};
  background-color: ${(props) => (props.role === 'assistant' ? 'white' : null)};
  align-self: ${(props) => (props.role === 'user' ? 'flex-end' : 'flex-start')};

  p {
    margin: 0;
  }

  border: ${(props) => (props.role === 'user' ? '0' : '3px solid #ececec')};
  text-align: left;
  margin-left: ${(props) => (props.role === 'user' ? 'auto' : null)};
  white-space: pre-wrap;

  display: flex;
  flex-direction: column;
  align-items: center;
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
    maxWidth: '500px',
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
  strong {
    display: block;
    margin-bottom: 5px;
    font-family: AppleSDGothicNeoM00;
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

export default CareerResultBubble;
