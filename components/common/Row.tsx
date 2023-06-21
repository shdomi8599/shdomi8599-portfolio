import styled from "styled-components";

type Props = {
  children: JSX.Element[];
};

const Row = ({ children }: Props) => {
  return <RowBox>{children}</RowBox>;
};

export default Row;

const RowBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding-top: 60px;
`;
