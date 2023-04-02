import { navProject, projects } from "@/data/projects";
import Carousel from "../common/Carousel";
import Description from "./Description";
import styled from "styled-components";
import React, { RefObject } from "react";

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
    flex-direction: column;
    padding: 0px 10px 40px 10px;

    > div:first-child {
      width: 80%;
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
          height: 100%;
          > button {
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
                    > picture {
                      height: 100%;
                      > img {
                        border: 1px solid #ebeaea; //사진 테두리
                        height: 100%;
                        width: 100%;
                      }
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
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      margin: 0px 40px;
      padding-top: 40px;
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

const ProjectsContent = ({
  pick,
  check,
  target,
}: {
  pick: number;
  check: boolean;
  target: RefObject<HTMLDivElement>;
}) => {
  return (
    <Content ref={target}>
      <div>
        <div>{`< 개발 기간 : ${navProject[pick].period}일 >`}</div>
        <div>{navProject[pick].categori}</div>
        <div>{navProject[pick].name}</div>
      </div>
      <div>
        <div>
          <div>
            <Carousel
              check={check}
              name={navProject[pick].name}
              img={projects[pick][2]}
            />
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
  );
};

export default React.memo(ProjectsContent);
