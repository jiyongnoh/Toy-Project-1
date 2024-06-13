/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { FlexContainer } from '../styled-component/common';
import { useEffect, useState } from 'react';

import VideoModal from '@/component/Chat_Component/VideoModal';
import Image from 'next/image';

// 아바타 관련 전역 변수
import { useRecoilState } from 'recoil';
import { log } from '../store/state';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const meditationVideoContentList = [
  {
    type: 'candle',
    videoId: 'nKCY3qz30N8',
    imageUrl: '/src/soyes_mobile.jpg',
    title: '촛불 명상',
  },
  {
    type: 'breath',
    videoId: 'tNao3xp5yjM',
    imageUrl: '/src/image.png',
    title: '호흡 명상',
  },
  {
    type: 'breath',
    videoId: 'nKCY3qz30N8',
    imageUrl: '',
    title: 'A 명상',
  },
  {
    type: 'breath',
    videoId: 'nKCY3qz30N8',
    imageUrl: '',
    title: 'B 명상',
  },
  {
    type: 'breath',
    videoId: 'nKCY3qz30N8',
    imageUrl: '',
    title: 'C 명상',
  },
  {
    type: 'breath',
    videoId: 'nKCY3qz30N8',
    imageUrl: 'src/.png',
    title: 'D 명상',
  },
  {
    type: 'breath',
    videoId: 'nKCY3qz30N8',
    imageUrl: 'src/.png',
    title: 'E 명상',
  },
  {
    type: 'breath',
    videoId: 'nKCY3qz30N8',
    imageUrl: 'src/.png',
    title: 'F 명상',
  },
  {
    type: 'breath',
    videoId: 'nKCY3qz30N8',
    imageUrl: 'src/.png',
    title: 'G 명상',
  },
];

// Renewel Test 페이지
export default function Meditation() {
  const [login, setLogin] = useRecoilState(log);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoId, setVideoId] = useState('');
  const { t } = useTranslation('meditation_painting');
  const router = useRouter();

  const openModalHandler = (youtubeUrl) => {
    // Closure 사용
    return () => {
      setVideoId(youtubeUrl);
      setModalIsOpen(true);
    };
  };

  const closeModalHandler = () => {
    setVideoId('');
    setModalIsOpen(false);
  };

  // Page Unmount
  useEffect(() => {
    return () => {
      console.log('Meditation Page Out');
    };
  }, []);
  // 로그인 권한이 없는 상태에서의 접근 시 login 페이지로 redirect
  useEffect(() => {
    const loginSession = JSON.parse(localStorage.getItem('log'));
    if (!loginSession) {
      router.replace('/login');
    }
  }, [login]);

  return (
    <MainContainer>
      <FlexContainer
        justify="center"
        align="center"
        dir="col"
        width="30vw"
        height="100%"
        padding="1rem"
        backColor="white"
      >
        <Image
          src="/src/Carousel_IMG/Carousel_그림명상.png"
          alt={'soyes_logo'}
          width={550}
          height={250}
        />

        <StyledLabel>
          <LabelText>{t('LabelText')}</LabelText>
        </StyledLabel>
        <ContentContainer>
          {meditationVideoContentList.map((el, index) => {
            return (
              <ImageButton
                key={index}
                imageUrl={el.imageUrl}
                onClick={openModalHandler(el.videoId)}
                value={el.type}
              >
                <ButtonText>{el.title}</ButtonText>
              </ImageButton>
            );
          })}
        </ContentContainer>
        <VideoModal
          isOpen={modalIsOpen}
          onRequestClose={closeModalHandler}
          videoId={videoId}
        />
      </FlexContainer>
    </MainContainer>
  );
}

// 다국어 지원 관련 getStaticProps 처리
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['meditation_painting', 'nav'])),
    },
  };
}

const MainContainer = styled.div`
  background-image: url('/src/img.jpg'); // 배경 이미지
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    overflow: hidden;
  }

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    overflow: hidden;
  }

  position: relative;
`;
// 버튼 컴포넌트 정의
const ImageButton = styled.button`
  width: 170px; /* 버튼 너비 */
  height: 180px; /* 버튼 높이 */
  background-image: url(${(props) => props.imageUrl}); /* 이미지 경로 설정 */
  background-size: cover; /* 이미지 크기 조정 */
  background-position: center; /* 이미지 위치 조정 */
  border: none;
  border-radius: 15px; /* 라운드 처리 */
  position: relative; /* 텍스트와 아이콘 오버레이를 위한 상대 위치 설정 */
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: flex-end; /* 텍스트를 버튼 하단에 정렬 */
  justify-content: center;
  color: white;
  font-size: 16px;
  padding: 10px;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* 배경 어둡게 */
  }
`;
// 텍스트 오버레이
const ButtonText = styled.span`
  position: relative;
  z-index: 1;
`;
// 아이콘 오버레이
const Icon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  z-index: 1;
`;

// 라벨 컴포넌트 정의
const StyledLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2.5rem; /* 라벨 높이 */
  background-color: #b0c4de; /* 배경 색상 */
  border: none;
  border-radius: 25px; /* 라운드 처리 */
  position: relative; /* 아이콘 위치를 위한 상대 위치 설정 */
  overflow: hidden;
  color: black;
  font-size: 16px;
  padding: 0 20px; /* 텍스트 좌우 패딩 */
  text-align: center;
  font-weight: bold;
`;
// 텍스트 컴포넌트
const LabelText = styled.span`
  flex: 1;
  text-align: center;
`;

// // 통짜 이미지 잘라쓰기
// const Button = styled.button`
//   width: 200px; /* 버튼 너비 설정 */
//   height: 100px; /* 버튼 높이 설정 */
//   background-image: url('/buttonImages.jpg'); /* 이미지 경로 설정 */
//   background-size: 3000px 2000px; /* 원본 이미지의 전체 크기 설정 */
//   border: none;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   text-align: center;
//   line-height: 60px; /* 버튼 높이와 같은 값으로 설정하여 텍스트 중앙 정렬 */
//   margin: 10px;

//   /* 호버 효과 */
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// // 각 버튼에 대해 다른 배경 위치 설정
// const WatchNowButton = styled(Button)`
//   background-position: -200px 0;
// `;
