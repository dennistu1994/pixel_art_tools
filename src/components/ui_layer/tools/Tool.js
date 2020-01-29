// @flow
export interface PointerTool {
  deactivate(): void;

  onPointerDown(e: PointerEvent): void;

  onPointerMove(e: PointerEvent): void;

  onPointerUp(e: PointerEvent): void;
}
