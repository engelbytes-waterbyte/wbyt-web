import AboutItemLayout from "@components/layout/AboutItemLayout";
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
  margin-top: 50px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const StyledSummit = styled(Summit)`
  left: 50%;
  transform: translateX(-50%);
  position: relative;
`;

const S3Activities = () => {
  return (
    <AboutItemLayout
      vertical="Was machen wir?"
      largeText="Wir entwickeln die Zukunft."
      content="Bei Waterbyte drehte sich einst alles um die Befriedigung unseres Vorgesetzten: Professor Gertschy H.!  
      Eines Tages wurde sich jedoch dazu entschlossen, sich aus der Dokumentationshandschelle zu befreien und Projekte im Waterbyte-Style in Angriff zu nehmen. Darauf entsprangen gleich die ersten Umsetzungen, welche sich durch grenzgeniale Kodierungsleistungen auszeichneten.  Um dieses Potenzial aufrecht zu erhalten, definiert sich der Alltag bei Waterbyte auch durch die Erstellung von Medien, welche einerseits Einblicke in den Verein, aber auch externe Thematiken umfassen. "
    >
      <StyledSummit />
      <DescriptionContainer>
        <DescriptionText>
          “Die hellsten Köpfe an einem Tisch, hier kann es sich nur um das
          Engelbyte Startup handeln” - so lauteten einst Aussagen von
          Augenzeugen unserer Meetings.
        </DescriptionText>
      </DescriptionContainer>
    </AboutItemLayout>
  );
};

export default S3Activities;
