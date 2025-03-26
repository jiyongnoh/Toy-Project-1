/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';

import { useEffect, useState, useCallback } from 'react';

// 아바타 관련 전역 변수
import { useRecoilState } from 'recoil';
import { log } from '../../store/state';

import { useRouter } from 'next/router';
import LoadingAnimation from '@/component/Chat_Component/LoadingAnimation';
import UbiThumbnail from '@/component/Ubi_Component/UbiThumbnail';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const yogaContentLinkArr = [
  '//www.youtube.com/embed/oAhTxPd4bfM',
  '//www.youtube.com/embed/tJHYqTtwUOQ',
  '//www.youtube.com/embed/L4Alw0VXFZo',
  '//www.youtube.com/embed/rVvLYpRUBSA',
  '//www.youtube.com/embed/1AOwjrNpPgA',
  '//www.youtube.com/embed/JqQPP8oB6-4',
  '//www.youtube.com/embed/IXP_nnFlkFE',
  '//www.youtube.com/embed/1HHUnZ-axpY',
  '//www.youtube.com/embed/Vl75OvG1b4Y',
  '//www.youtube.com/embed/NJVRI61cP7E',
  '//www.youtube.com/embed/_21nNOp4nmc',
  '//www.youtube.com/embed/yoaahW7LskU',
  '//www.youtube.com/embed/vZi1CffWjXI',
  '//www.youtube.com/embed/__kP22QXQfw',
  '//www.youtube.com/embed/-h435xELWF0',
  '//www.youtube.com/embed/wl2WQ0I3Yy8',
  '//www.youtube.com/embed/B5zT-7IX-ig',
  '//www.youtube.com/embed/AR4pjb5cj_Y',
  '//www.youtube.com/embed/YYa7gs30aXE',
  '//www.youtube.com/embed/CX4rtQXNHxs',
  '//www.youtube.com/embed/dlR97xBRzJI',
  '//www.youtube.com/embed/UAYdJleEugw',
  '//www.youtube.com/embed/J4LKu2i-moY',
  '//www.youtube.com/embed/qSqategfpsg',
  '//www.youtube.com/embed/NIGFTuRoQmc',
  '//www.youtube.com/embed/-t5L4sPxukI',
  '//www.youtube.com/embed/W1KyrFZLU08',
  '//www.youtube.com/embed/Pkdz-FC1nDs',
  '//www.youtube.com/embed/_mUl_sz9Ou4',
  '//www.youtube.com/embed/RDszsniHWgk',
];

const musicContentLinkArr = [
  '//www.youtube.com/embed/CQ5JMW59nPc',
  '//www.youtube.com/embed/PjisWOWzwtg',
  '//www.youtube.com/embed/cMuBdl68UBI',
  '//www.youtube.com/embed/-HET0QaTVbM',
  '//www.youtube.com/embed/XDYhI7Pz7A4',
  '//www.youtube.com/embed/Wteq_lAXlt0',
  '//www.youtube.com/embed/V6Aj9Mzhoag',
  '//www.youtube.com/embed/ZhCmAqDdplM',
  '//www.youtube.com/embed/pasREM7CLjc',
  '//www.youtube.com/embed/GxaUgHpHM0I',
  '//www.youtube.com/embed/8rG93YtqkJw',
  '//www.youtube.com/embed/m4PRV6hx-hs',
  '//www.youtube.com/embed/N4BUL7PDPw8',
];

const heartContentLinkArr = [
  '//www.youtube.com/embed/vSj3UJXYfwc',
  '//www.youtube.com/embed/6T92fUNTgfA',
  '//www.youtube.com/embed/oBPUCd6LZZg',
  '//www.youtube.com/embed/UTOdZCaYRkQ',
  '//www.youtube.com/embed/clyj6h4HNjo',
  '//www.youtube.com/embed/2jR6z6zmgTs',
  '//www.youtube.com/embed/Nd389y3wONI',
  '//www.youtube.com/embed/GM_Ekdulzx4',
  '//www.youtube.com/embed/altQ6L1NF64',
  '//www.youtube.com/embed/F09bN3CMWTk',
  '//www.youtube.com/embed/jAGMpkXAU4I',
  '//www.youtube.com/embed/ns5kDuZYNAg',
  '//www.youtube.com/embed/yEZlW0Kk8kA',
  '//www.youtube.com/embed/ABUfCa8Vxv8',
  '//www.youtube.com/embed/bI7vJ1jhGAQ',
  '//www.youtube.com/embed/646ckiEhgXQ',
  '//www.youtube.com/embed/CVK7264iCGQ',
  '//www.youtube.com/embed/L8v3AvCvVqo',
  '//www.youtube.com/embed/jhhF7PhbpWg',
  '//www.youtube.com/embed/UJ2y60SLMC0',
  '//www.youtube.com/embed/idn0iSYeOXM',
  '//www.youtube.com/embed/e8pN2hV0-nU',
  '//www.youtube.com/embed/r3vwBkM0dzM',
];

