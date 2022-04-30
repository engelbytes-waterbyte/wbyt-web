import { useRouter } from 'next/router'
import type { NextPage } from "next";
import styled from 'styled-components';
import { getEnvironmentData } from 'worker_threads';

type Props = {
    name: string;
    href: string;
};
  
const Alink = styled.a`
  font-size: 2em;
  text-align: center;
  background-color: palevioletred;
  cursor: pointer;
`;


const NavItem: NextPage<Props> = ({ name, href })=> {
  const router = useRouter()
  const style = {
    marginRight: 10,
    backgroundColor: router.asPath === href ? 'red' : 'black',
  }

  const handleClick = (e:any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Alink onClick={() => router.push('/about')} style={style}>
      {name}
    </Alink>
  )
}

export default NavItem