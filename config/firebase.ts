// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9NHSZROwWhZcAXSqyX4ZW2QgiOyrz1k4",
  authDomain: "skillbridge-da68f.firebaseapp.com",
  projectId: "skillbridge-da68f",
  storageBucket: "skillbridge-da68f.firebasestorage.app",
  messagingSenderId: "397138020623",
  appId: "1:397138020623:web:3c4ebf2c76537d24fed67a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}