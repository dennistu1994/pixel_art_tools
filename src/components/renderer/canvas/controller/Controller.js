// @flow
import { makePainting, makeGradient, makeWhiteCanvas } from "fixtures";
import Input from "./Input";
import State from "./State";
import type { Painting, Color4, Vector2 } from "types";
import type { PointerTool } from "components/ui_layer/tools";
import { Action } from "history";
import { IdenticalColor4 } from "utils";

const PIXEL_SIZE = 16;

class Controller {
  canvasReady: boolean;
  canvasElement: HTMLCanvasElement;
  canvasContext: any;
  t: number;
  painting: Painting;
  state: State;

  draw: () => void;

  constructor() {
    window.controller = this;

    this.canvasReady = false;
    this.t = Date.now();
    this.painting = makeWhiteCanvas([20, 20]);
    this.state = new State();
  }

  onCanvasReady(canvasElement: HTMLCanvasElement) {
    this.canvasReady = true;
    this.canvasElement = canvasElement;
    this.canvasContext = canvasElement.getContext("2d");
    this.setSize(window.innerWidth, window.innerHeight);
    this.resetViewport();
    window.addEventListener("resize", () => {
      this.setSize(window.innerWidth, window.innerHeight);
    });

    this.draw = this.draw.bind(this);
    window.requestAnimationFrame(this.draw);

    new Input(canvasElement, this);

    window.addEventListener("mouseleave", () => {
      this.state.dragging = false;
      console.log("mouse left the window");
    });

    this.canvasContext.lineWidth = 0.5;
  }

  setSize(w: number, h: number) {
    this.canvasElement.setAttribute("width", String(w));
    this.canvasElement.setAttribute("height", String(h));
    this.state.dirty = true;
  }

  resetViewport() {
    this.state.dirty = true;
    this.state.scale = 1;
    let paintingWidth = this.painting.width * PIXEL_SIZE;
    let paintingHeight = this.painting.height * PIXEL_SIZE;
    this.state.dx =
      (parseFloat(this.canvasElement.getAttribute("width")) - paintingWidth) /
      2;
    this.state.dy =
      (parseFloat(this.canvasElement.getAttribute("height")) - paintingHeight) /
      2;
  }

  draw() {
    window.requestAnimationFrame(this.draw);
    const t = Date.now();
    if (t - this.t > 33 && this.state.dirty) {
      this.state.dirty = false;
      this.t = t;

      // set transform
      this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
      this.canvasContext.fillStyle = `rgb(70,70,70)`;
      this.canvasContext.fillRect(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );

      this.canvasContext.setTransform(
        this.state.scale,
        0,
        0,
        this.state.scale,
        this.state.dx,
        this.state.dy
      );

      // draw painting
      for (var i = 0; i < this.painting.data.length; i++) {
        const [r, g, b] = this.painting.data[i];
        let x = i % this.painting.width;
        let y = (i - x) / this.painting.width;
        this.canvasContext.fillStyle = `rgb(${r},${g},${b})`;
        this.canvasContext.fillRect(
          x * PIXEL_SIZE,
          y * PIXEL_SIZE,
          PIXEL_SIZE,
          PIXEL_SIZE
        );
        this.canvasContext.strokeRect(
          x * PIXEL_SIZE,
          y * PIXEL_SIZE,
          PIXEL_SIZE,
          PIXEL_SIZE
        );
      }
    }
  }

  translate(dx: number, dy: number) {
    this.state.dx += dx;
    this.state.dy += dy;
    this.state.dirty = true;
  }

  scale(point: { x: number, y: number }, ds: number) {
    if (this.state.scale - ds < 0.5) {
      ds = this.state.scale - 0.5;
    } else if (this.state.scale - ds > 6) {
      ds = this.state.scale - 6;
    }
    this.state.scale -= ds;
    this.translate(ds * point.x, ds * point.y);
  }

  startDragging() {
    this.state.dragging = true;
  }

  stopDragging() {
    this.state.dragging = false;
  }

