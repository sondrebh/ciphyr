import React from 'react';

const Room = props => {
    return (
        <button className={ props.active ? 'Room Room--active' : 'Room' }>
            {props.children}
        </button>
    );
  };
  
  export default Room;