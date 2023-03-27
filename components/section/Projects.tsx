import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";
import Description from "../projects/Description";

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
    padding: 0px 0px 40px;
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
        width: 70%;
      }

      > div:first-child {
        width: 100%;
        display: flex;

        > div {
          > svg {
            height: 2.8vh;
          }
        }

        > div:nth-child(1) {
          width: 15%;
          display: flex;
          justify-content: end;
          align-items: center;
        }

        > div:nth-child(2) {
          width: 70%;
          > img {
            width: 100%;
          }
        }

        > div:nth-child(3) {
          width: 15%;
          display: flex;
          justify-content: start;
          align-items: center;
        }
      }

      > div:last-child {
        padding: 20px 0px;
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
          <div>
            <div>
              <div>
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div>
                <img
                  src="https://lh3.googleusercontent.com/1hETJExMpNDOyjrmlFgeFaVQ-pWPWROYDoZtDvgwQWYBbLeCz-GhFg_b5KLq2bgJ0-NXpzNguVYPvTNbRJk6JNzKLSZmGtUdfBmmJZObyBHH-c_4Ksn4kawinW7y1jrVoRU4ryCKP4TBsgi-vLBwqPs6UK6_6fRQ69W5xp4awvF9DSlk8U8wj6CqwvdeNa5R-DUJCJq3LmC48LMCcHtep_XChapiIb-sjb3XoyfrX7sZtP9KB8D_Mp0NjJBbuFrlpbZtjhFN8jM6xBSP0WttZBzQqtG9gh-0xfIsMPLEHXrBu03ffJdTEtNekqCT6k4I8leFVxvDnWnCehLTcrfe_XY-yXv60tykXWRdFjxO0ngqeX1pay0FHUdC0iSohhKVJbo0F6ZrK5Op2eP9RZWGwzKZBzjpQjFfyw7Cuggb-u3Eeo4Q0vBwZwgBsxeeY2GKz8RkM2smOTYoerMlJTh2Fb8Diw9CWVSPG-O87O7coCRP7TsFcUrcO0PEiO-MwWHbJ3OA79Ir49me2I5SagVWlir5gfB3g1ffIhSzj0v-1I3jrylBmERILgxxMJKPW_pRc_QQelGAZkqxYyvqoXxrYhJI-0PDxpb45bazpQ6gS98sxrni1XqOzy_OxWbgH8_cy0WXAl7id_pNZ8IWvZdbPiwMk0tOJReZpsh-w7q7XhfzkaR9XIt4EQ5ssgS_8E32MrfuNJeVJmqvhLT7biVcJ4MaUsawwbNy6I12621u3FJ1yBeMR0iv29J1eNEv4ATYOXqlxHIiiajwg-46lOheYjbz0RI-4PIg5cLGpwbltZGmWQ385bVV9M_aub6Qy0_DT05VHvX_urz9ONJ1eQudG9R4xgk3QIbF2OrsnQotpO0nP4zijHAwVc0ajO_rRdJVZ6uVHh5TR4NzB17KieApA5HqK_EhuTldNGGmB_eBWU1_=w250-h216-no?authuser=0"
                  alt=""
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <div>1/8</div>
          </div>
          <div>
            <div>
              제가 부트캠프를 수강 중인 도중, 오픈 채팅방에서 팀원 모집 글을
              보고 참여한 첫 번째 팀 프로젝트입니다.{" "}
              <b>
                마쉴랭 프로젝트는 칵테일을 좋아하는 사람들을 위한 웹 커뮤니티로,
                게시판을 활용하여 레시피와 맛집 정보를 공유하는 것이 주
                컨텐츠입니다.
              </b>{" "}
              원래는 프론트엔드 2명, 백엔드 2명으로 구성될 예정이었으나, 인원
              구성이 되지 않아 저 혼자 프론트엔드를 맡게 되었고, 두 분의 백엔드
              분들과 함께 작업하게 되었습니다.
              <p />
              처음에는 혼자 맡게 된 상황이 당황스러웠지만, 둘이서 할 일을 혼자서
              처리하면 제 실력이 많이 향상될 것이라 믿어서 도전하게 되었습니다.
              덕분에 모든 클라이언트 작업을 혼자 해내면서 실력 향상에 큰 도움이
              되었습니다.
              <p />
              서버와 클라이언트를 연동하는 부분에서는 백엔드 분들이 클라이언트에
              대해 잘 모르셔서, 서버를 알고 있는 제가 나서서 작업을
              진행했습니다. 백엔드 분들에게{" "}
              <span className="text-red">
                <b>스프링 부트를 해석하는 방법</b>
              </span>
              과{" "}
              <span className="text-red">
                <b>H2 데이터베이스를 활용하는 방법</b>
              </span>
              을 여쭤보고,{" "}
              <span className="text-red">
                <b>
                  제 로컬 환경에서 서버와 클라이언트를 모두 실행시켜 데이터들을
                  연동하는 작업을 했습니다.
                </b>
              </span>{" "}
              이를 통해 백엔드와의 협업에 대한 두려움이 사라지면서, 좋은 경험을
              쌓을 수 있었습니다.
              <p />
              이렇게 진행된 프로젝트 마쉴랭은 저에게 많은 도움이 되었으며, 좋은
              경험이 된 프로젝트입니다.
            </div>
            <Description
              name="구현한 기능"
              content="커뮤니티, 뭐 이것 저것 많음"
            />
            <Description
              name="깃허브 링크"
              href="https://github.com/Maswillaeng/MSL-frontend-full"
            />
            <Description name="사용한 프론트 기술" content="React, " />
            <Description name="사용한 백엔드 기술" content="Spring Boot, " />
            <Description name="커뮤니케이션" content="Figma, " />
          </div>
        </div>
      </Content>
    </ArticleBox>
  );
};

export default Projects;
