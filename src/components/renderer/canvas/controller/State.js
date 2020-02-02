// @flow
import type { PointerTool } from "components/ui_layer/tools";

class State {
  scale: number;
  dx: number;
  dy: number;
  dirty: boolean;

  dragging: boolean;

  activeTool: ?PointerTool;
  lastActiveTool: ?PointerTool;

  constructor() {
    this.scale = 1;
    this.dx = 0;
    this.dy = 0;
    this.dragging = false;
    this.activeTool = null;
    this.lastActiveTool = null;
    this.dirty = true;
  }
}

export default State;
