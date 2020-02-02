// @flow
import React from "react";
import { Button } from "./Button";
import type { PointerTool } from "./";
import { FaEyeDropper } from "react-icons/fa";
import {
  Controller,
  ControllerContextConsumer
} from "components/renderer/canvas";
import { setClassContextType } from "utils";
import {
  UILayerState,
  UILayerStateContext
} from "components/ui_layer/UILayerState";

type Props = {};
type State = {
  active: boolean
};
export class Dropper extends React.Component<Props, State>
  implements PointerTool {
  controller: Controller;
  context: UILayerState;
  pointerDown: boolean;

  constructor(props: Props) {
    super(props);
    this.state = {
      active: false
    };
  }

  activate(controller: Controller) {
    controller.setTempPointerTool(this);
    this.setState({
      active: true
    });
  }

  deactivate() {
    this.setState({
      active: false
    });
  }

  render() {
    return (
      <ControllerContextConsumer>
        {controller => {
          this.controller = controller;
          return (
            <Button
              extraClasses={this.state.active ? ["selected"] : null}
              onClick={() => {
                this.activate(controller);
              }}
            >
              <FaEyeDropper />
            </Button>
          );
        }}
      </ControllerContextConsumer>
    );
  }

  onPointerDown(e: PointerEvent) {
    if (e.button !== 0) return;
    this.pointerDown = true;
    this.context.color.set(this.controller.getColorFromPointerEvent(e));
  }

  onPointerMove(e: PointerEvent) {
    if (this.pointerDown) {
      this.context.color.set(this.controller.getColorFromPointerEvent(e));
    }
  }

  onPointerUp(e: PointerEvent) {
    if (e.button !== 0) return;
    this.pointerDown = false;
    this.controller.unsetTempPointerTool(this);
  }
}
setClassContextType(Dropper, UILayerStateContext);
