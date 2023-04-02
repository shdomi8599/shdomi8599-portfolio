import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";
import { navProject } from "@/data/projects";
import { useRecoilState, useRecoilValue } from "recoil";
import { paddingState, pickState } from "@/recoil/atom";
import ProjectsContent from "../projects/ProjectsContent";

type ProjectNavProps = {
  length: number;
};

const ProjectNav = styled.nav<ProjectNavProps>`
  margin-top: 48px;
  width: 100%;
  display: flex;
  border-top: 1px solid #babbbd;
  border-bottom: 1px solid #babbbd;
  cursor: pointer;

  @media (max-width: 1028px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }

  > div:nth-child(1) {
    @media (max-width: 1028px) {
      border-bottom: 1px solid #babbbd;
      border-right: 1px solid #babbbd;
    }
    @media (max-width: 540px) {
      border-right: none;
    }
  }
  > div:nth-child(2) {
    @media (max-width: 1028px) {
      border-bottom: 1px solid #babbbd;
    }
  }
  > div:nth-child(3) {
    @media (max-width: 1028px) {
      border-bottom: 1px solid #babbbd;
      border-right: 1px solid #babbbd;
    }
    @media (max-width: 540px) {
      border-right: none;
    }
  }
  > div:nth-child(4) {
    @media (max-width: 1028px) {
      border-bottom: 1px solid #babbbd;
    }
  }
  > div:nth-child(5) {
    @media (max-width: 1028px) {
      border-right: 1px solid #babbbd;
    }
    @media (max-width: 540px) {
      border-right: none;
      border-bottom: 1px solid #babbbd;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${(props) => `calc(100% / ${props.length})`};
    height: 100%;
    padding: 20px 0px;
    @media (max-width: 1028px) {
      width: 100%;
    }

    > div:nth-child(2) {
      font-size: 0.83rem;
    }

    > div:last-child {
      padding: 4px 0px;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: hidden; /* 가로 스크롤 */
`;

const Projects = () => {
  const container = useRef<HTMLDivElement>(null);
  const padding = useRecoilValue(paddingState);

  //슬릭에게 변화를 감지할 수 있게 도와주는 상태
  const [check, setCheck] = useState(false);

  //선택된 것의 스타일을 바꿔주고 데이터를 보여주기 위한 상태
  const [pick, setPick] = useRecoilState(pickState);

  /**
   * 함수가 실행되면 Content에 맞는 스크롤로 이동하기 위한 이벤트
   * @param idx 선택된 인덱스
   */
  const pickHandler = (idx: number) => {
    setPick(idx);
    setCheck(!check);
  };

  //프로젝트 콘텐츠를 나열하기 위한 배열
  const contentArr = Array(6).fill(0);

  //좌표 값 상태
  const [left, setLeft] = useState(0);

  //좌표 값이 변하면 이동하는 이펙트
  useEffect(() => {
    if (container.current) {
      container.current.scrollTo({
        left: left - padding,
        behavior: "smooth",
      });
    }
  }, [left, padding]);

  return (
    <ArticleBox name="Projects">
      <ProjectNav length={navProject.length}>
        {navProject.map((el, i) => (
          <div
            key={el.name}
            className={i === pick ? "active" : ""}
            onClick={() => pickHandler(i)}
          >
            <div>{el.categori}</div>
            <div>{"<" + el.create + ">"}</div>
            <div>{el.name}</div>
          </div>
        ))}
      </ProjectNav>
      <ProjectsContainer ref={container}>
        {contentArr.map((x, idx) => (
          <ProjectsContent
            key={idx}
            idx={idx}
            setLeft={setLeft}
          />
        ))}
      </ProjectsContainer>
    </ArticleBox>
  );
};

export default Projects;
