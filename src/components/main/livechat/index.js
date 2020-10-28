import React, { useEffect } from "react";
import { Widget, addResponseMessage, dropMessages } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import io from "socket.io-client";

import logo from "./logo192.png";
import { Livechat } from "./styles";
import { useState } from "react";

const socket = io.connect("http://localhost:3001");
socket.on("message", (data) => addResponseMessage(data.message));

function LiveChat() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [users, setUsers] = useState([]);

  socket.on("list.room", (users) => {
    setUsers(users);
  });

  socket.on("join", (room) => {
    dropMessages();
    setSelectedRoom(room);
  });

  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    socket.emit("message", { room: selectedRoom, message: newMessage });
  };

  const joinRoom = (room) => {
    socket.emit("join", room);
  };

  return (
    <Livechat>
      {selectedRoom && (
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar={logo}
          title="React eCom site"
          subtitle="And my cool subtitle"
        />
      )}
      <RoomList list={users} join={joinRoom} />
    </Livechat>
  );
}

const RoomList = ({ list, join }) => {
  return (
    <div
      className="card p-2"
      style={{
        position: "fixed",
        right: "50px",
        bottom: "100px",
        height: "250px",
        width: "200px",
        overflowY: "auto",
      }}
    >
      <h5>Users Listing</h5>
      <ul className="list-group">
        {list &&
          list.map((room) => (
            <li
              key={room}
              onClick={() => join(room)}
              className="list-group-item"
            >
              {room}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LiveChat;
