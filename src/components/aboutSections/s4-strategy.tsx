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
      largeText="Ein Unternehmen in Form einer Community zu führen um somit Ideen einfach die Chance zu geben sich zu verwirklichen."
      content="Wir lieben wie einfach es ist mit Code Ideen zu umzusetzen. Wir wollen diese Fähigkeit nicht nur teilen sondern auch das Prinzip auf andere Bereiche übertragen. Somit soll Waterbyte der Ort sein an dem grundsätzlich jede Idee realisierbar ist."
    >
      <StyledSofa />

      <DescriptionContainer>
        <DescriptionText>
          Auch der Ausgleich wird bei uns gemeinsam Verbracht da nur durch
          Ausreichend Erholung die Kreativität weiterhin fließen kann.
        </DescriptionText>
      </DescriptionContainer>
    </AboutItemLayout>
  );
};

export default S4Strategy;
