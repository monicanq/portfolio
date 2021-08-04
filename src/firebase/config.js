import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "domain",
    databaseURL: "https://monica-navarro.firebaseio.com",
    projectId: "monica-navarro",
    storageBucket: "storage",
    messagingSenderId: "id",
    appId: "id"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };