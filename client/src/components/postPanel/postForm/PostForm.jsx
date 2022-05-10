import React, { useState } from "react";
import axios from "axios";
import { IoSend } from "react-icons/io5";

import "./PostForm.css";

const PostForm = ({ user }) => {
  const [postType, setPostType] = useState("");
  const [postData, setPostData] = useState({
    author: user.name,
    content: "",
    postType: "",
    image: "",
  });

  const handlePostType = (type) => {
    setPostType(type);
  };

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      // if (postType === "") {
      //   alert("Select post type!");
      //   return;
      // }
      if (postData.content === "" && postData.image === "") {
        alert("Can't create an empty post!");
        return;
      }

      const payload = {
        author: user.name,
        content: postData.content,
        postType: postType,
        image: postData.image,
      };
      const response = await axios.post(
        "http://localhost:8080/api/posts/new",
        payload
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }

    setPostData({ author: user.name, content: "", image: "", postType: "" });
  };

  const onChange = (value) => {
    return setPostData((prev) => {
      return { ...prev, ...value };
    });
  };

  return (
    <div className="postForm">
      <div className="inputContainer">
        <img src={user.profile} alt="user" />
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

      {user.isVerified === true ? (
        <div className="postType">
          <p>Is this </p>
          <div
            style={{ visibility: "hidden" }}
            onClick={() => handlePostType("event")}
          >
            Hosting an Event?
          </div>
          <div
            style={{ visibility: "hidden" }}
            onClick={() => handlePostType("post")}
          >
            Creating a New post?
          </div>
          <button onClick={handlePost}>
            Post
            <IoSend style={{ position: "relative", left: "5px", top: "2px" }} />
          </button>
        </div>
      ) : (
        <div className="postType">
          <p>Is this </p>
          <div style={{ visibility: "hidden" }}>Hosting an Event?</div>
          <div style={{ visibility: "hidden" }}>Creating a New post?</div>
          <button onClick={handlePost}>
            Post
            <IoSend style={{ position: "relative", left: "5px", top: "2px" }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default PostForm;
