import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import styles from "@styles/Home.module.css";
import Footer from "@components/footer/Footer";
import AboutItemLayout from "@components/layout/AboutItemLayout";
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
  return (
    <div className="flex flex-col items-center md:flex-wrap md:flex-row ">
      <Project
        title="Jamboree"
        description="Jamboree is a platform where event-organizers and consumers find together."
      />
      <Project
        title="Heed"
        description="Heed is an application for forecasting breakdowns of motorcycle components."
      />
      <Project
        title="Charge"
        description="Charge is a webapplication for calculating prices of rental properties."
      />
      <Project
        title="Deets"
        description="Deets is a system for getting further product information through QR codes."
      />
    </div>
  );
};

const Project = (props: any) => {
  return (
    <div className="m-8 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {props.description}
      </p>
    </div>
  );
};

export default Home;