  // returns true if a change happened, false otherwise
  paintPixel(x: number, y: number, color: Color4): boolean {
    const i = y * this.painting.width + x;
    if (x < 0 || y < 0 || x >= this.painting.width || y >= this.painting.height)
      return false;
    if (IdenticalColor4(color, this.painting.data[i])) {
      return false;
    }
    this.painting.data[i] = color;
    this.state.dirty = true;
    return true;
  }

  // if action is provided, it will be used to keep track of this call, otherwise a new one will be returned
  paintPixelFromPointerEvent(
    e: PointerEvent,
    color: Color4,
    action: ?PaintAction
  ): ?PaintAction {
    if (!action) {
      action = new PaintAction(color);
    }
    let { x: xS, y: yS } = this.canvasContext
      .getTransform()
      .inverse()
      .transformPoint(e);
    let x = Math.floor(xS / PIXEL_SIZE);
    let y = Math.floor(yS / PIXEL_SIZE);
    let success = this.paintPixel(x, y, color);
  }

  getColorFromPointerEvent(e: PointerEvent): Color4 {
    let { x: xS, y: yS } = this.canvasContext
      .getTransform()
      .inverse()
      .transformPoint(e);
    let x = Math.floor(xS / PIXEL_SIZE);
    let y = Math.floor(yS / PIXEL_SIZE);
    let i = this.painting.width * y + x;
    return this.painting.data[i];
  }

  // ********************
  // input event handlers
  // ********************
  onPointerDown(e: PointerEvent) {
    e.preventDefault();
    this.canvasElement.setPointerCapture(String(e.pointerId));
    if (this.state.activeTool && this.state.activeTool.onPointerDown) {
      this.state.activeTool.onPointerDown(e);
    }
    switch (e.button) {
      case 0:
        break;
      case 1:
        this.startDragging();
        break;
      case 2:
        break;
      default:
        break;
    }
  }

  onPointerMove(e: PointerEvent) {
    e.preventDefault();
    if (this.state.dragging == true) {
      this.translate(e.movementX, e.movementY);
    }
    if (this.state.activeTool && this.state.activeTool.onPointerDown) {
      this.state.activeTool.onPointerMove(e);
    }
  }

  onPointerUp(e: PointerEvent) {
    e.preventDefault();
    this.canvasElement.releasePointerCapture(String(e.pointerId));

    if (this.state.activeTool && this.state.activeTool.onPointerDown) {
      this.state.activeTool.onPointerUp(e);
    }
    switch (e.button) {
      case 0:
        break;
      case 1:
        this.stopDragging();
        break;
      case 2:
        break;
      default:
        break;
    }
  }

  onPointerCancel(e: PointerEvent) {
    e.preventDefault();
  }

  onWheel(e: WheelEvent) {
    e.preventDefault();
    let point = this.canvasContext
      .getTransform()
      .inverse()
      .transformPoint(e);
    let ds = e.deltaY * 0.004;
    this.scale(point, ds);
  }

  setActivePointerTool(tool: PointerTool) {
    this.setTempPointerTool(tool);
    this.state.lastActiveTool = tool;
  }

  setTempPointerTool(tool: PointerTool) {
    if (this.state.activeTool === tool) return;

    if (this.state.activeTool) {
      this.state.activeTool.deactivate();
    }
    this.state.activeTool = tool;
  }

  unsetTempPointerTool(tool: PointerTool) {
    if (this.state.activeTool === tool) {
      tool.deactivate();
    }
    if (this.state.lastActiveTool) this.state.lastActiveTool.activate(this);
  }
}

class PaintAction implements Action {
  // each paint action consist of an array of positions, as well as a color
  prevState: Map<Vector2, Color4>;
  newColor: Color4;

  constructor(color: Color4) {
    this.newColor = color;
    this.prevState = new Map();
  }

  add(pos: Vector2, prevColor: Color4) {
    this.prevState.set(pos, prevColor);
  }

  undo() {}
  redo() {}
}

export default Controller;
