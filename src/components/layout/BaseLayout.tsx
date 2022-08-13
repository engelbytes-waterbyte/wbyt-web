import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import NavBar from "../nav/NavBar";
import Footer from "@components/footer/Footer";

const BaseLayoutWrapper = styled.div`
  display: flex;
`;

type Props = {
  children: React.ReactNode;
};

const BaseLayout: NextPage<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <div>
      <BaseLayoutWrapper>
        <NavBar homeNavBar={router.pathname == "/"} />
        {children}
      </BaseLayoutWrapper>
      <Footer />
    </div>
  );
};

export default BaseLayout;
