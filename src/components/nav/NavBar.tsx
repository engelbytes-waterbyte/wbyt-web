import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";
import NavItem from "./NavItem";
import Logo from "@assets/logos/wbyt-norm-tight.svg";
import styled from "styled-components";
import {
	News,
	Ambulance,
	Alien,
	Ticket,
	Sticker,
	Package,
	BuildingStore,
} from "tabler-icons-react";
import { useRouter } from "next/router";

const iconStrokeWidth = "10%";
const iconSize = 20;
const iconStyle = {
	strokeWidth: iconStrokeWidth,
};

const NavWrapper = styled.nav`
	background-color: ${({ theme }) => theme.colors.transparent};
	display: flex;
	flex-direction: column;
	margin-left: 40px;
	min-height: 100vh;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavItems = [
	<NavItem
		key="projects"
		name="Projekte"
		deactivated={false}
		href={"/projects"}
		icon={<Ambulance style={iconStyle} size={iconSize} />}
	/>,
	<NavItem
		key="team"
		name="Team"
		deactivated={false}
		href={"/team"}
		icon={<Alien style={iconStyle} size={iconSize} />}
	/>,
	<NavItem
		key="blog"
		name="Blog"
		deactivated={true}
		href={"/blog"}
		icon={<News style={iconStyle} size={iconSize} />}
	/>,
	<NavItem
		key="events"
		name="Events"
		deactivated={true}
		href={"/events"}
		icon={<Ticket style={iconStyle} size={iconSize} />}
	/>,
	<NavItem
		key="stickers"
		name="Stickers"
		deactivated={true}
		href={"/stickers"}
		icon={<Sticker style={iconStyle} size={iconSize} />}
	/>,
	<NavItem
		key="assets"
		name="Assets"
		deactivated={true}
		href={"/assets"}
		icon={<Package style={iconStyle} size={iconSize} />}
	/>,
	<NavItem
		key="store"
		name="Store"
		deactivated={true}
		href={"/store"}
		icon={<BuildingStore style={iconStyle} size={iconSize} />}
	/>,
];

const StyledLogo = styled(Logo)`
	width: 200px;
	height: 180px;
	cursor: pointer;
`;

const StyledLogoWrapper = styled.div`
	z-index: 40;
`;

const NavItemGroup = styled.div`
	margin: 0 20px;
	z-index: 20;
`;

interface NavBarProps {
	isTight?: boolean;
}

const NavBar: React.FunctionComponent<NavBarProps> = ({ isTight }) => {
	const router = useRouter();
	const gehHam = (e: any) => {
		e.preventDefault();
		router.push("/");
	};

	return (
		<NavWrapper>
			<StyledLogoWrapper onClick={gehHam}>
				<StyledLogo />
			</StyledLogoWrapper>
			<NavItemGroup>
				{NavItems.map((item) => item as React.ReactElement)}
			</NavItemGroup>
		</NavWrapper>
	);
};

export default NavBar;
