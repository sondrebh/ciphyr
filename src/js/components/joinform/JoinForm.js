// Contrib
import React, { useContext, useState, useEffect } from 'react';
import { CPR } from '../../helpers/helpers';
import fbHandler from '../../firebase/actions';

// Context
import AppContext from '../../context/AppContext';

const JoinForm = props => {

    const { state, dispatch } = useContext(AppContext);

    const [ nameInputVal, setNameInputVal ] = useState('');
    const [ keyInputVal, setKeyInputVal ] = useState('');
    const [ idInputVal, setIDInputVal ] = useState('');

    fbHandler.setDispatch(dispatch);

    return (
        <div className='CreateForm'>
            <h1>JOINING NEW ROOM</h1>
            <input
                placeholder='Room ID...'
                value={idInputVal}
                onChange={ e => setIDInputVal(e.target.value) }
            />
            <p>Enter roomID here to connect</p>
            <h3>Room name</h3>
            <input 
                placeholder='Only viewable by you...'
                value={nameInputVal}
                onChange={ e => setNameInputVal(e.target.value) }
            />

            <h3>Room encryption key</h3>
            <input 
                placeholder='Decryption key...'
                value={keyInputVal}
                onChange={ e => setKeyInputVal(e.target.value) }
                onKeyDown={ e => {
                      if (e.key === 'Enter') {
                        fbHandler.roomJoin(idInputVal, nameInputVal, keyInputVal);
                      }
                }}
            />

            <button 
                onClick={ () => fbHandler.roomJoin(idInputVal, nameInputVal, keyInputVal) }
            >
                Join
            </button>
        </div>
    );
  };
  
  export default JoinForm;