import styled from "styled-components";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IntroBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70vh;
    background-image: url("https://cdg-portfolio.com/images/masthead.jpg");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 1;
    @media (max-width: 980px) {
      background-size: 100% auto;
    }
    @media (max-width: 680px) {
      background-size: 680px auto;
    }
  }

  > div {
    padding-top: 170px;
    color: white;
    display: flex;
    font-size: 3rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 980px) {
      font-size: 2.1rem;
    }

    > div:first-child {
      font-size: 4rem;
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
      }
    }
  }
`;

const Intro = () => {
  return (
    <IntroBox>
      <div>
        <div>신 동 민</div>
        <div>프론트엔드 포트폴리오</div>
        <hr />
        <div>
          안녕하세요.
          <br /> 모든 사람에게 실력 있는 개발자로 인정받기 위해 <br />
          끊임 없이 노력하는 프론트엔드 지망생입니다.
        </div>
        <div>
          <button>
            <span>자세히 보기</span>
            <FontAwesomeIcon icon={faCircleArrowDown} />
          </button>
        </div>
      </div>
    </IntroBox>
  );
};
export default Intro;
