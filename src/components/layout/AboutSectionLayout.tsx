import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "../nav/NavBar";

const AboutSectionLayoutWrapper = styled.div`
  display: flex;
`;

const VerticalTextOnTheSide = styled.div`
  /* background-color: blue; */
  color: ${(props) => props.theme.colors.waterblue};
  font-weight: 700;
  transform: rotate(270deg);
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
      <VerticalTextOnTheSide>{vertical}</VerticalTextOnTheSide>
      {largeText}
      {content}
      {children}
    </AboutSectionLayoutWrapper>
  );
};

export default BaseLayout;
