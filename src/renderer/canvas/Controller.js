class Controller {
    constructor(canvasComponent){
        this.canvasComponent = canvasComponent;
        this.canvasReady = false;
        this.canvasElement = null;
        this.canvasContext = null;
        this.t = Date.now();
    }

    onCanvasReady(canvasElement){
        this.canvasReady = true;
        this.canvasElement = canvasElement;
        this.canvasContext = canvasElement.getContext('2d');
        this.setSize();
        this.draw = this.draw.bind(this);
        window.requestAnimationFrame(this.draw);
    }

    setSize(){
        let width = window.innerWidth;
        let height = window.innerHeight;

        this.canvasElement.setAttribute("width", width);
        this.canvasElement.setAttribute("height", height);
    }

    draw() {
        window.requestAnimationFrame(this.draw);
        const t = Date.now()
        if ((t- this.t) > 16) {
            this.t = t;
            this.canvasContext.fillStyle = 'green';
            this.canvasContext.fillRect(10, 10, 150, 100);
        }
    }
}

export default Controller;
