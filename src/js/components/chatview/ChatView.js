// Contrib
import React, { useContext } from 'react';
import uuid from 'uuid'

// Context
import AppContext from '../../context/AppContext';

// Comps
import Message from '../message/Message';

const ChatView = () => {

    const { state, dispatch } = useContext(AppContext);

    return (
      <div className='ChatView'>

        { state.currentRoom.messages.map( message => (
          <Message 
            mine={state.myName === message.name ? 'true' : null }
            key={uuid()}
            text={message.decryptedMessage}
            name={message.name}
            recieved={message.recieved}
          />
        ))}

      </div>
    );
  };
  
  export default ChatView;