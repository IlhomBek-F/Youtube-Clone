import React from "react";
import Video from "./video";
import Data from "./videoAPI";
import CloseIcon from "@material-ui/icons/Close";
import "../components/responsive.css";
function RecommendedVideos({ setHeaderChange }) {
  return (
    <div className="recommended">
      <hr />
      <div className="header__btn">
        <button>All</button>
        <button>Javascript</button>
        <button>Courses</button>
        <button>Mixes</button>
        <button className="responsive__header__btn">Conversation</button>
        <button>Android</button>
        <button className="responsive__header__btn">
          Consumer Electronics
        </button>
        <button>Music</button>
        <button className="responsive__header__btn">Computers</button>
      </div>
      <hr className="responsive__hr" />
      <div className="recommended__videos">
        {Data[0].recommended.map((item) => {
          return <Video item={item} setHeaderChange={setHeaderChange} />;
        })}
      </div>
      <hr className="bold" />
      <div className="covid">
        <h2>COVID-19 news</h2>
        <CloseIcon className="close" />
      </div>
      <div className="recommended__videos">
        {Data[0].covid.map((item) => {
          return <Video item={item} setHeaderChange={setHeaderChange} />;
        })}
      </div>
      <hr className="bold" />
      <br />
      <br />
      <div className="recommended__videos">
        {Data[0].english.map((item) => {
          return <Video item={item} setHeaderChange={setHeaderChange} />;
        })}
      </div>
    </div>
  );
}

export default RecommendedVideos;
