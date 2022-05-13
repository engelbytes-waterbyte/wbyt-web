import AboutSectionLayout from "@components/layout/AboutSectionLayout";
import Summit from "@assets/illustrations/summit.svg";
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

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const S3Activities = () => {
  return (
    <AboutSectionLayout
      vertical="Was?"
      largeText="Was ist nun dieser Verein/Club/Startup/Genossenschaft/... Engelbyte’s Waterbyte?"
      content="Bei Waterbyte drehte sich einst alles um die Befriedigung unseres Vorgesetzten: Lehrer Gertsch! 
      Eines Tages wurde sich jedoch dazu entschlossen sich aus der Dokumentations-handschelle zu befreien und frei Projekte in Angriff zu nehmen. Darauf entsprangen gleich die ersten Projekte welche sich durch grenzgeniale Kodierungsleistungen auszeichneten. Um dieses Potenzial aufrecht zu erhalten, definiert sich der Alltag bei Waterbyte auch durch die erstellung von Medien, welche Einerseits Einblicke in den Verein, aber auch externe Thematiken umfassen. Zu aktuellem Stand verfügen wir eine Blog-Infrastruktur, welche durch ein Sticker-arsenal und einen Store erweitert werden soll. Auch Events für die Zelebrierung der Gemeinschaft finden hohe Priorität in die Zeitplanung jedes Mitglieds. "
    >
      <CenterWrapper>
        <Summit />
      </CenterWrapper>
      <DescriptionContainer>
        <DescriptionText>
          “Die hellsten Köpfe an einem Tisch ... hier kann es sich nur um das
          Engelbyte startup handeln” - So lauten Aussagen von Augenzeugen bei
          den allgemein bekannten Waterbyte Meetings an dem sich die hellsten
          Köpfe des Mittelmeerraums beteiligen.
        </DescriptionText>
      </DescriptionContainer>
    </AboutSectionLayout>
  );
};

export default S3Activities;
