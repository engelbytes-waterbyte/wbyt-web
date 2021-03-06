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
  height: 400px;
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
  height: fit-content;
`;

const ContentHeader = styled.h1`
  font-size: 2em;
  margin: 10px 0px;
  background-color: green;
  width: 10px;
`;

const VerticalTextWrapper = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentParagraph = styled.p`
  margin-left: 20px;
  font-size: 1.2em;  
`

type Props = {
  children: React.ReactNode;
  vertical: string;
  largeText: string;
  content: string;
};

const AboutSectionLayout: NextPage<Props> = ({
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
          <ContentParagraph>{content}</ContentParagraph>
        </ContentContainer>
      </AboutSectionTextWrapper>
      {children}
    </AboutSectionLayoutWrapper>
  );
};

export default AboutSectionLayout;
