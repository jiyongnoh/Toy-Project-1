// components/YellowBadge.js
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const AvartarLogo = ({ iconImgUrl, name, backImgUrl }) => {
  return (
    <YellowCircle backImgUrl={backImgUrl}>
      <Character name={name}>
        <Image
          src={iconImgUrl}
          alt={name}
          width={500}
          height={400}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Character>
    </YellowCircle>
  );
};

const YellowCircle = styled.div`
  background-image: ${(props) => `url(${props.backImgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 504px;
  height: 504px;
  /* background-color: #ffdd00; Yellow background */
  border-radius: 50%;

  position: relative;

  /* padding-right: 4rem; */

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const Character = styled.div`
  /* background-image: ${(props) => `url(${props.iconImgUrl})`};
  background-size: cover;
  background-repeat: no-repeat; */

  position: absolute;
  right: ${(props) =>
    props.name === '소예'
      ? '4rem'
      : props.name === '푸푸' || props.name === '북극이'
        ? '2rem'
        : '0'};

  left: ${(props) =>
    props.name === '엘라' ? '2rem' : props.name === '우비' ? '3rem' : '0'};
`;

export default AvartarLogo;
