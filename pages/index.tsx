import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Introduction from "@/components/section/Introduction";
import styled from "styled-components";
import { ServerStyleSheet } from 'styled-components';

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
        <Introduction />
      </Main>
    </>
  );
}
