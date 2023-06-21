import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useRef } from "react";

import { navHeightState, paddingState, selectNavState } from "@/recoil/atom";

type ArticleBoxProps = {
  children: JSX.Element | JSX.Element[];
  name?: string;
};

const ArticleBox = ({ children, name }: ArticleBoxProps) => {
  //네비에 선택되면 이동하기 위한 이펙트
  const target = useRef<HTMLDivElement>(null);

  const selectNav = useRecoilValue(selectNavState);

  const navHeight = useRecoilValue(navHeightState);

  const [, setPadding] = useRecoilState(paddingState);

  /**
   * 패딩 값을 셋팅하기 위한 함수
   *   padding: 60px calc((100% - 1100px) / 2);
   */
  const paddingHandler = () => {
    if (target.current) {
      const computedStyle = window.getComputedStyle(target.current);

      const paddingLeft = parseInt(
        computedStyle.getPropertyValue("padding-left")
      );

      setPadding(paddingLeft);
    }
  };

  //선택값이 같다면 이동하는 이펙트
  useEffect(() => {
    if (name === selectNav && target.current) {
      window.scrollTo({
        top: target.current?.offsetTop - navHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [name, navHeight, selectNav]);

  //최초 padding 값 셋팅하고 화면의 크기가 변하면 padding값을 다시 되도록 이벤트 추가
  useEffect(() => {
    paddingHandler();

    window.addEventListener("resize", paddingHandler);
  }, []);

  return (
    <Article ref={target}>
      {name && <Title>{name}</Title>}
      {children}
    </Article>
  );
};

export default ArticleBox;

const Article = styled.article`
  width: 100%;
  padding: 80px calc((100% - 1100px) / 2);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #b7c5c5;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;
