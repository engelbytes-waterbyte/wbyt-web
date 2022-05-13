import AboutSectionLayout from "@components/layout/AboutSectionLayout";
import styled from "styled-components";
import Marquee from "react-double-marquee";
import WbytMarquee from "@assets/illustrations/wbyt-marquee.svg";
import Austria from "@assets/illustrations/austria.svg";

// const Marquee = styled.div`
//   position: relative;
//   width: 100vw;
//   max-width: 100%;
//   height: 200px;
//   overflow-x: hidden;
// `;

const DescriptionText = styled.div`
  height: 200px;
  width: 300px;
  font-size: 10px;
  text-align: center;
`;
const DescriptionContainer = styled.div`
  padding: 10px;
  /* background-color: blue; */
  left: 55%;
  position: relative;
  width: fit-content;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Heading = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`;

const Spacer = styled.div`
  height: 100px;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  /* background-color: red; */
  position: relative;
`;

const CircleContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 22%;
  transform: translate(-50%);
  left: 54%;
`;

const Track = styled.div`
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 3s linear infinite;
  @keyframes marquee {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }
`;

const Content = styled.div``;

const StyledWbytMarquee = styled(WbytMarquee)`
  height: 200px;
  /* width: 200px; */
`;

const S2Origin = () => {
  return (
    <AboutSectionLayout
      vertical="Woher?"
      largeText="Wo keimten die ersten Sprossen des Jungspundverbands?"
      content="Die Lehranstalt Grieskirchen vereinte einst einen Haufen diverser von diversen Knaben von welchen sich wiederum eine handvoll mit Waterbyte identifizierten. "
    >
      {/* <Marquee>
        <Track>
          <Content>
            &nbsp;Infinite Marquee with long sentence Infinite Marquee with long
            sentence Infinite Marquee with long sentence Infinite Marquee with
            long sentence Infinite Marquee with long sentence
          </Content>
        </Track>
      </Marquee> */}

      <CenterWrapper>
        <CircleContainer>
          <Marquee>
            <StyledWbytMarquee />
          </Marquee>
        </CircleContainer>
        <Austria />
      </CenterWrapper>
      <DescriptionContainer>
        <Heading>Quelle der Waterbytler</Heading>
        <DescriptionText>
          Hier sehen Sie Österreich: Land der Berge, Land am Ströme und ...
          Ursprungsland von Waterbyte! Grieskirchen erwies sich als jener Ort
          mit der einst höchsten Konzentration von passenden Mitgliedern.
        </DescriptionText>
      </DescriptionContainer>
      <Spacer />
    </AboutSectionLayout>
  );
};

export default S2Origin;
