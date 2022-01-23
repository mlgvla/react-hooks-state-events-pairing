import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments, showComments }) => {
  const commentList = comments.map((comment) => (
    <Comment key={comment.id} user={comment.user} comment={comment.comment} />
  ));

  return (
    <div>
      <h2>{showComments ? `${comments.length} Comments` : null}</h2>
      {showComments ? commentList : null}
    </div>
  );
};

export default CommentList;
