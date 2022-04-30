import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { StyledNav } from "../styles/Nav.styled";
import NavItem from "./NavItem";
import Logo from "../../../../assets/wbyt-norm-1024.svg";
import styled from "styled-components";
import { News } from 'tabler-icons-react';


const StyledLogo = styled(Logo)`
  width: 300px;
  height: 300px;
  
`;

const NavBar: NextPage = () => {
  return (
    <StyledNav>
      <StyledLogo />
      <NavItem name="Blog" href={"/"} icon={<News size={48}/>}/>
      <NavItem name="Projects" href={"/"} icon={<News size={48}/>}/>
      <NavItem name="Team" href={"/"} icon={<News size={48}/>}/>
      <NavItem name="Events" href={"/"} icon={<News size={48}/>}/>
      <NavItem name="Stickers" href={"/"} icon={<News size={48}/>}/>
      <NavItem name="Assets" href={"/"} icon={<News size={48}/>}/>
    </StyledNav>
  );
};

export default NavBar;
