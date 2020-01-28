// @flow
import React from "react";
type Props = {
  children?: React$Node
};
export const Section = (props: Props) => (
  <div className="section">{props.children}</div>
);
