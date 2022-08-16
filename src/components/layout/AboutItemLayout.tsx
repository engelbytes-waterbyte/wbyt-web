import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import NavBar from "../nav/NavBar";

const VerticalTextOnTheSide = styled.div`
  color: ${(props) => props.theme.colors.waterblue};
  font-size: 100px;
  font-weight: 900;
  margin: 0;
  transform: rotate(-90deg);
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

const AboutItemLayout: NextPage<Props> = ({
  children,
  vertical,
  largeText,
  content,
}) => {
  return (
    <section className="flex flex-col  break-words">
      <div>
        {/* <VerticalTextWrapper>
          <VerticalTextOnTheSide>{vertical}</VerticalTextOnTheSide>
        </VerticalTextWrapper> */}
        <div className="m-4">
          <h1 className="text-2xl mx-10px font-bold">{largeText}</h1>
          <p className="text-md">{content}</p>
        </div>
      </div>
      {children}
    </section>
  );
};

export default AboutItemLayout;
