/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";
import { BACK, ETC, FRONT } from "@/data/skills";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
  padding: 20px 30px;
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
  // const target = useRef<HTMLDivElement>(null);
  // const [width, setWidth] = useState(0);
  // useEffect(() => {
  //   if (target.current) setWidth(target.current?.offsetWidth);
  // }, []);

  ///////////////////////////////////
  const [frontend, setFrontend] = useState(false);
  const moveFront = () => {
    setModal(false);
    setBackend(false);
    setEtc(false);
    setFrontend(!frontend);
  };
  const [backend, setBackend] = useState(false);
  const moveBackend = () => {
    setModal(false);
    setFrontend(false);
    setEtc(false);
    setBackend(!backend);
  };
  const [etc, setEtc] = useState(false);
  const moveEtc = () => {
    setModal(false);
    setFrontend(false);
    setBackend(false);
    setEtc(!etc);
  };
  const [modal, setModal] = useState(false);
  const onModal = (
    data: {
      name: string;
      content: string;
      type: string;
    },
    type: string
  ) => {
    setModalVal({ name: data.name, content: data.content, type });
    setModal(true);
  };
  const offModal = () => {
    setModal(false);
  };
  const [modalVal, setModalVal] = useState({
    name: "",
    content: "",
    type: "",
  });
  const skills: [
    string,
    {
      type: string;
      name: string;
      value: number;
      src: string;
      content: string;
    }[],
    () => void
  ][] = [
    ["Frontend", FRONT, moveFront],
    ["Backend", BACK, moveBackend],
    ["Etc", ETC, moveEtc],
  ];
  useEffect(() => {
    setFrontend(true);
  }, []);
  return (
    <ArticleBox name="Skills">
      <MainBox modal={modal} frontend={frontend} backend={backend} etc={etc}>
        {skills.map((stack, i) => (
          <div key={i} className={stack[0]}>
            {stack[1].map((skill) => (
              <div key={skill.name} className="circle">
                <CircularProgressbar value={skill.value}></CircularProgressbar>
                <img
                  onClick={() => onModal(skill, stack[0])}
                  src={skill.src}
                  alt={skill.name}
                />
              </div>
            ))}
            <div onClick={stack[2]} className="circle">
              <CircularProgressbar value={100} text={stack[0]} />
            </div>
            {modalVal.type === stack[0] && (
              <div className="card">
                <div>
                  <img onClick={offModal} src="./x-btn.png" alt="close" />
                </div>
                <div>{modalVal.name}</div>
                <div>{modalVal.content}</div>
              </div>
            )}
          </div>
        ))}
      </MainBox>
      {/* <Container>
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
      </Container> */}
    </ArticleBox>
  );
};

export default Skills;

type MainBoxProps = {
  modal: boolean;
  frontend: boolean;
  backend: boolean;
  etc: boolean;
};

const MainBox = styled.div<MainBoxProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 75vh;
  .CircularProgressbar .CircularProgressbar-text {
    fill: #636363;
    font-size: 1rem;
  }
  .CircularProgressbar .CircularProgressbar-path {
    stroke: #5b6a70;
  }
  .card {
    display: ${(props) => (props.modal ? "" : "none")};
    position: absolute;
    width: 250px;
    height: 180px;
    background-color: white;
    z-index: 3;
    box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
      0 2px 8px hsla(0, 0%, 0%, 0.05);
    padding: 20px;
    > div:first-child {
      display: flex;
      justify-content: end;
      img {
        top: 16px;
        position: absolute;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
    > div:nth-child(2) {
      border-bottom: 1px solid #d1d2d3;
      padding-bottom: 10px;
      font-weight: 900;
    }
    > div:last-child {
      padding-top: 10px;
    }
  }
  .circle {
    position: absolute;
    background-color: white;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    transform-origin: center center;
    transition: 1.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: inline;
      width: 50%;
      height: 50%;
      z-index: 3;
      cursor: pointer;
    }
    svg {
      position: absolute;
    }
  }

  .Frontend {
    width: 150px;
    height: 150px;
    transition: 1.2s;
    position: absolute;
    right: ${(props) => (props.frontend ? "600px" : "50px")};
    top: ${(props) => (props.frontend ? "300px" : "100px")};
    display: flex;
    justify-content: center;
    align-items: center;
    .circle:nth-child(1) {
      transform: ${(props) =>
        props.frontend
          ? "rotate(0deg) translate(240px) rotate(-0deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(2) {
      transform: ${(props) =>
        props.frontend
          ? "rotate(40deg) translate(240px) rotate(-40deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(3) {
      transform: ${(props) =>
        props.frontend
          ? "rotate(80deg) translate(240px) rotate(-80deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(4) {
      transform: ${(props) =>
        props.frontend
          ? "rotate(120deg) translate(240px) rotate(-120deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(5) {
      transform: ${(props) =>
        props.frontend
          ? "rotate(160deg) translate(240px) rotate(-160deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(6) {
      transform: ${(props) =>
        props.frontend
          ? "rotate(200deg) translate(240px) rotate(-200deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(7) {
      transform: ${(props) =>
        props.frontend
          ? "rotate(240deg) translate(240px) rotate(-240deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(8) {
      transform: ${(props) =>
        props.frontend
          ? "rotate(280deg) translate(240px) rotate(-280deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }
    .circle:nth-child(9) {
      transform: ${(props) =>
        props.frontend
          ? "rotate(320deg) translate(240px) rotate(-320deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }
    .circle:nth-child(10) {
      cursor: pointer;
      z-index: 2;
      background-color: white;
    }
  }

  .Backend {
    width: 150px;
    height: 150px;
    transition: 1.2s;
    position: absolute;
    right: ${(props) => (props.backend ? "600px" : "50px")};
    top: ${(props) => (props.backend ? "300px" : "300px")};
    display: flex;
    justify-content: center;
    align-items: center;
    .circle:nth-child(1) {
      transform: ${(props) =>
        props.backend
          ? "rotate(0deg) translate(240px) rotate(-0deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(2) {
      transform: ${(props) =>
        props.backend
          ? "rotate(180deg) translate(240px) rotate(-180deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(3) {
      cursor: pointer;
      z-index: 2;
      background-color: white;
    }
  }

  .Etc {
    width: 150px;
    height: 150px;
    transition: 1.2s;
    position: absolute;
    right: ${(props) => (props.etc ? "600px" : "50px")};
    top: ${(props) => (props.etc ? "300px" : "500px")};
    display: flex;
    justify-content: center;
    align-items: center;
    .circle:nth-child(1) {
      transform: ${(props) =>
        props.etc
          ? "rotate(0deg) translate(240px) rotate(-0deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(2) {
      transform: ${(props) =>
        props.etc
          ? "rotate(60deg) translate(240px) rotate(-60deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(3) {
      transform: ${(props) =>
        props.etc
          ? "rotate(120deg) translate(240px) rotate(-120deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(4) {
      transform: ${(props) =>
        props.etc
          ? "rotate(180deg) translate(240px) rotate(-180deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(5) {
      transform: ${(props) =>
        props.etc
          ? "rotate(240deg) translate(240px) rotate(-240deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }
    .circle:nth-child(6) {
      transform: ${(props) =>
        props.etc
          ? "rotate(300deg) translate(240px) rotate(-300deg)"
          : "rotate(0deg) translate(0px) rotate(-0deg)"};
    }

    .circle:nth-child(7) {
      cursor: pointer;
      z-index: 2;
      background-color: white;
    }
  }
`;
