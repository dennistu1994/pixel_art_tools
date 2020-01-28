// @flow
import React from "react";
import "./LeftRail.scss";
import * as Tools from "components/ui_layer/tools";
import { Section } from "components/util";

type Props = {};
class LeftRail extends React.Component<Props> {
  render() {
    return (
      <div id="left_rail">
        <Section>
          <Tools.ResetViewport />
          <Tools.ResetViewport />
        </Section>
        <Section>
          <Tools.ResetViewport />
        </Section>
      </div>
    );
  }
}

export default LeftRail;
