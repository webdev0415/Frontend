import React, { useEffect } from "react";
import { Widget, addResponseMessage, dropMessages } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import io from "socket.io-client";

import logo from "./logo192.png";
import { Livechat } from "./styles";
import { useState } from "react";

const socket = io.connect("https://immense-river-10142.herokuapp.com/");
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
  let index = list.findIndex(id => id == socket.id);
  if(index !== -1){
   list.splice(index, 1)
  }
  return (
    <div
      className="card p-2"
      style={{
        position: "fixed",
        right: "50px",
        bottom: "100px",
        height: "350px",
        width: "250px",
        overflowY: "auto",
      }}
    >
      <h5 style={{color: '#0d97ff'}}>Users Listing</h5>
      <ul className="list-group" style={{ border: 0 }}>
        {list &&
          list.map((room) => (
            <li
              className="d-flex align-items-center px-2 py-1"
              key={room}
              onClick={() => join(room)}
              style={{
                border: 0,
                borderBottom: "1px solid #ccc",
                wordBreak: 'break-word'
              }}
            >
              <img src="https://s3.amazonaws.com/37assets/svn/765-default-avatar.png" className="mr-2"  width="30" height="30"/>
              {room}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LiveChat;
