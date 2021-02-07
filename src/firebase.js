import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBJBAEUjaz_TGq2C8m4h8hCtQvXcEXA5Ss",
    authDomain: "facebook-clone-5e0d7.firebaseapp.com",
    projectId: "facebook-clone-5e0d7",
    storageBucket: "facebook-clone-5e0d7.appspot.com",
    messagingSenderId: "292363048509",
    appId: "1:292363048509:web:3b2a2db4923b4b4e597c54"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;