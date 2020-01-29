// @flow
import React from "react";
import Controller from "./Controller";

let _ = new Controller(); // for simplifying flow typechecking, methods should never be called on this object
const ControllerContext: React$Context<Controller> = React.createContext(_);

type Props = {
  controller: Controller,
  children?: React$Node
};
export class ControllerContextProvider extends React.Component<Props> {
  render() {
    return (
      <ControllerContext.Provider value={this.props.controller}>
        {this.props.children}
      </ControllerContext.Provider>
    );
  }
}

export const ControllerContextConsumer = ControllerContext.Consumer;
