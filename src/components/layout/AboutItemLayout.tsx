import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import styled from "styled-components";
import NavBar from "../nav/NavBar";

// const VerticalTextOnTheSide = styled.div`
//   color: ${(props) => props.theme.colors.waterblue};
//   font-size: 100px;
//   font-weight: 900;
//   margin: 0;
//   transform: rotate(-90deg);
// `;

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
    <section className="flex flex-col items-center break-words ">
      <div className="m-4 p-8 format w-full  lg:max-w-3xl ">
        <h4 className="text-blue-400">{vertical}</h4>
        <h1 className="font-bold m-0">{largeText}</h1>
        <p className="text-md mt-4">{content}</p>
      </div>
      <div className=" w-full">{children}</div>
    </section>
  );
};

export default AboutItemLayout;
