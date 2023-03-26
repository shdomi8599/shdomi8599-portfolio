import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  padding: 60px calc((100% - 1100px) / 2);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

type ArticleProps = {
  children: JSX.Element[];
};

const ArticleBox = ({ children }: ArticleProps) => {
  return <Article>{children}</Article>;
};

export default ArticleBox;
