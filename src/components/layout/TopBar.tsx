import { NextPage } from "next";
import styled from "styled-components";

const TopBarWrapper = styled.div`
  background-color: red;
  width: 100%;
  height: 100px;
`;

interface Props {
  heading: string;
  subheading: string;
  
}

const TopBar: NextPage<Props> = ({ heading, subheading }) => {
  return (
    <TopBarWrapper>
      <div>
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
      </div>
      <div>Login</div>
      <div>Mitglied werden</div>
    </TopBarWrapper>
  );
};

export default TopBar;
