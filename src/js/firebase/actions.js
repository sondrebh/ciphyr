import { firebaseDb, firebaseAuth } from './firebase';
import simpleEncryptor from 'simple-encryptor';

const fbHandler = {

    // firebaseHandler settings and inits

    dispatch: null,

    setDispatch(dpFunc) {
        this.dispatch = dpFunc;
    },

    // firebaseHandler actions

    login() {
        firebaseAuth.signInAnonymously().catch(error => {
            alert(error.message);
        });
    },

    roomJoin(roomID, roomName, key) {
        firebaseDb.ref('rooms/'+roomID+'/messages').once('value').then(snapshot => {
            if(snapshot.exists()) {
                this.dispatch({
                    type: 'ROOM_ADD_JOIN',
                    id: roomID,
                    name: roomName,
                    key: key 
                });
            } else {
                alert('This room doesn\'t exist, are you sure you have the right ID?');
            }
        }).catch(() => {
            alert('Failed to join room! Try again...');
        });
    },

    roomCreate(roomID, roomName, key) {
        firebaseDb.ref('rooms').child(roomID).set({
            messages: 0
        }).then(() => {
            this.dispatch({
                type: 'ROOM_ADD_CREATE',
                id: roomID,
                name: roomName,
                key: key 
            });
        }).catch(() => {
            alert('Something went wrong, could not create room...');
        });
    },

    roomClear(roomID, myName, key) {
        firebaseDb.ref('rooms').child(roomID).set({
            messages: 0
        }).then(() => {
            this.dispatch({ type: 'ROOM_MESSAGES_WIPE' });
            this.messageSend(roomID, 'Ciphyr.io', 'This room has been cleared by ' + myName + ' using the command "/room clear".', key);
        }).catch(() => {
            alert('Something went wrong, could not clear room...');
        });
    },

    roomSubscribe(roomID, key) {

        const encryptor = simpleEncryptor(key);

        firebaseDb.ref('rooms/'+roomID+'/messages').on('value', snapshot => {
            if(snapshot.val() !== 0) {
                snapshot.forEach(childSnapshot => {
                    if(childSnapshot.val().name === 'Ciphyr.io') {
                        this.dispatch({ type: 'ROOM_MESSAGES_WIPE' });
                    }
                    
                    this.dispatch( { type: 'MESSAGE_SEND', data: { 
                        id: childSnapshot.key,
                        name: childSnapshot.val().name,
                        text: encryptor.decrypt(childSnapshot.val().text),
                        date: childSnapshot.val().date
                    }});
                });
            }
        });
    },

    roomUnsubscribe(roomID) {
        firebaseDb.ref('rooms/'+roomID+'/messages').off('value');
    },

    messageSend(roomID, myName, text, key) {

        const encryptor = simpleEncryptor(key);

        firebaseDb.ref('rooms/'+roomID).child('messages').push({
            name: myName,
            text: encryptor.encrypt(text),
            date: new Date().getTime()
        }).then(() => {
            // this.dispatch( { type: 'MESSAGE_SEND', text: text } );
        }).catch(() => {
            alert('Could not send message...');
        });
    }

};

export default fbHandler;