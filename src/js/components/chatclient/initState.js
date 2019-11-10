const initState = {
    myName: 'Sondre',
    masterkey: '',
    isSet: false,
    load: false,
    rooms: [],
    currentRoom: {
        id: 'IUAHDSUIASHUISAHCSAIP0',
        name: 'Frank',
        key: 'SECRETER',
        messages: [
            {
                name: 'Frank',
                recieved: '15:29',
                decryptedMessage: 'Hei dette er fra frank :)',
                rawMessage: [ 'OIHJEWD98QWYH', 'AUISDGAISUD', '8U9AHS98' ]
            }
        ],
        inputField: ''
    },
    registerFormData: {
        publicName: '',
        masterKey: '',
        roomName: '',
        roomKey: ''   
    }
};

export default initState;