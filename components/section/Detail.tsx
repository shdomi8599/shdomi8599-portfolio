import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { detailSrcState, detailState } from "@/recoil/atom";

const DetailBox = styled.article`
  z-index: 99;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: white;
  > div {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .back-btn {
      position: absolute;
      left: 100px;
      top: 150px;
      font-size: 1.4rem;
      background-color: #d63636;
      color: white;
      padding: 20px;
      border-radius: 20px;
      cursor: pointer;
    }
  }

  .loading {
    background-color: white;
    font-size: 2.5rem;
    img {
      margin-right: 10px;
    }
  }
`;

const Detail = () => {
  //디테일 페이지 상태
  const setDetail = useSetRecoilState(detailState);

  //디테일 페이지 주소
  const detailSrc = useRecoilValue(detailSrcState);

  /**
   * 디테일 페이지 off이벤트
   */
  const offDetail = () => {
    setDetail(false);
  };
  //로딩 상태
  const [isLoaded, setIsLoaded] = useState(false);

  /**
   * 페이지가 로드되면 로딩을 없애주기 위한 함수
   */
  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <DetailBox>
      <div>
        <div className="back-btn" onClick={offDetail}>
          포트폴리오로 돌아가기
        </div>
        <iframe
          src={detailSrc}
          width="100%"
          height="100%"
          allowFullScreen
          onLoad={handleOnLoad}
        />
      </div>
      {!isLoaded && (
        <div className="loading">
          <Image src="/loading.gif" alt="loading" width={40} height={40} />
          로딩중입니다.
        </div>
      )}
    </DetailBox>
  );
};

export default Detail;
