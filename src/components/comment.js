import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { useStateValue } from "../components/StateProvider";

function Comment({ item }) {
  const { userName } = item;
  return (
    <div className="user__com">
      <div className="user__avatar">
        <Avatar src="https://avatars.githubusercontent.com/u/72074602?v=4" />
      </div>
      <div className="user__comment">
        <h1 className="user__name">{userName}</h1>
        <p className="user__comment__text">{item.text}</p>
        <div className="like__comment">
          <ThumbUpIcon className="comment__icon" />
          <ThumbDownIcon className="comment__icon" />
          <h3 className="comment__reply">Reply</h3>
        </div>
      </div>
    </div>
  );
}

export default Comment;
