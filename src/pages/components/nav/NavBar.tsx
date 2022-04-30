import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { StyledNav } from "../styles/Nav.styled";
import NavItem from "./NavItem";
import Logo from "../../../../assets/wbyt-norm-1024.svg";
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

const StyledLogo = styled(Logo)`
  width: 300px;
  height: 300px;
`;

const StyledAmbulance = styled(Ambulance)`
  size:40px;
`

const NavBar: NextPage = () => {
  const iconStyle = {
    color: "blue",
    size: 50,
  };

  return (
    <StyledNav>
      <StyledLogo />
      <NavItem name="Blog" href={"/"} icon={<News style={iconStyle} />} />
      <NavItem
        name="Projects"
        href={"/"}
        icon={<StyledAmbulance/>}
      />
      <NavItem name="Team" href={"/"} icon={<Alien style={iconStyle} />} />
      <NavItem name="Events" href={"/"} icon={<Ticket style={iconStyle} />} />
      <NavItem
        name="Stickers"
        href={"/"}
        icon={<Sticker style={iconStyle} />}
      />
      <NavItem name="Assets" href={"/"} icon={<Package style={iconStyle} />} />
      <NavItem
        name="Store"
        href={"/"}
        icon={<BuildingStore style={iconStyle} />}
      />
    </StyledNav>
  );
};

export default NavBar;
