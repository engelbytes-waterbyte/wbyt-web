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
  * {
    margin: 20px;
  }
`;

const WbytNames = [
  "die Gruppierung",
  "das Startup",
  "die Jungspündler",
  "die Entwickler",
  "die Jova-Experten",
  "die Voispostn",
];

const Suggestor: React.FunctionComponent = () => {
  return (
    <SuggestorWrapper>
      mehr erfahren
      <br />
      über{" "}
      {/* <TextLoop
        interval={10}
        children={[
          "Trade faster",
          "Increase sales",
          "Stock winners",
          "Price perfectly",
        ]}
      /> */}
      {/* {WbytNames.map((x) => {
          return <div>{x}</div>;
        })} */}
      {/* <h5>asdfs</h5>
        <h5>asddfs</h5>
        <h5>asddfs</h5> */}
      {/* </TextLoop> */}
      <TextLoop>{WbytNames}</TextLoop>
      <ArrowDownCircle size={40} />
    </SuggestorWrapper>
  );
};

// const getRandomName = () =>}

export default Suggestor;
