// Contrib
import React, { useContext, useEffect, useState } from 'react';
import simpleEncryptor from 'simple-encryptor';

// Context
import AppContext from '../../context/AppContext';

const DecryptingForm = props => {

    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        let encryptor = simpleEncryptor(state.masterkey);
        if(encryptor.decrypt(localStorage.getItem('state'))) {
            dispatch( { type: 'LOAD_STATE_COMPLETE', str: encryptor.decrypt(localStorage.getItem('state')) } );
        } else {
            alert('Couldn\'t decrypt data, refresh to try another key, or click OK to start fresh!');
            dispatch( { type: 'START_FRESH' } );
        }
    }, []);

    return (
        <div className='DecryptingForm'>
            <p>Decrypting..</p>
        </div>
    );
  };
  
  export default DecryptingForm;