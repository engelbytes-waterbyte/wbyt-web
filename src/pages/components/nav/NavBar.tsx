import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { StyledNav } from "../styles/Nav.styled";
import NavItem from "./NavItem";
import Logo from "../../../../assets/wbyt-norm-1024.svg";
import styled from "styled-components";

const StyledLogo = styled(Logo)`
  width: 400px;
  height: 400px;
  
`;

const NavBar: NextPage = () => {
  return (
    <StyledNav>
      <StyledLogo />
      <NavItem name="Blog" href={"/"} />
      <NavItem name="Projects" href={"/"} />
      <NavItem name="Team" href={"/"} />
      <NavItem name="Events" href={"/"} />
      <NavItem name="Stickers" href={"/"} />
      <NavItem name="Assets" href={"/"} />
    </StyledNav>
  );
};

export default NavBar;
