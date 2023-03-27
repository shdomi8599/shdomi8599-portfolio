import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { navHeightState, selectNavState } from "@/recoil/atom";

type NavProps = {
  togle: boolean;
  isScrolled: boolean;
};

const Nav = styled.nav<NavProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: fixed;
  color: ${(props) => (props.isScrolled ? "black" : "#cfcccc")};
  background-color: ${(props) => props.isScrolled && "white"};
  box-shadow: ${(props) => props.isScrolled && "0 2px 4px rgba(0, 0, 0, 0.2)"};

  > div:first-child {
    width: 100%;
    display: flex;
    padding: 25px calc((100% - 1100px) / 2);
    z-index: 1;
    @media (max-width: 980px) {
      background-color: white;
      color: black;
    }
    @media (max-width: 768px) {
      padding: 25px 20px;
    }
    @media (max-width: 215px) {
      flex-direction: column;
    }

    > div:first-child {
      font-size: 2.2rem;
      width: 100%;
      > span {
        cursor: pointer;
        padding-left: 20px;
        :hover {
          color: ${(props) => (props.isScrolled ? "black" : "white")};
        }
        @media (max-width: 980px) {
          :hover {
            color: black;
          }
        }
        @media (max-width: 768px) {
          :hover {
            color: black;
          }
          padding-left: 0px;
        }
      }
    }

    > div:last-child {
      display: flex;
      @media (max-width: 215px) {
        flex-direction: column;
      }

      > div:first-child {
        display: none;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px) {
          display: flex;
          font-size: 1.8rem;
        }

        > div {
          border: 1px solid #b6b4b4;
          border-radius: 8px;
          padding: 0px 8px;
        }
      }

      > div:last-child {
        display: flex;
        justify-content: center;
        align-items: center;

        > ul {
          width: 100%;
          display: flex;
          font-size: 1.3rem;
          @media (max-width: 768px) {
            display: none;
          }

          > li {
            margin: 0px 1.4vw;
            cursor: pointer;
            :hover {
              color: ${(props) => (props.isScrolled ? "black" : "white")};
            }
            @media (max-width: 980px) {
              :hover {
                color: black;
              }
            }
          }
        }
      }
    }
  }

  > div:last-child {
    width: 100%;

    > ul {
      display: none;
      max-height: ${(props) => (props.togle ? "20vh" : "0")};
      padding: ${(props) =>
        props.togle ? "20px 0px 20px 25px" : "0px 0px 0px 25px"};
      transition: all 0.1s ease-in-out;
      @media (max-width: 768px) {
        display: block;
        position: absolute;
        width: 100%;
        background-color: white;
        color: #7a7878;
      }

      > li {
        margin-bottom: 12px;
        font-size: 1.2rem;
        display: ${(props) => (props.togle ? "block" : "none")};
        cursor: pointer;
        :hover {
          color: white;
        }
        @media (max-width: 768px) {
          :hover {
            color: black;
          }
        }
      }
    }
  }
`;

const Navbar = () => {
  //토글 상태
  const [togle, setTogle] = useState(false);

  //토글 핸들러
  const togleHandler = () => {
    setTogle(!togle);
  };

  //스크롤 넓이 상태 핸들러
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setTogle(false);
    }
  };

  //화면의 크기가 768보다 커지면 토글이 off되도록 해주는 이펙트
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //스크롤 높이 상태
  const [isScrolled, setIsScrolled] = useState(false);

  //스크롤 높이 상태 핸들러
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  //스크롤이 20이상 내려오면 네비바의 배경을 입혀주기 위한 이펙트
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //네비를 통한 이동 이벤트 상태
  const setSelectNav = useSetRecoilState(selectNavState);

  //네비 데이터
  const navArr = ["Profile", "Skills", "Projects", "Contact"];
  const navData = (
    <ul>
      {navArr.map((el) => (
        <li key={el} onClick={() => setSelectNav(el)}>
          {el}
        </li>
      ))}
    </ul>
  );

  //네비의 높이를 셋팅하기 위한 이펙트
  const navHeight = useSetRecoilState(navHeightState);
  const target = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (target.current) navHeight(target.current?.offsetHeight);
  }, [isScrolled, navHeight]);

  //최상단으로 이동하고 select 초기화
  const moveTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setSelectNav("");
  };

  return (
    <Nav togle={togle} isScrolled={isScrolled} ref={target}>
      <div>
        <div>
          <span onClick={moveTop}>Portfolio</span>
        </div>
        <div>
          <div>
            <div className="pointer" onClick={togleHandler}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>
          <div>{navData}</div>
        </div>
      </div>
      {<div>{navData}</div>}
    </Nav>
  );
};

export default Navbar;
