// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhROFZT_00hNlo2hRtzJTIaVpTgS0XxHQ",
  authDomain: "chatapp-79758.firebaseapp.com",
  projectId: "chatapp-79758",
  storageBucket: "chatapp-79758.appspot.com",
  messagingSenderId: "880748959371",
  appId: "1:880748959371:web:4754425e2d42bbfdf9e68e",
  measurementId: "G-282RYLWRDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


// database
export const db = getFirestore(app)
console.log(db)