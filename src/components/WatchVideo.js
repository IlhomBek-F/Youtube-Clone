import React, { useState } from "react";
import Playvideo from "./Playvideo";
import VideoCollection from "./VideoCollection";
import Comment from "./comment";
function WatchVideo({ videoData, headerChange, setHeaderChange }) {
  const useComments = [{ text: "You can add comment...", userName: "User" }];
  const [value, setValue] = useState("");
  const [commentCounter, setCommentCounter] = useState(1);
  const [comments, setComment] = useState(useComments);
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const commentHandle = () => {
    let commentValue = { text: value, userName: "User" };
    setComment([commentValue, ...comments]);
    setCommentCounter(commentCounter + 1);
    console.log(commentCounter);
    setValue("");
  };

  const cancelHandle = () => {
    setValue("");
  };

  return (
    <div className="show">
      <Playvideo
        value={value}
        handleInput={handleInput}
        cancelHandle={cancelHandle}
        commentHandle={commentHandle}
        comments={comments}
        commentCounter={commentCounter}
        headerChange={headerChange}
      />
      <VideoCollection
        headerChange={headerChange}
        setHeaderChange={setHeaderChange}
      />
    </div>
  );
}

export default WatchVideo;
