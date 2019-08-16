import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    if (typeof this.props.onClickHandler === "function") {
      this.props.onClickHandler();
    }
  }

  render() {
    return (
      <span
        className="Button-container"
        onClick={this.onClickHandler}
      >
        { this.props.children }
      </span>
    );
  }
}

export default Button;