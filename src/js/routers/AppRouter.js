import React from 'react';
import { NavLink, Link, Switch, BrowserRouter, Route } from 'react-router-dom'; 

import Home from '../components/home/home';
import Chat from '../components/chat/chat';

const AppRouter = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/chat" component={Chat} />
        </Switch>
    </BrowserRouter>  
    );
};

export default AppRouter;