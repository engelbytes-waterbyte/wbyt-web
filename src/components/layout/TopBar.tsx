import WbytBtn from "@components/buttons/wbyt-btn";
import { NextPage } from "next";
import styled from "styled-components";

const TopBarWrapper = styled.div<{ homeStyle: boolean }>`
  /* background-color: red; */
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: ${(props) => (props.homeStyle ? "50px" : "0px")};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeadingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonsWrapper = styled.div`
  display: flex;
`;
const TopBarHeading1 = styled.h1`
  font-size: 35px;
  margin: 0;
`;

const TopBarHeading2 = styled.h2`
  font-size: 20px;
  margin: 0;
`;

interface Props {
  heading?: string;
  subheading?: string;
  homeStyle?: boolean;
}

const TopBar: NextPage<Props> = ({ heading, subheading, homeStyle }) => {
  return (
    <TopBarWrapper homeStyle={homeStyle ?? false}>
      <HeadingsWrapper>
        {!homeStyle ? (
          <>
            <TopBarHeading1>{heading}</TopBarHeading1>
            <TopBarHeading2>{subheading}</TopBarHeading2>
          </>
        ) : (
          <div></div>
        )}
      </HeadingsWrapper>
      <ButtonsWrapper>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <WbytBtn text="Login" />
        <WbytBtn text="Mitglied werden" />
      </ButtonsWrapper>
    </TopBarWrapper>
  );
};

export default TopBar;
