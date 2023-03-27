import Intro from "@/components/section/Intro";
import Navbar from "@/components/nav/Navbar";
import Profile from "@/components/section/Profile";
import styled from "styled-components";
import Skills from "@/components/section/Skills";
import Projects from "@/components/section/Projects";

const Main = styled.main`
  display: flex;
  justify-content: start;
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
        <Projects />
      </Main>
    </>
  );
}
