/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';

import { useEffect, useState, useCallback } from 'react';

// 아바타 관련 전역 변수
import { useRecoilState } from 'recoil';
import { log } from '../../store/state';

import { useRouter } from 'next/router';
import LoadingAnimation from '@/component/Chat_Component/LoadingAnimation';

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

const allContentLinkArr = [
  ...yogaContentLinkArr,
  ...musicContentLinkArr,
  ...heartContentLinkArr,
];

const ContentsMap = {
  yoga: yogaContentLinkArr,
  music: musicContentLinkArr,
  heart: heartContentLinkArr,
  all: allContentLinkArr,
};

// Ubi 메인 페이지
export default function Ubi() {
  const [login, setLogin] = useRecoilState(log);

  const [isPending, setIsPending] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // 무한 스크롤 트리거 state
  const [contents, setContents] = useState([]);
  const [contentTag, setContentTag] = useState('all');

  const router = useRouter();

  const handleScroll = useCallback(() => {
    // 문서 높이, 뷰포트 높이, 스크롤 위치를 계산
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.offsetHeight;

    // 스크롤이 바닥에 도달했는지 확인 (여유분을 두어 조금 더 일찍 호출)
    if (scrollTop + windowHeight >= fullHeight && !isPending && hasMore) {
      // 추가로 가져올 리뷰 데이터 요청 API 메서드 호출
      setIsPending(true);
      setPage(page + 1);
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
    // 종료 조건
    if (contents.length === ContentsMap[contentTag].length) {
      setHasMore(false);
      setIsPending(false);
      return;
    }

    if (page === 0) setPage(1);

    setTimeout(() => {
      setContents([...ContentsMap[contentTag].slice(0, page * 6)]);
      setIsPending(false);
    }, 1000);
  }, [page]);

  useEffect(() => {
    setPage(0);
  }, [contentTag]);

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
        <h2>ubi meditation playground</h2>
        <button onClick={() => setContentTag('yoga')}>yoga</button>
        <button onClick={() => setContentTag('music')}>music</button>
        <button onClick={() => setContentTag('heart')}>heart</button>
        <ContentGridContainer>
          {contents.map((el, index) => {
            return (
              <StyledIframe
                key={index}
                src={el} // 수업 영상 유튜브 링크
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            );
          })}
        </ContentGridContainer>

        {/* {reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))} */}
        {/* 무한 스크롤 갱신 로딩바 */}
        {isPending && <LoadingAnimation />}
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
  background-color: black;

  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewContainer = styled.div`
  width: 80vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 2rem;

  min-height: 80vh;
  align-items: center;
  padding-top: 5%;
  color: white;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const ContentGridContainer = styled.div`
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 480px;
  height: 270px;
`;
