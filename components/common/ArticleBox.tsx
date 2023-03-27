import styled from "styled-components";
import SectionTitle from "./SectionTitle";

const Article = styled.article`
  width: 100%;
  padding: 60px calc((100% - 1100px) / 2);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #b7c5c5;
`;

type ArticleBoxProps = {
  children: JSX.Element;
  name: string;
};

const ArticleBox = ({ children, name }: ArticleBoxProps) => {
  return (
    <Article>
      <SectionTitle name={name} />
      {children}
    </Article>
  );
};

export default ArticleBox;
