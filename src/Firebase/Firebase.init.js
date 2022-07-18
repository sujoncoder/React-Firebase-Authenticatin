// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcAcjCQEN6DXCEVZBWwNI7hWUCYhkQgoM",
  authDomain: "react-firebase-authentic-abe16.firebaseapp.com",
  projectId: "react-firebase-authentic-abe16",
  storageBucket: "react-firebase-authentic-abe16.appspot.com",
  messagingSenderId: "512622941888",
  appId: "1:512622941888:web:1688245ba280518bdabf25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;