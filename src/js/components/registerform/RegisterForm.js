// Contrib
import React, { useContext } from 'react';

import { ciphDecrypt, ciphEncrypt } from '../../helpers/helpers';

// logoClean
import logoClean from '../../../icons/logoClean.svg'

// Context
import AppContext from '../../context/AppContext';

const RegisterForm = props => {

    const { state, dispatch } = useContext(AppContext);

    return (
        <div className='RegisterForm'>
            <img src={logoClean}></img>
            <h1>WELCOME TO CIPHYR.IO</h1>
            <p>To get started, please configure your client.</p>

            <h3>Public name</h3>
            <input 
                placeholder='Ex: MonkeyBoy333'
                value={state.registerFormData.publicName}
                onChange={ e => dispatch( {type: 'UPDATE_PUBLIC-NAME-FIELD', text: e.target.value } ) }
            />

            <h3>Masterkey</h3>
            <input 
                placeholder='Ex: HD91H2891HOH9'
                value={state.registerFormData.masterKey}
                onChange={ e => dispatch( {type: 'UPDATE_MASTER-KEY-FIELD', text: e.target.value } ) }
                onKeyDown={ e => {
                      if (e.key === 'Enter') {
                        dispatch( { type: 'REGISTER-USER-DATA' } );
                      }
                }}
            />

            <button onClick={ () => dispatch( { type: 'REGISTER-USER-DATA' } ) }>Start chatting</button>
        </div>
    );
  };
  
  export default RegisterForm;