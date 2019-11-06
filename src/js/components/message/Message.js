// Contrib
import React from 'react';

const Message = props => {
    return (
      <div className={ props.mine ? 'Message' : 'Message Message--recieved' }>
        <div>
            <h3>Namehere { props.mine && '(you)' }</h3><h3>14:39</h3>
        </div>
        <p>
            Hei bro! Denne meldingen er kryptert, men du burde kunne se den her. np
            :p pleier å bare finne inspirasjon fra dribble, i det tilfellet her var det selve
            dribble som komførst haha kryptert, men du burde kunne se den her. np
            :p pleier å bare finne inspirasjo
        </p>
      </div>
    );
  };
  
  export default Message;