// Contrib
import React, { useContext } from 'react';

// Custom
import { CPR } from '../../helpers/helpers';

// Context
import AppContext from '../../context/AppContext';

// plusIcon
import plusIconEnabled from '../../../icons/plusIconEnabled.svg';
import plusIconDisabled from '../../../icons/plusIconDisabled.svg';

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
            key={CPR({ length: 10 })}
          />
        ))}

        <button 
          onClick={ () => dispatch( { type: 'ROOM_ADD' } ) }
          disabled={!state.isSet}
          className={!state.isSet ? 'disabled' : ''}
        >
          {(() => {
            if(state.isSet) {
              return <img src={plusIconEnabled} />
            } else {
              return <img src={plusIconDisabled} />
            }
          })()}
        </button>

        <button 
          onClick={ () => dispatch( { type: 'ROOM_JOIN' } ) }
          disabled={!state.isSet}
          className={!state.isSet ? 'disabled' : ''}
        >
          Join
        </button>
      </div>
    );
  };
  
  export default RoomView;