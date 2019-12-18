import firebase from './firebase';

const fbHandler = {

    // firebaseHandler settings and inits

    dispatch: null,

    setDispatch(dpFunc) {
        this.dispatch = dpFunc;
    },

    // firebaseHandler actions

    roomJoin(roomID, roomName, key) {
        firebase.ref(roomID+'/messages').once('value').then(snapshot => {
            if(snapshot.exists()) {
                this.dispatch({
                    type: 'ROOM_ADD_JOIN',
                    id: roomID,
                    name: roomName,
                    key: key 
                });

                this.dispatch({ type: 'MESSAGE_SEND', text: snapshot.val() });
            } else {
                alert('This room doesn\'t exist, are you sure you have the right ID?');
            }
        }).catch(() => {
            alert('Failed to join room! Try again...');
        });
    }

};

export default fbHandler;