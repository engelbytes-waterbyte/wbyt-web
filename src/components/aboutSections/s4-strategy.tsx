import AboutItemLayout from "@components/layout/AboutItemLayout";
import Sofa from "@assets/illustrations/sofa.svg";
import styled from "styled-components";

const DescriptionText = styled.div`
  height: 200px;
  width: 300px;
  font-size: 10px;
  text-align: center;
  margin: 10px;
`;
const DescriptionContainer = styled.div`
  padding: 10px;
  left: 50%;
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

const StyledSofa = styled(Sofa)`
  left: 50%;
  transform: translateX(-50%);
  position: relative;
`;

const S4Strategy = () => {
  return (
    <AboutItemLayout
      vertical="Strategie?"
      largeText="Entwicklungszentrale der hellsten Köpfe des Mittelmeerraums."
      content="Aus jahrelanger Erfahrung in der selben Branche kristallisierten sich aus einer Gemenge von Schülern die dem Waterbyte Ideal einst am ehesten entsprachen eine Gruppierung von unglaublicher Einzigartigkeit."
    >
      <StyledSofa />

      <DescriptionContainer>
        <DescriptionText>
          “Die hellsten Köpfe an einem Tisch ... hier kann es sich nur um das
          Engelbyte startup handeln” - So lauten Aussagen von Augenzeugen bei
          den allgemein bekannten Waterbyte Meetings an dem sich die hellsten
          Köpfe des Mittelmeerraums beteiligen.
        </DescriptionText>
      </DescriptionContainer>
    </AboutItemLayout>
  );
};

export default S4Strategy;
