import React from "react";
import ReactDOM from "react-dom";
import UserContext from "../../contexts/UserContext";
import { BrowserRouter } from "react-router-dom";

import Pagination from "./Pagination";

it("renders", () => {
  const value = {
    currentPage: 1,
    results: {
      unions: ["union1", "union2"],
      pageCount: 1,
      count: 0,
    },
    pageNeighbors: 0,
    handleClick: () => {},
  };

  const div = document.createElement("div");

  ReactDOM.render(
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Pagination />
      </BrowserRouter>
    </UserContext.Provider>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
