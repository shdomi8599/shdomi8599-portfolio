import ArticleBox from "@/components/common/ArticleBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCalendar,
  faLocationCrosshairs,
  faPhone,
  faEnvelope,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Row from "../common/Row";

const Col = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 3rem;
  height: 10vh;
  padding: 0px 60px;

  @media (min-width: 992px) {
    width: calc(100% / 3);
  }
  @media (max-width: 991px) {
    width: calc(100% / 2);
  }
  @media (max-width: 576px) {
    width: 100%;
    padding: 10px;
    margin: 0px calc((100% - 280px) / 2);
  }
  @media (max-width: 204px) {
    padding: 20px 0px;
    margin: 0px;
  }

  > div:first-child {
    padding-right: 20px;
    font-size: 2.5rem;
    margin-left: 18px;
    > svg {
      width: 40px;
      height: 40px;
    }
  }

  > div:last-child {
    font-size: 1.2rem;

    > div:first-child {
      font-weight: bold;
    }
  }
`;

const Profile = () => {
  const profileArr = [
    {
      icon: <FontAwesomeIcon icon={faAddressCard} />,
      name: "NAME",
      content: "신동민",
    },
    {
      icon: <FontAwesomeIcon icon={faCalendar} />,
      name: "BIRTH",
      content: "93.07.28",
    },
    {
      icon: <FontAwesomeIcon icon={faLocationCrosshairs} />,
      name: "ADDRESS",
      content: "경기도 군포시",
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      name: "PHONE",
      content: "010-5715-8599",
    },
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      name: "EMAIL",
      content: "shdomi@naver.com",
    },
    {
      icon: <FontAwesomeIcon icon={faSchool} />,
      name: "EDUCATION",
      content: "강릉원주대학교 중퇴",
    },
  ];

  return (
    <ArticleBox name="Profile">
      <Row>
        {profileArr.map((el) => (
          <Col key={el.name}>
            <div>{el.icon}</div>
            <div>
              <div>{el.name}</div>
              <div>{el.content}</div>
            </div>
          </Col>
        ))}
      </Row>
    </ArticleBox>
  );
};

export default Profile;
