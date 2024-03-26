import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// 스타일드 컴포넌트를 사용하여 버튼 스타일 정의
const Button = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const AudioPlayerButton = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(src));

  // 재생 종료 시 isPlaying 원상태 복구
  audioRef.current.addEventListener("ended", () => {
    setIsPlaying(!isPlaying);
  });

  // 재생 및 정지 기능
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // 음성 재생 상태 변화에 따른 처리
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    // 컴포넌트가 언마운트될 때 오디오 정리
    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [isPlaying]);

  return (
    <Button onClick={togglePlayPause}>
      {isPlaying ? (
        <span class="material-symbols-outlined">stop_circle</span>
      ) : (
        <span class="material-symbols-outlined">play_circle</span>
      )}
    </Button>
  );
};

export default AudioPlayerButton;
