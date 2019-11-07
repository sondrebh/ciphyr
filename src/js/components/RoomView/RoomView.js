// Contrib
import React, { useContext } from 'react';

// Context
import AppContext from '../../context/AppContext';

// plusIcon
import plusIcon from '../../../icons/plusIcon.svg';

// Comps
import Room from '../room/room';

const RoomView = () => {

    const { state, dispatch } = useContext(AppContext);
    
    return (
      <div className="RoomView">
        <p>Active rooms</p>

        { state.rooms.map( room => (
          <Room 
            room={room}
            key={room.id}
          />
         ))}

        <button onClick={ () => dispatch( { type: 'ROOM_ADD' } ) }>
          <img src={plusIcon} />
        </button>
      </div>
    );
  };
  
  export default RoomView;