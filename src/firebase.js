import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIyxvtUpCtTXv4BjUwZUxED0JJO7qCWHE",
  authDomain: "clone-e25e2.firebaseapp.com",
  projectId: "clone-e25e2",
  storageBucket: "clone-e25e2.appspot.com",
  messagingSenderId: "305681067757",
  appId: "1:305681067757:web:3a46b8c97c4f5be4fb26e4",
  measurementId: "G-TLJD7PE8QB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};