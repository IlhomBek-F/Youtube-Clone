import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../components/StateProvider";
import Avatar from "@material-ui/core/Avatar";

function ShowVideo({ item, headerChange, setHeaderChange }) {
  const [{ videoList }, dispatch] = useStateValue();

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
    <div>
      <Link to="/watch:watchvideo" className="channel__link">
        <div className="video__list " onClick={handleVideo}>
          <img src={image} width="370px" height="100px" />
          <div className="play__title change">
            <div className="change__list avatar__app">
              <Avatar src={avatar} className="avatar" />
              <h2>{title}</h2>
            </div>

            <h2 className="title__respon">{title}</h2>

            <div className="play__timestamp change__timestamp">
              <p className="res__cha">{channel}</p>
              <p>
                {views} {timestamps}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ShowVideo;
