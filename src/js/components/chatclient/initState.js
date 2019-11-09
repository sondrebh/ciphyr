const initState = {
    myName: 'Sondre',
    masterkey: '',
    isSet: false,
    rooms: [
        {
            id: 'U9ISAH8979S998ASHD980',
            name: 'Max',
            key: 'SECRET',
            messages: [
                {
                    name: 'Maximilian',
                    recieved: '14:59',
                    decryptedMessage: 'Hei bro :)',
                    rawMessage: [ 'OIHJEWD98QWYH', 'AUISDGAISUD', '8U9AHS98' ]
                }
            ],
            inputField: "Hei jeg vet eikk... vent litt"
        },
        {
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
            inputField: "Your message here..."
        }
    ],
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
        inputField: "Your message here..."
    }
};

export default initState;