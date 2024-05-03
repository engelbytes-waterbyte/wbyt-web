import AboutItemLayout from "@components/layout/AboutItemLayout";
import Rive from "rive-react";
import styled from "styled-components";
import RefArr1 from "@assets/abstracts/refarr1.svg";
import { Element } from "react-scroll";

const DescriptionText = styled.div`
	height: 200px;
	width: 300px;
	font-size: 10px;
	text-align: center;
`;
const DescriptionContainer = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const S1Foundation = () => {
	return (
		<Element name="scrollToS1">
			<AboutItemLayout
				vertical="Was sind wir?"
				largeText="Ein Programmierverein der etwas anderen Art."
				content="Wir sind eine Gruppe von Schülern welche aufgrund gemeinsamer Projekte beschlossen hat, ein Warenzeichen ins Leben zu rufen."
			>
				<div
					className="h-32 w-32 left-1/2 relative -translate-x-1/2 mb-4  before:absolute
	before:w-full
	before:h-full
	before:-z-10
	before:bg-gradient-to-b
	before:from-white
	before:to-blue-300
	before:left-0
	before:top-0
	before:rounded-full
	before:blur-[30px] from-white/60 to-blue-300/60"
				>
					<Rive src="/hammeranimation.riv" />
				</div>
				<DescriptionContainer>
					<RefArr1 />
					<h2 className="font-bold mb-2 mt-3">
						September 2021 - Ein Ende und ein Anfang
					</h2>
					<DescriptionText>
						Wir hatten einen Lehrer in unserer HTL Laufbahn der uns sehr prägte.
						Er unterschied sich maßgeblich von anderen Lehrkräften, da er aus
						einem älterem Semester stammt und uns somit eine staubige Art und
						Weise der Projektentwicklung näher brachte. Schließlich ging er in
						die verdiente Pension, worauf wir seinen Namen modernisierten und
						ihn als unseren Vereinsnamen geltend machten.{" "}
					</DescriptionText>
				</DescriptionContainer>
			</AboutItemLayout>
		</Element>
	);
};

export default S1Foundation;
