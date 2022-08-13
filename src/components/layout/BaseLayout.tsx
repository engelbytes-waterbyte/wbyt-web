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

const BaseLayoutWrapper = styled.div`
  display: flex;
`;

const ChildrenWrapper = styled.div`
  min-height: 100vh;
  flex: 1;
`;

type Props = {
  children: React.ReactNode;
  route: Route;
};

const BaseLayout: NextPage<Props> = ({ children, route }) => {
  const router = useRouter();

  return (
    <div>
      <BaseLayoutWrapper>
        <NavBar homeNavBar={router.pathname == "/"} />

        <ChildrenWrapper>
          <TopBar
            homeStyle={router.pathname=="/"}
            heading={route?.heading??""}
            subheading={route?.subheading??""}
          />
          {children}
        </ChildrenWrapper>
      </BaseLayoutWrapper>
      <Footer />
    </div>
  );
};

export default BaseLayout;
