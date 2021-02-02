import React from "react";
import UserContext from "../../contexts/UserContext";
import "./Dropdown.css";

export default function Dropdown(props) {
  const context = React.useContext(UserContext);
  const industries = context.industries.map((industry, i) => (
    <option key={i} value={industry.industry}>
      {industry.industry}
    </option>
  ));
  return (
    <div className="js-drop">
      <div className="label">
        <label htmlFor="dropdown">Filter by Industry:</label>
      </div>
      <div className="input">
        <select id="dropdown" onChange={(e) => context.handleDropdownChange(e)}>
          <option value="">Choose Industry</option>
          {industries}
        </select>
      </div>
    </div>
  );
}
