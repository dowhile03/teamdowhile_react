import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-0yI5h9_hPjDf_-jKe7w3LSkP0He8Q00",
  authDomain: "teamdowhile03.firebaseapp.com",
  databaseURL: "https://teamdowhile03.firebaseio.com",
  projectId: "teamdowhile03",
  storageBucket: "teamdowhile03.appspot.com",
  messagingSenderId: "600225555475",
  appId: "1:600225555475:web:a1e5fe17f60e2db43c8be6",
  measurementId: "G-193KGVRXQR"
});

var db = firebaseApp.firestore();
var auth = firebase.auth();
var storage = firebase.storage()

export {db,auth,storage};