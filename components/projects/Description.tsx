import { Project } from "@/types/project";
import styled from "styled-components";

const DescriptionBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  @media (max-width: 1040px) {
    flex-direction: column;
  }

  > div:first-child {
    width: 30%;
    font-size: 1.2rem;
    @media (max-width: 1040px) {
      width: 100%;
    }
  }

  > div:last-child {
    width: 70%;
    display: flex;
    align-items: center;
    @media (max-width: 1040px) {
      width: 100%;
      margin-top: 10px;
    }
    @media (max-width: 500px) {
      flex-direction: column;
      align-items: start;
    }
    > div {
      > a {
        @media (max-width: 500px) {
          margin-bottom: 5px;
        }
      }
    }
    > div:first-child {
      margin-bottom: 5px;
      > a {
        display: block;
        width: 96px;
        height: 28px;
        background: url("css_sprites.png") -372px -321px;
        border-radius: 12px;
        margin-right: 20px;
      }
    }
    > div:nth-child(2) {
      margin-bottom: 5px;
      > a {
        display: block;
        width: 102px;
        height: 28px;
        background: url("css_sprites.png") -10px -321px;
        margin-right: 20px;
        border-radius: 12px;
      }
    }
    > div:nth-child(3) {
      margin-bottom: 5px;
      > a {
        display: block;
        width: 107px;
        height: 28px;
        background: url("android.png") -10px -10px;
        border-radius: 12px;
      }
    }
  }
`;

const Description = ({ name, content, href }: Project) => {
  //href[0]=== 깃허브 주소, href[1] === 티스토리 주소
  return (
    <DescriptionBox>
      <div>
        <b>{name}</b>
      </div>
      <div>
        {href ? (
          <>
            {href[0] && (
              <div>
                <a href={href[0]} target="_blank"></a>
              </div>
            )}
            {href[1] && (
              <div>
                <a href={href[1]} target="_blank"></a>
              </div>
            )}
            {href[2] && (
              <div>
                <a href={href[2]} target="_blank"></a>
              </div>
            )}
          </>
        ) : (
          content
        )}
      </div>
    </DescriptionBox>
  );
};

export default Description;
