import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const ChatComp = () => {

    const { state, dispatch } = useContext(AppContext);
  
    return (
      <div>
        <h1>Hi Im ChatComp bro</h1>
      </div>
    );
  };
  
  export default ChatComp;