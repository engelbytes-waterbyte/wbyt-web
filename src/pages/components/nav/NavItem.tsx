import { useRouter } from "next/router";
import type { NextPage } from "next";
import styled, { ThemeProvider } from "styled-components";
import { getEnvironmentData } from "worker_threads";
import { Icon, News } from "tabler-icons-react";

type Props = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const NavItem: NextPage<Props> = ({ name, href, icon }) => {
  const Alink = styled.a`
    /* font-size: 1.2em; */
    text-align: center;
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    color: ${(props) => router.asPath === href ? props.theme.colors.dunkelschwarz: props.theme.colors.waterblue};
    cursor: pointer;
    *{
      margin: 10px;
    }
  `;

  const router = useRouter();
  // const style = {
  //   marginRight: 10,
  //   // color: router.asPath === href ?  "red": "black",
  //   // color: ${props => `${props.theme.color.dunkelschwarz}`}
  // };

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Alink onClick={() => router.push("/about")}>
      {icon}

      {name}
    </Alink>
  );
};

export default NavItem;
