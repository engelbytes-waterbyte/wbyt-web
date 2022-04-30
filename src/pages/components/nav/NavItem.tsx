import { useRouter } from "next/router";
import type { NextPage } from "next";
import styled from "styled-components";
import { getEnvironmentData } from "worker_threads";
import { Icon, News } from "tabler-icons-react";

type Props = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

const Alink = styled.a`
  font-size: 2em;
  text-align: center;

  cursor: pointer;
`;

const NavItem: NextPage<Props> = ({ name, href, icon }) => {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Alink onClick={() => router.push("/about")} style={style}>
      {icon}

      {name}
    </Alink>
  );
};

export default NavItem;
