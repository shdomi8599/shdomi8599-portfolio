import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  navHeightState,
  paddingState,
  pickState,
  projectDisplayState,
} from "@/recoil/atom";
import { NAV_PROJECTS } from "@/constants/projects";

import ProjectsContent from "../projects/ProjectsContent";
import ArticleBox from "../common/ArticleBox";

const Projects = () => {
  const container = useRef<HTMLDivElement>(null);

  const navHeight = useRecoilValue(navHeightState);

  const padding = useRecoilValue(paddingState);

  const [projectDisplay, setProjectDisplay] =
    useRecoilState(projectDisplayState);

  //슬릭에게 변화를 감지할 수 있게 도와주는 상태
  const [check, setCheck] = useState(false);

  //선택된 것의 스타일을 바꿔주고 데이터를 보여주기 위한 상태
  const [pick, setPick] = useRecoilState(pickState);

  /**
   * 세로모드를 위한 함수, 디스플레이가 변하게되면 0번째 인덱스로 되돌리는 방식
   */
  const displayHandler = () => {
    setProjectDisplay(!projectDisplay);

    setPick(0);
  };

  /**
   * 함수가 실행되면 Content에 맞는 스크롤로 이동하기 위한 이벤트
   * @param idx 선택된 인덱스
   */
  const pickHandler = (idx: number) => {
    setPick(idx);

    setCheck(!check);

    if (container.current) {
      window.scrollTo({
        top: container.current.offsetTop - navHeight,
        behavior: "smooth",
      });
    }
  };

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
    <>
      <ArticleBox name="Projects">
        <ChangeBox>
          <label className="switch">
            <input type="checkbox" />
            <div className="slider" onClick={displayHandler}>
              <span>가로</span>
              <span>세로</span>
            </div>
          </label>
        </ChangeBox>
        <>
          {!projectDisplay && (
            <ProjectNav>
              {NAV_PROJECTS.map((el, i) => (
                <div
                  key={el.name}
                  className={i === pick ? `project${i} active` : `project${i}`}
                  onClick={() => pickHandler(i)}
                >
                  <div>{el.categori}</div>
                  <div>{"<" + el.create + ">"}</div>
                  <div>{el.name}</div>
                </div>
              ))}
            </ProjectNav>
          )}
        </>
        <ProjectsContainer ref={container} projectDisplay={projectDisplay}>
          {NAV_PROJECTS.map((num, idx) => (
            <ProjectsContent
              navProjectData={NAV_PROJECTS}
              key={`${num.name + idx}`}
              idx={idx}
              setLeft={setLeft}
            />
          ))}
        </ProjectsContainer>
      </ArticleBox>
    </>
  );
};

export default Projects;

type ProjectsContainerProps = {
  projectDisplay: boolean;
};

const ProjectsContainer = styled.div<ProjectsContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.projectDisplay ? "column" : "row")};
  margin-top: ${(props) => props.projectDisplay && "-40px"};
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ChangeBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  @media (max-width: 1130px) {
    padding-right: 10px;
  }
`;

const ProjectNav = styled.nav`
  width: 100%;
  margin-top: 30px;
  border: 1px solid #babbbd;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1028px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
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

  > .project0 {
    border-right: 1px solid #babbbd;
    @media (max-width: 1028px) {
      border-bottom: 1px solid #babbbd;
      border-right: 1px solid #babbbd;
    }
    @media (max-width: 540px) {
      border-right: none;
    }
  }
  > .project1 {
    border-right: 1px solid #babbbd;
    @media (max-width: 1028px) {
      border-bottom: 1px solid #babbbd;
      border-right: none;
    }
  }
  > .project2 {
    border-right: 1px solid #babbbd;
    @media (max-width: 1028px) {
      border-bottom: 1px solid #babbbd;
      border-right: 1px solid #babbbd;
    }
    @media (max-width: 540px) {
      border-right: none;
    }
  }
  > .project3 {
    @media (max-width: 1028px) {
      border-bottom: 1px solid #babbbd;
    }
  }
  > .project4 {
    border-left: 1px solid #babbbd;
    @media (max-width: 1028px) {
      border-right: 1px solid #babbbd;
    }
    @media (max-width: 540px) {
      border-right: none;
    }
  }
`;
