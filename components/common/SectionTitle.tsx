import styled from "styled-components";

type TitleProps = {
  name: string;
};

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const SectionTitle = ({ name }: TitleProps) => {
  return <Title>{name}</Title>;
};

export default SectionTitle;
