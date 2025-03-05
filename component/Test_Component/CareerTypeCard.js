import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const careerTypeMap = {
  R: {
    imgURL: '/src/Career_IMG/Type/Icon/Type-R.png',
    category: '현실적인 것에 관심이 있는\n실재형(R, Realistic Type)',
    characteristic:
      '안정적인 환경을 선호하고, 문제를 실용적이고 문제해결 방식으로 접근하며, 기계를 다루는 기술이나 신체 기술과 같은 실재적인 기술 습득에 흥미를 느낍니다.',
    recommend:
      '항공기 조종사, 자동차 정비원, 촬영기사, 조리사 및 주방장, 제과제빵사, 바리스타, 소방관, 경찰관, 직업군인, 운동선수 등',
    color: '#ff4151',
  },
  I: {
    imgURL: '/src/Career_IMG/Type/Icon/Type-I.png',
    category: '배움에 대한 열정이 있는\n탐구형(I, Investigative Type)',
    characteristic:
      '독립적으로 문제를 해결할 수 있는 환경을 선호하고, 문제를 논리적이고 분석적인 방식으로 접근하며, 학습을 좋아하고 풀리지 않는 문제에 혼자 도전하는 것을 즐기기도 합니다.',
    recommend:
      '의사, 수의사, 컴퓨터 프로그래머, 자동차공학기술자, 로봇공학기술자, 항공우주공학기술자, 수학 및 통계연구원, 생명과학연구원, 대학교수, 프로파일러 등',
    color: '#ff8d54',
  },
  A: {
    imgURL: '/src/Career_IMG/Type/Icon/Type-A.png',
    category: '예술적인 것을 사랑하는\n예술형(A, Artisitc Type)',
    characteristic:
      '개방적이고 표현을 독려하는 환경을 선호하고, 문제를 자유롭고 틀에 얽매지 않는 방식으로 접근하며, 무용, 미술, 음악이나 글쓰기와 같은 독창성과 창의성을 표현할 수 있는 능력을 향상시키고 싶어 합니다. ',
    recommend:
      '가수, 연기자, 무용가, 화가, 만화가, 작가, 연주가, 헤어 디자이너, 메이크업 아티스트, 패션 코디네이터, 애완동물미용사, 유튜브 크리에이터 등',
    color: '#7756ff',
  },
  S: {
    imgURL: '/src/Career_IMG/Type/Icon/Type-S.png',
    category: '사람을 좋아하는\n사회형(S, Social Type)',
    characteristic:
      '사람들과 어울릴 수 있고 인간적인 가치를 강조하는 환경을 선호하고, 문제를 사람들과 토론하고 협력하는 방식으로 접근하며, 사람들을 돕고 사회에 도움이 되는 일에 관심이 있습니다.',
    recommend:
      '심리상담사(임상심리사), 사회복지사, 간호사, 물리치료사, 유치원교사, 교사, 성직자, 레크레이션 진행자, 헬스 트레이너, 관광 가이드, 비행기승무원, 세일즈맨 등',
    color: '#1571ff',
  },
  E: {
    imgURL: '/src/Career_IMG/Type/Icon/Type-E.png',
    category: '리더가 되기 원하는\n진취형(E, Enterprising Type)',
    characteristic:
      '모험이나 도전을 할 수 있는 환경을 선호하고, 자신감 있고 자기주장적인 면이 강하여 문제해결 시 주도하고 사람들을 설득하는 방식으로 접근하며, 부와 명예와 같은 실리적인 것에 관심이 있습니다.',
    recommend:
      '경영컨설턴트, 증권중개인, 변호사, 외교관, 국회의원, 기자, 방송연출가(PD), 영화감독, 광고기획자, 음반기획자 등',
    color: '#00db81',
  },
  C: {
    imgURL: '/src/Career_IMG/Type/Icon/Type-C.png',
    category: '체계적이고 꼼꼼한\n관습형(C, Conventional Type)',
    characteristic:
      '조직화되어 있고 예측 가능한 환경을 선호하고, 문제를 사람들과 함께 조직적으로 해결하는 방식으로 접근하며, 상황이 통제하에 있고 확실한 문제를 다루는 것을 좋아합니다. ',
    recommend:
      '공무원, 사서, 전문비서, 회계사, 세무사, 은행원, 보험설계사, 항공교통관제사, 정보보안전문가, 임상병리사 등',
    color: '#ffc55c',
  },
};

const CareerTypeCard = ({ careerType, type, role }) => {
  const careerTypeData = careerTypeMap[careerType];

  return (
    <CardContainer type={type} role={role}>
      <CardColumnSection>
        <ImgContainer>
          <StyledImage
            src={careerTypeData?.imgURL}
            alt={'Career_Type_Img'}
            width={195}
            height={195}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </ImgContainer>
        <TypeContent backColor={careerTypeData?.color}>
          {careerTypeData?.category.split('\n')[1]}
        </TypeContent>
      </CardColumnSection>
      <CardColumnSection>
        <CareerCategory center={true}>
          {careerTypeData?.category}
        </CareerCategory>
        <CareerCategory>{careerTypeData?.characteristic}</CareerCategory>
        <CareerCategory>{careerTypeData?.recommend}</CareerCategory>
      </CardColumnSection>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;

  height: 100%;
  padding: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #efd1b5;
  border-radius: 10px;

  gap: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }
`;

const ImgContainer = styled.div`
  width: 175px;
  height: 175px;

  background-color: ${(props) => props.backColor || 'none'};
  border-radius: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden; /* 원 밖으로 넘치는 부분 숨김 */
  position: relative;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const CardColumnSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`;

const TypeContent = styled.div`
  width: 250px;
  padding: 0.4rem;
  background-color: ${(props) => props.backColor || 'none'};
  color: white;
  border-radius: 1rem;

  font-family: AppleSDGothicNeoM00;

  text-align: center;
`;

const StyledImage = styled(Image)`
  object-fit: cover; /* 이미지를 원형 컨테이너에 맞춤 */
  width: 100%;
  height: 100%;
`;

const CareerCategory = styled.p`
  width: 100%;

  padding: 1rem;

  background-color: #fff5dc;
  border-radius: 10px;

  font-size: 0.9rem;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-family: AppleSDGothicNeoM00;

  white-space: pre-wrap;

  position: relative;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 200px;
  }
`;

export default CareerTypeCard;
