class Input {
  constructor(canvasElement, controller) {
    canvasElement.addEventListener(
      "pointerdown",
      controller.onPointerDown.bind(controller)
    );
    canvasElement.addEventListener(
      "pointerup",
      controller.onPointerUp.bind(controller)
    );
    canvasElement.addEventListener(
      "pointermove",
      controller.onPointerMove.bind(controller)
    );
    canvasElement.addEventListener(
      "pointercancel",
      controller.onPointerCancel.bind(controller)
    );
    canvasElement.addEventListener(
      "wheel",
      controller.onWheel.bind(controller)
    );
  }
}

export default Input;
