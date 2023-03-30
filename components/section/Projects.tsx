import { useRef, useState } from "react";
import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";
import Description from "../projects/Description";
import { navProject, projects } from "@/data/projects";
import Carousel from "../common/Carousel";
import { useRecoilValue } from "recoil";
import { navHeightState } from "@/recoil/atom";

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

const Content = styled.div`
  margin-top: 80px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
    0 -0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin-bottom: 80px;

  @media (max-width: 859px) {
    width: 90%;
  }

  > div:first-child {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 0px;
    font-weight: bold;

    > div:last-child {
      font-size: 2.3rem;
    }
  }
  > div:last-child {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0px 10px 40px 10px;

    @media (max-width: 859px) {
      flex-direction: column;
    }

    > div:first-child {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0px 40px;
      @media (max-width: 859px) {
        width: 86%;
      }

      > div:first-child {
        width: 100%;
        display: flex;

        > div {
          //캐러셀
          width: 100%;
          > button {
            display: none;
            padding-bottom: 90px;
            ::before {
              color: #000000;
            }
          }
          > div {
            height: 100%;
            > div {
              height: 100%;
              > div {
                height: 100%;
                > div {
                  height: 100%;
                  > div {
                    height: 100%;
                    > img {
                      border: 1px solid #ebeaea; //사진 테두리
                      height: 80%;
                      width: 100%;
                    }
                  }
                }
              }
            }
          }
        }
      }

      > div:last-child {
        padding: 30px 0px;
      }
    }

    > div:last-child {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      margin: 0px 40px;
      @media (max-width: 859px) {
        width: 70%;
      }

      > div:first-child {
        color: #545355;
        font-size: 1.08rem;
      }
    }
  }
`;

const Projects = () => {
  const navHeight = useRecoilValue(navHeightState);
  //선택된 것의 스타일을 바꿔주고 데이터를 보여주기 위한 상태
  const [pick, setPick] = useState(0);
  const pickHandler = (idx: number) => {
    setPick(idx);
    if (target.current) {
      window.scrollTo({
        top: target.current.offsetTop - navHeight - 20,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const target = useRef<HTMLDivElement>(null);

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
      <Content ref={target}>
        <div>
          <div>{navProject[pick].categori}</div>
          <div>{navProject[pick].name}</div>
        </div>
        <div>
          <div>
            <div>
              <Carousel img={projects[pick][2]} />
            </div>
          </div>
          <div>
            {projects[pick][0]}
            {projects[pick][1].map((data) => (
              <Description
                key={data.name}
                name={data.name}
                content={data.content}
                href={data.href}
              />
            ))}
          </div>
        </div>
      </Content>
    </ArticleBox>
  );
};

export default Projects;
