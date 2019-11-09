const appReducer = (state, action) => {
    switch (action.type) {
    
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

      case 'ROOM_ADD':
        return {
          ...state,
          rooms: [
            {
              id: 'IUQHWFD98QWH',
              name: 'Newroom',
              key: 'AUI9SHD89',
              messages: [
                  {
                      name: 'Frank',
                      recieved: '15:29',
                      decryptedMessage: 'Hei dette er fra frank :)',
                      rawMessage: [ 'OIHJEWD98QWYH', 'AUISDGAISUD', '8U9AHS98' ]
                  }
              ],
              inputField: "Your message here..."
            },
            ...state.rooms
          ]
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

      default:
        return state
    }
};

export default appReducer;