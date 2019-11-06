import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const SidebarComp = () => {

    const { state, dispatch } = useContext(AppContext);
  
    return (
      <div>
        <h1>Hi Im SidebarComp bro</h1>
        <p>{state.text}</p>
      </div>
    );
  };
  
  export default SidebarComp;