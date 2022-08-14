import AboutItemLayout from "@components/layout/AboutItemLayout";
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



const S1Foundation = () => {
  return (
    <AboutItemLayout
      vertical="Wer?"
      largeText="Entwicklungszentrale der hellsten Köpfe des Mittelmeerraums."
      content="Aus jahrelanger Erfahrung in der selben Branche kristallisierten sich aus einer Gemenge von Schülern die dem Waterbyte Ideal einst am ehesten entsprachen eine Gruppierung von unglaublicher Einzigartigkeit."
    >
      <Rive src="/hammeranimation.riv" />
      <DescriptionContainer>
        <RefArr1 />
        <h2 className="font-bold mb-2">Wir schuften seit 9.2021.</h2>
        <DescriptionText>
          Gertsch führte aufgrund eines Projektes welches in Gruppierungen
          durchgeführt werden sollte eine erhöhte Dichte von Waterbyte DNA
          Trägern herbei wodurch es zum Urknall der Waterbyte Geschichte kam.
        </DescriptionText>
      </DescriptionContainer>
    </AboutItemLayout>
  );
};

export default S1Foundation;
