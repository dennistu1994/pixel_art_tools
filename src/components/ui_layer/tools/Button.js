// @flow
import React from 'react';
import classnames from 'classnames'
import './style.scss';

type Props = {};
class Button extends React.Component<Props> {

    extraClasses(){}

    constructor(props: Props){
        super(props);
    }

    renderButtonContent():React$Element<any>|string{
        return 'not implemented';
    }

    render(){
        let buttonContent = this.renderButtonContent();
        let classNames = classnames(
            'tool_button',
            this.extraClasses(),
        )
        return <span className={classNames}>
            {buttonContent}
        </span>;
    }
}
export default Button;
