// @flow
import React from "react";
export * from "./Debug";
export function setClassContextType(cls: any, context: React$Context<any>) {
  //$FlowFixMe
  cls.contextType = context;
}
export * from "./Color";
