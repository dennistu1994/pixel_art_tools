// @flow
import React from "react";
import CanvasRenderer, {
  ControllerContextProvider,
  Controller
} from "components/renderer/canvas";
import UILayer from "components/ui_layer";

type Props = {};
export class Scaffold extends React.Component<Props> {
  canvasController: Controller;

  constructor(props: Props) {
    super(props);
    this.canvasController = new Controller();
  }

  render() {
    let canvasRenderer = <CanvasRenderer controller={this.canvasController} />;
    let uiLayer = <UILayer />;
    return (
      <>
        {canvasRenderer}
        <ControllerContextProvider controller={this.canvasController}>
          {uiLayer}
        </ControllerContextProvider>
      </>
    );
  }
}
