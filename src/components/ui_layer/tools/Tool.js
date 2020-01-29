// @flow
export interface Tool {
  deactivate(): void;

  onPointerDown(e: PointerEvent): void;

  onPointerUp(e: PointerEvent): void;
}
