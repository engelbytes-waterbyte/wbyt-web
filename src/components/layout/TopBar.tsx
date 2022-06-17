import WbytBtn from "@components/buttons/wbyt-btn";
import { NextPage } from "next";
import styled from "styled-components";

const TopBarWrapper = styled.div`
  background-color: red;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeadingsWrapper = styled.div`
display: flex;
flex-direction: column;
`
const ButtonsWrapper = styled.div`
display: flex;
`
const TopBarHeading1 = styled.h1`
font-size: 35px;
margin: 0;

`

const TopBarHeading2 = styled.h2`
  font-size: 20px;
  margin: 0;
`

interface Props {
  heading: string;
  subheading: string;
}

const TopBar: NextPage<Props> = ({ heading, subheading }) => {
  return (
    <TopBarWrapper>
      <HeadingsWrapper>
        <TopBarHeading1>{heading}</TopBarHeading1>
        <TopBarHeading2>{subheading}</TopBarHeading2>
      </HeadingsWrapper>
      <ButtonsWrapper>
        <WbytBtn text="Login" />
        <WbytBtn text="Mitglied werden" />
      </ButtonsWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;
