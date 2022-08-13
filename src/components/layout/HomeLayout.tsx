import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import NavBar from "../nav/NavBar";
import Footer from "@components/footer/Footer";
import TopBar from "./TopBar";
import { Route } from "@pages/_app";
import { route } from "next/dist/server/router";
import HomeTop from "./HomeTop";

const BaseLayoutWrapper = styled.div`
  display: flex;
  

`;

const ChildrenWrapper = styled.div`
  min-height: 100vh;
  flex: 1;
`;

type Props = {
  children: React.ReactNode;
};

const HomeLayout: NextPage<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <BaseLayoutWrapper>
        <NavBar homeNavBar={true} />
        <ChildrenWrapper>
          <TopBar homeStyle={true} heading={"sdjfklaks"} subheading={""} />
          <HomeTop />
        </ChildrenWrapper>
      </BaseLayoutWrapper>
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
