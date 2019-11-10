// Contrib
import React, { useContext, useEffect } from 'react';

// Custom
import { ciphEncrypt, ciphDecrypt } from '../../helpers/helpers'

// Context
import AppContext from '../../context/AppContext';

const DecryptingForm = props => {

    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        ciphDecrypt(localStorage.getItem('state').split(','), state.masterkey).then(str => {
            dispatch( { type: 'LOAD_STATE_COMPLETE', str } );
        }, () => {
            alert('Decrypt failed');
        });
    }, []);

    return (
        <div className='DecryptingForm'>
            <h3>Decrypting stored data. <br></br> Please wait...</h3>
        </div>
    );
  };
  
  export default DecryptingForm;