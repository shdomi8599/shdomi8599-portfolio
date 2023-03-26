import styled from "styled-components";
import SectionTitle from "./common/SectionTitle";

const Article = styled.article`
  width: 100%;
  padding: 60px calc((100% - 1100px) / 2);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

type ArticleProps = {
  children: JSX.Element;
  name: string;
};

const ArticleBox = ({ children, name }: ArticleProps) => {
  return (
    <Article>
      <SectionTitle name={name} />
      {children}
    </Article>
  );
};

export default ArticleBox;
