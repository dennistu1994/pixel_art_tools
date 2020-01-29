// @flow
import React from "react";
import { Button } from "./Button";
import type { PointerTool } from "./";
import type { Color4 } from "types";
import {
  ControllerContextConsumer,
  Controller
} from "components/renderer/canvas";
import { GoPencil } from "react-icons/go";

type Props = {};
type State = {
  active: boolean
};

export class BlackPen extends React.Component<Props, State>
  implements PointerTool {
  state: State;
  color: Color4;
  controller: Controller;

  pointerDown: boolean;

  constructor(props: Props) {
    super(props);
    this.state = {
      active: false
    };
    this.color = {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
    this.pointerDown = false;
  }

  onClick(controller: Controller) {
    controller.setActivePointerTool(this);
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
              <GoPencil />
            </Button>
          );
        }}
      </ControllerContextConsumer>
    );
  }

  onPointerDown(e: PointerEvent) {
    if (e.button !== 0) return;
    this.controller.paintPixelFromPointerEvent(e, this.color);
    this.controller.canvasElement.setPointerCapture(String(e.pointerId));
    this.pointerDown = true;
  }

  onPointerMove(e: PointerEvent) {
    if (this.pointerDown) {
      this.controller.paintPixelFromPointerEvent(e, this.color);
    }
  }

  onPointerUp(e: PointerEvent) {
    if (e.button !== 0) return;
    this.pointerDown = false;
    this.controller.canvasElement.releasePointerCapture(String(e.pointerId));
  }
}