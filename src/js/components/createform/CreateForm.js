// Contrib
import React, { useContext, useState, useEffect } from 'react';
import { CPR } from '../../helpers/helpers';

// Custom
import fbHandler from '../../firebase/actions';

// Context
import AppContext from '../../context/AppContext';

const CreateForm = props => {

    const { state, dispatch } = useContext(AppContext);

    const [ roomID, setRoomID ] = useState(CPR({length: 8}));

    fbHandler.setDispatch(dispatch);

    const handleCreate = () => {
        fbHandler.roomCreate(roomID, state.registerFormData.roomName, state.registerFormData.roomKey);
    };

    const formValidate = () => {

        const { roomName, roomKey } = state.registerFormData;

        if(roomName.length > 0 && roomKey.length >= 16) {
            handleCreate();
        } else {
            alert('Error: room name must be set and encryption key must be at least 16 characters long');
        }
    };

    return (
        <div className='CreateForm'>
            <h1>CREATING NEW ROOM</h1>
            <h2>{roomID}</h2>
            <p>Copy this ID and send it to your friends. This will let them connect to the room.</p>
            <h3>Room name</h3>
            <input 
                placeholder='Only viewable by you...'
                value={state.registerFormData.roomName}
                onChange={ e => dispatch( {type: 'UPDATE_ROOM-NAME-FIELD', text: e.target.value } ) }
            />

            <h3>Room encryption key</h3>
            <input 
                placeholder='Decryption key...'
                value={state.registerFormData.roomKey}
                onChange={ e => dispatch( {type: 'UPDATE_ROOM-KEY-FIELD', text: e.target.value } ) }
                onKeyDown={ e => {
                      if (e.key === 'Enter') {
                        formValidate();
                      }
                }}
            />

            <button 
                onClick={ () =>  formValidate()}
            >
                Create room
            </button>
        </div>
    );
  };
  
  export default CreateForm;