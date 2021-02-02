import React from "react";
import ReactDOM from "react-dom";

import CommentSection from "./CommentSection";

it("renders", () => {
  const div = document.createElement("div");
  const comments = [
    {
      comment: "a comment",
      name: "name",
      date: "2021-02-02T16:40:50.617Z",
    },
  ];

  ReactDOM.render(<CommentSection comments={comments} />, div);

  ReactDOM.unmountComponentAtNode(div);
});
