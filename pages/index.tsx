import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <Intro />
      </Main>
    </>
  );
}
