// @flow
import React from "react";
import CanvasRenderer from 'components/renderer/canvas';
import UILayer from 'components/ui_layer';
type Props = {};
export class Scaffold extends React.Component<Props> {
    render(){
        return <>
            <CanvasRenderer />
            <UILayer />
        </>
    }
}
