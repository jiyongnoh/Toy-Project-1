/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import {
  FlexContainer,
  StyledButton,
  StyledInput,
} from '../styled-component/common';

import { useRouter } from 'next/router';
import { signupAPI } from '@/fetchAPI';
// SweetAlert2
import Swal from 'sweetalert2';
import { useRecoilState } from 'recoil';
import { log } from '../store/state';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// SignUp 페이지
export default function Signup() {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(false);
  const [login, setLogin] = useRecoilState(log);

  const router = useRouter();

  const minlengthStd = 8;
  const maxlengthStd = 15;
  const regex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글 및 한글 자모를 포함하는 정규 표현식

  useEffect(() => {
    const loginSession = JSON.parse(localStorage.getItem('log'));
    if (loginSession) {
      router.replace('/');
      return;
    }
  }, [login]);

  // 회원가입 형식 체크 메서드
  const formCheck = () => {
    if (!id || !pwd) {
      Swal.fire({
        icon: 'error',
        title: 'Input is empty!',
        showConfirmButton: false,
        timer: 1000,
      });
      return false;
    }

    if (regex.test(id) || regex.test(pwd)) {
      Swal.fire({
        icon: 'error',
        title: '한글 쓰지마!!',
        showConfirmButton: false,
        timer: 1000,
      });
      return false;
    }

    if (id.length < minlengthStd) {
      Swal.fire({
        icon: 'error',
        title: `ID 길이 ${minlengthStd}글자 이상!`,
        showConfirmButton: false,
        timer: 1000,
      });
      return false;
    }

    if (id.length > maxlengthStd) {
      Swal.fire({
        icon: 'error',
        title: `ID 길이 ${maxlengthStd}글자 이하!`,
        showConfirmButton: false,
        timer: 1000,
      });
      return false;
    }

    if (pwd.length < minlengthStd) {
      Swal.fire({
        icon: 'error',
        title: `Password 길이 ${minlengthStd}글자 이상!`,
        showConfirmButton: false,
        timer: 1000,
      });
      return false;
    }

    if (pwd.length > maxlengthStd) {
      Swal.fire({
        icon: 'error',
        title: `Password 길이 ${maxlengthStd}글자 이하!`,
        showConfirmButton: false,
        timer: 1000,
      });
      return false;
    }

    if (!check) {
      Swal.fire({
        icon: 'error',
        title: '약관 동의 Check!',
        showConfirmButton: false,
        timer: 1000,
      });
      return false;
    }

    return true;
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    // 회원가입 형식 체크
    if (!formCheck()) return;

    const flag = await signupAPI(process.env.NEXT_PUBLIC_URL, {
      SignUpData: {
        pUid: id,
        passWard: pwd,
        Email: email,
        // name : name,
        // phoneNumber : phoneNumber
      },
    });

    // console.log(flag);

    if (flag) {
      Swal.fire({
        icon: 'success',
        title: 'Sign Up Success!',
        text: 'Login Page로 이동합니다',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        // useRouter 인스턴스의 push 메서드를 통해 페이지 이동 가능
        router.push('/login');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Sign Up Fail',
      });
    }
  };

  return (
    <>
      <SignUpPageContainer>
        <FlexContainer justify="center" align="center" dir="col" height="100vh">
          {/* Form */}
          <FormContainer>
            <H1>Sign Up</H1>
            {/* ID Input */}
            <InputContainer>
              <StyledInput
                id="id"
                placeholder="ID"
                type="text"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </InputContainer>
            {/* PWD Input */}
            <InputContainer>
              <StyledInput
                id="password"
                placeholder="Password"
                type="password"
                value={pwd}
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
              />
            </InputContainer>
            {/* Email Input */}
            <InputContainer>
              <StyledInput
                id="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </InputContainer>

            {/* 약관 체크박스 */}
            <CheckboxContainer>
              <StyledInput
                type="checkbox"
                id="check"
                checked={check}
                onClick={(e) => {
                  setCheck(e.target.checked);
                }}
              />
              <CheckLabel for="check">Agree Check</CheckLabel>
            </CheckboxContainer>

            {/* Button Container*/}
            <BtnContainer>
              {/* Submit 버튼 */}
              <StyledButton onClick={signupHandler}>Sign up!</StyledButton>
              {/* Cancle 버튼 */}
              <StyledButton
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Cancle btn');
                  router.back(); // 뒤로가기
                }}
              >
                Cancle
              </StyledButton>
            </BtnContainer>
          </FormContainer>
        </FlexContainer>
      </SignUpPageContainer>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['signup', 'nav'])),
    },
  };
}

const SignUpPageContainer = styled.main`
  background-image: url('/src/Login_IMG/Login_Background_IMG.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100vw;
  height: 100vh;
`;

const FormContainer = styled.form`
  padding: 3rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-radius: 20px;

  background-color: #ffffff;
  background-color: rgba(255, 255, 255, 0.05);

  // 불투명 필터
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
const CheckLabel = styled.label`
  color: white;
`;
const H1 = styled.h1`
  color: white;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
