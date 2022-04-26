import React from "react";

import "./RightPanel.css";

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
    <div className="rightPanel">
      <div className="chat">
        <h3>Join Chat Rooms</h3>
        {roomsList()}
      </div>
    </div>
  );
};

export default RightPanel;
