import styled from "styled-components";
import { ArrowDownCircle } from "tabler-icons-react";
import TextLoop from "../utils/TextLoop";

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
  text-shadow: 0px 0px 20px white;
  * {
    margin: 20px;
  }
`;

const CrossedText = styled.span`
  text-decoration: line-through;
  display: inline;
`;

const UeberText = styled.span`
  display: flex;
  align-items: center;
  margin: 0;
`;

const WbytNames = [
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
  // eslint-disable-next-line react/jsx-key
  <CrossedText>die Sekte</CrossedText>,
];

const Suggestor: React.FunctionComponent = () => {
  return (
    <SuggestorWrapper>
      <div>
        Mehr erfahren
        <br />
        <UeberText>
          über&nbsp;
          <TextLoop>
            {WbytNames.map((value, index) => {
              return <div key={index}>{value}</div>;
            })}
          </TextLoop>
        </UeberText>
      </div>
      <ArrowDownCircle size={40} />
    </SuggestorWrapper>
  );
};

export default Suggestor;
