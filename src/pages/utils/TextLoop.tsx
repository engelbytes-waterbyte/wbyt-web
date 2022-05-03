import gsap from "gsap";
import { text } from "node:stream/consumers";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode[];
};

const TextLoop: React.FunctionComponent<Props> = ({ children }) => {
  const textRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    gsap.to(textRef.current, { opacity: "+=0.5" });
  });

  return (
    <div ref={textRef}>
      {children.map((x) => {
        return <div >{x}</div>;
      })}
    </div>
  );
};

export default TextLoop;
