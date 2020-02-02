// @flow
import React from "react";
import "./UILayer.scss";
import { LeftRail } from "./LeftRail";
import { RightRail } from "./RightRail";
import { IconContext } from "react-icons";
import { UILayerState, UILayerStateContextProvider } from "./";

type Props = {};
export class UILayer extends React.Component<Props> {
  uiLayerState: UILayerState;

  constructor(props: Props) {
    super(props);
    this.uiLayerState = new UILayerState();
  }

  render() {
    return (
      <IconContext.Provider
        value={{
          color: "#ddd",
          size: "30px"
        }}
      >
        <UILayerStateContextProvider state={this.uiLayerState}>
          <div id="ui_layer_root">
            <LeftRail />
            <RightRail />
          </div>
        </UILayerStateContextProvider>
      </IconContext.Provider>
    );
  }
}
