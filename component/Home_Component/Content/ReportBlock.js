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
        }).then((confirmResult) => {
          if (confirmResult.isConfirmed) {
            let timerInterval;
            const input = {
              name,
              email,
              age,
              gender,
              pUid: localStorage.getItem('id'),
            };

            let timeLeft = 20000;
            let countdownSwal; // 후속 Swal 참조용

            const apiCall = async () => {
              try {
                const res = await handleReportResult(input);
                return res;
              } catch (err) {
                throw err;
              }
            };

            const countdown = new Promise((resolve) => {
              Swal.fire({
                title: '결과보고서를 전송 중입니다...',
                html: '남은 예상 시간: <b>20000</b> ms',
                allowOutsideClick: false,
                didOpen: () => {
                  Swal.showLoading();
                  const b = Swal.getPopup().querySelector('b');

                  timerInterval = setInterval(() => {
                    timeLeft -= 100;
                    if (b) b.textContent = `${timeLeft}`;
                    if (timeLeft <= 0) {
                      clearInterval(timerInterval);
                      resolve('timeout'); // 15초 지나면 resolve
                    }
                  }, 100);
                },
                willClose: () => {
                  clearInterval(timerInterval);
                },
              });
            });

            // ✅ 응답 vs 타이머 중 먼저 도착한 것 판별
            Promise.race([apiCall(), countdown]).then(async (winner) => {
              // 이미 Swal 열려 있다면 닫기
              Swal.close();

              if (winner === 'timeout') {
                // ⏳ 15초 초과 후 응답 안 온 경우 → 진행 중 표시
                countdownSwal = await Swal.fire({
                  title: '진행 중...',
                  text: '서버 응답을 기다리고 있습니다.',
                  allowOutsideClick: false,
                  didOpen: () => Swal.showLoading(),
                });

                // 이제 응답 기다리기
                try {
                  const res = await apiCall(); // 최종 응답 기다리기
                  Swal.close();

                  if (res.status !== 200) {
                    await Swal.fire(
                      '전송 실패',
                      '결과보고서 전송 실패!',
                      'error'
                    );
                  } else {
                    await Swal.fire(
                      '전송 완료',
                      '이메일을 확인해주세요!',
                      'success'
                    );
                  }
                } catch (error) {
                  Swal.close();
                  await Swal.fire(
                    '에러 발생',
                    '서버 통신 중 문제가 발생했습니다.',
                    'error'
                  );
                }
              } else {
                // ✅ 응답이 먼저 온 경우 처리
                if (winner.status !== 200) {
                  await Swal.fire(
                    '전송 실패',
                    '결과보고서 전송 실패!',
                    'error'
                  );
                } else {
                  await Swal.fire(
                    '전송 완료',
                    '결과보고서 전송 성공!',
                    'success'
                  );
                }
              }
            });
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
