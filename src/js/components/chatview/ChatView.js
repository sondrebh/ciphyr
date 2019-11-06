// Contrib
import React from 'react';

// Comps
import Message from '../message/Message';

const ChatView = () => {
    return (
      <div className='ChatView'>
        <Message mine='true' />
        <Message />
      </div>
    );
  };
  
  export default ChatView;