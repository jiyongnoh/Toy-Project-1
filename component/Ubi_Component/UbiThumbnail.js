import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// 유튜브 영상 ID 추출 함수
const getYoutubeVideoId = (url) => {
  const match = url.match(/embed\/([^?]+)/);
  return match ? match[1] : null;
};

// YouTube oEmbed API를 사용해 영상 제목 가져오기
const fetchVideoTitle = async (videoId) => {
  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
    );
    const data = await response.json();
    console.log(data);
    return data.title; // 제목 반환
  } catch (error) {
    console.error('YouTube 제목 가져오기 실패:', error);
    return 'Title not found';
  }
};

export default function UbiThumbnail({ link }) {
  const videoId = getYoutubeVideoId(link);
  const thumbnailSrc = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : '';

  const [isHovering, setIsHovering] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');

  useEffect(() => {
    if (videoId) {
      fetchVideoTitle(videoId).then(setVideoTitle);
    }
  }, [videoId]);

  //   useEffect(() => {
  //     let timeout;
  //     if (isHovering) {
  //       timeout = setTimeout(() => setIsHovering(false), 5000); // 5초 후 썸네일로 복귀
  //     }
  //     return () => clearTimeout(timeout);
  //   }, [isHovering]);

  return (
    <ThumbnailContainer
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering ? (
        <StyledIframe
          src={`${link}?autoplay=1&controls=0&mute=1&modestbranding=1&rel=0`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <Image
          src={thumbnailSrc}
          alt="YouTube Thumbnail"
          width={480}
          height={270}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      )}
      <VideoTitle>{videoTitle}</VideoTitle>
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 480px;
  height: 270px;
`;

const VideoTitle = styled.p`
  margin-top: 5px;

  font-family: AppleSDGothicNeoM00;
  font-size: 16px;
  text-align: center;

  color: #777;

  user-select: none;
`;
