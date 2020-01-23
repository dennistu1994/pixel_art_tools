// @flow
import Button from './Button';
import React from 'react';
import {MdCenterFocusWeak} from 'react-icons/md';

class ResetViewport extends Button {
    renderButtonContent(){
        return <MdCenterFocusWeak />
    }
}
export default ResetViewport;
