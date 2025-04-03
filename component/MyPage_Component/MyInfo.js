import styled from 'styled-components';

import ContentBlock from '../Home_Component/Content/ContentBlock';
import ReportBlock from '../Home_Component/Content/ReportBlock';
import UserGreeting from './UserGreeting';

// MyPage 페이지
const MyInfo = () => {
  return (
    <IntroContainer>
      <UserGreeting />
      <ContentContainer>
        <ContentBlock
          title="정서행동검사 결과보기"
          subtitle="정서행동검사 11종 결과 및 총평을 볼 수 있어!"
          iconPath="/src/Content_IMG/Icon_IMG/Icon_전문가상담.png"
          linkUrl="/test_ebt/ebt_result"
          color="#E14615"
          backColor="#FFE296"
          consult={true}
        />
        <ContentBlock
          title="성격검사 결과보기"
          subtitle="성격검사 결과 및 총평을 볼 수 있어!"
          iconPath="/src/Content_IMG/Icon_IMG/Icon_전문가상담.png"
          linkUrl="/test_pt/result"
          color="#E14615"
          backColor="#FFE296"
          consult={true}
        />
        <ReportBlock
          title="결과보고서 발송하기"
          subtitle="결과보고서 파일을 이메일로 전송받을 수 있어! "
          iconPath="/src/Content_IMG/Icon_IMG/Icon_전문가상담.png"
          color="#E14615"
          backColor="#FFE296"
          consult={true}
        />
      </ContentContainer>
    </IntroContainer>
  );
};
// styled-component의 animation 설정 방법 (keyframes 메서드 사용)
export default MyInfo;

const IntroContainer = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    gap: 1rem;
  }
`;
