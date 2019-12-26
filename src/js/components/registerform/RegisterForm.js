// Contrib
import React, { useContext } from 'react';

// logoClean
import logoClean from '../../../icons/logoClean.svg'

// Context
import AppContext from '../../context/AppContext';

const RegisterForm = props => {

    const { state, dispatch } = useContext(AppContext);

    const formValidate = () => {

        const { publicName, masterKey } = state.registerFormData;

        if(publicName.length > 0 && masterKey.length >= 16) {
            dispatch({ type: 'REGISTER-USER-DATA' });
        } else {
            alert('Error: public name must be set and master key must be at least 16 characters long');
        }
    };

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
                        formValidate();
                      }
                }}
            />

            <button onClick={() => formValidate()}>Start chatting</button>
        </div>
    );
  };
  
  export default RegisterForm;