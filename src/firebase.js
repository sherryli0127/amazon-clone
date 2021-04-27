import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD65Rx1KgOS2M3YjePrQ4ZxYD7OWI5JybA",
  authDomain: "challenge-af53d.firebaseapp.com",
  projectId: "challenge-af53d",
  storageBucket: "challenge-af53d.appspot.com",
  messagingSenderId: "803101080927",
  appId: "1:803101080927:web:2d91d9c9874da6798a0aea",
  measurementId: "G-QYM28YN7KJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
