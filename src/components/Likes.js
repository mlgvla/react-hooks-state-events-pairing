import React from "react";

const Likes = ({ upvotes, downvotes, onUpvote, onDownvote }) => {
  function handleUpvote() {
    onUpvote((upvotes) => upvotes + 1);
  }

  function handleDownvote() {
    onDownvote((downvotes) => downvotes + 1);
  }
  return (
    <div>
      <button onClick={handleUpvote}>
        <small>{upvotes}👍</small>
      </button>
      <button onClick={handleDownvote}>
        <small>{downvotes}👎</small>
      </button>
    </div>
  );
};

export default Likes;
