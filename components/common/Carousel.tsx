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

const Carousel = () => {
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

  //메인 이미지 배열
  const imgArr = [
    "https://lh3.googleusercontent.com/1hETJExMpNDOyjrmlFgeFaVQ-pWPWROYDoZtDvgwQWYBbLeCz-GhFg_b5KLq2bgJ0-NXpzNguVYPvTNbRJk6JNzKLSZmGtUdfBmmJZObyBHH-c_4Ksn4kawinW7y1jrVoRU4ryCKP4TBsgi-vLBwqPs6UK6_6fRQ69W5xp4awvF9DSlk8U8wj6CqwvdeNa5R-DUJCJq3LmC48LMCcHtep_XChapiIb-sjb3XoyfrX7sZtP9KB8D_Mp0NjJBbuFrlpbZtjhFN8jM6xBSP0WttZBzQqtG9gh-0xfIsMPLEHXrBu03ffJdTEtNekqCT6k4I8leFVxvDnWnCehLTcrfe_XY-yXv60tykXWRdFjxO0ngqeX1pay0FHUdC0iSohhKVJbo0F6ZrK5Op2eP9RZWGwzKZBzjpQjFfyw7Cuggb-u3Eeo4Q0vBwZwgBsxeeY2GKz8RkM2smOTYoerMlJTh2Fb8Diw9CWVSPG-O87O7coCRP7TsFcUrcO0PEiO-MwWHbJ3OA79Ir49me2I5SagVWlir5gfB3g1ffIhSzj0v-1I3jrylBmERILgxxMJKPW_pRc_QQelGAZkqxYyvqoXxrYhJI-0PDxpb45bazpQ6gS98sxrni1XqOzy_OxWbgH8_cy0WXAl7id_pNZ8IWvZdbPiwMk0tOJReZpsh-w7q7XhfzkaR9XIt4EQ5ssgS_8E32MrfuNJeVJmqvhLT7biVcJ4MaUsawwbNy6I12621u3FJ1yBeMR0iv29J1eNEv4ATYOXqlxHIiiajwg-46lOheYjbz0RI-4PIg5cLGpwbltZGmWQ385bVV9M_aub6Qy0_DT05VHvX_urz9ONJ1eQudG9R4xgk3QIbF2OrsnQotpO0nP4zijHAwVc0ajO_rRdJVZ6uVHh5TR4NzB17KieApA5HqK_EhuTldNGGmB_eBWU1_=w250-h216-no?authuser=0",
    "https://lh3.googleusercontent.com/1hETJExMpNDOyjrmlFgeFaVQ-pWPWROYDoZtDvgwQWYBbLeCz-GhFg_b5KLq2bgJ0-NXpzNguVYPvTNbRJk6JNzKLSZmGtUdfBmmJZObyBHH-c_4Ksn4kawinW7y1jrVoRU4ryCKP4TBsgi-vLBwqPs6UK6_6fRQ69W5xp4awvF9DSlk8U8wj6CqwvdeNa5R-DUJCJq3LmC48LMCcHtep_XChapiIb-sjb3XoyfrX7sZtP9KB8D_Mp0NjJBbuFrlpbZtjhFN8jM6xBSP0WttZBzQqtG9gh-0xfIsMPLEHXrBu03ffJdTEtNekqCT6k4I8leFVxvDnWnCehLTcrfe_XY-yXv60tykXWRdFjxO0ngqeX1pay0FHUdC0iSohhKVJbo0F6ZrK5Op2eP9RZWGwzKZBzjpQjFfyw7Cuggb-u3Eeo4Q0vBwZwgBsxeeY2GKz8RkM2smOTYoerMlJTh2Fb8Diw9CWVSPG-O87O7coCRP7TsFcUrcO0PEiO-MwWHbJ3OA79Ir49me2I5SagVWlir5gfB3g1ffIhSzj0v-1I3jrylBmERILgxxMJKPW_pRc_QQelGAZkqxYyvqoXxrYhJI-0PDxpb45bazpQ6gS98sxrni1XqOzy_OxWbgH8_cy0WXAl7id_pNZ8IWvZdbPiwMk0tOJReZpsh-w7q7XhfzkaR9XIt4EQ5ssgS_8E32MrfuNJeVJmqvhLT7biVcJ4MaUsawwbNy6I12621u3FJ1yBeMR0iv29J1eNEv4ATYOXqlxHIiiajwg-46lOheYjbz0RI-4PIg5cLGpwbltZGmWQ385bVV9M_aub6Qy0_DT05VHvX_urz9ONJ1eQudG9R4xgk3QIbF2OrsnQotpO0nP4zijHAwVc0ajO_rRdJVZ6uVHh5TR4NzB17KieApA5HqK_EhuTldNGGmB_eBWU1_=w250-h216-no?authuser=0",
    "https://lh3.googleusercontent.com/1hETJExMpNDOyjrmlFgeFaVQ-pWPWROYDoZtDvgwQWYBbLeCz-GhFg_b5KLq2bgJ0-NXpzNguVYPvTNbRJk6JNzKLSZmGtUdfBmmJZObyBHH-c_4Ksn4kawinW7y1jrVoRU4ryCKP4TBsgi-vLBwqPs6UK6_6fRQ69W5xp4awvF9DSlk8U8wj6CqwvdeNa5R-DUJCJq3LmC48LMCcHtep_XChapiIb-sjb3XoyfrX7sZtP9KB8D_Mp0NjJBbuFrlpbZtjhFN8jM6xBSP0WttZBzQqtG9gh-0xfIsMPLEHXrBu03ffJdTEtNekqCT6k4I8leFVxvDnWnCehLTcrfe_XY-yXv60tykXWRdFjxO0ngqeX1pay0FHUdC0iSohhKVJbo0F6ZrK5Op2eP9RZWGwzKZBzjpQjFfyw7Cuggb-u3Eeo4Q0vBwZwgBsxeeY2GKz8RkM2smOTYoerMlJTh2Fb8Diw9CWVSPG-O87O7coCRP7TsFcUrcO0PEiO-MwWHbJ3OA79Ir49me2I5SagVWlir5gfB3g1ffIhSzj0v-1I3jrylBmERILgxxMJKPW_pRc_QQelGAZkqxYyvqoXxrYhJI-0PDxpb45bazpQ6gS98sxrni1XqOzy_OxWbgH8_cy0WXAl7id_pNZ8IWvZdbPiwMk0tOJReZpsh-w7q7XhfzkaR9XIt4EQ5ssgS_8E32MrfuNJeVJmqvhLT7biVcJ4MaUsawwbNy6I12621u3FJ1yBeMR0iv29J1eNEv4ATYOXqlxHIiiajwg-46lOheYjbz0RI-4PIg5cLGpwbltZGmWQ385bVV9M_aub6Qy0_DT05VHvX_urz9ONJ1eQudG9R4xgk3QIbF2OrsnQotpO0nP4zijHAwVc0ajO_rRdJVZ6uVHh5TR4NzB17KieApA5HqK_EhuTldNGGmB_eBWU1_=w250-h216-no?authuser=0",
  ];

  return (
    <>
      <HideDiv onClick={play} ref={target}></HideDiv>
      <Slider ref={slider} {...settings}>
        {imgArr.map((x, i) => (
          <div onClick={play} key={i}>
            <img src={x} alt="" />
          </div>
        ))}
      </Slider>
    </>
  );
};
export default Carousel;
