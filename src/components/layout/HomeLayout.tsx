import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "@components/nav/NavBar";
import TopBar from "@components/layout/TopBar";
import ScrollSuggestor from "@components/ScrollSuggestor";

const HomeLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const HomeTopLayoutWrapper = styled.div`
  display: flex;
`;

type Props = {
  children: React.ReactNode;
};

const HomeSection = styled.section`
  height: 100vh;
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

/*
Layout only for the landing page - representative page
*/

const HomeLayout: NextPage<Props> = ({ children }) => {
  return (
    <HomeLayoutWrapper>
      <HomeTopLayoutWrapper>
        {/* contains all content for landing */}
        {/* <TopBar heading={""} subheading={""} /> */}
        <NavBar />{" "}
        {/*render different based on view - when too small only show nothing only react on responsiveness state change*/}
        <TopBar heading={"Welcome to se"} subheading={" asdfasdf asdf asd a"} />
        <HomeSection>
          <ImageWrapper>
            <StyledImage
              src="/images/EngelbyteAmCoden.png"
              layout="fill"
              priority={true}
              objectFit="contain"
            />
          </ImageWrapper>
          <ScrollSuggestor />
        </HomeSection>
      </HomeTopLayoutWrapper>
      {children}
    </HomeLayoutWrapper>
  );
};

export default HomeLayout;
