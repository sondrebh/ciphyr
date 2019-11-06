import React from 'react';
import { NavLink, Link } from 'react-router-dom'; 

const NotFound = () => {
    return (
        <div>
            <p>Sorry, couldn't find this page!</p>
            <NavLink to="/">Go home</NavLink>
        </div>
    );
}

export default NotFound;