import React from "react";
import ReactDOM from "react-dom";

import CommentForm from "./CommentForm";

it("renders", () => {
  const div = document.createElement("div");

  ReactDOM.render(<CommentForm />, div);

  ReactDOM.unmountComponentAtNode(div);
});
