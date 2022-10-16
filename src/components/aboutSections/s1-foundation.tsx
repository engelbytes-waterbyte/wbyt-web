import AboutItemLayout from "@components/layout/AboutItemLayout";
import Rive from "rive-react";
import styled from "styled-components";
import RefArr1 from "@assets/abstracts/refarr1.svg";
import { Element } from "react-scroll";

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
    <Element name="scrollToS1">
      <AboutItemLayout
        vertical="Was sind wir?"
        largeText="Die Entwicklungszentrale der hellsten Köpfe des Mittelmeerraums."
        content="Aus jahrelanger Erfahrung in der selben Branche kristallisierte sich aus einem Gemenge von Entwicklern die dem Waterbyte-Ideal einst am ehesten entsprachen eine Gruppierung von unglaublicher Einzigartigkeit. Wir haben es uns zur Aufgabe gemacht, die Gesinnung der altmodischen Projektentwicklungs-Techniken neu zu erfinden, um somit deren Geist weiterzuführen."
      >
        <Rive src="/hammeranimation.riv" />
        <DescriptionContainer>
          <RefArr1 />
          <h2 className="font-bold mb-2 mt-3">
            September 2021 - Ein Ende und ein Anfang
          </h2>
          <DescriptionText>
            Lehrer Bert verließ die Schule und direkt im Schuljahr darauf führte
            Lehrer Gertsch einst aufgrund eines Projektes eine erhöhte
            Dichte von Waterbyte-DNA-Trägern herbei, wodurch es zum Urknall der
            Waterbyte-Geschichte kam.
          </DescriptionText>
        </DescriptionContainer>
      </AboutItemLayout>
    </Element>
  );
};

export default S1Foundation;
