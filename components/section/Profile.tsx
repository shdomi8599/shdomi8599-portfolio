import styled from "styled-components";

import { PROFILE_DATA } from "@/constants/profile";

import ArticleBox from "@/components/common/ArticleBox";
import Row from "../common/Row";

const Profile = () => {
  return (
    <ArticleBox name="Profile">
      <Row>
        {PROFILE_DATA.map((el) => (
          <Col key={el.name}>
            <div>{el.icon}</div>
            <div>
              <div>{el.name}</div>
              <div>
                {el.content === "shdomi8599@gmail.com" ? (
                  <a
                    target="_blank"
                    href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=shdomi8599@gmail.com"
                    aria-label="gmail"
                  >
                    {el.content}
                  </a>
                ) : (
                  el.content
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </ArticleBox>
  );
};

export default Profile;

const Col = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 3rem;
  padding: 24px 60px;

  @media (min-width: 992px) {
    width: calc(100% / 3);
  }
  @media (max-width: 991px) {
    width: calc(100% / 2);
  }
  @media (max-width: 576px) {
    width: 100%;
    padding: 10px;
    margin: 0px calc((100% - 316px) / 2);
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
