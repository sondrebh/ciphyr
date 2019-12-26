// Contrib
import React from 'react';

const Message = props => {

    return (
      <div className={ props.mine ? 'Message' : 'Message Message--recieved' }>
        <div>
            <h3>{ props.name } { props.mine && '(you)' }</h3><h3>{ props.recieved }</h3>
        </div>
        <p>
            { props.text !== null ? props.text : '--- This message was not decryptable... Do you have the right key? ---' }
        </p>
      </div>
    );z
  };
  
  export default Message;