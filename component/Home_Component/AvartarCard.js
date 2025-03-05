import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { avarta } from '../../store/state';

const avatarArr = [
  {
    name: 'soyes',
    imgUrl: '/src/AvatarCard_IMG/Main/AvatarCard_Main_Soyes_Charc_IMG.png',
    backColor: '#B79FC6',
    title: '소예',
    subtitle: '심리상담사',
  },
  {
    name: 'lala',
    imgUrl: '/src/AvatarCard_IMG/Main/AvatarCard_Main_Ella_Charc_IMG.png',
    backColor: '#e79999',
    title: '엘라',
    subtitle: '정서 고민상담',
  },
  {
    name: 'pupu',
    imgUrl: '/src/AvatarCard_IMG/Main/AvatarCard_Main_Pupu_Charc_IMG.png',
    backColor: '#93BE84',
    title: '푸푸',
    subtitle: '공부 고민상담',
  },
  {
    name: 'ubi',
    imgUrl: '/src/AvatarCard_IMG/Main/AvatarCard_Main_Ubi_Charc_IMG.png',
    backColor: '#35A19B',
    title: '우비',
    subtitle: '스트레스 해결',
  },
  {
    name: 'north',
    imgUrl: '/src/AvatarCard_IMG/Main/AvatarCard_Main_North_Charc_IMG.png',
    backColor: '#5289CD',
    title: '북극이',
    subtitle: '이야기 친구',
  },
];

const AvartarCard = () => {
  const [_, setAvartaAI] = useRecoilState(avarta);

  return (
    <AvartarCardContainer>
      {avatarArr.map((avatar, index) => {
        return (
          <StyledLink
            href="/avartar_intro"
            key={index}
            onClick={() => {
              setAvartaAI(avatar.name);
              localStorage.setItem('avarta', avatar.name);
            }}
          >
            <Image
              src={avatar.imgUrl}
              alt={avatar.name}
              width={220}
              height={270}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            <AvartarTextContainer backColor={avatar.backColor}>
              {avatar.subtitle + '\n'}
              <TitleTextSpan>{avatar.title}</TitleTextSpan>
            </AvartarTextContainer>
          </StyledLink>
        );
      })}
    </AvartarCardContainer>
  );
};

const AvartarCardContainer = styled.div`
  max-width: 80vw;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 0.3rem;
    max-width: 100%;
  }
`;

const AvartarTextContainer = styled.div`
  background-color: ${(props) => props.backColor};
  padding: 1rem;
  border-radius: 0 0 1rem 1rem;

  text-align: center;
  font-size: 20px;
  font-family: AppleSDGothicNeoM00;
  color: white;

  white-space: pre;

  @media (max-width: 768px) {
    border-radius: 0 0 0.7rem 0.7rem;

    padding: 0.2rem;
    font-size: 10px;
  }
`;

const TitleTextSpan = styled.span`
  text-align: center;
  font-size: 25px;
  font-family: AppleSDGothicNeoM00;
  color: white;

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 11px;
  }
`;

const StyledLink = styled(Link)`
  padding: 0;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  gap: 0;
`;

export default AvartarCard;
