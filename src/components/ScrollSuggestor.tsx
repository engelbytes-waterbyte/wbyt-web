import styled from "styled-components";
import { ArrowDownCircle } from "tabler-icons-react";
import TextLoop from "@components/utils/TextLoop";
import { iconStyle } from "@styles/globals";

const SuggestorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.4em;
  font-weight: 700;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  position: absolute;
  text-shadow: 0px 0px 20px #ffffff;
  * {
    margin: 2px;
  }
`;

const CrossedText = styled.span`
  text-decoration: line-through;
  display: inline;
  margin: 0;
`;

const UeberText = styled.span`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const BlankDiv = styled.div`
  margin: 0;
  padding: 0;
  display: inline;
`;

const WbytNames = [
  // eslint-disable-next-line react/jsx-key
  <CrossedText>die Sekte</CrossedText>,
  "die Gruppierung",
  "das Startup",
  "die Jungspündler",
  "die Entwickler",
  "die Jova-Experten",
  "die Diplomaten",
  "die Coder",
  "die Chillgruppe",
  "die Genießer",
  "die Designer",
  "die Vereinigung",
  "das Jungunternehmen",
  "das Unicorn",
  "der Internet-kolloss",
  "die Stakeholder",
  "die Chilllehrlinge",
  "die Chillmeister",
];

const ScrollSuggestor: React.FunctionComponent = () => {
  return (
    <SuggestorWrapper>
      <div style={{ marginBottom: "30px" }}>
        Mehr erfahren
        <br />
        <UeberText>
          über&nbsp;
          <TextLoop>
            {WbytNames.map((value, index) => {
              return <BlankDiv key={index}>{value}</BlankDiv>;
            })}
          </TextLoop>
        </UeberText>
      </div>
      <ArrowDownCircle size={40} style={iconStyle} />
    </SuggestorWrapper>
  );
};

export default ScrollSuggestor;
