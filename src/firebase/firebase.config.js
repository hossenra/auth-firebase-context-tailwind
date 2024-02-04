// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8PAKxSKdv46rxBlxxLPOM52rD65t2nEk",
  authDomain: "auth-firebase-context-ta-dcb57.firebaseapp.com",
  projectId: "auth-firebase-context-ta-dcb57",
  storageBucket: "auth-firebase-context-ta-dcb57.appspot.com",
  messagingSenderId: "1046758325562",
  appId: "1:1046758325562:web:a6b51e85d5d273db716403",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
