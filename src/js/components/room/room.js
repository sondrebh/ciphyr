// Contrib
import React, { useContext } from 'react';

// Context
import AppContext from '../../context/AppContext';

const Room = props => {

    const { state, dispatch } = useContext(AppContext);

    return (
        <button 
            className={ props.room.id === state.currentRoom.id ? 'Room Room--active' : 'Room' }
            onClick={ () => dispatch( { type: 'ROOM_SET_CURRENT', room: props.room } ) }
        >
            {props.room.name}
        </button>
    );
  };
  
  export default Room;