import { ciphDecrypt } from '../helpers/helpers';

const appReducer = (state, action) => {
    switch (action.type) {
    
      case 'REGISTER-USER-DATA':
        return {
          ...state,
          myName: state.registerFormData.publicName,
          masterkey: state.registerFormData.masterKey,
          isSet: true,
        };

      case 'UPDATE_ROOM-NAME-FIELD':
        return {
          ...state,
          registerFormData: {
            ...state.registerFormData,
            roomName: action.text
          }
        };

      case 'UPDATE_ROOM-KEY-FIELD':
        return {
          ...state,
          registerFormData: {
            ...state.registerFormData,
            roomKey: action.text
          }
        };

      case 'UPDATE_MASTER-KEY-FIELD':
        return {
          ...state,
          registerFormData: {
            ...state.registerFormData,
            masterKey: action.text
          }
        };

      case 'UPDATE_PUBLIC-NAME-FIELD':
        return {
          ...state,
          registerFormData: {
            ...state.registerFormData,
            publicName: action.text
          }
        };

      case 'SET_STATE':
        return {
          ...state,
          isSet: action.isSet
        };

      case 'ROOM_SET_CURRENT':
        return {
          ...state,
          currentRoom: action.room
        };

      case 'ROOM_ADD_CREATE':
        return {
          ...state,
          rooms: [
            {
              id: action.id,
              name: action.name,
              key: action.key,
              messages: [],
              inputField: ''
            },
            ...state.rooms
          ],
          currentRoom: {
            id: action.id,
            name: action.name,
            key: action.key,
            messages: [],
            inputField: ''
          },
          registerFormData: {
            ...state.registerFormData,
            roomName: '',
            roomKey: '' 
          }
        };
      
      case 'ROOM_ADD':
        return {
          ...state,
          currentRoom: 'CreateForm'
        };
        
      case 'INPUT_CHANGE':
        let updatedRooms = state.rooms.map( room => {
          if (room.id === state.currentRoom.id) {
            room.inputField = action.text;
            return room;
          } else {
            return room;
          }
        }); 

        return {
          ...state,
          rooms: [
            ...updatedRooms
          ],
          currentRoom: {
            ...state.currentRoom,
            inputField: action.text
          }
        };

      case 'MESSAGE_SEND':
        let updatedRoomsWithMessages = state.rooms.map( room => {
          if (room.id === state.currentRoom.id) {
            room.inputField = '';
            room.messages = [
              {
                name: state.myName,
                recieved: 'DATEHERE',
                decryptedMessage: action.text,
                rawMessage: [ 'OIHJEWD98QWYH', 'AUISDGAISUD', '8U9AHS98' ]
              }, 
              ...state.currentRoom.messages
            ]
            return room;
          } else {
            return room;
          }
        }); 

        return {
          ...state,
          rooms: [
            ...updatedRoomsWithMessages
          ],
          currentRoom: {
            ...state.currentRoom,
            inputField: '',
            messages: [
              {
                name: state.myName,
                recieved: 'DATEHERE',
                decryptedMessage: action.text,
                rawMessage: [ 'OIHJEWD98QWYH', 'AUISDGAISUD', '8U9AHS98' ]
              },
              ...state.currentRoom.messages
            ]
          }
        };

      case 'LOAD_STATE':
        return {
          ...state,
          load: true
        };
      
      case 'LOAD_STATE_START':
        return {
          ...state,
          masterkey: action.masterKey,
          load: false,
          decrypting: true
        };

      case 'LOAD_STATE_COMPLETE':
        return {
          ...state,
          ...JSON.parse(action.str),
          load: false,
          decrypting: false,
          isSet: true
        };

      case 'START_FRESH':
        return {
          ...state,
          load: false,
          decrypting: false,
          isSet: false
        };

      default:
        return state
    }
};

export default appReducer;