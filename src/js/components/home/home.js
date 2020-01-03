import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Home = () => (
    <div>
        <h1>This is Ciphyr.IO</h1>
        <h2>Let's go!</h2>
        <NavLink to="/ciphyr/chat">Chat</NavLink>
    </div>
);

export default Home;