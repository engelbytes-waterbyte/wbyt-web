import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "../nav/NavBar";

const AboutSectionLayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin: 30px;
`;

const AboutSectionTextWrapper = styled.div`
  display: flex;
  height: 300px;
`;

const VerticalTextOnTheSide = styled.div`
  /* background-color: blue; */
  color: ${(props) => props.theme.colors.waterblue};
  font-size: 100px;
  font-weight: 900;
  margin: 0;
  transform: rotate(-90deg);
`;

const ContentContainer = styled.div`
  /* background-color: blue; */
  margin: 20px 40px;
`;

const ContentHeader = styled.h1`
  font-size: 30px;
`;

const VerticalTextWrapper = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
      <AboutSectionTextWrapper>
        <VerticalTextWrapper>
          <VerticalTextOnTheSide>{vertical}</VerticalTextOnTheSide>
        </VerticalTextWrapper>
        <ContentContainer>
          <ContentHeader>{largeText}</ContentHeader>
          <p>{content}</p>
        </ContentContainer>
      </AboutSectionTextWrapper>
      {children}
    </AboutSectionLayoutWrapper>
  );
};

export default BaseLayout;
