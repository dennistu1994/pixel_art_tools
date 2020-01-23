// @flow
import {makePainting} from 'fixtures/Painting';
import Input from './Input';
import State from './State';
import type {Painting} from 'types';
class Controller {

    canvasReady : boolean;
    canvasElement : HTMLCanvasElement;
    canvasContext : any;
    t: number;
    painting: Painting;
    state: State;

    draw: () => void;

    
    constructor(canvasComponent: any){
        this.canvasReady = false;
        this.t = Date.now();
        this.painting = makePainting([30, 30]);
        this.state = new State();
    }

    onCanvasReady(canvasElement: HTMLCanvasElement){
        this.canvasReady = true;
        this.canvasElement = canvasElement;
        this.canvasContext = canvasElement.getContext('2d');
        this.setSize(
            window.innerWidth,
            window.innerHeight,
        );
        this.resetViewport();
        window.addEventListener('resize', ()=>{
            this.setSize(
                window.innerWidth,
                window.innerHeight,
            )
        });
        
        this.draw = this.draw.bind(this);
        window.requestAnimationFrame(this.draw);

        new Input(canvasElement, this);

        window.addEventListener('mouseleave', ()=>{
            this.state.dragging = false;
        })
    }

    setSize(w: number, h: number){
        this.canvasElement.setAttribute("width", String(w));
        this.canvasElement.setAttribute("height", String(h));
    }

    resetViewport(){
        this.state.scale = 1;
        let paintingWidth = this.painting.width * 16;
        let paintingHeight = this.painting.height * 16;
        this.state.dx = (parseFloat(this.canvasElement.getAttribute('width')) - paintingWidth)/2;
        this.state.dy = (parseFloat(this.canvasElement.getAttribute('height')) - paintingHeight)/2;
    }

    draw() {
        window.requestAnimationFrame(this.draw);
        const t = Date.now();
        if ((t- this.t) > 30) {
            this.t = t;

            // set transform
            this.canvasContext.setTransform(1, 0, 0, 1, 0, 0);
            this.canvasContext.fillStyle = `rgb(70,70,70)`;
            this.canvasContext.fillRect(0, 0, this.canvasElement.width, this.canvasElement.height);

            this.canvasContext.setTransform(
                this.state.scale,
                0,
                0,
                this.state.scale,
                this.state.dx,
                this.state.dy,
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

    translate(dx: number, dy: number){
        this.state.dx += dx;
        this.state.dy += dy;
    }

    // ********************
    // input event handlers
    // ********************
    onPointerDown(e: PointerEvent){
        e.preventDefault();
        switch(e.button) {
            case 0:
                break;
            case 1:
                this.state.dragging = true;
                break;
            case 2:
                break;
            default:
                break;
        }
    }

    onPointerMove(e: PointerEvent){
        if (this.state.dragging == true) {
            this.translate(e.movementX, e.movementY)
        }
    }

    onPointerUp(e: PointerEvent){
        switch(e.button) {
            case 0:
                break;
            case 1:
                this.state.dragging = false;
                break;
            case 2:
                break;
            default:
                break;
        }
    }

    onPointerCancel(e: PointerEvent){
        console.log(e);
    }

    onWheel(e: WheelEvent){
        e.preventDefault();
        let point = this.canvasContext.getTransform().inverse().transformPoint(e);
        let ds = e.deltaY * 0.002;
        if (this.state.scale - ds < 0.5) {
            ds = this.state.scale - 0.5
        } else if (this.state.scale - ds > 6) {
            ds = this.state.scale - 6
        }
        this.state.scale -= ds;
        this.translate(ds * point.x, ds * point.y)
    }
}

export default Controller;
