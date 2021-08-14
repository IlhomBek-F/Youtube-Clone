import React from "react";
import SearchResult from "./SearchResult";
import TuneIcon from "@material-ui/icons/Tune";
import Data from "./videoAPI";
function SearchYoutube({ setHeaderChange }) {
  return (
    <div className="search">
      <div className="filter responsive__filter">
        <TuneIcon className="tune__icon" />
        <h2>FILTERS</h2>
      </div>

      {Data[0].search.map((item) => {
        return <SearchResult item={item} setHeaderChange={setHeaderChange} />;
      })}
      <hr className="search__hr" />
      <h3>Learn while you are at home</h3>
      {Data[0].home.map((item) => {
        return <SearchResult item={item} setHeaderChange={setHeaderChange} />;
      })}
    </div>
  );
}

export default SearchYoutube;
