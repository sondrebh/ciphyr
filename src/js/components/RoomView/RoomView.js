// Contrib
import React from 'react';

// plusIcon
import plusIcon from '../../../icons/plusIcon.svg';

// Comps
import Room from '../room/room';

const RoomView = () => {
    return (
      <div className="RoomView">
        <p>Active rooms</p>

        <Room active='true'>Eddie Morra</Room>
        <Room>Max</Room>
        <Room>Erik</Room>

        <button>
          <img src={plusIcon} />
        </button>
      </div>
    );
  };
  
  export default RoomView;