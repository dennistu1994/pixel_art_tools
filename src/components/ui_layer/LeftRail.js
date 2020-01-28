// @flow
import React from "react";
import "./style.scss";
import * as Tools from "components/ui_layer/tools";

type Props = {};
class LeftRail extends React.Component<Props> {
  render() {
    return (
      <div id="left_rail">
        <Tools.ResetViewport />
        <Tools.Button />
      </div>
    );
  }
}

export default LeftRail;
