import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import Footer from "./components/footer/Footer";
import BaseLayout from "./components/layout/BaseLayout";
import Suggestor from "./components/suggestor/Suggestor";

const HomeWrapper = styled.div`
  /* min-height: 100vh; */
  flex-grow: 1;
`;

const StyledImage = styled(Image)`
  /* z-index: -1; */
  right: -100px;
  position: relative;
`;

const ImageWrapper = styled.div`
  background-color: green;
  height: 100%;
  width: 1200px;
  margin-left: auto;
  margin-right: 0;
  
  /* position: relative; */
`;

const HomeSection = styled.section`
  height: 100vh;

  /* flex: */
`;

const Home: NextPage = () => {
  const [ratio, setRatio] = useState(16 / 9);
  return (
    <HomeWrapper>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HomeSection>
        <ImageWrapper>
          <StyledImage
            src="/EngelbyteAmCoden.png"
            className={"image"}
            layout="fill"
            objectFit="contain"
          />
        </ImageWrapper>
        <Suggestor />
      </HomeSection>
    </HomeWrapper>
  );
};

// export const getStaticProps = async (context) => {
//   const res = await()
// }

export default Home;
