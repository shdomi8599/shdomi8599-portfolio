import styled from "styled-components";
import ArticleBox from "../common/ArticleBox";
import Row from "../common/Row";

const ContactBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 80px;

  > div {
    align-items: center;
    justify-content: center;
    @media (max-width: 859px) {
      flex-direction: column;
    }

    > div:first-child {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @media (max-width: 859px) {
        margin-bottom: 10px;
      }
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        padding: 60px 0px;
        margin: 38px 0px;
        border-radius: 15px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
          0 -0.5rem 1rem rgba(0, 0, 0, 0.1);
        @media (max-width: 859px) {
          width: 100%;
          margin: 20px 0px;
          padding: 40px 0px;
        }
      }
    }

    > div:last-child {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
        0 -0.5rem 1rem rgba(0, 0, 0, 0.1);
      padding: 280px 0px;
      @media (max-width: 859px) {
        width: 90%;
        margin: 20px 0px;
      }
    }
  }
`;

const Contact = () => {
  return (
    <ArticleBox name={"Contact"}>
      <ContactBox>
        <Row>
          <div>
            <div>G메일</div>
            <div>카톡</div>
            <div>dsa</div>
          </div>
          <div>방명록</div>
        </Row>
      </ContactBox>
    </ArticleBox>
  );
};

export default Contact;
