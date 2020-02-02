// @flow
import { Controller } from "components/renderer/canvas";

export interface PointerTool {
  onPointerDown(e: PointerEvent): void;

  onPointerMove(e: PointerEvent): void;

  onPointerUp(e: PointerEvent): void;

  deactivate(): void;

  activate(controller: Controller): void;
}
