import AboutItemLayout from "@components/layout/AboutItemLayout";
import Summit from "@assets/illustrations/summit.svg";
import styled from "styled-components";

const DescriptionText = styled.div`
	height: 200px;
	width: 300px;
	font-size: 10px;
	text-align: center;
	margin: 10px;
`;
const DescriptionContainer = styled.div`
	padding: 10px;
	left: 50%;
	position: relative;
	width: fit-content;
	transform: translate(-50%);
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Heading = styled.h2`
	margin-bottom: 15px;
	text-align: center;
`;

const CenterWrapper = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: center;
	position: relative;
`;

const StyledSummit = styled(Summit)`
	left: 50%;
	transform: translateX(-50%);
	position: relative;
`;

const S3Activities = () => {
	return (
		<AboutItemLayout
			vertical="Umsetzung"
			largeText="Mit agilen Methoden ans Ziel"
			content="Intervallweise setzen wir uns zusammen um am nächsten Projekt zu feilen."
		>
			<StyledSummit />
			<DescriptionContainer>
				<DescriptionText>
					Intervalweise werden Meetings für die nächsten Vorhaben durchgeführt.
				</DescriptionText>
			</DescriptionContainer>
		</AboutItemLayout>
	);
};

export default S3Activities;
