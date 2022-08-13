import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "@components/nav/NavBar";
import TopBar from "@components/layout/TopBar";
import ScrollSuggestor from "@components/ScrollSuggestor";

type Props = {
  children: React.ReactNode;
};

const ImageWrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  position: absolute;
  height: 100%;
  width: 800px;
  right: 0;
`;

const HomeLayout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <ImageWrapper>
        <Image
          className="-z-1"
          src="/images/EngelbyteAmCoden.png"
          layout="fill"
          priority={true}
          objectFit="contain"
        />
      </ImageWrapper>

      {children}
      <ScrollSuggestor />
    </>
  );
};

export default HomeLayout;
