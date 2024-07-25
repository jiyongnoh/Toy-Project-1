import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MusicDirectory from '../../component/Music_Component/MusicDirectory';
import { handleDirectoryGet } from '@/fetchAPI/directory';

const musicData = {
  root: [
    {
      name: '봄학기',
      type: 'directory',
      contents: [
        {
          name: '잠자는_숲속_공주',
          type: 'directory',
          contents: [
            { name: 'track1.mp3', type: 'file' },
            { name: 'track2.mp3', type: 'file' },
          ],
        },
        {
          name: '다른_수업',
          type: 'directory',
          contents: [{ name: 'track1.mp3', type: 'file' }],
        },
      ],
    },
    {
      name: '여름학기',
      type: 'directory',
      contents: [
        {
          name: '다른_수업',
          type: 'directory',
          contents: [{ name: 'track1.mp3', type: 'file' }],
        },
      ],
    },
  ],
};

export default function MusicHome({ data }) {
  return (
    <MainContainer>
      <Title>Music Test Page</Title>
      <MusicDirectory data={data} />
    </MainContainer>
  );
}

export async function getStaticProps() {
  const data = await handleDirectoryGet();

  const formattedData = data.directories.map((dir) => ({
    ...dir,
    url:
      dir.type === 'file'
        ? data.tracks.find((track) => track.directory_id === dir.id)?.url
        : null,
  }));

  return { props: { data: formattedData } };
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
