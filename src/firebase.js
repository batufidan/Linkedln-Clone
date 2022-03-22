import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMb7NuT4bjrQ41mwXWSPevAqTb8D_mSMQ",
    authDomain: "linkedin-clone-d33de.firebaseapp.com",
    projectId: "linkedin-clone-d33de",
    storageBucket: "linkedin-clone-d33de.appspot.com",
    messagingSenderId: "569198963841",
    appId: "1:569198963841:web:372ad8309a98009d227180",
    measurementId: "G-8PRVKL0X3C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;