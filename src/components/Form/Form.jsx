import React, { Component } from 'react';
import Button from '../Button/Button';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendBodyToParent = this.sendBodyToParent.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    this.setState({
      [field]: event.target.value
    });
  }

  sendBodyToParent() {
    const body = this.state.body.trim();
    if (!body) {
      window.alert('何も入力されていません');
      return;
    }

    this.setState({
      body: ''
    });

    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(body);
    }
  }

  render() {
    return (
      <div>
        <div className="Form-textarea">
          <textarea
            name="body"
            cols="30"
            rows="5"
            value={this.state.body}
            onChange={this.handleChange}
          ></textarea>
        </div>
        <Button onClickHandler={this.sendBodyToParent}>コメントする</Button>
      </div>
    );
  }
}

export default Form;