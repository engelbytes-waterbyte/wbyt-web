import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import NavBar from "../nav/NavBar";
import Footer from "@components/footer/Footer";
import TopBar from "./TopBar";
import HomeTop from "./HomeTop";

const ChildrenWrapper = styled.div`
    min-height: 100vh;
    flex: 1;
`;

type Props = {
    children: React.ReactNode;
};

const HomeLayout: NextPage<Props> = ({ children }) => {
    const router = useRouter();

    return (
        <div>
            <div className="flex">
                <NavBar />
                <ChildrenWrapper>
                    <TopBar
                        homeStyle={true}
                        heading={"sdjfklaks"}
                        subheading={""}
                    />
                    <HomeTop />
                </ChildrenWrapper>
            </div>
            {children}
            <Footer />
        </div>
    );
};

export default HomeLayout;
