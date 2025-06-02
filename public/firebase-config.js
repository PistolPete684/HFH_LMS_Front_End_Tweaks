// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTVCtVoV_34fhS0ye_vpVDi-vw_zmfBvQ",
  authDomain: "habitatlms.firebaseapp.com",
  projectId: "habitatlms",
  storageBucket: "habitatlms.firebasestorage.app",
  messagingSenderId: "737193756301",
  appId: "1:737193756301:web:dc889ded764abdf13a04c4",
  measurementId: "G-03X9VE3Q5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);