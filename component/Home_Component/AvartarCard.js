import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { avarta } from '../../store/state';

const avatarArr = [
  { name: 'soyes', imgUrl: '/src/AvatarCard_IMG/charc_soyes.png' },
  { name: 'lala', imgUrl: '/src/AvatarCard_IMG/charc_ella.png' },
  { name: 'pupu', imgUrl: '/src/AvatarCard_IMG/charc_pupu.png' },
  { name: 'ubi', imgUrl: '/src/AvatarCard_IMG/charc_ubi.png' },
];

const AvartarCard = () => {
  const [avartaAI, setAvartaAI] = useRecoilState(avarta);

  return (
    <AvartarCardContainer>
      {avatarArr.map((avatar, index) => {
        return (
          <Link href="/test_all" key={index}>
            <Image
              src={avatar.imgUrl}
              alt={avatar.name}
              width={220}
              height={280}
              style={{ maxWidth: '100%', height: 'auto' }}
              onClick={() => {
                setAvartaAI(avatar.name);
                localStorage.setItem('avarta', avatar.name);
              }}
            />
          </Link>
        );
      })}
    </AvartarCardContainer>
  );
};

// 스크롤 업 인디케이터 스타일
const AvartarCardContainer = styled.div`
  display: flex;
  justify-content: center;

  position: relative;
  gap: 1rem;
  font-size: 1rem;
  color: #fff;
  user-select: none;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default AvartarCard;
