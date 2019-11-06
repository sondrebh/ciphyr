import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const RoomView = () => {

    const { state, dispatch } = useContext(AppContext);
  
    return (
      <div>
        <h1>Hi Im RoomView bro</h1>
        <p>{state.text}</p>
      </div>
    );
  };
  
  export default RoomView;