import React, { Component } from 'react';
import Form from './components/Form/Form'
import CommentList from './components/CommentList/CommentList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        '初期コメント'
      ]
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment) {
    this.setState({
      comments: [...this.state.comments, comment]
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.addComment} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
