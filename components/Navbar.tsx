import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  margin: 0px calc((100% - 1100px) / 2);

  > div:first-child {
    width: 100%;
    display: flex;

    > div:first-child {
      font-size: 2.2rem;
      width: 100%;
    }

    > div:last-child {
      display: flex;

      > div:first-child {
        display: none;
        justify-content: center;
        align-items: center;
        @media (max-width: 768px) {
          display: flex;
          font-size: 1.8rem;
          color: #4b4949;
        }

        > div {
          border: 1px solid #b6b4b4;
          border-radius: 8px;
          padding: 0px 8px;
        }
      }

      > div:last-child ul {
        width: 100%;
        display: flex;
        font-size: 1.3rem;
        @media (max-width: 768px) {
          display: none;
        }

        > li {
          margin: 0px 1.4vw;
          opacity: 0.7;
          cursor: pointer;
        }
      }
    }
  }

  > div:last-child {
    width: 100%;

    > ul {
      height: 12vh;
      display: none;
      @media (max-width: 768px) {
        display: block;
      }

      > li {
        margin: 12px 0;
        font-size: 1.2rem;
        opacity: 0.7;
        cursor: pointer;
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

  //네비 데이터 메모이제이션
  const navData = useMemo(
    () => (
      <ul>
        <li>Itroduction</li>
        <li>Skills</li>
        <li>Projects</li>
      </ul>
    ),
    []
  );

  return (
    <Nav>
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
      {togle && <div>{navData}</div>}
    </Nav>
  );
};

export default Navbar;