const ContentsMap = {
  yoga: yogaContentLinkArr,
  music: musicContentLinkArr,
  heart: heartContentLinkArr,
};

// Ubi 메인 페이지
export default function Ubi() {
  const [login, setLogin] = useRecoilState(log);

  const [isPending, setIsPending] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // 무한 스크롤 트리거 state
  const [contents, setContents] = useState([]);
  const [contentTag, setContentTag] = useState('yoga');

  const router = useRouter();

  // 버튼 클릭 핸들러 - contentTag 변경
  const handleButtonClick = (e) => {
    setContentTag(e.target.value);
    setPage(1);
    setIsPending(true);
    setHasMore(true);
  };

  // 무한 스크롤 이벤트 핸들러
  const handleScroll = useCallback(() => {
    // 문서 높이, 뷰포트 높이, 스크롤 위치를 계산
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.offsetHeight;

    // 스크롤이 바닥에 도달했는지 확인 (여유분을 두어 조금 더 일찍 호출)
    if (scrollTop + windowHeight >= fullHeight && !isPending && hasMore) {
      // 추가로 가져올 리뷰 데이터 요청 API 메서드 호출
      setIsPending(true);
      setPage((prevPage) => prevPage + 1);
    }
  }, [isPending, hasMore, page]);

  // 무한스크롤 useCallback 함수 관련 이벤트 추가
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // page 변경 시 contents 갱신
  useEffect(() => {
    // contents 갱신 종료
    if (contents.length === ContentsMap[contentTag].length) {
      setHasMore(false);
      setIsPending(false);
      return;
    }

    if (page > 0) {
      setTimeout(() => {
        setContents([...ContentsMap[contentTag].slice(0, page * 6)]);
        setIsPending(false);
      }, 1000);
    } else {
      setContents([...ContentsMap[contentTag].slice(0, 6)]);
      setIsPending(false);
    }
  }, [page, contentTag]);

  // 로그인 권한이 없는 상태에서의 접근 시 login 페이지로 redirect
  useEffect(() => {
    const loginSession = JSON.parse(localStorage.getItem('log'));
    if (!loginSession) {
      router.replace('/login');
    }
  }, [login]);

  return (
    <MainContainer>
      <ReviewContainer>
        <h1>우비 명상 놀이터</h1>
        <h2></h2>
        <ButtonContainer>
          <StyledButton
            onClick={handleButtonClick}
            value={'yoga'} // 요가 명상
            selected={contentTag === 'yoga'}
          >
            요가 명상
          </StyledButton>
          <StyledButton
            onClick={handleButtonClick}
            value={'music'} // 음악 명상
            selected={contentTag === 'music'}
          >
            음악 명상
          </StyledButton>
          <StyledButton
            onClick={handleButtonClick}
            value={'heart'} // 마음챙김 명상
            selected={contentTag === 'heart'}
          >
            마음챙김 명상
          </StyledButton>
        </ButtonContainer>
        {page === 1 && isPending && <LoadingAnimation />}
        <ContentGridContainer>
          {contents.map((link, index) => {
            return <UbiThumbnail key={`${link}_${index}`} link={link} />;
          })}
        </ContentGridContainer>
        {/* 무한 스크롤 갱신 로딩바 */}
        {page !== 1 && isPending && <LoadingAnimation />}
      </ReviewContainer>
    </MainContainer>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['review', 'nav'])),
    },
  };
}

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  background-image: url('/src/Ubi_IMG/backgroung_ubi.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewContainer = styled.div`
  width: 80vw;
  min-height: 80vh;
  margin-top: 2rem;
  padding-top: 5%;

  color: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const ContentGridContainer = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)'};

  backdrop-filter: blur(10px); // 불투명 필터
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  color: white;

  border: none;
  border-radius: 15px;

  padding: 13px 23px;

  text-align: center;
  text-decoration: none;

  font-family: AppleSDGothicNeoM00;
  font-size: 1rem;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }

  transition: 0.5s;
`;
