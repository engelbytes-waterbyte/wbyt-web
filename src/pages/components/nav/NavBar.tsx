import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { StyledNav } from "../styles/Nav.styled";
import NavItem from "./NavItem";
import Logo from "../../../../assets/wbyt-norm-tight.svg";
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

const iconStrokeWidth = "10%";

const StyledLogo = styled(Logo)`
  width: 240px;
  height: 180px;
`;

const NavItemGroup = styled.div`
  margin: 0 20px;
`;

const iconStyle = {
  strokeWidth: iconStrokeWidth,
};

const StyledNewsIcon = styled(News)`
  stroke-width: ${iconStrokeWidth};

  /* path{
    stroke-width: 3px;
    
  } */
`;

const NavBar: React.FunctionComponent = () => {
  const iconSize = 20;

  return (
    <StyledNav>
      <StyledLogo />
      <NavItemGroup>
        <NavItem
          name="Blog"
          href={"/"}
          icon={<News style={iconStyle} size={iconSize} />}
        />
        <NavItem
          name="Projects"
          href={"/"}
          icon={<Ambulance style={iconStyle} size={iconSize} />}
        />
        <NavItem name="Team" href={"/"} icon={<Alien style={iconStyle} size={iconSize} />} />
        <NavItem name="Events" href={"/"} icon={<Ticket style={iconStyle} size={iconSize} />} />
        <NavItem
          name="Stickers"
          href={"/"}
          icon={<Sticker style={iconStyle} size={iconSize} />}
        />
        <NavItem name="Assets" href={"/"} icon={<Package style={iconStyle} size={iconSize} />} />
        <NavItem
          name="Store"
          href={"/"}
          icon={<BuildingStore style={iconStyle} size={iconSize} />}
        />
      </NavItemGroup>
    </StyledNav>
  );
};

export default NavBar;
