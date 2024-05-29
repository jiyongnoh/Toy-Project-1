import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
// Component usage
const KakaoOAuthBtn = ({ setUrl }) => {
  const { t } = useTranslation('login');

  const handleLogin = (e) => {
    e.preventDefault(); // 새로고침 방지

    // Kakao 인증 페이지로 이동
    window.Kakao.Auth.authorize({
      redirectUri: `${process.env.NEXT_PUBLIC_REDIRECT_URI}?type=kakao`, // 로그인 성공 후 리디렉션 될 페이지의 URI
      prompt: 'select_account',
    });
  };

  return (
    <KakaoLoginButton value="google" onClick={handleLogin}>
      <KakaoIcon className="google-icon" />
      {t('login_kakaoBtn_title')}
    </KakaoLoginButton>
  );
};

const KakaoLoginButton = styled.button`
  background-color: #fee500; // Google Blue
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a2929;
    color: #ffffff;
  }

  &:active {
    background-color: #3a2929;
    color: #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.5); // Google Blue with transparency
  }

  // Icon alignment, if you choose to include a Google icon
  display: flex;
  align-items: center;
  justify-content: center;

  // Add margin to the icon if it exists
  .google-icon {
    margin-right: 10px;
  }
`;

const KakaoIcon = styled.img.attrs({
  src: '/kakao_logo.png', // The path to your Google icon image file
  alt: 'Google sign-in',
})`
  width: 20px;
  height: 20px;
`;

export default KakaoOAuthBtn;
