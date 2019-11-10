// Contrib
import React, { useReducer, useEffect } from 'react';

// State - related
import appReducer from '../../reducers/appReducer';
import AppContext from '../../context/AppContext';
import initState from './initState';

// Comps
import ChatComp from '../chatcomp/ChatComp';
import SidebarComp from '../sidebarcomp/SidebarComp';

const ChatClient = () => {

    const [ state, dispatch ] = useReducer(appReducer, initState);

    useEffect(() => {
        if(localStorage.getItem('state') && !state.isSet) {
            dispatch( { type: 'LOAD_STATE' } );
        } else {
            dispatch( { type: 'SET_STATE', isSet: false } );
        }
    }, []);

    useEffect(() => {
        if(state.isSet) {
            localStorage.setItem('state', JSON.stringify(state));
        }
    });

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