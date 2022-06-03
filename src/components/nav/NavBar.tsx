import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { StyledNav } from "@styles/Nav.styled";
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

const iconStyle = {
  strokeWidth: iconStrokeWidth,
};

interface NavBarProps {
  isTight?: boolean;
}

const NavBar: React.FunctionComponent<NavBarProps> = ({ isTight }) => {
  const router = useRouter();
  const iconSize = 20;
  const gehHam = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <StyledNav>
      <StyledLogoWrapper onClick={gehHam}>
        <StyledLogo />
      </StyledLogoWrapper>

      <NavItemGroup>
        <NavItem
          name="Blog"
          href={"/blog"}
          icon={<News style={iconStyle} size={iconSize} />}
        />
        <NavItem
          name="Projects"
          href={"/projects"}
          icon={<Ambulance style={iconStyle} size={iconSize} />}
        />
        <NavItem
          name="Team"
          href={"/team"}
          icon={<Alien style={iconStyle} size={iconSize} />}
        />
        <NavItem
          name="Events"
          href={"/events"}
          icon={<Ticket style={iconStyle} size={iconSize} />}
        />
        <NavItem
          name="Stickers"
          href={"/stickers"}
          icon={<Sticker style={iconStyle} size={iconSize} />}
        />
        <NavItem
          name="Assets"
          href={"/assets"}
          icon={<Package style={iconStyle} size={iconSize} />}
        />
        <NavItem
          name="Store"
          href={"/store"}
          icon={<BuildingStore style={iconStyle} size={iconSize} />}
        />
      </NavItemGroup>
    </StyledNav>
  );
};

export default NavBar;
