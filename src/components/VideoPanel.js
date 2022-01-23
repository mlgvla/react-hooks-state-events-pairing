import React from "react";
import Likes from "./Likes";

const VideoPanel = ({
  url,
  title,
  views,
  createdAt,
  upvotes,
  downvotes,
  onUpvote,
  onDownvote,
}) => {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={url}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <small>
        {views} Views | Uploaded {createdAt}
      </small>
      <br />
      <br />
      <Likes
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={onUpvote}
        onDownvote={onDownvote}
      />
    </div>
  );
};

export default VideoPanel;
