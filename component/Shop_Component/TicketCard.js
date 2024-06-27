// components/TicketCard.js
import React from 'react';
import styled from 'styled-components';
import { payInfo } from '@/store/payInfo';
import { handleKakaoPayReady } from '@/fetchAPI/kakaoPayAPI';

const TicketCard = ({
  days,
  originalPrice,
  discountedPrice,
  value,
  backgroundUrl,
  color,
}) => {
  const kakaoPayHandle = async (e) => {
    // 카카오페이 결제 준비 API 호출 후, 받은 URL로 모달 띄우기
    try {
      let payClass = e.target.value;
      console.log(payClass);
      localStorage.setItem('payClass', payClass);
      let input = payInfo[payClass];

      // KakaoPay Ready API 호출
      const data = await handleKakaoPayReady({
        ...input,
        cid: process.env.NEXT_PUBLIC_KAKAO_PAY_CID, // 사업자 번호
        partner_user_id: localStorage.getItem('id'),
        approval_url: `${process.env.NEXT_PUBLIC_INNER_URL}/shop`,
        fail_url: `${process.env.NEXT_PUBLIC_INNER_URL}/shop`,
        cancel_url: `${process.env.NEXT_PUBLIC_INNER_URL}/shop`,
      });
      // redirect 되기 때문에 로컬 스토리지에 저장
      localStorage.setItem('tid', data.tid);
      // 결제 페이지로 이동하기
      window.location.href = data.next_redirect_pc_url;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <CardContainer
      onClick={kakaoPayHandle}
      value={value}
      backgroundUrl={backgroundUrl}
    >
      <Title color={color}>{days}</Title>
      <OriginalPrice>{originalPrice}원</OriginalPrice>
      <DiscountedPrice>{discountedPrice}원</DiscountedPrice>
    </CardContainer>
  );
};

const CardContainer = styled.button`
  background-image: ${(props) =>
    props.backgroundUrl
      ? `url(${props.backgroundUrl})`
      : `url('/src/Shop_IMG/Shop_Ticket_Bg1_IMG.png')`};
  border-radius: 20px;

  padding: 20px;
  padding-top: 8rem;
  width: 347px;
  height: 589px;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
`;

const Title = styled.div`
  color: ${(props) => (props.color ? props.color : '#fff500')};
  margin-bottom: 10px;
  text-decoration-line: underline;
  font-family: AppleSDGothicNeoH00;
  font-size: 40px;
  font-weight: bold;
  text-align: center;

  letter-spacing: -0.25rem;
`;

const OriginalPrice = styled.div`
  font-size: 30px;
  color: #ff5151;
  text-decoration: line-through;
  font-family: AppleSDGothicNeoH00;

  margin-bottom: 10px;
`;

const DiscountedPrice = styled.div`
  color: #000;
  font-size: 60px;
  font-weight: bold;
  line-height: 40px;
  font-family: AppleSDGothicNeoH00;
`;

export default TicketCard;
