import React from "react";
import { GoVerified } from "react-icons/go";

import "./LeftPanel.css";

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
                position: "relative",
                top: "-17px",
                left: "70px",
                color: "#00a0f0",
              }}
            />
          )}

          <p>
            {user.position} | {user.class}
          </p>
        </div>
        <div className="leftPanelItems">
          <button onClick={() => updateUser({})}>Logout</button>
        </div>
      </div>
  );
};

export default LeftPanel;
