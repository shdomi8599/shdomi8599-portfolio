import Navbar from "@/components/Navbar";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Home() {
  return (
    <Main>
        <Navbar />
    </Main>
  );
}
