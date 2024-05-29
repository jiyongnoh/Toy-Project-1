/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FlexContainer,
  StyledButton,
  StyledInput,
} from '../styled-component/common';
import {
  loginAPI,
  logoutAPI,
  loginAPI_OAuth_URL,
  loginAPI_OAuth_AccessToken,
} from '@/fetchAPI';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { log, oauthType } from '../store/state';
import Swal from 'sweetalert2';
import { useSearchParams } from 'next/navigation';
import GoogleOAuthBtn from '@/component/Login_Componet/googleOAuthBtn';
import KakaoOAuthBtn from '@/component/Login_Componet/kakaoOAuthBtn';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const expireSetHourFunc = (hour) => {
  const today = new Date();
  return today.setHours(today.getHours() + hour);
};

export default function Login() {
  const { t } = useTranslation('login');

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [login, setLogin] = useRecoilState(log);
  const [url, setUrl] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const type = searchParams.get('type');

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!id || !pwd) {
      Swal.fire({
        icon: 'error',
        title: t('login_input_empty_title'),
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    const flag = await loginAPI(process.env.NEXT_PUBLIC_URL, {
      LoginData: {
        pUid: id,
        passWard: pwd,
      },
    });
    if (flag) {
      Swal.fire({
        icon: 'success',
        title: t('login_success_title'),
        text: t('login_success_text'),
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setLogin(true);
        localStorage.setItem(
          'log',
          JSON.stringify({
            expires: expireSetHourFunc(1),
          })
        );
        localStorage.setItem('id', id);
        router.push('/');
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: t('login_fail_title'),
        text: t('login_fail_text'),
      });
    }
  };

  const oauthGoogleHandler = async () => {
    if (code) {
      try {
        const res = await loginAPI_OAuth_AccessToken(
          `${process.env.NEXT_PUBLIC_URL}/login/oauth_token/google`,
          { code }
        );

        if (res.status === 200) {
          const data = await res.json();
          Swal.fire({
            icon: 'success',
            title: t('login_success_title'),
            text: t('login_success_text'),
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            setLogin(true);
            localStorage.setItem(
              'log',
              JSON.stringify({
                expires: expireSetHourFunc(1),
              })
            );
            localStorage.setItem('id', data.data.id);
            router.push('/');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: t('login_fail_title'),
            text: t('login_fail_text'),
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const oauthKakaoHandler = async () => {
    if (code) {
      try {
        const res = await loginAPI_OAuth_AccessToken(
          `${process.env.NEXT_PUBLIC_URL}/login/oauth_token/kakao`,
          { code }
        );
        console.log(res);

        if (res.status === 200) {
          const data = await res.json();
          Swal.fire({
            icon: 'success',
            title: t('login_success_title'),
            text: t('login_success_text'),
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            setLogin(true);
            localStorage.setItem(
              'log',
              JSON.stringify({
                expires: expireSetHourFunc(1),
              })
            );
            localStorage.setItem('id', data.data.id);
            router.push('/');
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: t('login_fail_title'),
            text: t('login_fail_text'),
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      console.log(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }
  }, []);

  useEffect(() => {
    const loginSession = JSON.parse(localStorage.getItem('log'));
    if (loginSession) {
      router.replace('/');
      return;
    }
  }, [login]);

  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  useEffect(() => {
    if (type === 'kakao') oauthKakaoHandler();
    else oauthGoogleHandler();
  }, [code]);

  return (
    <LoginPageContainer>
      <FlexContainer
        justify="center"
        align="center"
        dir="col"
        width="100vw"
        height="100vh"
      >
        <FormContainer>
          <H1>{t('login_title')}</H1>
          <InputContainer>
            <StyledInput
              color="black"
              placeholder={t('login_id_placeholder')}
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <StyledInput
              color="black"
              type="password"
              placeholder={t('login_password_placeholder')}
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
            />
          </InputContainer>
          <StyledButton color="black" onClick={submitHandler}>
            {t('login_submit')}
          </StyledButton>
          <GoogleOAuthBtn setUrl={setUrl} />
          <KakaoOAuthBtn setUrl={setUrl} />
        </FormContainer>
      </FlexContainer>
    </LoginPageContainer>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['login', 'nav'])),
    },
  };
}

const LoginPageContainer = styled.main`
  background-image: url('/src/soyesKids_Background_image.png');
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

const H1 = styled.h1`
  color: black;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;
