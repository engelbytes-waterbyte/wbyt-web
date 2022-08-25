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
      vertical="Was wollen wir Erreichen?"
      largeText="Eine Symbiose aus Chillpausen und Produktivitätstornados für ein ausgewogenes Projekterlebnis"
      content="Da wir realiserten wie Medien unser gemeinsames Verweilen enorm verbessern konnte. Aus diesem Grund versuchern wir die Experience durch diverse Medien wie Blogs, Stickers und News zu optimieren."
    >
      <StyledSofa />
      <DescriptionContainer>
        <DescriptionText>
          Unsere Kreativität reichern wir meistens in unseren
          genossenschaftlichen Séparée an.
        </DescriptionText>
      </DescriptionContainer>
    </AboutItemLayout>
  );
};

export default S4Strategy;
