import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Modal from 'react-modal';

// 모달 스타일 지정
Modal.setAppElement('#__next');

const backColorArray = ['#FF6759', '#FFC447', '#388CFF'];
const careerTypeMap = {
  R: {
    label: 'Realistic',
    title: '실재형',
    content: '현실적인 것에 관심이 있는',
  },
  I: {
    label: 'Investigative',
    title: '탐구형',
    content: '배움에 대한 열정이 있는',
  },
  A: { label: 'Artistic', title: '예술형', content: '예술적인 것을 사랑하는' },
  S: { label: 'Social', title: '사회형', content: '사람을 좋아하는' },
  E: { label: 'Enterprising', title: '진취형', content: '리더가 되기 원하는' },
  C: { label: 'Conventional', title: '관습형', content: '체계적이고 꼼꼼한' },
};

const CareerResultCard = ({
  careerName,
  careerIntroduce,
  careerType,
  carrerAbility,
  careerContents,
  carrerAptitudeInterest,
  imgURL,
  type,
  role,
  rank,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const backColor = useMemo(
    () => backColorArray[Math.floor(Math.random() * backColorArray.length)],
    []
  );
  const careerTypeData = careerTypeMap[careerType];

  return (
    <>
      {/* 카드 클릭 시 모달 열기 */}
      <CardContainer
        type={type}
        role={role}
        onClick={() => setModalIsOpen(true)}
      >
        <CareerRankLabel backColor={'#f7404c'}>{rank}위</CareerRankLabel>
        {/* 직업 이미지 */}
        <ImgContainer backColor={backColor}>
          <StyledImage
            src={imgURL}
            alt={'Soyes_Career_Img'}
            width={220}
            height={160}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </ImgContainer>
        {/* 직업명 */}
        <CareerTitle>⭐ {careerName} ⭐</CareerTitle>
        {/* 직업 간단소개 */}
        <CareerIntro>{careerIntroduce || 'none'}</CareerIntro>
        <CareerTypeContainer>
          <CareerLabel backColor={'#3388ff'}>적성유형</CareerLabel>
          <div>
            <CareerSpan>{careerTypeData?.content}</CareerSpan>
            <div>
              <CareerBoldSpan>{careerTypeData?.title}</CareerBoldSpan>
              <CareerBoldSpan color="#3388ff">{`(${careerType}, ${careerTypeData?.label} Type)`}</CareerBoldSpan>
            </div>
          </div>
        </CareerTypeContainer>
        <CareerTypeContainer>
          <CareerLabel backColor={'#f7404c'}>핵심능력</CareerLabel>
          <CareerSpan>
            {carrerAbility ? carrerAbility.join(', ') : 'none'}
          </CareerSpan>
        </CareerTypeContainer>
      </CardContainer>

      {/* 모달 */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyles}
      >
        <ModalContent>
          <CareerTitle>⭐ {careerName} ⭐</CareerTitle>
          <ImgContainer backColor={backColor}>
            <Image
              src={imgURL}
              alt={'Soyes_Career_Img'}
              width={250}
              height={200}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </ImgContainer>
          <ModalSection>
            <strong>직업 설명</strong>
            <CareerDetailIntro>
              {careerContents || '정보 없음'}
            </CareerDetailIntro>
          </ModalSection>
          <ModalSection>
            <strong>적성 및 흥미</strong>
            <CareerDetailIntro>
              {carrerAptitudeInterest || '정보 없음'}
            </CareerDetailIntro>
          </ModalSection>
          <CloseButton onClick={() => setModalIsOpen(false)}>닫기</CloseButton>
        </ModalContent>
      </Modal>
    </>
  );
};

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fffdf9;

  border: 2px solid #efd1b5;
  border-radius: 10px;

  gap: 1rem;

  cursor: pointer;

  /* &:hover {
    opacity: 0.9;
  } */

  -webkit-tap-highlight-color: transparent;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const CareerRankLabel = styled.label`
  padding: 0.4rem 1rem;
  border-radius: 10px;

  background-color: ${(props) => props.backColor || 'none'};
  color: white;

  font-size: 1.1rem;
  text-align: center;
  font-weight: 600;
  font-family: AppleSDGothicNeoM00;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ImgContainer = styled.div`
  width: 220px;
  height: 220px;

  background-color: ${(props) => props.backColor || 'none'};
  border-radius: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden; /* 원 밖으로 넘치는 부분 숨김 */
  position: relative;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover; /* 이미지를 원형 컨테이너에 맞춤 */
  width: 100%;
  height: 100%;
`;

const CareerTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  font-family: AppleSDGothicNeoM00;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CareerIntro = styled.p`
  width: 300px;

  padding: 1rem;

  background-color: #fff5dc;
  border-radius: 10px;

  font-size: 1.1rem;
  text-align: center;
  font-family: AppleSDGothicNeoM00;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 200px;
  }
`;

const CareerTypeContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CareerLabel = styled.label`
  padding: 0.4rem;
  border-radius: 10px;

  background-color: ${(props) => props.backColor || 'none'};
  color: white;

  font-size: 1.1rem;
  font-weight: 600;
  font-family: AppleSDGothicNeoM00;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CareerSpan = styled.span`
  width: 70%;
  font-size: 1rem;
  font-family: AppleSDGothicNeoM00;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 60%;
  }
`;

const CareerBoldSpan = styled.span`
  color: ${(props) => (props.color ? props.color : 'black')};
  font-family: AppleSDGothicNeoM00;
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.8rem;
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
  width: 100%;
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

const CareerDetailIntro = styled.p`
  width: 100%;
  height: 100%;
  min-height: 150px;
  padding: 1rem;

  background-color: #fff5dc;
  border-radius: 10px;

  font-size: 1rem;
  text-align: left;
  font-family: AppleSDGothicNeoM00;

  @media (max-width: 768px) {
    font-size: 0.8rem;
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

export default CareerResultCard;
