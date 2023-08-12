// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa972zK7SrAQ_JFngPP6yhIPbKw_evtnQ",
  authDomain: "e-clone-8c223.firebaseapp.com",
  projectId: "e-clone-8c223",
  storageBucket: "e-clone-8c223.appspot.com",
  messagingSenderId: "905182001178",
  appId: "1:905182001178:web:0405a0b8ab6c5503f939a3",
  measurementId: "G-28FVRNFB8R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth(app);

export { auth, db }
export default app