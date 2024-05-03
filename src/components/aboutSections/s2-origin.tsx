import AboutItemLayout from "@components/layout/AboutItemLayout";
import styled from "styled-components";
import Marquee from "react-double-marquee";
import WbytMarquee from "@assets/illustrations/wbyt-marquee.svg";
import Austria from "@assets/illustrations/austria.svg";

// const Marquee = styled.div`
//   position: relative;
//   width: 100vw;
//   max-width: 100%;
//   height: 200px;
//   overflow-x: hidden;
// `;

const DescriptionText = styled.div`
	height: 200px;
	width: 300px;
	font-size: 10px;
	text-align: center;
`;
const DescriptionContainer = styled.div`
	padding: 10px;
	/* background-color: blue; */
	left: 55%;
	position: relative;
	width: fit-content;
	transform: translate(-50%);
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Spacer = styled.div`
	height: 20px;
`;

const CircleContainer = styled.div`
	width: 100px;
	height: 100px;
	background-color: white;
	border-radius: 50%;
	overflow: hidden;
	top: 95px;
	position: relative;
	left: 9%;
	transform: translate(-50%);

	white-space: nowrap;
	svg {
		display: unset;
	}
`;

const Track = styled.div`
	position: absolute;
	white-space: nowrap;
	will-change: transform;
	animation: marquee 3s linear infinite;
	@keyframes marquee {
		from {
			transform: translateX(0);
		}

		to {
			transform: translateX(-50%);
		}
	}
`;

const Content = styled.div``;

const StyledWbytMarquee = styled(WbytMarquee)`
	height: 200px;
	margin-top: -70px;
	/* width: 200px; */
`;

const S2Origin = () => {
	return (
		<AboutItemLayout
			vertical="Ursprungsort"
			largeText="Unsere Schule"
			content="2018 begannen wir gemeinsam die Schulbank zu drücken. 2021 entschieden wir uns dazu unseren Verein zu starten. Neben Projekten wurden Podcasts und Filme produziert um die gemeinsame Zeit festzuhalten."
		>
			<div
				className="flex justify-center relative overflow-hidden "
				style={{ height: "500px" }}
			>
				<div className=" min-w-[900px] flex justify-center relative overflow-clip">
					<Austria className="absolute" />
					<CircleContainer>
						<Marquee delay={0} childMargin={0}>
							<StyledWbytMarquee />
						</Marquee>
					</CircleContainer>
				</div>
			</div>

			<DescriptionContainer>
				<h2 className="font-bold text-center">Grieskirchen</h2>
				<DescriptionText>
					An jenem Ort befindet sich die Lehranstalt für Informatik, welche uns
					zu Mitgliedern gemacht hat.
				</DescriptionText>
			</DescriptionContainer>
		</AboutItemLayout>
	);
};

export default S2Origin;
