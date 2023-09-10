import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FlexContainer,
  StyledButton,
  StyledInput,
} from "../styled-component/common";
import { loginAPI } from "@/fetchAPI";

// Router
import { useRouter } from "next/router";
// Recoil
import { useRecoilState } from "recoil";
import { log } from "../store/state";
// SweetAlert2
import Swal from "sweetalert2";

export default function Login() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [check, setCheck] = useState(false);

  const [login, setLogin] = useRecoilState(log);

  // NextJs는 useNavigate 대신 useRouter를 사용한다
  const router = useRouter();

  // localStorage는 초기 useState 생성 시점에서 호출될 수 없으므로 useEffect 시점에서 호출
  useEffect(() => {
    if (localStorage.getItem("id")) {
      setId(localStorage.getItem("id"));
      setCheck(true);
    }
  }, []);

  const submitHandler = async (e) => {
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

    const flag = await loginAPI("http://43.201.75.68:4000", {
      id,
      pwd,
    });

    console.log(flag);

    if (flag) {
      Swal.fire({
        icon: "success",
        title: "Login Success!",
        text: "Main Page로 이동합니다",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setLogin(true);
        localStorage.setItem("log", true);
        if (check) {
          localStorage.setItem("id", id);
        } else if (localStorage.getItem("id") && !check) {
          localStorage.removeItem("id");
        }
        // useRouter 인스턴스의 push 메서드를 통해 페이지 이동 가능
        router.push("/");
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Fail",
        text: "No Matching Input",
      });
    }
  };

  return (
    <>
      <LoginPageContainer>
        <FlexContainer justify="center" align="center" dir="col" height="100vh">
          <FormContainer>
            <H1>Login</H1>
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

            <CheckboxContainer>
              <input
                type="checkbox"
                id="check"
                checked={check}
                onClick={(e) => {
                  setCheck(e.target.checked);
                }}
              />
              <label for="check">ID Remeber</label>
            </CheckboxContainer>

            <BtnContainer>
              <Link href="/login">
                <StyledButton onClick={submitHandler}>Login</StyledButton>
              </Link>
              <Link href="/signup">
                <StyledButton
                  onClick={() => {
                    console.log("click btn");
                  }}
                >
                  Sign up
                </StyledButton>
              </Link>
            </BtnContainer>
          </FormContainer>
        </FlexContainer>
      </LoginPageContainer>
    </>
  );
}

const LoginPageContainer = styled.main`
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
