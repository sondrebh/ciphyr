const initState = {
    myName: '',
    masterkey: '',
    isSet: false,
    load: false,
    decrypting: false,
    rooms: [],
    currentRoom: {
        id: '-',
        name: 'Frank',
        key: 'SECRETER',
        messages: [
            {
                id: "ssdas",
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
    },
    chatViewKey: 'foijfoijf'
};

export default initState;