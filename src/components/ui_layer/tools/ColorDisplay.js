// @flow
import React from "react";
import {
  UILayerState,
  UILayerStateContext
} from "components/ui_layer/UILayerState";
import { ColorBlock } from "components/utils";
import type { Vector2, Color4 } from "types";
import { setClassContextType } from "utils";

type Props = {};
type State = {
  color: Color4
};
const COLOR_DISPLAY_SIZE: Vector2 = [50, 20];
class ColorDisplay extends React.Component<Props, State> {
  context: UILayerState;

  constructor(props: Props) {
    super(props);
    this.state = {
      color: [0, 0, 0, 1]
    };
  }

  componentDidMount() {
    this.context.color.subscribe(color => this.setColor(color));
  }

  setColor(color: Color4) {
    this.setState({
      color
    });
  }

  render() {
    return <ColorBlock size={COLOR_DISPLAY_SIZE} color={this.state.color} />;
  }
}
setClassContextType(ColorDisplay, UILayerStateContext);
export { ColorDisplay };
