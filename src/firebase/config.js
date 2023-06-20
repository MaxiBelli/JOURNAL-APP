// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDplAwHuLG3gkw33zdwR0VwmJaw1rXumSo",
  authDomain: "journal-app-mb.firebaseapp.com",
  projectId: "journal-app-mb",
  storageBucket: "journal-app-mb.appspot.com",
  messagingSenderId: "650094820095",
  appId: "1:650094820095:web:fffa34df97683a3ce06aca",
  measurementId: "G-KHGZ0M0FGX",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
