import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";
import Row from "../common/Row";

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
type CardProps = {
  width?: number;
};

const Card = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0px;
  width: ${(props) => props.width}px;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
    0 -0.5rem 1rem rgba(0, 0, 0, 0.1);

  > div:first-child {
    text-decoration: underline;
    text-decoration-thickness: 1.1rem;
    padding-bottom: 12px;
    font-size: 2.4rem;
    color: #5c5c5c;
    font-weight: 600;
  }

  .frontend {
    width: 250px;
    height: 430px;
    background: url("stacks.png") -10px -10px;
  }
  .backend {
    width: 250px;
    height: 179px;
    background: url("stacks.png") -550px -10px;
  }
  .experienced {
    width: 250px;
    height: 395px;
    background: url("stacks.png") -280px -10px;
  }
`;

const Skills = () => {
  const target = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (target.current) setWidth(target.current?.offsetWidth);
  }, []);

  return (
    <ArticleBox name="Skills">
      <Row>
        <Col checkFront="checkFront">
          <Card width={width}>
            <div>{"Frontend"}</div>
            <div className="frontend"></div>
          </Card>
        </Col>
        <Col>
          <Card width={width}>
            <div>{"Backend"}</div>
            <div className="backend"></div>
          </Card>
          <Card ref={target}>
            <div>{"Experienced"}</div>
            <div className="experienced"></div>
          </Card>
        </Col>
      </Row>
    </ArticleBox>
  );
};

export default Skills;
