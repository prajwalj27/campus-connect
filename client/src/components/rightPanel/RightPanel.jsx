import React from "react";

import "./RightPanel.css";
import logo from "./images/logo.png";
import EventCarousel from "./eventCarousel/EventCarousel";

const rooms = [
  {
    id: 1,
    name: "General",
    usersOnline: 3,
  },
  {
    id: 2,
    name: "Sports",
    usersOnline: 0,
  },
  {
    id: 3,
    name: "Exams",
    usersOnline: 4,
  },
  {
    id: 4,
    name: "Doubts",
    usersOnline: 1,
  },
];

const RightPanel = ({ user }) => {
  const roomsList = () => {
    return rooms.map((room) => {
      return (
        <a
          href={`http://localhost:3001/chat?name=${user.name}&room=${room.name}`}
          target="_blank"
          className="roomLinks"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div key={room.id} className="chatRooms">
            <p># {room.name}</p>
            <p className="roomDesc">{room.usersOnline} users online</p>
          </div>
        </a>
      );
    });
  };

  return (
    <div className="rightPanelOuter">
      <div className="rightPanel">
        <div className="carousel">
          <EventCarousel />
        </div>
        <div className="chat">
          <h3>Join Chat Rooms</h3>
          {roomsList()}
        </div>
      </div>
      <div className="otherLinks">
        <p>More features coming soon!</p>
        <p>
          <a href="...">About</a>
          <a href="...">Accessibility</a>
          <a href="...">Privacy Policy</a>
        </p>
        <p>
          <a href="...">Help Center</a>
          <a href="...">Cookie Policy</a>
        </p>
        <p>
          <a href="...">Terms of Service</a>
          <a href="...">Advertising</a>
        </p>
        <p>
          <a href="...">More...</a>
        </p>
        <p>
          <span className="brand">
            <img src={logo} alt="brand" />
            Campus<span>Connect </span>
          </span>
          TE COMP B &#169; 2022
        </p>
      </div>
    </div>
  );
};

export default RightPanel;
