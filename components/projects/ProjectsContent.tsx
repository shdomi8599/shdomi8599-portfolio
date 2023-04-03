import { navProject, projects } from "@/data/projects";
import Carousel from "../common/Carousel";
import Description from "./Description";
import styled from "styled-components";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { pickState, projectHeightState } from "@/recoil/atom";

type ContentProps = {
  height: number;
};

const Content = styled.div<ContentProps>`
  margin-top: 80px;
  width: 100%;
  height: ${(props) => `${props.height + 10}px`};

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
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useRecoilState(projectHeightState);

  //이동 이펙트를 중첩시켜서 스크롤 이벤트가 확실하게 일어나도록
  useEffect(() => {
    if (target.current && pick === idx) {
      setLeft(target.current.offsetLeft);
    }
  }, [height]);

  //화면의 크기가 변하면 left값을 다시 셋팅
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
  }, [height]);

  //left좌표를 초기 값을 뺀 것으로 설정
  useEffect(() => {
    if (target.current && pick === idx) {
      setLeft(target.current.offsetLeft);
    }
  }, [idx, pick, setLeft]);

  //높이 계산식
  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);

  //넓이,pick이 변하면 높이 다시 조정
  useEffect(() => {
    if (target.current && pick === idx) {
      const topHeight = top.current?.offsetHeight;
      const bottomHeight = bottom.current?.offsetHeight;
      if (topHeight && bottomHeight) setHeight(topHeight + bottomHeight);
    }
  }, [width, pick]);

  //넓이의 변화를 디바운싱으로 1번만 실행되도록 해주는 이펙트와 함수
  let timer: number;
  const widthResize = () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      setWidth(window.innerWidth);
    }, 300);
  };
  useEffect(() => {
    window.addEventListener("resize", widthResize);
    return () => window.removeEventListener("resize", widthResize);
  }, []);

  return (
    <Content ref={target} height={height}>
      <div ref={top}>
        <div>{`< 개발 기간 : ${navProject[idx].period}일 >`}</div>
        <div>{navProject[idx].categori}</div>
        <div>{navProject[idx].name}</div>
      </div>
      <div ref={bottom}>
        <div>
          <div>
            <Carousel name={navProject[idx].name} img={projects[idx][2]} />
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
