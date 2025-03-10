import styled from 'styled-components';
import Swal from 'sweetalert2';
import { handlePortOnePayCompleate } from '@/fetchAPI/PayAPI';

import PortOne from '@portone/browser-sdk/v2'; // 포트원 브라우저 sdk

export default function PortOnePay({
  orderName,
  // originalPrice,
  discountedPrice,
  // value,
  backgroundUrl,
  color,
}) {
  // 랜덤 ID 생성 함수
  function randomId() {
    return [...crypto.getRandomValues(new Uint32Array(2))]
      .map((word) => word.toString(16).padStart(8, '0'))
      .join('');
  }

  // 포트원 실행 함수
  const handleSubmit = async (e) => {
    if (discountedPrice === 0) {
      alert('준비중입니다');
      return;
    }
    e.preventDefault();

    let payment;
    const paymentId = randomId();
    try {
      //
      payment = await PortOne.requestPayment({
        storeId: 'store-841fac61-b3e4-4270-9377-1339ccbc63d0', // 포트원 관리자 콘솔 -> 결제연동 -> 연동정보 (우상단)
        channelKey: 'channel-key-bb8ee80f-17e7-466d-a8b9-aa4063a4f177', // 포트원 관리자 콘솔 -> 결제연동 -> 연동정보 -> 채널관리 -> 테스트 -> 채널키
        paymentId, // 결제 ID. 서버측 결제 인증 시 사용됨
        orderName: orderName, // 상품명
        totalAmount: discountedPrice, // 상품 가격
        currency: 'KRW', // 화폐 종류
        payMethod: 'CARD', // 결제 수단
        // customData: {
        //   item: item.id,
        // },
      });
    } catch (e) {
      console.error(e);
      alert('PortOne Browser Fail');
      return;
    }

    // 결제 취소
    if (payment.code !== undefined) {
      Swal.fire({
        icon: 'error',
        title: '결제 취소',
        showConfirmButton: true,
        // timer: 1000,
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
      });
    }
    // 결제 실패
    else {
      Swal.fire({
        icon: 'error',
        title: '결제 실패',
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <CardContainer onClick={handleSubmit} backgroundUrl={backgroundUrl}>
      <ContentContainer>
        <Title color={color}>{orderName}</Title>
        <DiscountedPrice>
          {discountedPrice
            ? `${discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`
            : ''}
        </DiscountedPrice>
      </ContentContainer>
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

  width: 347px;
  height: 589px;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  position: relative;

  @media (max-width: 768px) {
    width: 130px;
    height: 250px;
    gap: 0rem;
    padding-top: 5rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  position: absolute;

  top: 47%;

  @media (max-width: 768px) {
  }
`;

const Title = styled.div`
  color: ${(props) => (props.color ? props.color : '#fff500')};
  margin-bottom: 10px;
  text-decoration-line: underline;

  font-family: AppleSDGothicNeoH00;
  font-size: 35px;
  font-weight: bold;
  text-align: center;

  letter-spacing: -0.25rem;

  @media (max-width: 768px) {
    font-size: 20px;
    letter-spacing: -0.2rem;
  }
`;

// const OriginalPrice = styled.div`
//   font-size: 30px;
//   color: #ff5151;
//   text-decoration: line-through;
//   font-family: AppleSDGothicNeoH00;

//   margin-bottom: 10px;

//   @media (max-width: 768px) {
//     font-size: 15px;
//     margin-bottom: 0;
//   }
// `;

const DiscountedPrice = styled.div`
  color: #000;
  font-size: 50px;
  font-weight: bold;
  line-height: 40px;
  font-family: AppleSDGothicNeoH00;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
