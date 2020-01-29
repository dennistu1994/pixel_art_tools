// @flow
import type { PointerTool } from "components/ui_layer/tools";

class State {
  scale: number;
  dx: number;
  dy: number;

  dragging: boolean;

  activeTool: ?PointerTool;

  constructor() {
    this.scale = 1;
    this.dx = 0;
    this.dy = 0;
    this.dragging = false;
    this.activeTool = null;
  }
}

export default State;
