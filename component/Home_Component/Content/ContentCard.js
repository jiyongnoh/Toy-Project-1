import React from 'react';
import styled from 'styled-components';
import ContentBlock from './ContentBlock';
import ContentBlockWeb from './ContentBlockWeb';
import { useEffect, useState } from 'react';

const contentArr = [
  {
    title: '음악 명상',
    subtitle: '내마음을 차분하게 해줄 음악을 선택하여 마음을 힐링해 보세요.',
    iconPath: '/src/Content_IMG/Icon_IMG/Icon_음악명상.png',
    linkUrl: '/meditation_painting',
    backColor: '#FFFBE9',
    color: '#FF7D95',
  },
  {
    title: '그림 명상',
    subtitle: '내마음을 차분하게 해줄 음악을 선택하여 마음을 힐링해 보세요.',
    iconPath: '/src/Content_IMG/Icon_IMG/Icon_그림명상.png',
    linkUrl: '/meditation_painting',
    backColor: '#F6FCFF',
    color: '#17A3D4',
  },
  {
    title: '요가 명상',
    subtitle: '내마음을 차분하게 해줄 음악을 선택하여 마음을 힐링해 보세요.',
    iconPath: '/src/Content_IMG/Icon_IMG/Icon_요가명상.png',
    linkUrl: '/meditation_painting',
    backColor: '#FBF9FF',
    color: '#9051FF',
  },
];

const ContentCard = () => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    // 모바일 width 확인
    if (window.innerWidth < 768) setMobile(true);

    return () => {};
  }, []);
  return (
    <ContentCardContainer>
      {contentArr.map((content, index) => {
        return mobile ? (
          <ContentBlock
            key={index}
            title={content.title}
            subtitle={content.subtitle}
            iconPath={content.iconPath}
            linkUrl={content.linkUrl}
            backColor={content.backColor}
          />
        ) : (
          <ContentBlockWeb
            key={index}
            title={content.title}
            subtitle={content.subtitle}
            iconPath={content.iconPath}
            linkUrl={content.linkUrl}
            color={content.color}
          />
        );
      })}
    </ContentCardContainer>
  );
};

const ContentCardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.3rem;
    flex-direction: column;
  }
`;

export default ContentCard;
