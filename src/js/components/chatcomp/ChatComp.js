import React, { useContext } from 'react';

// Context
import AppContext from '../../context/AppContext';

// Comps
import ChatView from '../chatview/ChatView';

const ChatComp = () => {

    const { state, dispatch } = useContext(AppContext);

    return (
      <div className='ChatComp'>
        <ChatView />
        <input 
          value={ state.currentRoom.inputField }
          onChange={ e => dispatch( { type: 'INPUT_CHANGE', text: e.target.value } ) }
          onKeyDown={ e => {
            if (e.key === 'Enter') {
              dispatch( { type: 'MESSAGE_SEND', text: e.target.value } );
            }
          }}
        />
      </div>
    );
  };
  
  export default ChatComp;