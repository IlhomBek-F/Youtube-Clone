import React from "react";
import Data from "./videoAPI";
import ShowVideo from "./ShowVideo";

function VideoCollection({ headerChange, setHeaderChange }) {
  return (
    <div className="playlist">
      <div className="header__btn hide">
        <button>All</button>
        <button>Javascript</button>
        <button>Courses</button>
        <button>Mixes</button>
      </div>

      {Data[0].playList.map((item) => {
        return (
          <ShowVideo
            item={item}
            headerChange={headerChange}
            setHeaderChange={setHeaderChange}
          />
        );
      })}
    </div>
  );
}

export default VideoCollection;
