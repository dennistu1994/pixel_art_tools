// @flow
import React from "react";
import "./LeftRail.scss";
import * as Tools from "components/ui_layer/tools";
import { Section } from "components/utils";

type Props = {};
class LeftRail extends React.Component<Props> {
  render() {
    return (
      <div id="left_rail">
        <Section>
          <Tools.ResetViewport />
          <Tools.ResetViewport />
          <Tools.Pan />
        </Section>
        <Section>
          <Tools.ResetViewport />
          <Tools.BlackPen />
        </Section>
        <Section>
          Tool Color <Tools.ColorDisplay />
        </Section>
      </div>
    );
  }
}

export default LeftRail;
