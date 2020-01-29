// @flow
import React from "react";
import Controller from "./controller/Controller";
import "./Canvas.scss";

type Props = {|
  controller: Controller
|};
export class CanvasRenderer extends React.Component<Props> {
  canvasElement: HTMLCanvasElement;
  controller: Controller;

  constructor(props: Props) {
    super();
    this.controller = props.controller;
  }

  onCanvasReady(canvasElement: HTMLCanvasElement) {
    this.canvasElement = canvasElement;
    this.controller.onCanvasReady(canvasElement);
  }

  render() {
    return <canvas id="canvas_renderer" ref={this.onCanvasReady.bind(this)} />;
  }
}
