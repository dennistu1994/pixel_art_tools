// @flow
import React from "react";
import { Button } from "./Button";
import type { Tool } from "./";
import type { Color3 } from "types";
import {
  ControllerContextConsumer,
  Controller
} from "components/renderer/canvas";
import { MdPanTool } from "react-icons/md";
import { debug } from "utils";

type Props = {};
type State = {
  active: boolean
};

export class Pan extends React.Component<Props, State> implements Tool {
  state: State;
  controller: ?Controller;

  constructor(props: Props) {
    super(props);
    this.state = {
      active: false
    };
  }

  onClick(controller: Controller) {
    controller.setActiveTool(this);
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
                this.onClick(controller);
              }}
            >
              <MdPanTool />
            </Button>
          );
        }}
      </ControllerContextConsumer>
    );
  }

  onPointerDown(e: PointerEvent) {
    if (this.controller) {
      this.controller.startDragging(e.pointerId);
    }
  }

  onPointerUp(e: PointerEvent) {
    if (this.controller) {
      this.controller.stopDragging(e.pointerId);
    }
  }
}
