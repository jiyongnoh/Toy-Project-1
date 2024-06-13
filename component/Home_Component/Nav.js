import styled from 'styled-components';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useRecoilState } from 'recoil';
import { log, avarta } from '../../store/state';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { logoutAPI } from '@/fetchAPI';
import { useTranslation } from 'next-i18next';

export default function Nav() {
  const router = useRouter();
  const { t } = useTranslation('nav');
  const currentPath = router.pathname;
  const [login, setLogin] = useRecoilState(log);
  const [avartaAI, setAvartaAI] = useRecoilState(avarta);
  const [showMenu, setShowMenu] = useState(currentPath !== '/' ? true : false);

  useEffect(() => {
    const loginSession = localStorage.getItem('log');
    if (loginSession) {
      const parsedSession = JSON.parse(loginSession);
      if (new Date(parsedSession.expires) > new Date()) {
        setLogin(true);
      } else {
        handleSessionExpired();
      }
    }
    const avarta = localStorage.getItem('avarta');
    if (avarta) {
      setAvartaAI(avarta);
    }
  }, []);

  // useCallback 적용. 불필요한 리렌더링 제거
  const handleSessionExpired = useCallback(() => {
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
  }, [router, setLogin, setAvartaAI]);

  const logoutHandler = useCallback(() => {
    Swal.fire({
      title: 'Do you want to LogOut?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        logoutAPI(`${process.env.NEXT_PUBLIC_URL}`);
        Swal.fire({
          icon: 'success',
          title: 'LogOut Success!',
          text: 'Main Page로 이동합니다',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setLogin(false);
          setAvartaAI('default');
          localStorage.removeItem('log');
          localStorage.removeItem('id');
          localStorage.removeItem('avarta');
          router.push('/');
        });
      }
    });
  }, [router, setLogin, setAvartaAI]);

  // useMemo 적용
  const menuItems = useMemo(
    () => [
      { href: '/test_ebt', label: t('ebt') },
      { href: '/test_pt', label: t('pt') },
      { href: '/test_all', label: t('consult') },
      { href: '/review', label: t('review') },
      { href: '/meditation_painting', label: t('meditation_painting') },
      { href: '/shop', label: t('shop') },
    ],
    [t]
  );

  return (
    <NavContainer>
      {login ? (
        <NavUl>
          <NavLi>
            <Link href="/" passHref>
              <NavBtn>{t('main')}</NavBtn>
            </Link>
          </NavLi>
          {/* <NavLi>
            <Link href="/upload" passHref>
              <NavBtn>Upload</NavBtn>
            </Link>
          </NavLi> */}
          {/* <NavLi>
            <Link href="/meditation" passHref>
              <NavBtn>Meditation</NavBtn>
            </Link>
          </NavLi> */}
          <NavListContainer>
            <NavBtn onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? '▲' : '▼'}
            </NavBtn>
            {showMenu && (
              <NavMenuContainer>
                {menuItems.map((item) => (
                  <NavLi key={item.href}>
                    <Link href={item.href} passHref>
                      <NavBtn selected={item.href === currentPath}>
                        {item.label}
                      </NavBtn>
                    </Link>
                  </NavLi>
                ))}
              </NavMenuContainer>
            )}
          </NavListContainer>
          <NavLi>
            <NavBtn onClick={logoutHandler}>{t('logout')}</NavBtn>
          </NavLi>
          <LanguageSwitcher />
        </NavUl>
      ) : (
        <NavUl>
          <NavLi>
            <Link href="/" passHref>
              <NavBtn>{t('main')}</NavBtn>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/login" passHref>
              <NavBtn>{t('login')}</NavBtn>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/signup" passHref>
              <NavBtn>{t('signup')}</NavBtn>
            </Link>
          </NavLi>
          <LanguageSwitcher />
        </NavUl>
      )}
    </NavContainer>
  );
}

const NavContainer = styled.div.attrs({
  justify: 'end',
})`
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.01);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: end;
  height: 4rem;
  z-index: 1;

  @media (max-width: 768px) {
    height: 5%;
  }
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-right: 2rem;
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
  background-color: ${(props) =>
    props.selected ? 'rgba(0, 42, 255, 0.5)' : 'rgba(255, 255, 255, 0.05)'};
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  color: white;

  border: none;
  border-radius: 15px;

  margin: 4px 2px;
  padding: 13px 23px;

  text-align: center;
  text-decoration: none;

  display: inline-block;
  font-size: 16px;

  white-space: nowrap;

  &:hover {
    ${(props) => (props.selected ? null : 'padding: 15px 25px;')}
    background-color: rgba(0, 42, 255, 0.5);
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    margin: 2px;
    padding: 7px 10px;

    &:hover {
      ${(props) => (props.selected ? null : 'padding: 7px 10px;')}
      background-color: rgba(0, 42, 255, 0.5);
    }
  }

  cursor: pointer;

  transition: 0.5s;
`;
