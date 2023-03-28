import { stacks } from "@/data/stacks";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";
import Row from "../common/Row";
import SkillCard from "../common/SkillCard";

type ColProps = {
  checkFront?: string;
};

const Col = styled.div<ColProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
  padding-left: ${(props) => props.checkFront && "calc((100% - 950px) / 2)"};
  padding-right: ${(props) => !props.checkFront && "calc((100% - 950px) / 2)"};

  @media (min-width: 768px) {
    width: calc(100% / 2);
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: ${(props) => props.checkFront && "0"};
  }
`;

const Skills = () => {
  const {
    html,
    css,
    javascript,
    react,
    typescript,
    recoil,
    redux,
    bootstrap,
    tailwind,
    styledComponents,
    node,
    express,
    figma,
    next,
    graphQL,
    storyBook,
    ejs,
  } = stacks;

  //스킬 데이터 관리
  const skillData = {
    frontend: [
      html,
      css,
      javascript,
      react,
      typescript,
      recoil,
      redux,
      bootstrap,
      tailwind,
      styledComponents,
    ],
    backend: [node, express],
    experienced: [next, figma, graphQL, storyBook, ejs],
  };

  const target = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (target.current) setWidth(target.current?.offsetWidth);
  }, []);

  return (
    <ArticleBox name="Skills">
      <Row>
        <Col checkFront="checkFront">
          <SkillCard name="Frontend" skills={skillData["frontend"]} />
        </Col>
        <Col>
          <SkillCard name="Backend" skills={skillData["backend"]} />
          <SkillCard
            target={target}
            name="Experienced"
            skills={skillData["experienced"]}
          />
        </Col>
      </Row>
    </ArticleBox>
  );
};

export default Skills;
