import React from "react";
import QuestionTab from "../QuestionTab/QuestionTab";
import "./QuestionSection.css";

export default function QuestionSection(props) {
  const questions = props.questions.map((question, i) => (
    <li key={i}>
      <QuestionTab question={question.question} answer={question.answer} />
    </li>
  ));

  return (
    <div className="question-section">
      <ul className="questions">{questions}</ul>
    </div>
  );
}
