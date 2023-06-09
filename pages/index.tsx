import Head from "next/head";
import styled from "styled-components";

import Intro from "@/components/section/Intro";
import Header from "@/components/section/Header";
import Profile from "@/components/section/Profile";
import Skills from "@/components/section/Skill";
import Projects from "@/components/section/Projects";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>프론트엔드 신동민 - 포트폴리오</title>
        </Head>
      </div>
      <Header />
      <Main>
        <Intro />
        <Profile />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
