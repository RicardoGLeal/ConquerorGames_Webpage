import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAX2-9yEg_0DmjYe-H1NsuYwdxr020avL8",
    authDomain: "arte-cg.firebaseapp.com",
    projectId: "arte-cg",
    storageBucket: "arte-cg.appspot.com",
    messagingSenderId: "945945331538",
    appId: "1:945945331538:web:9a53eae8c06a693dfd5c8b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};