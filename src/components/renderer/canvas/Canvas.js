import React from 'react'
import Controller from './controller/Controller';
import './style.scss';

export class CanvasRenderer extends React.Component {

    constructor(props){
        super(props);
        this.canvasElement = null;
        this.controller = new Controller(this);
    }

    onCanvasReady(canvasElement) {
        this.canvasElement = canvasElement;
        this.controller.onCanvasReady(canvasElement);
    }

    render(){
        return <canvas id="canvas_renderer" ref={this.onCanvasReady.bind(this)} />
    }
}
