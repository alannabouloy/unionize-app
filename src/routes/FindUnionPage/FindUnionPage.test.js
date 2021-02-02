import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import FindUnionPage from "./FindUnionPage";

it("renders", () => {
  const value = {
    error: null,
    industry: "",
    search: "",
    industries: [],
    results: {
      count: 0,
      pageCount: 0,
      unions: [],
    },
    pageNeighbors: 0,
    currentPage: 1,
  };

  const div = document.createElement("div");

  ReactDOM.render(
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <FindUnionPage />
      </BrowserRouter>
    </UserContext.Provider>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
