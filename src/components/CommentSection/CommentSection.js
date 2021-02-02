import React from "react";
import Comment from "../Comment/Comment";
import SubHeading from "../SubHeading/SubHeading";
import "./CommentSection.css";

export default function CommentSection(props) {
  const comments = props.comments.map((comment, i) => (
    <Comment
      key={i}
      name={comment.name}
      comment={comment.comment}
      date={comment.date}
    />
  ));

  return (
    <div className="comment-section">
      <SubHeading text="Comments" />
      <ul className="comments">{comments}</ul>
    </div>
  );
}
