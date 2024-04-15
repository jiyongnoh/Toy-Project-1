/* eslint-disable react-hooks/exhaustive-deps */
import styled, { keyframes } from "styled-components";
import { FlexContainer } from "../styled-component/common";

import { useEffect, useState, useCallback } from "react";

// 아바타 관련 전역 변수
import { useRecoilState } from "recoil";
import { log } from "../store/state";

import Review from "@/component/Review_Component/Review";
import LoadingAnimation from "@/component/Chat_Component/LoadingAnimation";
import ReviewForm from "@/component/Review_Component/ReviewForm";

import {
  handleReviewGet,
  handleReviewCreate,
  handleReviewDelete,
} from "@/fetchAPI/reviewAPI";

const default_review = [
  {
    profile_img_url: "https://placehold.co/600x400",
    uid: "노지용",
    date: "2024/04/15",
    content:
      "default_review_contentadasdasdasdasdasdasddasdadsasdasdfasfasdasdasfafasdasd",
  },
  {
    profile_img_url: "https://placehold.co/600x400",
    uid: "노지용",
    date: "2024/04/15",
    content: "default_review_content",
  },
  {
    profile_img_url: "https://placehold.co/600x400",
    uid: "노지용",
    date: "2024/04/15",
    content: "default_review_content",
  },
  {
    profile_img_url: "https://placehold.co/600x400",
    uid: "노지용",
    date: "2024/04/15",
    content: "default_review_content",
  },
  {
    profile_img_url: "https://placehold.co/600x400",
    uid: "노지용",
    date: "2024/04/15",
    content: "default_review_content",
  },
];

// Renewel Test 페이지
export default function Test() {
  const [isPending, setIsPending] = useState(true);
  const [login, setLogin] = useRecoilState(log);
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const handleScroll = useCallback(() => {
    // 문서 높이, 뷰포트 높이, 스크롤 위치를 계산
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.offsetHeight;

    // 스크롤이 바닥에 도달했는지 확인 (여유분을 두어 조금 더 일찍 호출)
    if (scrollTop + windowHeight + 20 >= fullHeight && !isPending && hasMore) {
      // 추가로 가져올 리뷰 데이터 요청 API 메서드 호출
      setPage(page + 1);
    }
  }, [isPending, hasMore, page]);

  // Create 핸들러
  const onSubmit = (formData) => {
    handleReviewCreate(formData).then((res) => console.log(res));
    window.location.reload(true);
  };

  // Delete 핸들러
  const onDelete = (key) => {
    handleReviewDelete(`${process.env.NEXT_PUBLIC_URL}/review/${key}`);
    window.location.reload(true);
  };

  useEffect(() => {
    console.log("page: " + page);
    // Read
    handleReviewGet(`${process.env.NEXT_PUBLIC_URL}/review?page=${page}`)
      .then((res) => res.data)
      .then((data) => {
        if (data.reviewData.length === 0) setHasMore(false); // 무한스크롤 트리거 막기
        setReviews([...reviews, ...data.reviewData]);
        setIsPending(false); // 대기 중 해제
      });
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <MainContainer>
      <FlexContainer
        justify="flex-start"
        align="center"
        dir="col"
        width="100vw"
      >
        <ReviewContainer>
          <h1>Soyes AI Project</h1>
          <h2>Review Page</h2>
          {/* 리뷰 입력 폼 */}
          <ReviewForm onSubmit={onSubmit} />
          {/* 리뷰 데이터 */}
          {isPending
            ? null
            : reviews.map((review, index) => (
                <Review key={index} review={review} onDelete={onDelete} />
              ))}
          {/* 무한 스크롤 갱신 로딩바 */}
          {isPending ? <LoadingAnimation /> : null}
        </ReviewContainer>
      </FlexContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-image: url("/src/img.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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

  min-height: 80vh;

  align-items: center;
  padding-top: 5%;

  color: white;
`;
