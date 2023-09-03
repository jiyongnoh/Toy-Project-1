import styled from "styled-components";
import { StyledButton } from "../styled-component/common";
import Link from "next/link";

export default function Nav() {
  return (
    <NavContainer height="4rem" justify="end">
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
    </NavContainer>
  );
}

const NavContainer = styled.div`
  background-color: #4e11a2;

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
