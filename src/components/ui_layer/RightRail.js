// @flow
import React from "react";
import "./RightRail.scss";
import * as Tools from "components/ui_layer/tools";
import { Section } from "components/utils";

type Props = {};
export class RightRail extends React.Component<Props> {
  render() {
    return (
      <div id="right_rail">
        <Section>
          <Tools.ResetViewport />
        </Section>
      </div>
    );
  }
}
