import React from "react";
import PostForm from "./postForm/PostForm";
import Posts from "./posts/Posts";

import "./PostPanel.css"

const PostPanel = ({user}) => {
  return (
    <div className="postPanel">
      {user.isVerified === true && <PostForm user={user} /> }
      <Posts user={user} />
    </div>
  );
};

export default PostPanel;
