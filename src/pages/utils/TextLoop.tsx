import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode[];
};

const StyledSpan = styled.span`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0px;
  position: relative;
  color: ${(props) => props.theme.colors.waterblue};
`;

const TextLoop: React.FC<Props> = ({ children }) => {
  const textRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [currentText, setText] = useState(children[0]);

  useEffect(() => {
    gsap.to(textRef.current, 0.7, { yPercent: -50, autoAlpha: 0 });
    gsap.from(textRef.current, 0.7, { yPercent: 50, autoAlpha: 0 });
    gsap.to(textRef.current, 0.7, { yPercent: -50, autoAlpha: 0 });
    gsap.set(textRef.current, { yPercent: 50 });
    gsap.to(textRef.current, 0.7, { yPercent: 0, autoAlpha: 1 });
  });
  var index = 0;
  
  useEffect(() => {
    const interval = setInterval(() => {
      index++;
      console.log(index % children.length);
      setText(children[index % children.length]);
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <StyledSpan ref={textRef}>{currentText}</StyledSpan>;
};

export default TextLoop;
