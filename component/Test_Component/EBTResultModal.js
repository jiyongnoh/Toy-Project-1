/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import Image from 'next/image';
import BarChart from './BarChart';

const EBTResultModal = ({ isOpen, onRequestClose, ebtClassData }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="EBT Result Modal"
      ariaHideApp={false}
    >
      <UserInfoHeaderContainer>
        <button onClick={onRequestClose}>
          <Image
            src="/src/MyPage_IMG/Icon/MyPage_Cancel_Icon_IMG.png"
            alt="Icon"
            width={60}
            height={60}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </button>
      </UserInfoHeaderContainer>
      <UserInfoContainer>
        {ebtClassData.content ? (
          <TestContainer>
            <TestCardContainer>
              {ebtClassData.ebt_class}: {ebtClassData.result}
            </TestCardContainer>
            <TestCardContainer>{ebtClassData.content}</TestCardContainer>
          </TestContainer>
        ) : (
          <ChartContainer>
            <BarChart
              labels={['학교생활', '또래관계', '가족관계', '자기인식']}
              scores={[
                ebtClassData.School,
                ebtClassData.Friend,
                ebtClassData.Family,
                ebtClassData.Self,
              ]}
              chartName="적응 영역"
            />
            <BarChart
              labels={[
                '전반적 기분',
                '불안',
                '우울',
                '신체증상',
                '분노/공격성',
              ]}
              scores={[
                ebtClassData.Mood,
                ebtClassData.Unrest,
                ebtClassData.Sad,
                ebtClassData.Health,
                ebtClassData.Angry,
              ]}
              chartName="정서적 스트레스"
            />
            <BarChart
              labels={['주의집중', '과잉행동']}
              scores={[ebtClassData.Attention, ebtClassData.Movement]}
              chartName="주의집중/과잉행동"
            />
          </ChartContainer>
        )}
      </UserInfoContainer>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  position: absolute;
  top: 55%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);

  /* max-width: 640px; */
  width: 90vw;
  height: auto;
  max-height: 90vh;

  background: #9051ff;
  border-radius: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  outline: none;

  overflow: auto;
  z-index: 1;

  @media (max-width: 768px) {
    top: 55%;
  }
`;

const UserInfoHeaderContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 1rem 2rem;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  font-family: AppleSDGothicNeoM00;

  button {
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 0 1rem 1rem;
    button {
      width: 35px;
      height: 35px;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
`;

const UserInfoContainer = styled.div`
  width: 100%;
  min-height: 600px;
  padding: 2rem 0;

  z-index: 1;
  background-color: #fffef8;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;

const ChartContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TestCardContainer = styled.div`
  width: 80%;
  @media (max-width: 768px) {
  }
`;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

export default EBTResultModal;
