// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyBb4zz4qICm-P6A9J4x-_I-U1cKMDdfEFY",
    authDomain: "facebook-clone-fe309.firebaseapp.com",
    databaseURL: "https://facebook-clone-fe309.firebaseio.com",
    projectId: "facebook-clone-fe309",
    storageBucket: "facebook-clone-fe309.appspot.com",
    messagingSenderId: "884585451285",
    appId: "1:884585451285:web:acde13712a6a407c1de31c",
    measurementId: "G-PBH9WC3J14"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;
