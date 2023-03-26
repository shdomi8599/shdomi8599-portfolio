import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

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
  color: ${(props) => (props.isScrolled ? "black" : "#e2dddd")};
  background-color: ${(props) => props.isScrolled && "white"};
  box-shadow: ${(props) => props.isScrolled && "0 2px 4px rgba(0, 0, 0, 0.8)"};

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
      cursor: pointer;
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

  //화면의 크기가 768보다 커지면 토글이 off되도록 해주는 이펙트
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setTogle(false);
      }
    };
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

  //네비 데이터
  const navData = (
    <ul>
      <li>Profile</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  );

  return (
    <Nav togle={togle} isScrolled={isScrolled}>
      <div>
        <div>Portfolio</div>
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
