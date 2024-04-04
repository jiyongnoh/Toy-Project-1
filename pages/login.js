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
  logoutAPI,
  loginAPI_OAuth_URL,
  loginAPI_OAuth_AccessToken,
} from "@/fetchAPI";

// Router
import { useRouter } from "next/router";
// Recoil
import { useRecoilState } from "recoil";
import { log, oauthType } from "../store/state";
// SweetAlert2
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";
import GoogleOAuthBtn from "@/component/googleOAuthBtn";
import KakaoOAuthBtn from "@/component/kakaoOAuthBtn";

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
  const type = searchParams.get("type"); // 리디렉트 URI에 포함된 플랫폼 query

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
      LoginData: {
        pUid: id,
        passWard: pwd,
      },
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
        localStorage.setItem("id", id);
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

  const oauthGoogleHandler = async () => {
    // console.log(code);
    if (code) {
      try {
        const res = await loginAPI_OAuth_AccessToken(
          `${process.env.NEXT_PUBLIC_URL}/login/oauth_token/google`,
          { code }
        );

        if (res.status === 200) {
          const data = await res.json(); // Json Parsing
          Swal.fire({
            icon: "success",
            title: "Google Login Success!",
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
  const oauthKakaoHandler = async () => {
    // console.log(code);
    if (code) {
      try {
        const res = await loginAPI_OAuth_AccessToken(
          `${process.env.NEXT_PUBLIC_URL}/login/oauth_token/kakao`,
          { code }
        );
        console.log(res);

        if (res.status === 200) {
          const data = await res.json();
          Swal.fire({
            icon: "success",
            title: "KAKAO Login Success!",
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
    // 카카오 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      // Kakao.init을 이용하여 JavaScript Key를 사용하여 초기화합니다.
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }
  }, []);

  // url 이동
  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  useEffect(() => {
    if (type === "kakao") oauthKakaoHandler();
    else oauthGoogleHandler(); // default는 구글
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
            {/* <Link href="/signup">
              <StyledButton
                color="black"
                onClick={() => {
                  console.log("click btn");
                }}
              >
                Sign up
              </StyledButton>
            </Link> */}
          </BtnContainer>
          <GoogleOAuthBtn setUrl={setUrl} />
          <KakaoOAuthBtn setUrl={setUrl} />
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
