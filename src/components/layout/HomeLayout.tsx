import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "../nav/NavBar";

const HomeLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeTopLayoutWrapper = styled.div`
  display: flex;
`;

type Props = {
  topSection: React.ReactNode;
  children: React.ReactNode;
};

/*
Layout only for the landing page - representative page
*/

const HomeLayout: NextPage<Props> = ({ topSection, children }) => {
  return (
    <HomeLayoutWrapper>
      <HomeTopLayoutWrapper>
        <NavBar />
        {topSection}
      </HomeTopLayoutWrapper>
      {children}
    </HomeLayoutWrapper>
  );
};

export default HomeLayout;
