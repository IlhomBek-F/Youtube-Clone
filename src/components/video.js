import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Playvideo from "./Playvideo";
import WatchVideo from "./WatchVideo";
import { useStateValue } from "../components/StateProvider";
import Header from "./header";
function Video({ item, setHeaderChange }) {
  const {
    src,
    image,
    title,
    avatar,
    channel,
    like,
    dislike,
    views,
    timestamps,
    subscriber,
    videoViews,
    videoText,
  } = item;
  const [{ videoList }, dispatch] = useStateValue();
  const [videoData, setVideoData] = useState("");
  const handleVideo = () => {
    dispatch({
      type: "ADD__TO__VIDEOLIST",
      item: {
        src: src,
        title: title,
        avatar: avatar,
        channel: channel,
        videoText: videoText,
        subscriber: subscriber,
        like: like,
        dislike: dislike,
        videoViews: videoViews,
      },
    });
    setHeaderChange(true);
  };

  return (
    <Link to="/watch:watchvideo" className="channel__link">
      <div className="videoCard" onClick={handleVideo}>
        <img src={image} className="videoCard__thumbnail " />

        <div className="video__info">
          <Avatar className="video__avatar" src={avatar} />
          <div className="video__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} {timestamps}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Video;
