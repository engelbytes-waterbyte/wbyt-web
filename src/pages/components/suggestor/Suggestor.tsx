import styled from "styled-components";
import { ArrowDownCircle } from "tabler-icons-react";

const SuggestorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align: center;
  font-size: 1.4em;
  font-weight: 700;
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  position: absolute;
  *{
      margin: 20px;
  }
`;

const Suggestor: React.FunctionComponent = () => {
  return (
    <SuggestorWrapper>
      mehr erfahren<br />
      über den Verein
      <ArrowDownCircle size={40} />
    </SuggestorWrapper>
  );
};

export default Suggestor;
