// Contrib
import React, { useContext } from 'react';

// Custom 
import AppContext from '../../context/AppContext';

// Logo
import logoSvg from '../../../icons/ciphyrLogo.svg';

// Comps
import RoomView from '../RoomView/RoomView';

const SidebarComp = () => { 

    const { state, dispatch } = useContext(AppContext);

    return (
      <div className='SidebarComp'>
        <img src={logoSvg} />
        <RoomView />
        {(() => {
          if(typeof state.currentRoom.id !== 'undefined' && state.currentRoom.id !== '-') {
            return (
              <div className="RoomInfo">
                <p className="title">Current room</p>
                <button className="btnLeave" onClick={() => dispatch({ type: 'ROOM_DROP' })}>Leave room</button>
                <button onClick={() => alert(state.currentRoom.key)}>Show key</button>
                <p>Room ID: <span>{state.currentRoom.id}</span></p>
              </div>
            );
          }
        })()}
      </div>
    );
  };
  
  export default SidebarComp;