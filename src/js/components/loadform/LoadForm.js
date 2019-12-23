// Contrib
import React, { useContext, useState } from 'react';

// Context
import AppContext from '../../context/AppContext';

const LoadForm = props => {

    const { state, dispatch } = useContext(AppContext);
    const [ inputVal, setInputVal ] = useState('');

    const formValidate = () => {
        if(inputVal && inputVal.length >= 16) {
            dispatch( { type: 'LOAD_STATE_START', masterKey: inputVal } );
        } else {
            alert('The key needs to be at least 16 characters long!');
        }
    };

    return (
        <div className='LoadForm'>
            <h1>DATA FOUND</h1>
            <p>Saved data was found, enter your masterkey to decrypt and load the stored data.</p>

            <h3>Masterkey</h3>
            <input 
                placeholder='Ex: IOSJF02IF0J3209F...'
                value={inputVal}
                onChange={ e => setInputVal(e.target.value) }
                onKeyDown={ e => {
                      if (e.key === 'Enter') {
                        formValidate();
                      }
                }}
            />

            <button onClick={ () => formValidate() }>Load config</button>
            <button onClick={ () => dispatch( { type: 'START_FRESH' } ) }>Or start fresh</button>
        </div>
    );
  };
  
  export default LoadForm;