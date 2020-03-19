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
  export const createUserProfileDocument = async (userAuth , additionalData)=>{
    if(!userAuth) return ; 
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
      const {displayName, email } = userAuth; 
      const createdAt = new Date() ; 
      try{
        userRef.set({displayName, email , createdAt ,...additionalData})

      }catch(error){
        console.log("creating user error", error.message)

      }

    }
    return userRef
  }

  export default firebase;