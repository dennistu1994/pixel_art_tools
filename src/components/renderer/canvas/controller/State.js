// @flow
class State {
    scale: number;
    dx: number;
    dy: number;

    dragging: boolean;

    constructor(){
        this.scale = 1;
        this.dx = 0;
        this.dy = 0;
        this.dragging = false;
    }
}

export default State;
