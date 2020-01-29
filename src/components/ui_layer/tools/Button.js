// @flow
import React from "react";
import classnames from "classnames";
import "./Button.scss";

type Props = {
  extraClasses?: ?(string[]),
  children: ?React$Node,
  onClick?: () => void
};
export class Button extends React.Component<Props> {
  render() {
    let classNames = classnames("tool_button", this.props.extraClasses);
    return (
      <span className={classNames} onClick={this.props.onClick}>
        {this.props.children}
      </span>
    );
  }
}
