import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';
import { useMemo } from 'react';

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'red' }}
//       onClick={onClick}
//     />
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'green' }}
//       onClick={onClick}
//     />
//   );
// };

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <StyledSlider {...settings}>
      <SliderItem>
        <Link href="/meditation_painting" passHref>
          <Image
            src="/src/Carousel_IMG/Carousel_그림명상.png"
            alt={'soyes_logo'}
            width={990}
            height={500}
          />
        </Link>
      </SliderItem>
      <SliderItem>
        <Link href="/meditation_painting" passHref>
          <Image
            src="/src/Carousel_IMG/Carousel_요가명상.png"
            alt={'soyes_logo'}
            width={990}
            height={500}
          />
        </Link>
      </SliderItem>
      <SliderItem>
        <Link href="/meditation_painting" passHref>
          <Image
            src="/src/Carousel_IMG/Carousel_음악명상.png"
            alt={'soyes_logo'}
            width={990}
            height={500}
          />
        </Link>
      </SliderItem>
      <SliderItem>
        <Link href="/meditation_painting" passHref>
          <Image
            src="/src/Carousel_IMG/Carousel_풀밭요가.png"
            alt={'soyes_logo'}
            width={990}
            height={500}
          />
        </Link>
      </SliderItem>
    </StyledSlider>
  );
};

export default Carousel;

const StyledSlider = styled(Slider)`
  display: flex;
  justify-content: center;
  .slick-list {
    //슬라이드 스크린
    width: 990px;
    height: 550px;
    margin: 0 auto;
    overflow-x: hidden;
    background: none;
  }

  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }

  .slick-dots {
    //슬라이드의 위치
    bottom: 0.5rem;
    margin-top: 200px;
  }

  .slick-track {
    //이건 잘 모르겠음
    width: 100%;
    height: 100%;
  }

  .slick-prev {
    background-color: none;
    left: 2%;
    z-index: 1;
  }
  .slick-next {
    background-color: none;
    right: 2%;
    z-index: 1;
  }
`;

const SliderItem = styled.div`
  text-align: center;
`;
