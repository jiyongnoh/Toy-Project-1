import styled from 'styled-components';
import { useState } from 'react';

export default function DiaryInput({ disabled, handleClickSubmitBtn }) {
  const [content, setContent] = useState('');

  return (
    <DiaryInputContainer>
      <DiaryInputTextAreaContainer>
        <DiaryInputTextArea
          disabled={disabled}
          value={content}
          placeholder={`50자 이내로 적어주세요.`}
          onChange={(e) => setContent(e.target.value)}
        />
        <SubmitButton
          onClick={
            !disabled
              ? () => {
                  handleClickSubmitBtn({ content });
                }
              : null
          }
        >
          다 적었어요
        </SubmitButton>
      </DiaryInputTextAreaContainer>
    </DiaryInputContainer>
  );
}

const DiaryInputContainer = styled.div`
  width: 642px;
  height: 772px;

  margin-left: auto; // 우측 정렬
  padding: 2rem;

  background-image: url('/src/NorthDiary_IMG/diary/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 342px;
    height: 422px;
    padding: 1rem;
  }
`;

const DiaryInputTextAreaContainer = styled.div`
  width: 100%;
  height: 90%;

  padding: 0.5rem;
  border-radius: 8px;
  border: none;
  outline: none;

  background-image: url('/src/NorthDiary_IMG/diary/noteBackground.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #333;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  resize: none;

  @media (max-width: 768px) {
  }
`;

const DiaryInputTextArea = styled.textarea`
  width: 80%;
  height: 53%;
  margin-top: 6.2rem;
  margin-left: 2.5rem;

  border-radius: 8px;
  border: none;
  outline: none;

  background-color: inherit;

  color: #333;

  font-family: AppleSDGothicNeoM00;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2.1;

  resize: none;

  @media (max-width: 768px) {
    width: 83%;
    font-size: 1rem;
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;

const SubmitButton = styled.button`
  padding: 0.7rem 3rem;

  margin-bottom: 4rem;

  background-color: #7ea8dc;
  color: white;
  border: none;
  border-radius: 8px;

  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 2rem;
    font-size: 0.7rem;
    margin-bottom: 3rem;
  }
`;
