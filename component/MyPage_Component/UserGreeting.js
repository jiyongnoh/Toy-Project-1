// components/UserGreeting.js
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const UserGreeting = ({ username, daysLeft, purchaseDate }) => {
  return (
    <Container>
      <Image
        src="/src/MyPage_IMG/MyPage_Soyes_Icon_IMG.png"
        alt="User Avatar"
        width={180}
        height={180}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      {/* <Avatar
        src="/src/MyPage_IMG/MyPage_Soyes_Icon_IMG.png"
        alt="User Avatar"
      /> */}
      <TextContainer>
        <GreetingText>
          <span>{username}</span>님 안녕하세요!
        </GreetingText>
        <StatusText>
          현재 <span>{daysLeft}일 이용권</span> 사용중이에요.
        </StatusText>
        <PurchaseDate>[{purchaseDate} 구매]</PurchaseDate>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const GreetingText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;

  font-family: AppleSDGothicNeoB00;

  span {
    font-size: 2rem;
    color: #746d69;
  }
`;

const StatusText = styled.div`
  font-size: 1rem;
  color: #333;
  span {
    color: #ff5a5a;
    font-weight: bold;
  }

  font-family: AppleSDGothicNeoB00;
`;

const PurchaseDate = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 4px;

  font-family: AppleSDGothicNeoB00;
`;

export default UserGreeting;
