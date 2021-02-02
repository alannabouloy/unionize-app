import React from "react";
import "./SectionHeading.css";

export default function SectionHeading(props) {
  return (
    <div className={`section-heading ${props.className}`}>
      <h2>{props.text}</h2>
    </div>
  );
}
