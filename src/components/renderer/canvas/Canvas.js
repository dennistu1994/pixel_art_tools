// @flow
import React from 'react'
import Controller from './controller/Controller';
import './style.scss';

type Props = {};
export class CanvasRenderer extends React.Component<Props> {

    canvasElement: HTMLCanvasElement;
    controller: Controller;

    constructor(){
        super();
        this.controller = new Controller();
    }

    onCanvasReady(canvasElement: HTMLCanvasElement) {
        this.canvasElement = canvasElement;
        this.controller.onCanvasReady(canvasElement);
    }

    render(){
        return <canvas id="canvas_renderer" ref={this.onCanvasReady.bind(this)} />
    }
}
