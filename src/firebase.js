
//import { initializeApp } from "firebase/app";
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyC-d62hHG1llOtKZowZgUjYaIpM084OHDE",
  authDomain: "clone-c846c.firebaseapp.com",
  projectId: "clone-c846c",
  storageBucket: "clone-c846c.appspot.com",
  messagingSenderId: "67065459281",
  appId: "1:67065459281:web:16b675b55a8a61b837fe70"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}