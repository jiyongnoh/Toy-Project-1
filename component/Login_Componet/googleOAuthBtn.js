import styled from 'styled-components';
import { loginAPI_OAuth_URL } from '@/fetchAPI';
import { useTranslation } from 'next-i18next';
// Component usage
const GoogleOAuthBtn = ({ setUrl }) => {
  const { t } = useTranslation('login');

  const handleLogin = async (e) => {
    e.preventDefault(); // 새로고침 방지
    const data = await loginAPI_OAuth_URL();
    const directUrl = data.url;

    if (directUrl) {
      setUrl(directUrl);
    } else {
      setUrl(window.location.href + '?code=response_fail');
    }
  };

  return (
    <GoogleLoginButton value="google" onClick={handleLogin}>
      <GoogleIcon className="google-icon" />
      {t('login_googleBtn_title')}
    </GoogleLoginButton>
  );
};

const GoogleLoginButton = styled.button`
  background-color: #ffffff; // Google Blue
  color: black;
  padding: 1rem;
  border: 1px solid #c9c9c9;

  border-radius: 20px;
  cursor: pointer;

  font-size: 20px;
  font-weight: 400;
  text-align: center;
  font-family: AppleSDGothicNeoL00;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ae8;
    color: #ffffff;
  }

  &:active {
    background-color: #3367d6;
    color: #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.5); // Google Blue with transparency
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

const GoogleIcon = styled.img.attrs({
  src: '/src/Login_IMG/Login_Google_Icon_IMG.png', // The path to your Google icon image file
  alt: 'Google sign-in',
})`
  width: 33px;
  height: 38px;
`;

export default GoogleOAuthBtn;
