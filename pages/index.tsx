import Intro from "@/components/section/Intro";
import Header from "@/components/section/Header";
import Profile from "@/components/section/Profile";
import styled from "styled-components";
import Skills from "@/components/section/Skill";
import Projects from "@/components/section/Projects";
import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";
import Head from "next/head";
import { navProject, projects } from "@/data/projects";
import { NavProject } from "@/types/project";

type Props = {
  navProjectData: NavProject[];
};

export default function Home({ navProjectData }: Props) {
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
        <Projects navProjectData={navProjectData} />
        <Contact />
        <Footer />
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const navProjectData = navProject;
  return {
    props: { navProjectData },
  };
}

const Main = styled.main`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
