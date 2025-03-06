import { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { handlePortOnePayCompleate } from '@/fetchAPI/PayAPI';

import PortOne from '@portone/browser-sdk/v2'; // 포트원 브라우저 sdk

export default function PortOnePay({
  days,
  originalPrice,
  discountedPrice,
  // value,
  backgroundUrl,
  color,
}) {
  const [paymentStatus, setPaymentStatus] = useState({
    status: 'IDLE',
  });

  function randomId() {
    return [...crypto.getRandomValues(new Uint32Array(2))]
      .map((word) => word.toString(16).padStart(8, '0'))
      .join('');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPaymentStatus({ status: 'PENDING' });
    let payment;
    const paymentId = randomId();
    try {
      payment = await PortOne.requestPayment({
        storeId: 'store-841fac61-b3e4-4270-9377-1339ccbc63d0', // 포트원 관리자 콘솔 -> 결제연동 -> 연동정보 (우상단)
        channelKey: 'channel-key-bb8ee80f-17e7-466d-a8b9-aa4063a4f177', // 포트원 관리자 콘솔 -> 결제연동 -> 연동정보 -> 채널관리 -> 테스트 -> 채널키
        paymentId, // 결제 ID. 서버측 결제 인증 시 사용됨
        orderName: days, // 상품명
        totalAmount: discountedPrice, // 상품 가격
        currency: 'KRW', // 화폐 종류
        payMethod: 'CARD', // 결제 수단
        // customData: {
        //   item: item.id,
        // },
      });
    } catch (e) {
      console.error(e);
      return;
    }

    // 결제 취소
    if (payment.code !== undefined) {
      Swal.fire({
        icon: 'error',
        title: '결제 취소',
        showConfirmButton: true,
        // timer: 1000,
      }).then(async () => {
        setPaymentStatus({
          status: 'IDLE',
        });
      });
      return;
    }

    // 결제 시도
    const completeResponse = await handlePortOnePayCompleate({
      paymentId: payment.paymentId,
    });
    // console.log(completeResponse);
    // 결제 성공
    if (completeResponse.data.status === 'PAID') {
      const paymentComplete = completeResponse;
      Swal.fire({
        icon: 'success',
        title: 'Pay Success!',
        text: 'Main Page로 이동합니다',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setPaymentStatus({
          status: paymentComplete.data.status,
        });
      });
    }
    // 결제 실패
    else {
      Swal.fire({
        icon: 'error',
        title: '결제 실패',
        showConfirmButton: false,
        timer: 1000,
      }).then(async () => {
        setPaymentStatus({
          status: 'IDLE',
          message: 'Payment Fail',
        });
      });
    }
  };

  return (
    <CardContainer onClick={handleSubmit} backgroundUrl={backgroundUrl}>
      <Title color={color}>{days}</Title>
      <OriginalPrice>{originalPrice}원</OriginalPrice>
      <DiscountedPrice>{discountedPrice}원</DiscountedPrice>
    </CardContainer>
  );
}

const CardContainer = styled.button`
  background-image: ${(props) =>
    props.backgroundUrl
      ? `url(${props.backgroundUrl})`
      : `url('/src/Shop_IMG/Shop_Ticket_Bg1_IMG.png')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

  @media (max-width: 768px) {
    width: 130px;
    height: 250px;
    gap: 0rem;
    padding-top: 5rem;
  }
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

  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.2rem;
  }
`;

const OriginalPrice = styled.div`
  font-size: 30px;
  color: #ff5151;
  text-decoration: line-through;
  font-family: AppleSDGothicNeoH00;

  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 0;
  }
`;

const DiscountedPrice = styled.div`
  color: #000;
  font-size: 60px;
  font-weight: bold;
  line-height: 40px;
  font-family: AppleSDGothicNeoH00;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
