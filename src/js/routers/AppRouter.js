import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'; 

import Home from '../components/home/home';
import ChatClient from '../components/ChatClient/ChatClient';
import NotFound from '../components/404/404';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/ciphyr" component={ChatClient} exact />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>  
    );
};

export default AppRouter;