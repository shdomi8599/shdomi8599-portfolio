import Intro from "@/components/section/Intro";
import Navbar from "@/components/nav/Navbar";
import Profile from "@/components/section/Profile";
import styled from "styled-components";
import Skills from "@/components/section/Skills";

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
        <Profile />
        <Skills />
      </Main>
    </>
  );
}
