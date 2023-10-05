// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdODQaudG_Ss3OcP_72s4WjDxeBHMns98",
  authDomain: "the-dragon-news-68dd5.firebaseapp.com",
  projectId: "the-dragon-news-68dd5",
  storageBucket: "the-dragon-news-68dd5.appspot.com",
  messagingSenderId: "336975245436",
  appId: "1:336975245436:web:a3166b653096be69a759f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app