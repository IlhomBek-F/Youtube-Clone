import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import TuneIcon from "@material-ui/icons/Tune";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./responsive.css";
import { Link } from "react-router-dom";
function HeaderSearch({ setHeaderChange }) {
  const handleChange = () => {
    setHeaderChange(false);
  };
  return (
    <div className="header__responsive">
      <div className="header__left">
        <Link className="link" to="/" onClick={handleChange}>
          <img
            src="https://www.seoclerk.com/pics/want59600-1XbChr1520778889.png"
            className="search__responsive__logo"
          />
        </Link>
      </div>

      <div className="search__input">
        <input type="text" placeholder="Search" />
        <Link to="/search:searchterm">
          <TuneIcon className="search__tune__icon" />
        </Link>
      </div>
      <div className="search__dot">
        <MoreVertIcon />
      </div>
    </div>
  );
}

export default HeaderSearch;
