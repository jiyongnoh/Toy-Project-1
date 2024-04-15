import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

function Review({ review, onDelete }) {
  const pUid = localStorage.getItem("id");
  return (
    <ReviewContainer>
      <Header>
        <ProfileImage
          src={review.profile_img_url}
          alt={`${review.uid}'s profile`}
        />
        <AuthorInfo>
          <h4>{review.uid}</h4>
          <p>{review.date.split("T")[0]}</p>
        </AuthorInfo>
        <Content>
          <p>{review.content}</p>
        </Content>
        {pUid === review.uid ? (
          <DeleteButton
            onClick={() => {
              Swal.fire({
                title: "Do you want to Delete?",
                showDenyButton: true,
                confirmButtonText: "Yes",
                denyButtonText: `No`,
              }).then((result) => {
                if (result.isConfirmed) {
                  // DELETE
                  Swal.fire({
                    icon: "success",
                    title: "Delete Success!",
                    text: "Review Reloading...",
                    showConfirmButton: false,
                    timer: 1500,
                  }).then(() => {
                    onDelete(review.entry_id);
                  });
                }
              });
            }}
          >
            Delete
          </DeleteButton>
        ) : null}
      </Header>
    </ReviewContainer>
  );
}

// 배경색과 어울리는 색상을 사용
const ReviewContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1); // 약간의 투명도를 가진 흰색 배경
  backdrop-filter: blur(5px); // 배경에 블러 효과
  padding: 20px;
  margin: 10px 0;
  border-radius: 8px;
  color: #e0e0e0; // 연한 회색 텍스트
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 1rem;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  border: 2px solid #e0e0e0; // 이미지 테두리에도 연한 회색 사용
`;

const AuthorInfo = styled.div`
  width: 6rem;
  word-break: break-all;
  h4 {
    margin: 0;
    color: #ffffff; // 흰색 텍스트
  }

  p {
    margin: 0;
    color: #cccccc; // 조금 더 어두운 회색으로 날짜 표시
    font-size: 0.85rem;
  }
`;

const Content = styled.div`
  width: 22rem;
  text-align: left;

  display: flex;

  align-items: center;
  font-size: 0.95rem;
  color: #d0d0d0;
  min-height: 5rem;

  word-break: break-all;

  @media (max-width: 768px) {
    width: 11rem;
  }
`;

const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #ff4d4f; // 붉은 색 계열의 배경
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;

export default Review;
