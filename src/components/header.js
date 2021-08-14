import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MicIcon from "@material-ui/icons/Mic";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Avatar from "@material-ui/core/Avatar";
import "./responsive.css";
import { Link } from "react-router-dom";
function Header({ headerChange, setHeaderChange }) {
  const handleHeader = () => {
    setHeaderChange(false);
    console.log(headerChange);
  };

  return (
    <div className={headerChange ? "header header__color" : "header "}>
      <div className="header__left">
        <MenuIcon className="menu__icon" />
        <Link className="channel__link" to="/" onClick={handleHeader}>
          <img
            className="header__logo"
            src="https://www.izogadventure.com/wp-content/uploads/2018/06/Untitled-design-1.png"
          />
          {headerChange ? (
            <div className="youtube">
              <YouTubeIcon className="youtube__icon" />
              <h1>YouTube</h1>
            </div>
          ) : (
            <img
              src="https://graph.digiseller.ru/img.ashx?idd=2491615"
              className="header__responsive__logo"
            />
          )}
        </Link>
      </div>
      <div className="header__input">
        <div className="header__in ">
          <input
            type="text"
            placeholder="Search"
            className={headerChange ? "color__input" : " watch__input"}
          />
          <Link to="/search:searchterm">
            <SearchIcon
              className={
                headerChange
                  ? "white__icon header__inputBtn"
                  : "header__inputBtn"
              }
            />
          </Link>
        </div>
        <MicIcon className="mic responsive__mic" />
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon responsive__video" />
        <AppsIcon className="header__icon responsive__appIcon" />
        <NotificationsIcon className="header__icon responsive__notification" />
        <Avatar
          className="header__icon"
          src="https://avatars.githubusercontent.com/u/72074602?v=4"
        />
      </div>
    </div>
  );
}

export default Header;
