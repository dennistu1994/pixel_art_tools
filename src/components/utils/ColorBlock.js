// @flow
import React from "react";
import "./ColorBlock.scss";
import type { Vector2, Color4 } from "types";

type Props = {
  size: Vector2,
  color: Color4
};
export const ColorBlock = (props: Props) => {
  let { size, color } = props;
  let [r, g, b] = color;
  let style = {
    width: size[0],
    height: size[1],
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  };
  return <div className="color_block" style={style}></div>;
};
