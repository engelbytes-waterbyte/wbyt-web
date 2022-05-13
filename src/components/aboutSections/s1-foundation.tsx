import AboutSectionLayout from "@components/layout/AboutSectionLayout";
import Rive from "rive-react";
import styled from "styled-components";
import RefArr1 from "@assets/abstracts/refarr1.svg";

const DescriptionText = styled.div`
  height: 200px;
  width: 300px;
  font-size: 10px;
  text-align: center;
`;
const DescriptionContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h2`
  margin-bottom: 15px;
`;

const S1Foundation = () => {
  return (
    <AboutSectionLayout
      vertical="Wer?"
      largeText="Entwicklungszentrale der hellsten Köpfe des Mittelmeerraums."
      content="Aus jahrelanger Erfahrung in der selben Branche kristallisierten sich aus einer Gemenge von Schülern die dem Waterbyte Ideal einst am ehesten entsprachen eine Gruppierung von unglaublicher Einzigartigkeit."
    >
      <Rive src="/hammeranimation.riv" />
      <DescriptionContainer>
        <RefArr1 />
        <Heading>Wir schuften seit 9.2021.</Heading>
        <DescriptionText>
          Gertsch führte aufgrund eines Projektes welches in Gruppierungen
          durchgeführt werden sollte eine erhöhte Dichte von Waterbyte DNA
          Trägern herbei wodurch es zum Urknall der Waterbyte Geschichte kam.
        </DescriptionText>
      </DescriptionContainer>
    </AboutSectionLayout>
  );
};

export default S1Foundation;
