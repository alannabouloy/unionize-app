import React from "react";
import ReactDOM from "react-dom";
import UserContext from "../../contexts/UserContext";

import Dropdown from "./Dropdown";

it("renders", () => {
  const value = {
    industries: [],
  };

  const div = document.createElement("div");

  ReactDOM.render(
    <UserContext.Provider value={value}>
      <Dropdown />
    </UserContext.Provider>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
