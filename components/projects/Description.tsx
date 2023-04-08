import { detailSrcState, detailState, pickState } from "@/recoil/atom";
import { Project } from "@/types/project";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

const DescriptionBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  @media (max-width: 1040px) {
    flex-direction: column;
  }

  > div:first-child {
    width: 30%;
    font-size: 1.2rem;
    display: flex;
    @media (max-width: 1040px) {
      width: 100%;
    }
    @media (max-width: 254px) {
      flex-direction: column;
    }
    > div:last-child {
      > span {
        margin-left: 8px;
        font-size: 0.8rem;
        background-color: black;
        padding: 4px;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        @media (max-width: 254px) {
          margin-left: 0px;
        }
      }
    }
  }

  > div:last-child {
    width: 70%;
    display: flex;
    align-items: center;
    @media (max-width: 1040px) {
      width: 100%;
      margin-top: 10px;
    }
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: start;
    }
    > div {
      > a {
        @media (max-width: 500px) {
          margin-bottom: 5px;
        }
      }
    }
    > div:first-child {
      margin-bottom: 5px;
      > a {
        display: block;
        width: 96px;
        height: 28px;
        background: url("css_sprites.png") -372px -321px;
        border-radius: 12px;
        margin-right: 20px;
      }
    }
    > div:nth-child(2) {
      margin-bottom: 5px;
      > a {
        display: block;
        width: 102px;
        height: 28px;
        background: url("css_sprites.png") -10px -321px;
        margin-right: 20px;
        border-radius: 12px;
      }
    }
    > div:nth-child(3) {
      margin-bottom: 5px;
      > a {
        display: block;
        width: 107px;
        height: 28px;
        background: url("android.png") -10px -10px;
        border-radius: 12px;
      }
    }
  }
`;

const Description = ({ name, content, href }: Project) => {
  const hrefData = ["github", "tistory", "android"];

  //선택된 픽의 상태
  const pick = useRecoilValue(pickState);

  //디테일 페이지 상태
  const setDetail = useSetRecoilState(detailState);

  //디테일 페이지 주소 상태
  const setDetailSrc = useSetRecoilState(detailSrcState);

  //디테일 페이지 주소 데이터
  const detailSrcData = [
    "https://web-beginner.tistory.com/category/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%ED%95%B5%EC%8B%AC%20%EC%BD%94%EB%93%9C/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4",
    "https://web-beginner.tistory.com/category/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%ED%95%B5%EC%8B%AC%20%EC%BD%94%EB%93%9C/%EB%A7%88%EC%89%B4%EB%9E%AD",
    "https://web-beginner.tistory.com/category/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4%20%ED%95%B5%EC%8B%AC%20%EC%BD%94%EB%93%9C/%EC%B7%A8%EC%A4%80%EC%83%9D%EC%9D%98%20%ED%95%98%EB%A3%A8",
  ];

  /**
   * 디테일 페이지 주소를 변경하고, 디테일 페이지를 on
   */
  const onDetail = () => {
    setDetailSrc(detailSrcData[pick]);
    setDetail(true);
  };

  return (
    <DescriptionBox>
      <div>
        <div>
          <b>{name}</b>
        </div>
        {name === "구현한 기능" && pick < 3 && (
          <div>
            <span onClick={onDetail}>핵심코드</span>
          </div>
        )}
      </div>
      <div>
        {href
          ? hrefData.map(
              (label, i) =>
                href[i] && (
                  <div key={i}>
                    <a href={href[i]} target="_blank" aria-label={label}></a>
                  </div>
                )
            )
          : content}
      </div>
    </DescriptionBox>
  );
};

export default Description;
