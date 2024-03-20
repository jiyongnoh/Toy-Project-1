import styled from "styled-components";
import { loginAPI_OAuth_URL } from "@/fetchAPI";
import { useEffect, useState } from "react";
// Component usage
const GoogleOAuthBtn = ({ setUrl }) => {
  const handleLogin = async (e) => {
    const url = await loginAPI_OAuth_URL(process.env.NEXT_PUBLIC_URL, {
      oauthType: e.target.value,
    });

    console.log(url);

    // url state 변경
    setUrl(url);
  };

  return (
    <GoogleLoginButton value="google" onClick={handleLogin}>
      <GoogleIcon className="google-icon" />
      Sign in with Google
    </GoogleLoginButton>
  );
};

const GoogleLoginButton = styled.button`
  background-color: #ffffff; // Google Blue
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

  // Icon alignment, if you choose to include a Google icon
  display: flex;
  align-items: center;
  justify-content: center;

  // Add margin to the icon if it exists
  .google-icon {
    margin-right: 10px;
  }
`;

const GoogleIcon = styled.img.attrs({
  src: "/path-to-your-google-icon.png", // The path to your Google icon image file
  alt: "Google sign-in",
})`
  width: 20px;
  height: 20px;
`;

export default GoogleOAuthBtn;
