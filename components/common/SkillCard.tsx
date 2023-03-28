/* eslint-disable @next/next/no-img-element */
import { RefObject } from "react";
import styled from "styled-components";

type CardProps = {
  width?: number;
};

const Card = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0px;
  width: ${(props) => props.width}px;
  padding: 30px;
  border-radius: 25px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15),
    0 -0.5rem 1rem rgba(0, 0, 0, 0.1);

  > div:first-child {
    font-size: 2.4rem;
    color: #5c5c5c;
    font-weight: 600;
    padding-bottom: 12px;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    > img {
      margin: 4px 0px;
    }
  }
`;

type SkillCardProps = {
  skills: string[];
  name: string;
  target?: RefObject<HTMLDivElement>;
  width?: number;
};

const SkillCard = ({ skills, name, target, width }: SkillCardProps) => {
  return (
    <Card ref={target && target} width={width}>
      <div>{name}</div>
      <div>
        {skills.map((skill: string) => (
          <img key={skill} src={skill} alt={name} />
        ))}
      </div>
    </Card>
  );
};

export default SkillCard;
