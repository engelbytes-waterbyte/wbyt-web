import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import styled from "styled-components";
import NavBar from "@components/nav/NavBar";
import TopBar from "@components/layout/TopBar";
import ScrollSuggestor from "@components/ScrollSuggestor";
import Typewriter from "typewriter-effect";

const ImageWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 800px;
	z-index: -1;
`;

const HomeTop: React.FunctionComponent = () => {
	return (
		<>
			<div className=" text-3xl font-bold">
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.changeDelay(100)
							.typeString(
								"<span style='color: #022EC7'>Engelbyte's Waterbyte:</span><br> Der GenZ Programmierverein "
							)
							.start();
					}}
				/>
			</div>
			<ImageWrapper>
				<Image
					alt="bert"
					className="-z-1"
					src="/images/EngelbyteAmCoden.png"
					layout="fill"
					priority={true}
					objectFit="contain"
				/>
			</ImageWrapper>

			<ScrollSuggestor />
		</>
	);
};

export default HomeTop;
