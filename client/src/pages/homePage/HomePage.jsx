import React from "react";

import LeftPanel from "../../components/leftPanel/LeftPanel";
import PostPanel from "../../components/postPanel/PostPanel";
import RightPanel from "../../components/rightPanel/RightPanel";
import "./HomePage.css";

const HomePage = ({ user, updateUser }) => {
  return (
    <div className="homePage">
      <div className="homepageContainer">
        <LeftPanel user={user} updateUser={updateUser} />
        <PostPanel user={user} />
        <RightPanel user={user} />
      </div>
    </div>
  );
};

export default HomePage;
