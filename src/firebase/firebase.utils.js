import firebase from "firebase/app";
import "firebase/auth" ; 
import  "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBKFCWe0TNpgunPd-J674LCGxZ9QfxmuII",
    authDomain: "elmarssa.firebaseapp.com",
    databaseURL: "https://elmarssa.firebaseio.com",
    projectId: "elmarssa",
    storageBucket: "elmarssa.appspot.com",
    messagingSenderId: "455238288572",
    appId: "1:455238288572:web:52f6995344465a7fd57cb9",
    measurementId: "G-GJWQ1J8NXR"
  

  };

  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const createCollecionOfDocument =async  (collectionKey, collectionToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch();
  collectionToAdd.forEach(collection => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef,collection)
  })
  return await batch.commit()
}
export const convetCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  return  transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {})
  
}
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
      await userRef.set({displayName, email , createdAt ,...additionalData})

    }catch(error){
      console.log("creating user error", error.message)

    }

  }
  return userRef
}

export default firebase;