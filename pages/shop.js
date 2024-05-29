/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FlexContainer, StyledButton } from "../styled-component/common";

// Router
import { useRouter } from "next/router";
// Params
import { useSearchParams } from "next/navigation";

// SweetAlert2
import Swal from "sweetalert2";

import {
  handleKakaoPayReady,
  handleKakaoPayApprove,
} from "@/fetchAPI/kakaoPayAPI";

import { payInfo } from "@/store/payInfo";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// Login 페이지
export default function Shop() {
  // NextJs는 useNavigate 대신 useRouter를 사용한다
  const router = useRouter();
  // 권한 code Params 찾기
  const searchParams = useSearchParams();
  const pg_token = searchParams.get("pg_token");
  const { t } = useTranslation("shop");

  // 페이지 언마운트 설정
  useEffect(() => {
    return () => {
      localStorage.removeItem("tid");
      localStorage.removeItem("payClass");
    };
  }, []);

  // pg_token 반환 시 발동 - KakaoPay 승인
  useEffect(() => {
    if (pg_token) {
      // KakaoPay 승인 API 호출
      handleKakaoPayApprove({
        cid: process.env.NEXT_PUBLIC_KAKAO_PAY_CID,
        tid: localStorage.getItem("tid"),
        partner_order_id:
          payInfo[localStorage.getItem("payClass")].partner_order_id,
        partner_user_id: localStorage.getItem("id"),
        pg_token,
      }).then((res) => {
        // 승인 성공
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Pay Success!",
            text: "Main Page로 이동합니다",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            localStorage.removeItem("tid");
            localStorage.removeItem("payClass");
            router.push("/"); // 메인 화면으로 라우팅
          });
        }
        // 승인 실패
        else {
          Swal.fire({
            icon: "error",
            title: "Pay Fail!",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            localStorage.removeItem("tid");
            localStorage.removeItem("payClass");
            router.push("/shop"); // pg_token 삭제를 위한 라우팅
          });
        }
      });
    }
  }, [pg_token]);

  // KakaoPay 결제준비 이벤트 핸들러
  const handleOpenModal = async (e) => {
    e.preventDefault();
    // 카카오페이 결제 준비 API 호출 후, 받은 URL로 모달 띄우기
    try {
      let payClass = e.target.value;
      localStorage.setItem("payClass", payClass);
      let input = payInfo[payClass];

      // KakaoPay 준비 API 호출
      const data = await handleKakaoPayReady({
        ...input,
        cid: process.env.NEXT_PUBLIC_KAKAO_PAY_CID,
        partner_user_id: localStorage.getItem("id"),
        approval_url: `${process.env.NEXT_PUBLIC_INNER_URL}/shop`,
        fail_url: `${process.env.NEXT_PUBLIC_INNER_URL}/shop`,
        cancel_url: `${process.env.NEXT_PUBLIC_INNER_URL}/shop`,
      });
      // redirect 되기 때문에 로컬 스토리지에 저장
      localStorage.setItem("tid", data.tid);
      window.location.href = data.next_redirect_pc_url;
    } catch (error) {
      console.error(error);
    }
  };

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
            value="1daypass"
            color="black"
            onClick={handleOpenModal}
          >
            {t("pay_day")}
          </StyledButton>
          <StyledButton
            color="black"
            value="1monthpass"
            onClick={handleOpenModal}
          >
            {t("pay_month")}
          </StyledButton>
          <StyledButton
            value="1yearpass"
            color="black"
            onClick={handleOpenModal}
          >
            {t("pay_year")}
          </StyledButton>
        </FormContainer>
      </FlexContainer>
    </ShopPageContainer>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["shop", "nav"])),
    },
  };
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

const H1 = styled.h1`
  color: black;
`;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: baseline;
// `;

// const CheckboxContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 0.5rem;
// `;

// const BtnContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 0.5rem;
// `;
