import * as firebasee from 'firebase';

const config = {
    apiKey: "AIzaSyD4E--AdR3ENP91ecWtRHBkXM8c9gBsarc",
    authDomain: "ciphyr-234bc.firebaseapp.com",
    databaseURL: "https://ciphyr-234bc.firebaseio.com",
    projectId: "ciphyr-234bc",
    storageBucket: "ciphyr-234bc.appspot.com",
    messagingSenderId: "878800143764",
    appId: "1:878800143764:web:f427f80deeca3c485d7b81"
};

firebasee.initializeApp(config);

const firebase = firebasee.database();

export default firebase;