import styled from "styled-components";

type RowProps = {
  children: JSX.Element[];
};

const Row = ({ children }: RowProps) => {
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
