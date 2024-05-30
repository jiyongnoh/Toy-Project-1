import styled from 'styled-components';
// import { StyledButton } from "../../styled-component/common";
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useRecoilState } from 'recoil';
import { log, avarta } from '../../store/state';
// Router
import { useRouter } from 'next/router';
// SweetAlert2
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { logoutAPI } from '@/fetchAPI';

import { useTranslation } from 'next-i18next';

export default function Nav() {
  const [login, setLogin] = useRecoilState(log);
  const [avartaAI, setAvartaAI] = useRecoilState(avarta);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('nav');

  // localStorage는 초기 useState 생성 시점에서 호출될 수 없으므로 useEffect 시점에서 호출
  useEffect(() => {
    if (localStorage.getItem('log')) {
      const loginSession = JSON.parse(localStorage.getItem('log'));
      console.log(loginSession);
      if (new Date(loginSession.expires) > new Date()) setLogin(true);
      else {
        Swal.fire({
          icon: 'error',
          title: 'Login session expires',
          text: 'Main Page로 이동합니다',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          logoutAPI(`${process.env.NEXT_PUBLIC_URL}`);
          setLogin(false);
          localStorage.removeItem('log');
          localStorage.removeItem('id');
          localStorage.removeItem('avarta');
          router.push('/');
        });
      }
    }
    if (localStorage.getItem('avarta')) {
      setAvartaAI(localStorage.getItem('avarta'));
    }
  }, []);

  // 로그 아웃 핸들러
  const logoutHandler = async () => {
    Swal.fire({
      title: 'Do you want to LogOut?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        // 로그아웃 API 호출 (비동기)
        logoutAPI(`${process.env.NEXT_PUBLIC_URL}`);
        // 페이지 이동 (비동기)
        Swal.fire({
          icon: 'success',
          title: 'LogOut Success!',
          text: 'Main Page로 이동합니다',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setLogin(false); // 전역 log 변수 초기화
          setAvartaAI('default'); // 전역 avarta 변수 초기화
          localStorage.removeItem('log');
          localStorage.removeItem('id');
          localStorage.removeItem('avarta');

          router.push('/');
        });
      }
    });
  };

  return (
    <NavContainer height="4rem" justify="end">
      {login ? (
        <NavUl>
          <NavLi>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <NavBtn>{t('main')}</NavBtn>
            </Link>
          </NavLi>
          <NavListContainer>
            <NavBtn onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? '▲' : '▼'}
            </NavBtn>
            {showMenu && (
              <NavMenuContainer>
                <NavLi>
                  <Link href="/test_ebt" style={{ textDecoration: 'none' }}>
                    <NavBtn>{t('ebt')}</NavBtn>
                  </Link>
                </NavLi>
                <NavLi>
                  <Link href="/test_pt" style={{ textDecoration: 'none' }}>
                    <NavBtn>{t('pt')}</NavBtn>
                  </Link>
                </NavLi>
                <NavLi>
                  <Link href="/test_all" style={{ textDecoration: 'none' }}>
                    <NavBtn>{t('consult')}</NavBtn>
                  </Link>
                </NavLi>
                <NavLi>
                  <Link href="/review" style={{ textDecoration: 'none' }}>
                    <NavBtn>{t('review')}</NavBtn>
                  </Link>
                </NavLi>
                <NavLi>
                  <Link href="/shop" style={{ textDecoration: 'none' }}>
                    <NavBtn>{t('shop')}</NavBtn>
                  </Link>
                </NavLi>
              </NavMenuContainer>
            )}
          </NavListContainer>
          {/* <NavLi>
            <Link href="/mypage" style={{ textDecoration: "none" }}>
              <StyledButton>MyPage</StyledButton>
            </Link>
          </NavLi> */}
          <NavLi>
            <NavBtn onClick={logoutHandler}>{t('logout')}</NavBtn>
          </NavLi>
          <LanguageSwitcher />
        </NavUl>
      ) : (
        <NavUl>
          <NavLi>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <NavBtn>{t('main')}</NavBtn>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/login" style={{ textDecoration: 'none' }}>
              <NavBtn>{t('login')}</NavBtn>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/signup" style={{ textDecoration: 'none' }}>
              <NavBtn>{t('signup')}</NavBtn>
            </Link>
          </NavLi>
          {/* <NavLi>
            <Link
              href="/ebt_test_njy96_pupu"
              style={{ textDecoration: "none" }}
            >
              <NavBtn>공감친구 모델 - 푸푸</NavBtn>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/ebt_test_njy96_ubi" style={{ textDecoration: "none" }}>
              <NavBtn>공부친구 모델 - 우비</NavBtn>
            </Link>
          </NavLi>
          <NavLi>
            <Link
              href="/ebt_test_njy96_lala"
              style={{ textDecoration: "none" }}
            >
              <NavBtn>정서멘토 모델 - 라라</NavBtn>
            </Link>
          </NavLi>
          <NavLi>
            <Link
              href="/ebt_test_njy96_soyes"
              style={{ textDecoration: "none" }}
            >
              <NavBtn>전문상담사 - 소예</NavBtn>
            </Link>
          </NavLi> */}
          <LanguageSwitcher />
        </NavUl>
      )}
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100vw;

  background-color: #5818a8;
  background-color: rgba(255, 255, 255, 0.01);

  position: fixed;
  top: 0;

  display: flex;
  justify-content: end;
  height: 4rem;

  @media (max-width: 768px) {
    height: 5%;
  }
  z-index: 1;
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    padding: 0;
    gap: 0;
  }
`;

const NavLi = styled.li`
  width: 100%;
  display: flex;
`;

const NavListContainer = styled.div`
  width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 1;
`;

const NavMenuContainer = styled.li`
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
`;

const NavBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px); // 불투명 필터
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  color: ${(props) => (props.color ? props.color : 'white')};

  border: none;
  border-radius: 15px;

  margin: 4px 2px;
  padding: 13px 23px;

  text-align: center;
  text-decoration: none;

  display: inline-block;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};

  white-space: nowrap; // 텍스트 줄바꿈 방지

  &:hover {
    padding: 15px 25px;
    background-color: rgba(0, 42, 255, 0.5);
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    margin: 2px;
    padding: 7px 10px;

    &:hover {
      padding: 7px 10px;
      background-color: rgba(0, 42, 255, 0.5);
    }
  }

  cursor: pointer;

  transition: 0.5s;
`;
