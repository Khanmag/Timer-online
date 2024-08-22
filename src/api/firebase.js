import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfuKxseDbYi__kFFY92Lo5piP88Hv8cYk",
  authDomain: "react-timer-3dcf5.firebaseapp.com",
  projectId: "react-timer-3dcf5",
  storageBucket: "react-timer-3dcf5.appspot.com",
  messagingSenderId: "799752766597",
  appId: "1:799752766597:web:0f4dceef79c77e6f94d5ec",
  // appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
//
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
//
