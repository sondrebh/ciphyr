import * as fb from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4E--AdR3ENP91ecWtRHBkXM8c9gBsarc",
    authDomain: "ciphyr-234bc.firebaseapp.com",
    databaseURL: "https://ciphyr-234bc.firebaseio.com",
    projectId: "ciphyr-234bc",
    storageBucket: "ciphyr-234bc.appspot.com",
    messagingSenderId: "878800143764",
    appId: "1:878800143764:web:f427f80deeca3c485d7b81"
};

fb.initializeApp(config);

const firebaseDb = fb.database();
const firebaseAuth = fb.auth();

export { firebaseDb, firebaseAuth };