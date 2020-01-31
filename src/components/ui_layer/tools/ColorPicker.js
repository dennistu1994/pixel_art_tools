// @flow
import React from "react";
import { SketchPicker } from "react-color";
import { setClassContextType } from "utils";
import {
  UILayerState,
  UILayerStateContext
} from "components/ui_layer/UILayerState";
import type { Color4, ColorDict } from "types";

type Props = {};
type State = {
  color: ?ColorDict
};
export class ColorPicker extends React.Component<Props, State> {
  context: UILayerState;

  constructor(props: Props) {
    super(props);
    this.state = {
      color: null
    };
  }

  componentDidMount() {
    this.context.color.subscribe(color => this.setColorState(color));
  }

  setColorState(color: Color4) {
    let [r, g, b, a] = color;
    this.setState({
      color: { r, g, b, a }
    });
  }

  onColorPick(color: any) {
    let { r, g, b, a } = color.rgb;
    this.context.color.set([r, g, b, a]);
  }

  render() {
    let { color } = this.state;
    if (color === null) {
      color = { r: 0, g: 0, b: 0, a: 0 };
    }
    return (
      <SketchPicker color={color} onChange={color => this.onColorPick(color)} />
    );
  }
}
setClassContextType(ColorPicker, UILayerStateContext);
