import Head from "next/head";
import styled from "styled-components";
import { FlexContainer, StyledButton } from "../styled-component/common";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Toy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="outer-scratch">
        <div class="inner-scratch">
          <div class="background grain">
            <FlexContainer
              justify="center"
              align="center"
              dir="col"
              height="100vh"
            >
              <HomeSpan>Welcome My Toy Project</HomeSpan>
              <Link href="/login">
                <StyledButton>Login Page</StyledButton>
              </Link>
            </FlexContainer>
          </div>
        </div>
      </div>
    </>
  );
}

const HomeSpan = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;
