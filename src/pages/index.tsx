import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import styles from "@styles/Home.module.css";
import Footer from "@components/footer/Footer";
import AboutSectionLayout from "@components/layout/AboutSectionLayout";
import HomeLayout from "@components/layout/HomeLayout";
import ScrollSuggestor from "@components/ScrollSuggestor";
import S2Origin from "@components/aboutSections/s2-origin";
import S3Activities from "@components/aboutSections/s3-activities";
import S1Foundation from "@components/aboutSections/s1-foundation";
import S4Strategy from "@components/aboutSections/s4-strategy";
import S5Contact from "@components/aboutSections/s5-contact";
import { Element } from "react-scroll";

const HomeWrapper = styled.div`
  flex-grow: 1;
`;

const AboutSection = styled.section`
  height: fit-content;
`;

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <HomeWrapper>
        <Head>
          <title>waterbyte</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AboutSection>
          {/* <Element name="scrollToS1">
            <S1Foundation />
          </Element> */}
          {/* <S2Origin /> */}
          {/* <S3Activities />
          <S4Strategy />
          <S5Contact /> */}
        </AboutSection>
      </HomeWrapper>
    </HomeLayout>
  );
};

export default Home;
