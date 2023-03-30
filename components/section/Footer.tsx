/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
const FooterBox = styled.footer`
  width: 100%;
  padding: 40px calc((100% - 1100px) / 2);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #b7c5c5;
  background-color: #000000;
  color: white;
  > div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    @media (max-width: 370px) {
      flex-direction: column;
    }
    > div:first-child {
      margin: 20px;
      img {
        background-color: white;
        border-radius: 50%;
        :hover {
          background-color: #c9caca;
        }
      }
    }
    > div:last-child {
      margin: 20px;
      img {
        background-color: black;
        border-radius: 50%;
        :hover {
          background-color: #707070;
        }
      }
    }
  }
  > div:last-child {
    font-family: bold;
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <div>
        <div>
          <a href="https://github.com/shdomi8599" target="_blank">
            <img
              src="https://user-images.githubusercontent.com/117655658/228870232-746fbd0d-786e-4315-bca2-c3be6b785b60.png"
              alt="github"
            />
          </a>
        </div>
        <div>
          <a href="https://web-beginner.tistory.com/" target="_blank">
            <img
              src="https://user-images.githubusercontent.com/117655658/228870241-bc6c0f4b-23a4-4968-a9ad-7b5b4504f272.png"
              alt="tistory"
            />
          </a>
        </div>
      </div>
      <div>© 2023. Shin Dong Min. All rights reserved.</div>
    </FooterBox>
  );
};

export default Footer;
