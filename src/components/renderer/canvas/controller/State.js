// @flow
import type { Tool } from "components/ui_layer/tools";

class State {
  scale: number;
  dx: number;
  dy: number;

  dragging: boolean;

  activeTool: ?Tool;

  constructor() {
    this.scale = 1;
    this.dx = 0;
    this.dy = 0;
    this.dragging = false;
    this.activeTool = null;
  }
}

export default State;
