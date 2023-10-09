// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeD2yzYKI8iovk0i4OoXCJGm4-bN6ka3g",
  authDomain: "my-asm-9.firebaseapp.com",
  projectId: "my-asm-9",
  storageBucket: "my-asm-9.appspot.com",
  messagingSenderId: "640899603015",
  appId: "1:640899603015:web:e12ee92ccc2131f70faf62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;