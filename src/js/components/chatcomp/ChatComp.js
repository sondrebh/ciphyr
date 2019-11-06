// Contrib
import React from 'react';

// Comps
import ChatView from '../chatview/ChatView';

const ChatComp = () => {
    return (
      <div className='ChatComp'>
        <ChatView />
        <input value='Your message here...'></input>
      </div>
    );
  };
  
  export default ChatComp;