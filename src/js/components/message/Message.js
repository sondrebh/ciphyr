// Contrib
import React from 'react';

const Message = props => {
    return (
      <div className={ props.mine ? 'Message' : 'Message Message--recieved' }>
        <div>
            <h3>{ props.name } { props.mine && '(you)' }</h3><h3>{ props.recieved }</h3>
        </div>
        <p>
            { props.text }
        </p>
      </div>
    );
  };
  
  export default Message;