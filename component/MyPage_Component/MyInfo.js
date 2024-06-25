import styled from 'styled-components';

import { useRecoilState } from 'recoil';
import { uid } from '../../store/state';

import ContentBlock from '../Home_Component/Content/ContentBlock';
import UserGreeting from './UserGreeting';

// MyPage 페이지
const MyInfo = () => {
  const [userId, setUserId] = useRecoilState(uid);

  return (
    <IntroContainer>
      <UserGreeting
        username={userId}
        daysLeft="30"
        purchaseDate="2024년 3월 10일"
      />
      <ContentBlock
        title="전문가 상담 예약"
        subtitle="전문가와의 심리상담을 예약할 수 있어요."
        iconPath="/src/Content_IMG/Icon_IMG/Icon_전문가상담.png"
        linkUrl="/meditation_music"
        color="#E14615"
        backColor="#FFE296"
        consult={true}
      />
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
