// Contrib
import React, { useReducer, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; 

// State - related
import appReducer from '../../reducers/appReducer';
import AppContext from '../../context/AppContext';
import initState from './initState';

// Comps
import ChatComp from '../chatcomp/ChatComp';
import SidebarComp from '../sidebarcomp/SidebarComp';

const ChatClient = () => {

    const [ state, dispatch ] = useReducer(appReducer, initState);

    // useEffect(() => {
    //     if(localStorage.getItem('state')) {
    //         dispatch( { type: 'SET_STATE', isSet: true } );
    //     } else {
    //         dispatch( { type: 'SET_STATE', isSet: false } );
    //     }
    // }, []);

    return (
        <div className='ChatClient'>
            <AppContext.Provider value={ { state, dispatch } }>
                <SidebarComp />
                <ChatComp />
            </AppContext.Provider>
        </div>
    );
};

export default ChatClient;