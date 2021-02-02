import React from "react";
import UserContext from "../../contexts/UserContext";
import "./SearchBar.css";

export default function SearchBar(props) {
  const context = React.useContext(UserContext);

  return (
    <div className="js-search">
      <div className="label">
        <label htmlFor="search-bar">Enter a search term:</label>
      </div>
      <div className="input">
        <input
          id="search-bar"
          type="text"
          placeholder="Search something..."
          onChange={(e) => context.handleSearchBarChange(e)}
        />
      </div>
    </div>
  );
}
