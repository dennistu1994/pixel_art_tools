// @flow
import React from "react";
import Controller from "./Controller";

const ControllerContext: React$Context<?Controller> = React.createContext();

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
