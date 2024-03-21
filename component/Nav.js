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
          localStorage.removeItem("id");
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
              <NavBtn>Main</NavBtn>
            </Link>
          </NavLi>
          <NavLi>
            <NavBtn onClick={logoutHandler}>LogOut</NavBtn>
          </NavLi>
          <NavLi>
            <Link href="/ebt_test_v2" style={{ textDecoration: "none" }}>
              <NavBtn>Clova Voice Test</NavBtn>
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
              <NavBtn>Main</NavBtn>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/login" style={{ textDecoration: "none" }}>
              <NavBtn>Login</NavBtn>
            </Link>
          </NavLi>
          <NavLi>
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
          </NavLi>
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

  @media (max-width: 500px) {
    height: 20%;
  }
  z-index: 1;
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  gap: 0.5rem;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: start;
    padding: 0;
    gap: 0;
  }
`;

const NavLi = styled.li`
  display: flex;
`;

const NavBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px); // 불투명 필터
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  color: ${(props) => (props.color ? props.color : "white")};

  border: none;
  border-radius: 15px;

  margin: 4px 2px;
  padding: 13px 23px;

  text-align: center;
  text-decoration: none;

  display: inline-block;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};

  &:hover {
    padding: 15px 25px;
    background-color: rgba(0, 42, 255, 0.5);
    color: white;
  }

  @media (max-width: 500px) {
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
