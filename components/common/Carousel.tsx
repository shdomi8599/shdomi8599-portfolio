import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";

import { navHeightState, pickState } from "@/recoil/atom";
import { CAROUSEL_SETTINGS } from "@/constants/common";

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

  //스크롤 위치가 슬릭에 들어오면 play
  useEffect(() => {
    window.addEventListener("scroll", play);
    return () => {
      window.removeEventListener("scroll", play);
    };
  }, []);

  //스크롤 위치가 슬릭을 벗어나면 pause
  useEffect(() => {
    window.addEventListener("scroll", pause);
    return () => {
      window.removeEventListener("scroll", pause);
    };
  }, []);

  //선택된 프로젝트의 변화가 감지되면 슬릭을 0번째 이미지로 돌려주는 이펙트
  const pick = useRecoilValue(pickState);
  useEffect(() => {
    if (slider.current) slider.current.slickGoTo(0);
  }, [pick]);

  return (
    <>
      {name === "사이드 퀘스트" ? (
        <>
          <HideDiv onClick={play} ref={target}></HideDiv>
          <Slider ref={slider} {...CAROUSEL_SETTINGS}>
            {img.map((x, i) => (
              <div onClick={play} key={i}>
                <img className="gif-img" src={`${x}gif`} alt={name + (i + 1)} />
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <>
          <HideDiv onClick={play} ref={target}></HideDiv>
          <Slider ref={slider} {...CAROUSEL_SETTINGS}>
            {img.map((x, i) => (
              <div onClick={play} key={i}>
                <picture>
                  <source srcSet={`${x}avif`} type="image/avif" />
                  <source srcSet={`${x}webp`} type="image/webp" />
                  <img src={`${x}jpg`} alt={name + (i + 1)} />
                </picture>
              </div>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};
export default Carousel;

const HideDiv = styled.div`
  display: hidden;
`;
