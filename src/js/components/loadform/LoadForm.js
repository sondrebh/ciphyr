// Contrib
import React, { useContext, useState } from 'react';

// Context
import AppContext from '../../context/AppContext';

const LoadForm = props => {

    const { state, dispatch } = useContext(AppContext);
    const [ inputVal, setInputVal ] = useState('');

    return (
        <div className='LoadForm'>
            <h1>CONFIGURATION FOUND</h1>
            <p>A configuration was found, enter your masterkey to decrypt and load stored data.</p>

            <h3>Masterkey</h3>
            <input 
                placeholder='Ex: HD91H2891HOH9'
                value={inputVal}
                onChange={ e => setInputVal(e.target.value) }
                onKeyDown={ e => {
                      if (e.key === 'Enter') {
                        dispatch( { type: 'LOAD_STATE_START', masterKey: inputVal } );
                      }
                }}
            />

            <button onClick={ () => dispatch( { type: 'LOAD_STATE_START', masterKey: inputVal } ) }>Load config</button>
            <button onClick={ () => dispatch( { type: 'START_FRESH' } ) }>Or start fresh</button>
        </div>
    );
  };
  
  export default LoadForm;