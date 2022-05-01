import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "../nav/NavBar";


const BaseLayoutWrapper = styled.div`
  display: flex;
`

type Props = {
  children: React.ReactNode;
};

const BaseLayout: NextPage<Props> = ({ children }) => {
  return (
    <BaseLayoutWrapper>
      <NavBar />
      {children}
    </BaseLayoutWrapper>
  );
};

export default BaseLayout;
