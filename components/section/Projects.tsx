import { useState } from "react";
import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";

type ProjectNavProps = {
  length: number;
};

const ProjectNav = styled.nav<ProjectNavProps>`
  margin-top: 48px;
  width: 100%;
  display: flex;
  border-top: 1px solid #babbbd;
  border-bottom: 1px solid #babbbd;
  @media (max-width: 859px) {
    flex-direction: column;
    border: none;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${(props) => `calc(100% / ${props.length})`};
    height: 100%;
    padding: 20px 0px;
    @media (max-width: 859px) {
      width: 100%;
    }

    > div:last-child {
      padding: 4px 0px;
      font-size: 1.4rem;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const Content = styled.div`
  margin-top: 80px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
    0 -0.5rem 1rem rgba(0, 0, 0, 0.1);

  > div:first-child {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 0px;
    font-weight: bold;

    > div:last-child {
      font-size: 2.3rem;
    }
  }
  > div:last-child {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;

    > div:first-child {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > div:last-child {
      width: 50%;
    }
  }
`;

const Projects = () => {
  const projectData = [
    { categori: "TEAM", name: "마쉴랭" },
    { categori: "SOLO", name: "취준생의 하루" },
    { categori: "SOLO", name: "모두시스템 개편" },
    { categori: "SOLO", name: "LOL 나만의 피드백" },
    { categori: "SOLO", name: "실시간 코인 가격" },
  ];

  //선택된 것의 스타일을 바꿔주고 데이터를 보여주기 위한 상태
  const [pick, setPick] = useState(0);
  const pickHandler = (idx: number) => {
    setPick(idx);
  };

  return (
    <ArticleBox name="Projects">
      <ProjectNav length={projectData.length}>
        {projectData.map((el, i) => (
          <div key={el.name} className={i === pick ? "active" : ""}>
            <div>{el.categori}</div>
            <div onClick={() => pickHandler(i)}>{el.name}</div>
          </div>
        ))}
      </ProjectNav>
      <Content>
        <div>
          <div>{projectData[pick].categori}</div>
          <div>{projectData[pick].name}</div>
        </div>
        <div>
          <div>사진 박스</div>
          <div>컨텐츠 박스</div>
        </div>
      </Content>
    </ArticleBox>
  );
};

export default Projects;
