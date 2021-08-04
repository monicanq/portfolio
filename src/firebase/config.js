import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD3CE6uWfyjCnL3u-ib3MUCLSWomHIyZLE",
    authDomain: "monica-navarro.firebaseapp.com",
    databaseURL: "https://monica-navarro.firebaseio.com",
    projectId: "monica-navarro",
    storageBucket: "monica-navarro.appspot.com",
    messagingSenderId: "864212194756",
    appId: "1:864212194756:web:bb76d44737cf2a166b0091"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };