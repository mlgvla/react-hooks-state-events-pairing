import React from "react";

const Comment = ({ user, comment }) => {
  return (
    <div>
      <h3>{user}</h3>
      {comment}
    </div>
  );
};

export default Comment;
