/* eslint-disable no-useless-catch */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import { handleReportResult } from '@/fetchAPI/testAPI';

const ReportBlock = ({
  title,
  subtitle,
  iconPath,
  backColor,
  color,
  consult,
}) => {
  const handleReportTransport = async () => {
    Swal.fire({
      title: '정보를 입력해주세요!',
      html: `
      <input id="swal-input1" class="swal2-input" placeholder="이름">
      <input id="swal-input3" placeholder="나이" type="number" min="0" max="150" style="width:44%; padding: 0.75em; font-size: 1.125em; border: 1px solid #d9d9d9; border-radius: 0.25em; box-sizing: border-box;">
      <select id="swal-input4" 
        style="padding: 0.75em; font-size: 1.125em; border: 1px solid #d9d9d9; border-radius: 0.25em; box-sizing: border-box;">
        <option value="남">남</option>
        <option value="여">여</option>
      </select>
      <input id="swal-input2" class="swal2-input" placeholder="*이메일" type="email">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: '확인',
      cancelButtonText: '취소',
      preConfirm: () => {
        const name = document.getElementById('swal-input1').value;
        const email = document.getElementById('swal-input2').value;
        const age = document.getElementById('swal-input3').value;
        const gender = document.getElementById('swal-input4').value;

        // ✅ 이메일 정규식 검사 (간단 버전)
        const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

        if (!name || !email || !age || !gender) {
          Swal.showValidationMessage('모든 정보를 입력해주세요!');
          return;
        }

        if (!emailRegex.test(email)) {
          Swal.showValidationMessage(
            '올바른 이메일 형식이 아닙니다! 예: example@domain.com'
          );
          return;
        }

        if (age < 0 || age > 150) {
          Swal.showValidationMessage(
            '나이는 0세 이상 150세 이하로 입력해주세요!'
          );
          return;
        }

        return { name, email, age, gender };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { name, email, age, gender } = result.value;

        Swal.fire({
          title: '입력 정보 확인',
          html: `
            <strong>이름:</strong> ${name}<br>
            <strong>이메일:</strong> ${email}<br>
            <strong>나이:</strong> ${age}<br>
            <strong>성별:</strong> ${gender}
          `,
          showCancelButton: true,
          confirmButtonText: '진행',
          cancelButtonText: '취소',
        }).then(async (confirmResult) => {
          if (confirmResult.isConfirmed) {
            let timerInterval;
            const input = {
              name,
              email,
              age,
              gender,
              pUid: localStorage.getItem('id'),
            };

            Swal.fire({
              title: '결과보고서를 전송 중입니다...',
              html: '남은 예상 시간: <b>30000</b> ms',
              allowOutsideClick: false,
              didOpen: () => {
                Swal.showLoading();
                const b = Swal.getPopup().querySelector('b');
                let timeLeft = 30000;

                timerInterval = setInterval(() => {
                  timeLeft -= 100;
                  if (b) b.textContent = `${timeLeft}`;
                  if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    Swal.close();

                    // ✅ 15초 후 이메일 확인 안내
                    Swal.fire({
                      icon: 'info',
                      title: '처리 중입니다',
                      text: '결과보고서가 전송되었습니다. 이메일을 확인해주세요!',
                    });
                  }
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            });

            // ✅ 백그라운드에서 비동기 API 호출
            try {
              const res = await handleReportResult(input);
              console.log('응답 상태:', res.status);
            } catch (err) {
              console.error('API 에러:', err);
            }
          }
        });
      }
    });
  };

  return (
    <Container backColor={backColor} consult={consult}>
      <img
        src={iconPath}
        alt="Content_Icon"
        width={40}
        height={40}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
      <TextContainer>
        <Title color={color}>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
      <PlayButton consult={consult} onClick={handleReportTransport}>
        <img
          src="/src/Content_IMG/Frame_재생버튼.png"
          alt="재생버튼"
          width={50}
          height={50}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </PlayButton>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1.5rem;
  padding: 1rem;
  background-color: ${(props) => props.backColor || '#FFFBE9'};
  gap: 1rem;

  border: 2.11px solid #e7e7e7;

  @media (max-width: 768px) {
    width: 100%;
    height: 125px;
    gap: 1rem;
    padding: 1rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin: 0;
  color: ${(props) => props.color || '#9c6ef3'};
  font-size: 1.2rem;
  font-family: AppleSDGothicNeoM00;
  letter-spacing: -0.1rem;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }

  user-select: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0;
  margin-top: 0.5rem;
  color: #333;
  font-size: 1.1rem;
  font-weight: 400;

  font-family: AppleSDGothicNeoM00;
  letter-spacing: -0.1rem;

  user-select: none;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const PlayButton = styled.button`
  display: ${(props) => (props.consult ? 'flex' : 'none')};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
  color: #e7a500;
  &:hover {
    color: #888;
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 1rem;
  }
`;

export default ReportBlock;
