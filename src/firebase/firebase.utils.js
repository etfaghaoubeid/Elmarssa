import firebase from "firebase/app";
import "firebase/auth" ; 
import  "firebase/firestore"

const  firebaseConfig = {
    apiKey: "AIzaSyBKFCWe0TNpgunPd-J674LCGxZ9QfxmuII",
    authDomain: "elmarssa.firebaseapp.com",
    databaseURL: "https://elmarssa.firebaseio.com",
    projectId: "elmarssa",
    storageBucket: "elmarssa.appspot.com",
    messagingSenderId: "455238288572",
    appId: "1:455238288572:web:e1ad440011a29e7cd57cb9",
    measurementId: "G-WGCCZGNWB6"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new  firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'})
  export const signInWithGoogle = ()=>auth.signInWithPopup(provider); 

  export default firebase;