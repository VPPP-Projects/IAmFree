// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfwZFAm7pzF0_YTAfcP_V3W4OAtRwcxLY",
  authDomain: "iamfree-598ae.firebaseapp.com",
  databaseURL: "https://iamfree-598ae-default-rtdb.firebaseio.com",
  projectId: "iamfree-598ae",
  storageBucket: "iamfree-598ae.appspot.com",
  messagingSenderId: "50450187295",
  appId: "1:50450187295:web:6c5ec0c6adf690b77c412a",
  measurementId: "G-DX9BY6XJ6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase= () => {
    return app;
}
