class Input {
  constructor(canvasElement, controller) {
    canvasElement.addEventListener(
      "pointerdown",
      controller.onPointerDown.bind(controller),
      true
    );
    canvasElement.addEventListener(
      "pointerup",
      controller.onPointerUp.bind(controller),
      true
    );
    canvasElement.addEventListener(
      "pointermove",
      controller.onPointerMove.bind(controller),
      true
    );
    canvasElement.addEventListener(
      "pointercancel",
      controller.onPointerCancel.bind(controller),
      true
    );
    canvasElement.addEventListener(
      "wheel",
      controller.onWheel.bind(controller),
      true
    );
  }
}

export default Input;
