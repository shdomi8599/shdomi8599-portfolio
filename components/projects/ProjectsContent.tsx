import { navProject, projects } from "@/data/projects";
import Carousel from "../common/Carousel";
import Description from "./Description";
import styled from "styled-components";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { pickState } from "@/recoil/atom";

const Content = styled.div`
  margin-top: 80px;
  width: 100%;

  @media (max-width: 859px) {
    width: 100%;
  }

  > div:first-child {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 40px;
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
    padding: 0px 10px;

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
  idx,
  setLeft,
}: {
  idx: number;
  setLeft: Dispatch<SetStateAction<number>>;
}) => {
  const target = useRef<HTMLDivElement>(null);
  const pick = useRecoilValue(pickState);

  //화면의 크기가 변하면 first값을 다시 셋팅, 리사이징이 일어날땐 pick이 기본값을 참조하고 leftHandler 함수는 고정되버린 바람에 이전의 값이 선택되고있는데 어떻게 해결해야할까???
  useEffect(() => {
    const leftHandler = () => {
      if (target.current && pick === idx) {
        setLeft(target.current.offsetLeft);
      }
    };
    window.addEventListener("resize", leftHandler);
    return () => {
      window.removeEventListener("resize", leftHandler);
    };
  }, [pick]);

  //left좌표를 초기 값을 뺀 것으로 설정
  useEffect(() => {
    if (target.current && pick === idx) {
      setLeft(target.current.offsetLeft);
    }
  }, [idx, pick, setLeft]);

  return (
    <Content ref={target}>
      <div>
        <div>{`< 개발 기간 : ${navProject[idx].period}일 >`}</div>
        <div>{navProject[idx].categori}</div>
        <div>{navProject[idx].name}</div>
      </div>
      <div>
        <div>
          <div>
            <Carousel
              name={navProject[idx].name}
              img={projects[idx][2]}
            />
          </div>
        </div>
        <div>
          {projects[idx][0]}
          {projects[idx][1].map((data) => (
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
