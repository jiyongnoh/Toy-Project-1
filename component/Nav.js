import styled from "styled-components";
import { StyledButton } from "../styled-component/common";
import Link from "next/link";

import { useRecoilState } from "recoil";
import { log } from "../store/state";
// Router
import { useRouter } from "next/router";
// SweetAlert2
import Swal from "sweetalert2";
import { useEffect } from "react";

export default function Nav() {
  const [login, setLogin] = useRecoilState(log);
  const router = useRouter();

  // localStorage는 초기 useState 생성 시점에서 호출될 수 없으므로 useEffect 시점에서 호출
  useEffect(() => {
    if (localStorage.getItem("log")) {
      setLogin(true);
    }
  }, []);

  // 로그 아웃 핸들러
  const logoutHandler = () => {
    Swal.fire({
      title: "Do you want to LogOut?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "LogOut Success!",
          text: "Main Page로 이동합니다",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setLogin(false);
          localStorage.removeItem("log");
          router.push("/");
        });
      }
    });
  };

  return (
    <NavContainer height="4rem" justify="end">
      {login ? (
        <NavUl>
          <NavLi>
            <Link href="/" style={{ textDecoration: "none" }}>
              <StyledButton>Main</StyledButton>
            </Link>
          </NavLi>
          <NavLi>
            <StyledButton onClick={logoutHandler}>LogOut</StyledButton>
          </NavLi>
          <NavLi>
            <Link href="/test" style={{ textDecoration: "none" }}>
              <StyledButton>Test</StyledButton>
            </Link>
          </NavLi>
          {/* <NavLi>
            <Link href="/mypage" style={{ textDecoration: "none" }}>
              <StyledButton>MyPage</StyledButton>
            </Link>
          </NavLi> */}
        </NavUl>
      ) : (
        <NavUl>
          <NavLi>
            <Link href="/" style={{ textDecoration: "none" }}>
              <StyledButton>Main</StyledButton>
            </Link>
          </NavLi>
          {/* <NavLi>
            <Link href="/login" style={{ textDecoration: "none" }}>
              <StyledButton>Login</StyledButton>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/test" style={{ textDecoration: "none" }}>
              <StyledButton>Test</StyledButton>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/ebt_test" style={{ textDecoration: "none" }}>
              <StyledButton>EBTest</StyledButton>
            </Link>
          </NavLi>
          */}
          {/* <NavLi>
            <Link href="/ebt_test_v2" style={{ textDecoration: "none" }}>
              <StyledButton>EBTest_V2</StyledButton>
            </Link>
          </NavLi> */}
          <NavLi>
            <Link
              href="/ebt_test_njy96_pupu"
              style={{ textDecoration: "none" }}
            >
              <StyledButton>공감친구 모델 - 푸푸</StyledButton>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/ebt_test_njy96_ubi" style={{ textDecoration: "none" }}>
              <StyledButton>공부친구 모델 - 우비</StyledButton>
            </Link>
          </NavLi>
          <NavLi>
            <Link
              href="/ebt_test_njy96_lala"
              style={{ textDecoration: "none" }}
            >
              <StyledButton>정서멘토 모델 - 라라</StyledButton>
            </Link>
          </NavLi>
          <NavLi>
            <Link
              href="/ebt_test_njy96_soyes"
              style={{ textDecoration: "none" }}
            >
              <StyledButton>전문상담사 - 소예</StyledButton>
            </Link>
          </NavLi>
          {/* <NavLi>
            <Link
              href="/ebt_test_njy96_lala_0304"
              style={{ textDecoration: "none" }}
            >
              <StyledButton>Case3(라라_0304_v1)</StyledButton>
            </Link>
          </NavLi>
          <NavLi>
            <Link
              href="/ebt_test_njy96_lala_0304_v2"
              style={{ textDecoration: "none" }}
            >
              <StyledButton>Case4(라라_0304_v2)</StyledButton>
            </Link>
          </NavLi> */}
          {/* <NavLi>
            <Link href="ebt_test_v2" style={{ textDecoration: "none" }}>
              <StyledButton>ebt_test_v2</StyledButton>
            </Link>
          </NavLi> */}
          {/* <NavLi>
            <Link href="/signup" style={{ textDecoration: "none" }}>
              <StyledButton>Sign Up</StyledButton>
            </Link>
          </NavLi> */}
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
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  gap: 0.5rem;
`;

const NavLi = styled.li`
  display: flex;
`;

const NavBtn = styled.button`
  padding: 0.3rem;
`;
