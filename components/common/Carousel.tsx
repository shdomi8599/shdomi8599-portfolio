/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { navHeightState } from "@/recoil/atom";

const HideDiv = styled.div`
  display: hidden;
`;

type CarouselProps = {
  img: string[];
  name: string;
};

const Carousel = ({ img, name }: CarouselProps) => {
  const slider = useRef<Slider>(null);
  const target = useRef<HTMLDivElement>(null);
  const navHeight = useRecoilValue(navHeightState);

  /**
   * 슬라이드 play
   */
  const play = () => {
    if (
      slider.current &&
      target.current &&
      target.current?.offsetTop - navHeight - window.scrollY < 450
    ) {
      slider.current.slickPlay();
    }
  };

  //스크롤 위치가 슬릭에 들어오면 play
  useEffect(() => {
    window.addEventListener("scroll", play);
    return () => {
      window.removeEventListener("scroll", play);
    };
  }, []);

  /**
   * 슬라이드 pause
   */
  const pause = () => {
    if (
      slider.current &&
      target.current &&
      window.scrollY - target.current?.offsetTop - navHeight > 350
    ) {
      slider.current.slickPause();
    }
  };

  //스크롤 위치가 슬릭을 벗어나면 pause
  useEffect(() => {
    window.addEventListener("scroll", pause);
    return () => {
      window.removeEventListener("scroll", pause);
    };
  }, []);

  //캐러셀 옵션
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    autoplay: false,
  };

  return (
    <>
      <HideDiv onClick={play} ref={target}></HideDiv>
      <Slider ref={slider} {...settings}>
        {img.map((x, i) => (
          <div onClick={play} key={i}>
            <img src={x} alt={name + (i + 1)} />
          </div>
        ))}
      </Slider>
    </>
  );
};
export default Carousel;
