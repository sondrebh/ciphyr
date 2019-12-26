// Contrib
import React, { useContext, useEffect } from 'react';
import uuid from 'uuid'

// Custom
import fbHandler from '../../firebase/actions';

// Context
import AppContext from '../../context/AppContext';

// Comps
import Message from '../message/Message';

const ChatView = () => {

    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
      fbHandler.setDispatch(dispatch);
      fbHandler.roomSubscribe(state.currentRoom.id, state.currentRoom.key);

      return () => {
        fbHandler.roomUnsubscribe(state.currentRoom.id);
      };
    }, []);

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