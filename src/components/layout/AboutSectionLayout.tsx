import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "../nav/NavBar";

const AboutSectionLayoutWrapper = styled.div`
  display: flex;
`;

type Props = {
  children: React.ReactNode;
  vertical: string;
  largeText: string;
  content: string;
};

const BaseLayout: NextPage<Props> = ({
  children,
  vertical,
  largeText,
  content,
}) => {
  return (
    <AboutSectionLayoutWrapper>
      {vertical}
      {largeText}
      {content}
      {children}
    </AboutSectionLayoutWrapper>
  );
};

export default BaseLayout;
