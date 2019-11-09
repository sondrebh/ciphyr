import React, { useContext } from 'react';

// Context
import AppContext from '../../context/AppContext';

// Comps
import RegisterForm from '../registerform/RegisterForm';
import ChatView from '../chatview/ChatView';

const ChatComp = () => {

    const { state, dispatch } = useContext(AppContext);

    const renderChatComp = () => {
      if(state.isSet) {
        return (
          <>
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
          </>
        );
      } else {
        return <RegisterForm />
      }
    }
    return (
      <div className='ChatComp'>
        {renderChatComp()}
      </div>
    );
  };
  
  export default ChatComp;