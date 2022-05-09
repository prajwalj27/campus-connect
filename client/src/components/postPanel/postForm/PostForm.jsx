import React, { useState } from "react";
import axios from "axios";

import "./PostForm.css";

const PostForm = ({ user }) => {
  const [postData, setPostData] = useState({
    author: user.name,
    content: "",
    image: "",
  });

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/posts/new",
        postData
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }

    setPostData({ author: user.name, content: "", image: "" });
  };

  const onChange = (value) => {
    return setPostData((prev) => {
      return { ...prev, ...value };
    });
  };

  return (
    <div className="postForm">
      <div className="inputContainer">
        <img
          src={user.profile}
          alt="user"
        />
        <div className="postInput">
          <input
            type="text"
            placeholder="Post a new Event..."
            value={postData.content}
            onChange={(e) => onChange({ content: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter image url"
            value={postData.image}
            onChange={(e) => onChange({ image: e.target.value })}
          />
        </div>
      </div>
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default PostForm;

