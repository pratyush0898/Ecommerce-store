import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9pYek-7_spfN3l5Of1iLIx0QuWmnJcxI",
  authDomain: "amzon-469.firebaseapp.com",
  projectId: "amzon-469",
  storageBucket: "amzon-469.appspot.com",
  messagingSenderId: "724096135539",
  appId: "1:724096135539:web:922193c6feb0d50a889506",
  measurementId: "G-1KGHTP156P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, db, auth, provider, signInWithPopup };
