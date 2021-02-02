import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import FAQPage from "./FAQPage";

it("renders", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <FAQPage />
    </BrowserRouter>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
