import React from "react";
import "./SubHeading.css";

export default function SubHeading(props) {
  return (
    <div className="subheading">
      <h3>{props.text}</h3>
    </div>
  );
}
