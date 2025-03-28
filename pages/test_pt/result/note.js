/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
const contentText = `본 검사는 아동의 보고에 근거하여 아동의 성격 유형을 분류합니다. 아동의 자기 이해 수준에 따라 결과가 달라질 수 있기 때문에 본 검사의 결과만으로 특정 성격 유형으로 결론을 내려서는 안되며, 적합한 자격과 전문성을 갖춘 전문가가 보호자 면담이나 다른 자료와 함께 성격 유형을 판단하는 데 활용될 수 있습니다. 이러한 해석의 제한을 고려하여 아동의 성격 유형에 대해서 대략적인 결과를 살펴보시기 바랍니다. 
`;

// PT Result 유의사항 페이지
export default function PersnalityTestResultNote() {
  const router = useRouter();
  const handleDetailPageClick = () => {
    router.push('/test_pt/result/detail'); // 결과 상세페이지 이동
  };

  return (
    <MainContainer>
      <PTResultBox>
        {/* Note 선생님 이미지 */}
        <PtResultNoteCardContainer>
          <Image
            src={`/src/PT_IMG/PT_Result_Note/Teacher_image.png`}
            alt={'avartar_icon'}
            width={878}
            height={1228}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </PtResultNoteCardContainer>
        {/* 유의사항 타이틀 */}
        <PtResultTitleContainer>
          <Image
            src={`/src/PT_IMG/PT_Result_Note/Title_Background.svg`}
            alt={'avartar_icon'}
            width={300}
            height={40}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </PtResultTitleContainer>
        {/* 유의사항 내용 */}
        <PtResultNoteContent>{contentText}</PtResultNoteContent>
        {/* 다음 페이지 버튼 */}
        <PtNextPageButton
          onClick={handleDetailPageClick}
        >{`다음 페이지`}</PtNextPageButton>
      </PTResultBox>
    </MainContainer>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['pt', 'nav'])),
    },
  };
}

// styled-component의 animation 설정 방법 (keyframes 메서드 사용)

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;

  background-image: url('/src/EBT_IMG/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    overflow: hidden;
  }
`;

const PTResultBox = styled.div`
  width: 70%;
  min-height: 100vh;
  height: 100%;
  padding: 8rem 5rem;

  background-image: url('/src/NorthDiary_IMG/content_background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
    max-width: 37rem;
    padding: 8rem 0;
  }
`;

const PtResultNoteCardContainer = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    padding: 0;
  }
`;

const PtResultTitleContainer = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    padding: 0;
  }
`;

const PtResultNoteContent = styled.div`
  width: 45%;
  height: 100%;

  padding: 1rem;

  background-color: white;
  border: 1px solid #e2d098;
  border-radius: 8px;

  font-family: AppleSDGothicNeoM00;
  font-size: 1.2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 1rem;
  }
`;

const PtNextPageButton = styled.button`
  padding: 1rem 3rem;
  border-radius: 1rem;
  border: none;
  background-color: #a378bd;
  color: white;

  font-family: AppleSDGothicNeoM00;
  font-size: 1.3rem;
  font-weight: 400;

  cursor: pointer;

  @media (max-width: 768px) {
    width: 40%;
    padding: 0.5rem 2rem;
    font-size: 1rem;
  }
`;
