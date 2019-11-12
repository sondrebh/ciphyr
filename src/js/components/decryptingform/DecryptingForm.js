// Contrib
import React, { useContext, useEffect, useState } from 'react';

// Custom
import { ciphEncrypt, ciphDecrypt } from '../../helpers/helpers'

// Context
import AppContext from '../../context/AppContext';

const DecryptingForm = props => {

    const { state, dispatch } = useContext(AppContext);

    const [ localState, setLocalState ] = useState({ str: '', index: 0 });

    const encryptedSavedStateArr = localStorage.getItem('state').split(',');

    const decrypt = index => {
        ciphDecrypt([encryptedSavedStateArr[index]], state.masterkey).then(str => {        
            if(index && (index % 500 === 0)) {
                setTimeout(() => {
                    setLocalState({ str: localState.str + str, index: localState.index + 1 });
                }, 1);
            } else {
                setLocalState({ str: localState.str + str, index: localState.index + 1 });
            }
        }, () => {
            alert('Decrypt failed');
        });
    }

    useEffect(() => {
        setTimeout(()=>{
            decrypt(localState.index);
        }, 20)
    }, []);

    useEffect(()=>{
        if(encryptedSavedStateArr.length === localState.index) {
            dispatch( { type: 'LOAD_STATE_COMPLETE', str: localState.str } );
        } else {
            decrypt(localState.index);
        }
    });

    return (
        <div className='DecryptingForm'>
            <p>{localState.str}</p>
        </div>
    );
  };
  
  export default DecryptingForm;