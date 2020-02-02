// @flow
import type { PointerTool } from "components/ui_layer/tools";
import { History } from "history";

class State {
  scale: number;
  dx: number;
  dy: number;
  dirty: boolean;

  dragging: boolean;

  activeTool: ?PointerTool;
  lastActiveTool: ?PointerTool;

  history: History;

  constructor() {
    this.scale = 1;
    this.dx = 0;
    this.dy = 0;
    this.dragging = false;
    this.activeTool = null;
    this.lastActiveTool = null;
    this.dirty = true;
    this.history = new History();
  }
}

export default State;
