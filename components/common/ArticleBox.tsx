import { navHeightState, selectNavState } from "@/recoil/atom";
import { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
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
  name: string;
};

const ArticleBox = ({ children, name }: ArticleBoxProps) => {
  //네비에 선택되면 이동하기 위한 이펙트
  const target = useRef<HTMLDivElement>(null);
  const selectNav = useRecoilValue(selectNavState);
  const navHeight = useRecoilValue(navHeightState);

  useEffect(() => {
    if (name === selectNav && target.current) {
      window.scrollTo({
        top: target.current?.offsetTop - navHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [name, navHeight, selectNav]);

  return (
    <Article ref={target}>
      <Title>{name}</Title>
      {children}
    </Article>
  );
};

export default ArticleBox;
