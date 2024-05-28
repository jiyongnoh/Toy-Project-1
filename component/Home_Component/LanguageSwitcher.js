// components/CustomDropdown.js
import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: white;
  border: none;
  border-radius: 15px;
  margin: 4px 2px;
  padding: 13px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    padding: 15px 25px;
    background-color: rgba(0, 42, 255, 0.5);
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 10px;
    margin: 2px;
    padding: 7px 10px;

    &:hover {
      padding: 7px 10px;
      background-color: rgba(0, 42, 255, 0.5);
    }
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  margin-top: 5px;
  z-index: 1;
`;

const Option = styled.div`
  color: black;
  padding: 12px 16px;
  text-align: left;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 42, 255, 0.5);
    color: white;
  }
`;

const CustomDropdown = () => {
  const router = useRouter();
  const { locales, locale, pathname, query, asPath } = router;
  const [show, setShow] = useState(false);

  const changeLanguage = (newLocale) => {
    setShow(false);
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Dropdown>
      <DropdownButton onClick={() => setShow(!show)}>
        {locale === "ko" ? "Korean" : "English"}
      </DropdownButton>
      <DropdownContent show={show}>
        {locales.map((loc) => (
          <Option key={loc} onClick={() => changeLanguage(loc)}>
            {loc === "ko" ? "Korean" : "English"}
          </Option>
        ))}
      </DropdownContent>
    </Dropdown>
  );
};

export default CustomDropdown;
