// @flow
import React from "react";
import "./Section.scss";

type Props = {
  children?: React$Node
};
export const Section = (props: Props) => (
  <div className="section">{props.children}</div>
);
