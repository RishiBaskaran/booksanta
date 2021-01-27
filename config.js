import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyA74w1Y3BGi7Y9ovl1C-XkIDupyCWpksL8",
    authDomain: "book-santa-2b5c5.firebaseapp.com",
    projectId: "book-santa-2b5c5",
    storageBucket: "book-santa-2b5c5.appspot.com",
    messagingSenderId: "893849813929",
    appId: "1:893849813929:web:76b428e4a87f7c3eba3ab8"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()