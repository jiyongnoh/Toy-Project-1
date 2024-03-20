/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FlexContainer,
  StyledButton,
  StyledInput,
} from "../styled-component/common";
import {
  loginAPI,
  loginAPI_OAuth_URL,
  loginAPI_OAuth_AccessToken,
} from "@/fetchAPI";

// Router
import { useRouter } from "next/router";
// Recoil
import { useRecoilState } from "recoil";
import { log } from "../store/state";
// SweetAlert2
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";
import GoogleOAuthBtn from "@/component/googleOAuthBtn";

// Login 페이지
export default function Login() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [check, setCheck] = useState(false);
  const [login, setLogin] = useRecoilState(log);
  const [url, setUrl] = useState("");

  // NextJs는 useNavigate 대신 useRouter를 사용한다
  const router = useRouter();

  // 권한 code Params 찾기
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

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

    const flag = await loginAPI(process.env.NEXT_PUBLIC_URL, {
      id,
      pwd,
    });

    // console.log(flag);

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

  const oauthsubmitHandler = async (e) => {
    if (e.target !== e.currentTarget) return;
    const url = await loginAPI_OAuth_URL(process.env.NEXT_PUBLIC_URL, {
      oauthType: e.target.value,
    });

    // console.log(url);

    // OAuth 인증 URL 이동
    window.location.href = url;
  };

  const oauthTokenHandler = async () => {
    console.log(code);
    if (code) {
      try {
        const data = await loginAPI_OAuth_AccessToken(
          process.env.NEXT_PUBLIC_URL,
          { code }
        );
        // console.log(data);

        if (data.id) {
          Swal.fire({
            icon: "success",
            title: "Login Success!",
            text: "Main Page로 이동합니다",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            setLogin(true);
            localStorage.setItem("log", true);
            localStorage.setItem("id", data.id);

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
      } catch (err) {
        console.error(err);
      }
    }
  };

  // localStorage는 초기 useState 생성 시점에서 호출될 수 없으므로 useEffect 시점에서 호출
  useEffect(() => {
    if (localStorage.getItem("id")) {
      setId(localStorage.getItem("id"));
      setCheck(true);
    }
  }, []);

  // url 변경 시 사용
  useEffect(() => {
    if (url) {
      window.location.href = url;
      setUrl(""); // 초기화
    }
  }, [url]);

  useEffect(() => {
    oauthTokenHandler();
  }, [code]);

  return (
    <LoginPageContainer>
      <FlexContainer
        justify="center"
        align="center"
        dir="col"
        width="100vw"
        height="100vh"
      >
        <FormContainer>
          <H1>Login</H1>
          <InputContainer>
            <StyledInput
              color="black"
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
              color="black"
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
              color="black"
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
              <StyledButton color="black" onClick={submitHandler}>
                Login
              </StyledButton>
            </Link>
            <Link href="/signup">
              <StyledButton
                color="black"
                onClick={() => {
                  console.log("click btn");
                }}
              >
                Sign up
              </StyledButton>
            </Link>
          </BtnContainer>
          {/* <GoogleOAuthButton
            color="black"
            value="google"
            onClick={oauthsubmitHandler}
          >
            <img
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-q.cdn.bubble.io%2Ff1536920601855x691820740932598700%2Fgoogle-logo-icon-PNG-Transparent-Background.png?w=&h=&auto=compress&dpr=1&fit=max"
              width={18}
              height={18}
            />
            <span>Google Login</span>
          </GoogleOAuthButton> */}
          <GoogleOAuthBtn setUrl={setUrl} />
        </FormContainer>
      </FlexContainer>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.main`
  background-image: url("/src/soyesKids_Background_image.png");
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
  color: black;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const GoogleOAuthButton = styled.button`
  background-color: rgba(255, 255, 255);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  color: ${(props) => (props.color ? props.color : "white")};

  border: none;
  border-radius: 15px;

  margin: 4px 2px;
  padding: 13px 23px;

  text-align: center;
  text-decoration: none;

  display: flex;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }

  transition: 0.5s;

  gap: 0.5rem;
`;
