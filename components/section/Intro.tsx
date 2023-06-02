import styled from "styled-components";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetRecoilState } from "recoil";
import { selectNavState } from "@/recoil/atom";

const Intro = () => {
  const setSelectNav = useSetRecoilState(selectNavState);

  return (
    <IntroBox>
      <div>
        <div>신 동 민</div>
        <div>프론트엔드 포트폴리오</div>
        <hr />
        <div>
          안녕하세요.
          <>
            <br /> 모든 사람에게 실력 있는 개발자로 인정받기 위해 <br />
            끊임 없이 노력하는 프론트엔드 개발자입니다.
          </>
        </div>
        <div>
          <button onClick={() => setSelectNav("Profile")}>
            <span>자세히 보기</span>
            <FontAwesomeIcon icon={faCircleArrowDown} />
          </button>
          <div>※ 이 포트폴리오는 템플릿이 아닙니다.</div>
        </div>
      </div>
    </IntroBox>
  );
};
export default Intro;

const IntroBox = styled.article`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;

  @media (max-width: 170px) {
    padding: 5px;
    margin: 5px;
  }

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 600px;
    background-image: url("/mainImg/mainImg.avif"), url("/mainImg/mainImg.webp"),
      url("/mainImg/mainImg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 1;
  }

  > div {
    color: white;
    display: flex;
    font-size: 40px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 980px) {
      font-size: 2.1rem;
    }

    > div:first-child {
      font-size: 58px;
      font-weight: bold;
      @media (max-width: 980px) {
        font-size: 2.8rem;
      }
    }

    > hr {
      width: 3.25rem;
      border-top: 0.2rem solid white;
      margin: 1.5rem auto;
    }

    > div:nth-of-type(3) {
      font-size: 1.4rem;
      text-align: center;
      @media (max-width: 980px) {
        font-size: 1.2rem;
      }
    }

    > div:last-child {
      padding-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      > button {
        font-size: 1.3rem;
        padding: 10px;
        border: none;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        background-color: #353535;

        > span {
          padding-right: 10px;
        }
        > svg {
          height: 20px;
        }
      }
      div {
        font-size: 1.2rem;
        margin-top: 30px;
        margin-bottom: 20px;
      }
    }
  }
`;
