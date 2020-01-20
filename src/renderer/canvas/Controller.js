import {makePainting} from 'fixtures/Painting';
import Input from './Input';
class Controller {
    
    constructor(canvasComponent: any){
        this.canvasComponent = canvasComponent;
        this.canvasReady = false;
        this.canvasElement = null;
        this.canvasContext = null;
        this.t = Date.now();
        this.painting = makePainting([30, 30]);
        this.scale=1;
        this.dx = 0;
        this.dy = 0;
    }

    onCanvasReady(canvasElement){
        this.canvasReady = true;
        this.canvasElement = canvasElement;
        this.canvasContext = canvasElement.getContext('2d');
        this.setSize(
            window.innerWidth,
            window.innerHeight,
        );
        
        this.draw = this.draw.bind(this);
        window.requestAnimationFrame(this.draw);

        new Input(canvasElement, this);
    }

    setSize(w, h){
        this.canvasElement.setAttribute("width", w);
        this.canvasElement.setAttribute("height", h);
    }

    draw() {
        window.requestAnimationFrame(this.draw);
        const t = Date.now();
        if ((t- this.t) > 30) {
            this.t = t;

            // set transform
            let currentTransform = this.canvasContext.getTransform();
            this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
            this.canvasContext.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);

            this.canvasContext.setTransform(
                this.scale,
                currentTransform.b,
                currentTransform.c,
                this.scale,
                this.dx,
                this.dy,
            )

            // draw painting
            for (var i = 0; i < this.painting.data.length; i++){
                const {r,g,b} = this.painting.data[i];
                let x = i%this.painting.width;
                let y = (i-x)/this.painting.width;
                this.canvasContext.fillStyle = `rgb(${r},${g},${b})`;
                this.canvasContext.fillRect(
                    x*16,
                    y*16,
                    16,
                    16,
                );
            }
        }
    }

    // input callbacks
    onPointerDown(e){
    }

    onPointerMove(e){
    }

    onPointerUp(e){
    }

    onPointerCancel(){}

    onWheel(e){
        e.preventDefault();
        if (e.ctrlKey) {
            let point = this.canvasContext.getTransform().inverse().transformPoint(e);
            let ds = e.deltaY * 0.01;
            this.scale -= ds;
            this.dx += ds * point.x;
            this.dy += ds * point.y;
        } else {
            this.dx -= e.deltaX;
            this.dy -= e.deltaY;
        }
    }

    // onGestureStart(e){
    //     console.log(e);
    // }

    // onGestureEnd(e){
    //     console.log(e);
    // }

    // onGestureChange(e){
    //     console.log(e);
    // }
}

export default Controller;
