import firebase from 'firebase/app' ;
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  
    apiKey: "AIzaSyB6_BXo0UM7q30hWhAJD7Qn5JUqH3APdo4",
    authDomain: "crwn-db-2f0fe.firebaseapp.com",
    databaseURL: "https://crwn-db-2f0fe.firebaseio.com",
    projectId: "crwn-db-2f0fe",
    storageBucket: "crwn-db-2f0fe.appspot.com",
    messagingSenderId: "802693313471",
    appId: "1:802693313471:web:fa879e18d68944f707a70a",
    measurementId: "G-E0QMVNL9D8"
  

};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;