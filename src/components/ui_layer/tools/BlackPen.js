// @flow
import React from "react";
import { Button } from "./Button";
import type { Tool } from "./";
import type { Color3 } from "types";
import {
  ControllerContextConsumer,
  Controller
} from "components/renderer/canvas";
import { GoPencil } from "react-icons/go";

type Props = {};
type State = {
  active: boolean
};

export class BlackPen extends React.Component<Props, State> implements Tool {
  state: State;

  color: Color3;

  constructor(props: Props) {
    super(props);
    this.state = {
      active: false
    };
    this.color = {
      r: 0,
      g: 0,
      b: 0
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
        {controller => (
          <Button
            extraClasses={this.state.active ? ["selected"] : null}
            onClick={() => {
              this.onClick(controller);
            }}
          >
            <GoPencil />
          </Button>
        )}
      </ControllerContextConsumer>
    );
  }

  onPointerDown(e: PointerEvent) {}
  onPointerUp(e: PointerEvent) {}
}
