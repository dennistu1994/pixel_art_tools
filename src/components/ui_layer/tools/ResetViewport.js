// @flow
import Button from "./Button";
import React from "react";
import { MdCenterFocusWeak } from "react-icons/md";
import {
  ControllerContextConsumer,
  Controller
} from "components/renderer/canvas";

class ResetViewport extends Button {
  onClick(controller: ?Controller) {
    if (!controller) return;
    controller.resetViewport();
  }

  renderButtonContent() {
    return (
      <ControllerContextConsumer>
        {controller => (
          <MdCenterFocusWeak
            onClick={() => {
              this.onClick(controller);
            }}
          />
        )}
      </ControllerContextConsumer>
    );
  }
}
export default ResetViewport;
