import styled from "styled-components";
import { StyledButton } from "../styled-component/common";
import Link from "next/link";

import { useRecoilState } from "recoil";
import { log } from "../store/state";

export default function Nav() {
  const [login, setLogin] = useRecoilState(log);

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
            <StyledButton
              onClick={() => {
                setLogin(false);
              }}
            >
              LogOut
            </StyledButton>
          </NavLi>
          <NavLi>
            <Link href="/" style={{ textDecoration: "none" }}>
              <StyledButton>MyPage</StyledButton>
            </Link>
          </NavLi>
        </NavUl>
      ) : (
        <NavUl>
          <NavLi>
            <Link href="/" style={{ textDecoration: "none" }}>
              <StyledButton>Main</StyledButton>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/login" style={{ textDecoration: "none" }}>
              <StyledButton>Login</StyledButton>
            </Link>
          </NavLi>
          <NavLi>
            <Link href="/signup" style={{ textDecoration: "none" }}>
              <StyledButton>Sign Up</StyledButton>
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
  gap: 0.5rem;
`;

const NavLi = styled.li`
  display: flex;
`;
