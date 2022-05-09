import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import styles from "@styles/Home.module.css";
import Footer from "@components/footer/Footer";
import AboutSectionLayout from "@components/layout/AboutSectionLayout";
import HomeLayout from "@components/layout/BaseLayout";
import ScrollSuggestor from "@components/ScrollSuggestor";

const HomeWrapper = styled.div`
  flex-grow: 1;
`;

const StyledImage = styled(Image)`
  z-index: -1;
`;

const ImageWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 800px;
  right: 0;
`;

const HomeSection = styled.section`
  height: 100vh;
`;

const AboutSection = styled.section`
  height: 100vh;
`;

const Home: NextPage = () => {
  return <div>adsf</div>;
};

export default Home;
