import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'; 

import Home from '../components/home/home';
import ChatClient from '../components/ChatClient/ChatClient';
import NotFound from '../components/404/404';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/chat" component={ChatClient} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>  
    );
};

export default AppRouter;