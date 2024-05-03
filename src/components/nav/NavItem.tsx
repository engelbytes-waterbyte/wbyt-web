import { NextRouter, useRouter } from "next/router";
// import Link from "next/link";
import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import { iconStyle } from "@styles/globals";

type Props = {
	name: string;
	href: string;
	icon: React.ReactNode;
	deactivated: boolean;
};

const Alink = styled.a<{
	router: NextRouter;
	href: string;
	deactivated: boolean;
}>`
	text-align: center;
	font-size: 16px;
	font-weight: 700;
	display: flex;
	align-items: center;

	color: ${(props) => {
		if (props.deactivated) {
			return props.theme.colors.dunkelgrau;
		}
		return props.router.asPath !== props.href
			? props.theme.colors.dunkelschwarz
			: props.theme.colors.waterblue;
	}};
	cursor: pointer;
	* {
		margin: 10px;
	}
`;

const NavItem: NextPage<Props> = ({ name, href, icon, deactivated }) => {
	const router = useRouter();
	const handleClick = (e: any) => {
		e.preventDefault();
		if (deactivated) {
			return;
		}
		router.push(href);
	};
	return (
		<Alink
			router={router}
			href={href}
			onClick={(e) => {
				handleClick(e);
			}}
			className="font-inter"
			deactivated={deactivated}
		>
			{icon}
			{name}
		</Alink>
	);
};

export default NavItem;
