import firebase  from "firebase";

//import firebase from 'firebase/compat/app';
//import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBZseaqJTjHT6nygWTPDdpfBMPOI7ZWd2Y",
  authDomain: "food-project-420bb.firebaseapp.com",
  projectId: "food-project-420bb",
  storageBucket: "food-project-420bb.appspot.com",
  messagingSenderId: "577531706521",
  appId: "1:577531706521:web:a957d026c90cc954da4c08"
};


if (firebase.apps.length === 0) 
{
    firebase.initializeApp(firebaseConfig);
}

var db = firebase.firestore();
export default db;