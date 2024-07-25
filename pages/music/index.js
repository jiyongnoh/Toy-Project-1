import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MusicDirectory from '../../component/Music_Component/MusicDirectory';
import { handleDirectoryGet } from '@/fetchAPI/directory';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function MusicHome({ data }) {
  return (
    <MainContainer>
      <Title>Music Test Page</Title>
      <MusicDirectory data={data} />
    </MainContainer>
  );
}

export async function getStaticProps({ locale }) {
  const data = await handleDirectoryGet();

  const formattedData = data.directories.map((dir) => ({
    ...dir,
    url:
      dir.type === 'file'
        ? data.tracks.find((track) => track.directory_id === dir.id)?.url
        : null,
  }));

  return {
    props: {
      data: formattedData,
      ...(await serverSideTranslations(locale, ['consult', 'nav'])),
    },
  };
}

const MainContainer = styled.div`
  padding-top: 5rem;
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 1rem;

  @media (max-width: 768px) {
    background-image: url('/src/Background_IMG/Mobile/mobile_background_2.png');
    justify-content: center;
  }
`;

const Title = styled.h1`
  background-color: #4caf50;
  color: white;
  padding: 10px;
`;
