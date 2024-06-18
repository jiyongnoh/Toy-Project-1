import React from 'react';
import styled from 'styled-components';
import ContentBlock from './ContentBlock';

const contentArr = [
  {
    title: '음악 명상',
    subtitle: '내마음을 차분하게 해줄 음악을 선택하여 마음을 힐링해 보세요.',
    iconPath: '/src/Content_IMG/Icon_IMG/Icon_음악명상.png',
    linkUrl: '/meditation_painting',
    backColor: '#FFFBE9',
  },
  {
    title: '그림 명상',
    subtitle: '내마음을 차분하게 해줄 음악을 선택하여 마음을 힐링해 보세요.',
    iconPath: '/src/Content_IMG/Icon_IMG/Icon_그림명상.png',
    linkUrl: '/meditation_painting',
    backColor: '#F6FCFF',
  },
  {
    title: '요가 명상',
    subtitle: '내마음을 차분하게 해줄 음악을 선택하여 마음을 힐링해 보세요.',
    iconPath: '/src/Content_IMG/Icon_IMG/Icon_요가명상.png',
    linkUrl: '/meditation_painting',
    backColor: '#FBF9FF',
  },
];

const ContentCard = () => {
  return (
    <ContentCardContainer>
      {contentArr.map((content, index) => {
        return (
          <ContentBlock
            key={index}
            title={content.title}
            subtitle={content.subtitle}
            iconPath={content.iconPath}
            linkUrl={content.linkUrl}
            backColor={content.backColor}
          />
        );
      })}
    </ContentCardContainer>
  );
};

const ContentCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    gap: 0.3rem;
  }
`;

export default ContentCard;
