import { navHeightState, paddingState, selectNavState } from "@/recoil/atom";
import { useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  padding: 60px calc((100% - 1100px) / 2);
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

  /**
   * 패딩 값을 셋팅하기 위한 함수
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

  //최초 padding 값 셋팅
  useEffect(() => {
    paddingHandler();
  }, []);

  //화면의 크기가 변하면 padding값을 다시 셋팅
  useEffect(() => {
    window.addEventListener("resize", paddingHandler);
    return () => {
      window.removeEventListener("resize", paddingHandler);
    };
  }, []);

  return (
    <Article ref={target}>
      {name && <Title>{name}</Title>}
      {children}
    </Article>
  );
};

export default ArticleBox;
