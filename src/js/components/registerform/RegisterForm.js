// Contrib
import React, { useContext } from 'react';

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
            <input placeholder='Your public name...'></input>

            <h3>Masterkey</h3>
            <input placeholder='Your masterkey...'></input>

            <button>Start chatting</button>
        </div>
    );
  };
  
  export default RegisterForm;