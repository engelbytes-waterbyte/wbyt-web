import React, { useRef, useState } from "react";
import gsap from "gsap";

type Props = {
  textInput: string;
};

export const TextAnimateByLetter: React.FC<Props> = ({textInput}) => {
  const [text, setText] = useState("wow");
  const element = useRef(null);

  const onMouseOverHandler = () => {
    const tl = gsap.timeline();

    

    tl.to(element.current, {
      duration: 0.1,
      call: () => {
        setText("G");
      },
    })
      .to(element.current, {
        duration: 0.1,
        call: () => {
          setText("Gu");
        },
      })
      .to(element.current, {
        duration: 0.1,
        call: () => {
          setText("Gus");
        },
      })
      .to(element.current, {
        duration: 0.1,
        call: () => {
          setText("Gust");
        },
      })
      .to(element.current, {
        duration: 0.1,
        call: () => {
          setText("Gusta");
        },
      })
      .to(element.current, {
        duration: 0.1,
        call: () => {
          setText("Gusta");
        },
      })
      .to(element.current, {
        duration: 0.1,
        call: () => {
          setText("Gustav");
        },
      })
      .to(element.current, {
        duration: 0.1,
        call: () => {
          setText("Gustavo");
        },
      });
  };

  return (
    <div ref={element} onMouseOver={onMouseOverHandler}>
      {text}
    </div>
  );
};
