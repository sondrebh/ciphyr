// Contrib
import React, { useContext, useState } from 'react';

// Custom
import fbHandler from '../../firebase/actions';

// Context
import AppContext from '../../context/AppContext';

// Comps
import DecryptingForm from '../decryptingform/DecryptingForm';
import LoadForm from '../loadform/LoadForm';
import CreateForm from '../createform/CreateForm';
import JoinForm from '../joinform/JoinForm';
import RegisterForm from '../registerform/RegisterForm';
import ChatView from '../chatview/ChatView';

const ChatComp = () => {

    const { state, dispatch } = useContext(AppContext);
    const [ inputField, setInputField ] = useState('');

    fbHandler.setDispatch(dispatch);

    const handleSend = e => {
      switch (e.target.value) {

        // Room commands
        case '/room clear':
          fbHandler.roomClear(state.currentRoom.id, state.myName, state.currentRoom.key);
          setInputField('');
          break;
      
        // Default case
        default:
          fbHandler.messageSend(state.currentRoom.id, state.myName, e.target.value, state.currentRoom.key);
          setInputField('');
          break;
      }
    };

    return (
      <div className='ChatComp'>

        {
          (() => {
            if(state.isSet && !state.rooms.length < 1 && state.currentRoom !== 'CreateForm' && state.currentRoom !== 'JoinForm') {
              return (
                <>
                  <ChatView key={state.chatViewKey} />
                  <input 
                    placeholder='Your message here...'
                    value={ inputField }
                    onChange={ e => setInputField(e.target.value) }
                    onKeyDown={ e => {
                      if (e.key === 'Enter') {
                        handleSend(e);
                      }
                    }}
                  />
                </>
              );
            } 

            if(!state.isSet && !state.load && !state.decrypting) {
              return <RegisterForm />
            }

            if(state.currentRoom === 'CreateForm') {
              return <CreateForm />
            }

            if(state.currentRoom === 'JoinForm') {
              return <JoinForm />
            }

            if(state.load) {
              return <LoadForm />
            }

            if(state.decrypting) {
              return <DecryptingForm />
            }

          })()
        }
        
      </div>
    );
  };
  
  export default ChatComp;