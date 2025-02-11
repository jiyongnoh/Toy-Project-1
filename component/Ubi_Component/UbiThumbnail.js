import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
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
  const youtubeUrl = videoId
    ? `https://www.youtube.com/watch?v=${videoId}`
    : null;

  const [isHovering, setIsHovering] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    if (videoId) {
      fetchVideoTitle(videoId).then(setVideoTitle);
    }
  }, [videoId]);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovering(true);
    }, 500); // 0.3초 동안 유지되면 실행
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current); // 0.3초 안에 떠나면 실행 취소
    }
    setIsHovering(false);
  };

  //   useEffect(() => {
  //     let timeout;
  //     if (isHovering) {
  //       timeout = setTimeout(() => setIsHovering(false), 5000); // 5초 후 썸네일로 복귀
  //     }
  //     return () => clearTimeout(timeout);
  //   }, [isHovering]);

  const handleClick = () => {
    if (youtubeUrl) {
      window.open(youtubeUrl, '_blank'); // 새 탭에서 유튜브 영상 열기
    }
  };

  return (
    <Wrapper>
      <ThumbnailContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 썸네일 */}
        <ImageWrapper isHovering={isHovering} onClick={handleClick}>
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
          <VideoTitle>{videoTitle}</VideoTitle>
        </ImageWrapper>

        {isHovering && (
          <IframeWrapper isHovering={isHovering} onClick={handleClick}>
            <StyledIframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&modestbranding=1&rel=0&fs=0&playsinline=1`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                borderRadius: '8px',
              }}
            />
            <VideoTitle>{videoTitle}</VideoTitle>
          </IframeWrapper>
        )}

        {/* iframe (애니메이션 효과 적용) */}
        {/* <IframeWrapper isHovering={isHovering} onClick={handleClick}>
          <StyledIframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&modestbranding=1&rel=0&fs=0&playsinline=1`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <VideoTitle>{videoTitle}</VideoTitle>
        </IframeWrapper> */}
      </ThumbnailContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 480px;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

// 이미지 애니메이션 (opacity로 전환)
const ImageWrapper = styled.div`
  position: absolute;

  width: 480px;
  height: 270px;

  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.isHovering ? 0 : 1)};

  cursor: pointer;
`;

// iframe 애니메이션 (opacity + transform)
const IframeWrapper = styled.div`
  position: absolute;
  width: 480px;
  height: 270px;

  cursor: pointer;

  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.isHovering ? 1 : 0)};
`;

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
`;

const VideoTitle = styled.p`
  margin-top: 5px;

  font-family: AppleSDGothicNeoM00;
  font-size: 16px;
  text-align: center;

  color: #777;

  user-select: none;
`;
