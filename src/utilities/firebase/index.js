import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// debugger;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Mot-X13KcOTG0OCtIIexjg4zIyO6SQk",
  authDomain: "sara-fashion-db.firebaseapp.com",
  databaseURL: "https://sara-fashion-db.firebaseio.com",
  projectId: "sara-fashion-db",
  storageBucket: "sara-fashion-db.appspot.com",
  messagingSenderId: "491416672316",
  appId: "1:491416672316:web:50e1ff0c96a0173598cb39",
  measurementId: "G-6BGR1D6Y6E",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log("snapShot=", snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//  -- setting up google authentication utility --
// this will give us access to new Google auth provider class from the authentication library
const provider = new firebase.auth.GoogleAuthProvider();

// Triggers the google pop up whenever we use 'googleAuthProvider-->provider' for authentication and sign in
provider.setCustomParameters({ prompt: "select_account" });
provider.setCustomParameters({
  login_hint: "user@example.com",
});

// To sign in with a pop-up window, call signInWithPopup
// 'signInWithPopup' takes the 'provider' class we made and we pass through the provider in the following method

export const signInWithGoogle = () => auth.signInWithPopup(provider);

// in case we want whole firebase
export default firebase;

// enable google authetication from firebase
// now to go firenase--> authentication ans click 'sign-in method', enable google and choose a support email
// after that we can use this in our signIn component.
