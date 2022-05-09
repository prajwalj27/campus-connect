import React from "react";
import { GoVerified } from "react-icons/go";

import "./LeftPanel.css";
import MyEvents from "./myEvents/MyEvents"

const LeftPanel = ({ user, updateUser }) => {
  return (
    <div className="leftPanel">
      <div className="userinfo">
        <div className="userBanner"></div>
        <img src={user.profile} alt="user" />
        <h3>{user.name} </h3>
        {user.isVerified && (
          <GoVerified
            style={{
              position: "absolute",
              top: "145px",
              left: "338px",
              color: "#00a0f0",
            }}
          />
        )}

        <p>
          {user.position} | {user.class}
        </p>
      </div>
      <div className="leftPanelItems">
        <div className="myEvents">
          <MyEvents />
        </div>
        <button onClick={() => updateUser({})}>Logout</button>
      </div>
    </div>
  );
};

export default LeftPanel;
