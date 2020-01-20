
class Input {
    constructor(canvasElement, controller){
        canvasElement.addEventListener(
            'pointerdown', controller.onPointerDown.bind(controller)
        );
        canvasElement.addEventListener(
            'pointerup', controller.onPointerUp.bind(controller)
        );
        canvasElement.addEventListener(
            'pointermove', controller.onPointerMove.bind(controller)
        );
        canvasElement.addEventListener(
            'pointercancel', controller.onPointerCancel.bind(controller)
        );
        canvasElement.addEventListener(
            'wheel', controller.onWheel.bind(controller)
        );
        // canvasElement.addEventListener(
        //     "gesturestart", controller.onGestureStart
        // );
        // canvasElement.addEventListener(
        //     "gesturechange", controller.OnGestureChange
        // );
        // canvasElement.addEventListener(
        //     "gestureend", controller.onGestureEnd
        // );
    }


}

export default Input;
