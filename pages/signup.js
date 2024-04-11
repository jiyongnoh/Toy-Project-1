import styled from "styled-components";

import { useEffect, useState } from "react";
import {
  FlexContainer,
  StyledButton,
  StyledInput,
} from "../styled-component/common";

import { useRouter } from "next/router";
import { signupAPI } from "@/fetchAPI";
// SweetAlert2
import Swal from "sweetalert2";

// SignUp 페이지
export default function Signup() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);

  const router = useRouter();

  // useEffect(() => {
  //   console.log(check);
  // }, [check]);

  const signupHandler = async (e) => {
    e.preventDefault();

    if (!id || !pwd) {
      Swal.fire({
        icon: "error",
        title: "Input is empty!",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    if (!check) {
      Swal.fire({
        icon: "error",
        title: "약관 동의 Check!",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

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
        icon: "success",
        title: "Sign Up Success!",
        text: "Login Page로 이동합니다",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        // useRouter 인스턴스의 push 메서드를 통해 페이지 이동 가능
        router.push("/login");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Sign Up Fail",
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
            {/* PWD Input */}
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
              <input
                type="checkbox"
                id="check"
                onClick={(e) => {
                  setCheck(e.target.checked);
                }}
              />
              <label for="check">약관 동의 - 필수</label>
            </CheckboxContainer>

            {/* Button Container*/}
            <BtnContainer>
              {/* Submit 버튼 */}
              <StyledButton onClick={signupHandler}>Sign up!</StyledButton>
              {/* Cancle 버튼 */}
              <StyledButton
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Cancle btn");
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

const SignUpPageContainer = styled.main`
  background-image: url("/src/img.jpg");
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

const H1 = styled.h1`
  color: white;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;
