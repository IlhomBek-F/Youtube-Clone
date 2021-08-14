import React, { useState } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ReplyIcon from "@material-ui/icons/Reply";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Avatar from "@material-ui/core/Avatar";
import { useStateValue } from "../components/StateProvider";
import SortIcon from "@material-ui/icons/Sort";
import Comment from "./comment";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import CloseIcon from "@material-ui/icons/Close";
import reducer from "./Reducer";
function Playvideo({
  headerChange,
  value,
  handleInput,
  cancelHandle,
  commentHandle,
  comments,
  commentCounter,
}) {
  const [{ videoList }, dispatch] = useStateValue();
  const {
    title,
    src,
    subscriber,
    like,
    dislike,
    videoViews,
    videoText,
    channel,
    avatar,
  } = videoList[0].item;

  const [comment, setComment] = useState(true);

  const handleComment = () => {
    setComment(false);
  };

  const handleClose = () => {
    setComment(true);
  };
  return (
    <div className="play play__responsive">
      <iframe
        className="fix__responsive__frame fix__frame"
        src={src}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="like__dislike">
        <div className="title__play responsive__title__play">
          <h2>{title}</h2>
          <p>{videoViews}</p>
        </div>
        <div className="share">
          <div className="border__grey">
            <ThumbUpIcon className="All" />
            <h2>{like}</h2>
            <ThumbDownIcon className="All" />
            <h2>{dislike}</h2>
          </div>

          <ReplyIcon className="reply All" />
          <h2>SHARE</h2>
          <PlaylistAddIcon className="All" />
          <h2>SAVE</h2>
          <MoreHorizIcon className="All" />
        </div>
      </div>
      <hr />
      <div className="subscribe">
        <div className="img">
          <Avatar src={avatar} className="avatar" />
          <div className="content">
            <h2 className="title">{channel}</h2>
            <p className="subs__count">{subscriber} subscribers</p>
            <p className="content__title">{videoText}</p>
            <h2 className="show__more">SHOW MORE</h2>
          </div>
        </div>

        <div className="sub__btn">
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <hr />
      <div className="comment">
        <div className="comment__sort">
          <h2>{commentCounter} Comments </h2>
          {headerChange ? (
            <div className="responsive__comment comment__app">
              {comment ? (
                <UnfoldMoreIcon onClick={handleComment} />
              ) : (
                <CloseIcon onClick={handleClose} />
              )}
            </div>
          ) : (
            ""
          )}
          <div className="sort__comment sort">
            <SortIcon className="sort__icon" />
            <h3>Sort By</h3>
          </div>
        </div>
        <div className={comment ? " hide__comment " : "comment__form"}>
          <div className="user__avatar">
            <Avatar src="https://avatars.githubusercontent.com/u/72074602?v=4" />
          </div>
          <div className="comment__in">
            <div className="comment__input">
              <input
                type="text "
                placeholder="Add a public comment..."
                value={value}
                onChange={handleInput}
              />
            </div>
            {value !== "" ? (
              <div className="comment__btn">
                <button className="can__com__btn can" onClick={cancelHandle}>
                  cancel
                </button>
                <button onClick={commentHandle} className="can__com__btn com">
                  comment
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={comment ? "none__responsive" : ""}>
        {comments.map((item) => {
          return <Comment item={item} />;
        })}
      </div>
    </div>
  );
}

export default Playvideo;
