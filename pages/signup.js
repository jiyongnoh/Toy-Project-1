import styled from "styled-components";

import { useEffect, useState } from "react";
import {
  FlexContainer,
  StyledButton,
  StyledInput,
} from "../styled-component/common";

export default function Signup() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    console.log(check);
  }, [check]);

  return (
    <>
      <SignUpPageContainer>
        <FlexContainer justify="center" align="center" dir="col" height="100vh">
          {/* Form */}
          <FormContainer>
            <H1>Sign Up</H1>
            {/* Name Input */}
            <InputContainer>
              <StyledInput
                id="name"
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </InputContainer>
            {/* Age Input */}
            <InputContainer>
              <StyledInput
                id="age"
                placeholder="Age"
                type="number"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </InputContainer>
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

            {/* 약관 체크박스 */}
            <CheckboxContainer>
              <input
                type="checkbox"
                id="check"
                onClick={(e) => {
                  setCheck(e.target.checked);
                }}
              />
              <label for="check">약관 동의?</label>
            </CheckboxContainer>

            {/* Submit Button */}
            <BtnContainer>
              <StyledButton
                onClick={(e) => {
                  e.preventDefault();
                  console.log("click btn");
                }}
              >
                Sign up!
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
