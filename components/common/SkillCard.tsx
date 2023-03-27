/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0px;
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
`;

type SkillCardProps = {
  skill: { name: string; img: string };
};

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Card>
      <div>{skill.name}</div>
      <div>
        <img src={skill.img} alt="skills" />
      </div>
    </Card>
  );
};

export default SkillCard;
