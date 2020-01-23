// @flow
import React from 'react';
import './style.scss';
import LeftRail from './LeftRail';
import { IconContext } from "react-icons";

type Props = {}
export class UILayer extends React.Component<Props> {

    render(){
        return <IconContext.Provider value={{
            color: "#ddd",
            size: '30px',
        }}>
            <div id="ui_layer_root">
                <LeftRail />
            </div>
        </IconContext.Provider>;
    }
}
