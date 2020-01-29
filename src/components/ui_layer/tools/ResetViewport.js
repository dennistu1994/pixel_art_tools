// @flow
import { Button } from "./Button";
import React from "react";
import { MdCenterFocusWeak } from "react-icons/md";
import {
  ControllerContextConsumer,
  Controller
} from "components/renderer/canvas";

type Props = {};
export class ResetViewport extends React.Component<Props> {
  onClick(controller: Controller) {
    controller.resetViewport();
  }

  render() {
    return (
      <ControllerContextConsumer>
        {controller => (
          <Button
            onClick={() => {
              this.onClick(controller);
            }}
          >
            <MdCenterFocusWeak />
          </Button>
        )}
      </ControllerContextConsumer>
    );
  }
}
