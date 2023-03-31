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
      > a {
        display: block;
        width: 96px;
        height: 95px;
        background: url("css_sprites.png") -126px -157px;
        background-color: #ffffff;
        border-radius: 50%;
        :hover {
          background-color: #c9caca;
        }
      }
    }
    > div:last-child {
      margin: 20px;
      > a {
        display: block;
        width: 96px;
        height: 96px;
        background: url("css_sprites.png") -10px -157px;
        background-color: black;
        border-radius: 50%;
        :hover {
          background-color: #707070;
        }
      }
    }
  }
  > div:last-child {
    padding-top: 30px;
    font-family: bold;
  }
`;

const Footer = () => {
  return (
    <FooterBox>
      <div>
        <div>
          <a
            href="https://github.com/shdomi8599"
            target="_blank"
            aria-label="github"
          ></a>
        </div>
        <div>
          <a
            href="https://web-beginner.tistory.com/"
            target="_blank"
            aria-label="tistory"
          ></a>
        </div>
      </div>
      <div>© 2023. Shin Dong Min. All rights reserved.</div>
    </FooterBox>
  );
};

export default Footer;
