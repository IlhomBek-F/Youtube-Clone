import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { useStateValue } from "../components/StateProvider";

function SearchResult({ item, setHeaderChange }) {
  const {
    src,
    image,
    title,
    avatar,
    channel,
    text,
    like,
    dislike,
    views,
    timestamps,
    subscriber,
    videoViews,
    videoText,
  } = item;
  const [{ videoList }, dispatch] = useStateValue();

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
      <div className="container" onClick={handleVideo}>
        <div className="search__img">
          <img src={image} />
        </div>
        <div className="search__content">
          <div className="search__title">
            <h2>{title}</h2>
            <p>
              {views} {timestamps}
            </p>
          </div>
          <div className="search__name search__name__responsive">
            <Avatar src={avatar} className="channel__icon" />
            <h3>{channel}</h3>
            <CheckCircleIcon className="check__icon" />
          </div>
          <p className="channel__text">{text}</p>
        </div>
      </div>
    </Link>
  );
}

export default SearchResult;
