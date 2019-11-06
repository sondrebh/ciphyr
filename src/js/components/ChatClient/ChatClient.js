// Contrib
import React, { useReducer } from 'react';
import { NavLink, Link } from 'react-router-dom'; 

// State - related
import appReducer from '../../reducers/appReducer';
import AppContext from '../../context/AppContext';
import initState from './initState';

// Comps
import ChatComp from '../ChatComp/ChatComp';
import SidebarComp from '../SidebarComp/SidebarComp';

const ChatClient = () => {

    const [ state, dispatch ] = useReducer(appReducer, initState);

    return (
        <AppContext.Provider value={ { state, dispatch } }>
            <SidebarComp />
            <ChatComp />
        </AppContext.Provider>
    );
};

export default ChatClient;