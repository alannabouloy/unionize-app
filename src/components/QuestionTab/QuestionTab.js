import React from "react";
import "./QuestionTab.css";

export default function QuestionTab(props) {
  return (
    <div className="question">
      <h3>{props.question}</h3>
      {props.answer}
    </div>
  );
}
