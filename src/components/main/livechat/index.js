import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from './logo192.png';
import { 
	Livechat
} from "./styles"

function LiveChat() {
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
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