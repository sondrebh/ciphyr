// Contrib
import React, { useContext, useEffect, useState } from 'react';

// Custom
import { ciphEncrypt, ciphDecrypt } from '../../helpers/helpers'

// Context
import AppContext from '../../context/AppContext';

const DecryptingForm = props => {

    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        dispatch({ type: 'LOAD_STATE_COMPLETE', str: localStorage.getItem('state') });
    }, []);

    return (
        <div className='DecryptingForm'>
            <p>Decrypting..</p>
        </div>
    );
  };
  
  export default DecryptingForm;