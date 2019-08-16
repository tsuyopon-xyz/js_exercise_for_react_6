import React from 'react';
import './CommentList.css';

const CommentList = (props) => {
  const commentList = props.comments.map((comment, index) => {
    return (
      <li className="CommentList-item" key={index}>{ comment }</li>
    );
  });

  return (
    <div>
      <ul>{ commentList }</ul>
    </div>
  );
};

export default CommentList;
