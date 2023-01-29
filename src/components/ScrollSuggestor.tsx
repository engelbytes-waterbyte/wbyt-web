import styled from "styled-components";
import { ArrowDownCircle } from "tabler-icons-react";
import TextLoop from "@components/utils/TextLoop";
import { iconStyle } from "@styles/globals";
import { Link, scroller } from "react-scroll";

const SuggestorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.4em;
  font-weight: 600;
  font-style: italic;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  position: absolute;
  text-shadow: 0px 0px 20px #ffffff;
  * {
    margin: 2px;
  }
  @media (max-width: 768px) {
    display: none;
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
  "die Gruppierung",
  "das Startup",
  "die HTL-Schueler",
  "die Jungspündler",
  "die Entwickler",
  "die Visionäre",
  "die Coder",
  "die Genießer",
  "die Vereinigung",
  "die Kreativen",
  "die Künstler",
  "die Erschaffer",
  "die Motivierten",
  "die Innovativen",
  "die Stakeholder",
];

const StyledArrowDownCircle = styled(ArrowDownCircle)`
  &:hover {
    stroke: ${(props) => props.theme.colors.waterblue};
    cursor: pointer;
  }
`;

const scrollToS1 = () => {
  scroller.scrollTo("myScrollToElement", {
    duration: 1500,
    delay: 100,
    smooth: true,
    containerId: "ContainerElementID",
    offset: 50, // Scrolls to element + 50 pixels down the page
  });
};

const ScrollSuggestor: React.FunctionComponent = () => {
  return (
    <SuggestorWrapper>
      <div style={{ marginBottom: "30px" }}>
        Mehr erfahren
        <br />
        <div className="flex items-center justify-center">
          <p>über&nbsp;</p>
          <TextLoop>
            {WbytNames.map((value, index) => {
              return (
                <div className="break-keep" key={index}>
                  {value}
                </div>
              );
            })}
          </TextLoop>
        </div>
      </div>
      <Link
        activeClass="active"
        className="test1"
        to="scrollToS1"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        <StyledArrowDownCircle size={30} style={iconStyle} />
      </Link>
    </SuggestorWrapper>
  );
};

export default ScrollSuggestor;
