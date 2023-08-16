// Import the functions you need from the SDKs you need
import { Google } from "@mui/icons-material";
import { firebase, initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgUZXSnR5TIPIWTAqnbIhk3NXxg-6iKzo",
  authDomain: "book-store-5cc58.firebaseapp.com",
  projectId: "book-store-5cc58",
  storageBucket: "book-store-5cc58.appspot.com",
  messagingSenderId: "212294410050",
  appId: "1:212294410050:web:b024902e92613e4e8932db",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new firebase.auth.googleAuthProvider();
