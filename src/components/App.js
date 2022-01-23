import React, { useState } from "react";
import video from "../data/video.js";
import VideoPanel from "./VideoPanel.js";
import CommentList from "./CommentList.js";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  function handleShowComments() {
    setShowComments((showComments) => !showComments);
  }
  return (
    <div className="App">
      <VideoPanel
        url={video.embedUrl}
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={setUpvotes}
        onDownvote={setDownvotes}
      />
      <br />
      <button onClick={handleShowComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      <hr />
      <CommentList comments={video.comments} showComments={showComments} />
    </div>
  );
}

export default App;
