import { NextRouter, useRouter } from "next/router";
import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import { iconStyle } from "@styles/Globals";

type Props = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const Alink = styled.a<{ router: NextRouter; href: string }>`
  text-align: center;
  font-family: "Inter";
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.router.asPath !== props.href
      ? props.theme.colors.dunkelschwarz
      : props.theme.colors.waterblue};
  cursor: pointer;
  * {
    margin: 10px;
  }
`;

const NavItem: NextPage<Props> = ({ name, href, icon }) => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };
  

  return (
    <Alink router={router} href={href} onClick={handleClick} >
      {icon}
      {name}
    </Alink>
  );
};

export default NavItem;
