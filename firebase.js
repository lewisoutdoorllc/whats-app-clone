import firebase from '/firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvjCpj2GToS00-XfGl-dpSMf9MWhA2v7o",
    authDomain: "whatsapp-chat-clone-87e58.firebaseapp.com",
    projectId: "whatsapp-chat-clone-87e58",
    storageBucket: "whatsapp-chat-clone-87e58.appspot.com",
    messagingSenderId: "604719792754",
    appId: "1:604719792754:web:c2a7b5e9cf2a3ef76138eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoggleRedirect = () => signInWithRedirect(auth, googleProvider);




export const auth = getAuth(app);
export { app, db, googleProvider };