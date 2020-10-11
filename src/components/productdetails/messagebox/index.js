import React from "react";   
import ChatIcon from '@material-ui/icons/Chat';
import {  MessageBoxWrapper,
  MessageBoxtop,
  Para,
  ReadMoreButton,
  AddCartButton,
  MessageBoxbottom
} from "./styles";

const MessageBox = () => {
  return ( 
      <MessageBoxWrapper>
       <MessageBoxtop> <ChatIcon />       <Para>For product pricing, customization, or other enquiries; </Para>      <ReadMoreButton>Leave Message</ReadMoreButton> </MessageBoxtop>
       <MessageBoxbottom>  <AddCartButton>Add to Cart</AddCartButton> </MessageBoxbottom>
          </MessageBoxWrapper>
      
  );
};

export default MessageBox;
