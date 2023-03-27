import styled from "styled-components";

const DescriptionBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  @media (max-width: 1040px) {
    flex-direction: column;
  }

  > div:first-child {
    width: 35%;
    font-size: 1.2rem;
    @media (max-width: 1040px) {
      width: 100%;
    }
  }

  > div:last-child {
    width: 65%;
    display: flex;
    align-items: center;
    @media (max-width: 1040px) {
      width: 100%;
      margin-top: 10px;
    }

    > button {
      border: none;
      padding: 8px;
      border-radius: 12px;
      background-color: black;

      > a {
        color: white;
      }
    }
  }
`;

type DescriptionProps = {
  name: string;
  content?: string;
  href?: string;
};

const Description = ({ name, content, href }: DescriptionProps) => {
  return (
    <DescriptionBox>
      <div>
        <b>{name}</b>
      </div>
      <div>
        {href ? (
          <button>
            <a href={href} target="_blank">
              자세히 보기
            </a>
          </button>
        ) : (
          content
        )}
      </div>
    </DescriptionBox>
  );
};

export default Description;
