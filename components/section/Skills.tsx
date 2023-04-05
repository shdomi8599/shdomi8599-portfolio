import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";

const Container = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  @media (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Col = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;
  width: calc(100% / 3);
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
    padding-bottom: 12px;
    font-size: 2.4rem;
    color: #5c5c5c;
    font-weight: 600;
  }

  .frontend {
    width: 250px;
    height: 952px;
    background: url("stacks.png") -10px -10px;
  }
  .backend {
    width: 250px;
    height: 221px;
    background: url("stacks.png") -280px -551px;
  }
  .experienced {
    width: 250px;
    height: 521px;
    background: url("stacks.png") -280px -10px;
  }
`;

const Skills = () => {
  //제일 넓이가 큰 것에 맞춰서 넓이를 설정해주기 위한 작업
  const target = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (target.current) setWidth(target.current?.offsetWidth);
  }, []);

  return (
    <ArticleBox name="Skills">
      <Container>
        <Col>
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
        </Col>
        <Col>
          <Card ref={target}>
            <div>{"Experienced"}</div>
            <div className="experienced"></div>
          </Card>
        </Col>
      </Container>
    </ArticleBox>
  );
};

export default Skills;
