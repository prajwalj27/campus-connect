import React from "react";
import { Link } from "react-router-dom";
import { GoVerified } from "react-icons/go";
import { HiHashtag, HiBell } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { BiCalendarEvent } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";

import "./LeftPanel.css";
import MyEvents from "./myEvents/MyEvents";

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
        {/* <div className="myEvents">
          <MyEvents />
        </div> */}
        <Link to="/" className="leftPanelLinks">
          <FaUserAlt className="leftPanelIcon userIcon" /> Profile
        </Link>
        <Link to="/" className="leftPanelLinks">
          <HiBell className="leftPanelIcon bellIcon" /> Notifications
        </Link>
        <Link to="/" className="leftPanelLinks">
          <HiHashtag className="leftPanelIcon exploreIcon" /> Explore
        </Link>
        <Link to="/" className="leftPanelLinks">
          <BiCalendarEvent className="leftPanelIcon eventsIcon" /> My Events
        </Link>
        <Link to="/" className="leftPanelLinks">
          <BsFillBookmarkFill className="leftPanelIcon saveIcon" /> Saved Items
        </Link>
        <button onClick={() => updateUser({})}>Logout</button>
      </div>
      <div className="more">Discover more</div>
    </div>
  );
};

export default LeftPanel;
