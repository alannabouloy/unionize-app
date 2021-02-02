import React from "react";
import UserContext from "../../contexts/UserContext";
import "./TextInput.css";

export default function TextInput(props) {
  const context = React.useContext(UserContext);

  return (
    <div className="textinput">
      <div className="label">
        <label htmlFor="name">Name:</label>
      </div>
      <div className="input">
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Doe"
          onChange={(e) => context.handleNameChange(e)}
          required
        />
      </div>
    </div>
  );
}
