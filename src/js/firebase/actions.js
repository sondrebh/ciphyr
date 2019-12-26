import firebase from './firebase';
import simpleEncryptor from 'simple-encryptor';

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
    },

    roomCreate(roomID, roomName, key) {
        this.dispatch({
            type: 'ROOM_ADD_CREATE',
            id: roomID,
            name: roomName,
            key: key 
        });

        firebase.ref().child(roomID).set({
            messages: 'empty'
        });
    },

    messageSend(roomID, myName, text, key) {

        const encryptor = simpleEncryptor(key);

        firebase.ref(roomID).child('messages').set({
            [myName]: {
                text: encryptor.encrypt(text),
                date: new Date()
            }
        }).then().catch((e) => {alert(e)});

        this.dispatch( { type: 'MESSAGE_SEND', text: text } );
    }

};

export default fbHandler;