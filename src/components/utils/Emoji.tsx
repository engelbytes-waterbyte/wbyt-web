import React from "react";

interface IEmojiProp {
  label: string;
  symbol: string;
}

const Emoji = (props: IEmojiProp) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
export default Emoji;
