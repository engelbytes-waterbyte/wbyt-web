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

const StyledLogo = styled(Logo)`
  width: 240px;
  height: 180px;
`;

const NavItemGroup = styled.div`
  margin: 0 20px;
`

const NavBar: NextPage = () => {
  return (
    <StyledNav>
      <StyledLogo />
      <NavItemGroup>
        <NavItem name="Blog" href={"/"} icon={<News size={30} />} />
        <NavItem name="Projects" href={"/"} icon={<Ambulance size={30} />} />
        <NavItem name="Team" href={"/"} icon={<Alien size={30} />} />
        <NavItem name="Events" href={"/"} icon={<Ticket size={30} />} />
        <NavItem name="Stickers" href={"/"} icon={<Sticker size={30} />} />
        <NavItem name="Assets" href={"/"} icon={<Package size={30} />} />
        <NavItem name="Store" href={"/"} icon={<BuildingStore size={30} />} />
      </NavItemGroup>
    </StyledNav>
  );
};

export default NavBar;
