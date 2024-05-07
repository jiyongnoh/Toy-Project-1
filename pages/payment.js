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

// Router
import { useRouter } from "next/router";
// Recoil
import { useRecoilState } from "recoil";
import { log, oauthType } from "../store/state";
// SweetAlert2
import Swal from "sweetalert2";
import { useSearchParams } from "next/navigation";

import { handlePayReady } from "@/fetchAPI/payAPI";

// Login 페이지
export default function Payment() {
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

  // localStorage는 초기 useState 생성 시점에서 호출될 수 없으므로 useEffect 시점에서 호출
  useEffect(() => {
    // 카카오 SDK 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      // Kakao.init을 이용하여 JavaScript Key를 사용하여 초기화합니다.
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
    }
  }, []);

  return (
    <ShopPageContainer>
      <FlexContainer
        justify="center"
        align="center"
        dir="col"
        width="100vw"
        height="100vh"
      >
        <FormContainer>
          <H1>Shop</H1>
          <StyledButton
            value={2000}
            color="black"
            onClick={async (e) => {
              e.preventDefault();
              let res = await handlePayReady({
                cid: "TC0ONETIME",
                partner_order_id: "partner_order_id",
                partner_user_id: "partner_user_id",
                item_name: "초코파이",
                quantity: "1",
                total_amount: "2200",
                vat_amount: "200",
                tax_free_amount: "0",
                approval_url: "https://developers.kakao.com/success",
                fail_url: "https://developers.kakao.com/fail",
                cancel_url: "https://developers.kakao.com/cancel",
              });
              console.log(res);
            }}
          >
            2000
          </StyledButton>
          <StyledButton
            color="black"
            value={3000}
            onClick={(e) => {
              e.preventDefault();
              console.log(e.target.value);
            }}
          >
            3000
          </StyledButton>
          <StyledButton
            value={4000}
            color="black"
            onClick={(e) => {
              e.preventDefault();
              console.log(e.target.value);
            }}
          >
            4000
          </StyledButton>
        </FormContainer>
      </FlexContainer>
    </ShopPageContainer>
  );
}

const ShopPageContainer = styled.main`
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
