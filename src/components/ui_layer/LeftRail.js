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
          <Tools.Pan />
          <Tools.BlackPen />
          <Tools.Dropper />
        </Section>
        <Section>
          Tool Color <Tools.ColorDisplay />
        </Section>
        <Section>
          <Tools.ColorPicker />
        </Section>
      </div>
    );
  }
}

export default LeftRail;
