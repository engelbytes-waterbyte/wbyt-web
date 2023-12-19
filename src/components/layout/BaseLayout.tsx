import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import NavBar from "../nav/NavBar";
import Footer from "@components/footer/Footer";
import TopBar from "./TopBar";
import { Route } from "@pages/_app";

const BaseLayoutWrapper = styled.div`
	display: flex;
`;

const ChildrenWrapper = styled.div`
	min-height: 100vh;
	flex: 1;
`;

type Props = {
	children: React.ReactNode;
	children2: React.ReactNode;
	route?: Route;
};

const BaseLayout: NextPage<Props> = ({ children, children2, route }) => {
	const router = useRouter();

	return (
		<div>
			<BaseLayoutWrapper className="mx-auto max-w-[1200px]">
				<NavBar />
				<ChildrenWrapper>
					<TopBar
						homeStyle={router.pathname == "/"}
						heading={route?.heading ?? ""}
						subheading={route?.subheading ?? ""}
					/>
					{children}
				</ChildrenWrapper>
			</BaseLayoutWrapper>
			{children2}
			<Footer />
		</div>
	);
};

export default BaseLayout;
