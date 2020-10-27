import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

import logo from './logo192.png';
import { 
  Livechat
} from "./styles"

const ws = new WebSocket("ws://icarus.codes:9001/");

ws.onmessage = function(e) {
  addResponseMessage(e.data);
};

function LiveChat() {
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    ws.send(newMessage);
  };

    return (
     <Livechat>
        <Widget
          handleNewUserMessage={handleNewUserMessage}
         profileAvatar={logo}
          title="React eCom site"
          subtitle="And my cool subtitle"
        />
      </Livechat>
    );
}

export default LiveChat;