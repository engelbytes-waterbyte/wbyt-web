import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../nav/NavBar";

type Props = {
  children: React.ReactNode;
};

const BaseLayout: NextPage<Props> = ({ children }) => {
  return (
    <nav>
      <NavBar />
      {children}
    </nav>
  );
};

export default BaseLayout;
