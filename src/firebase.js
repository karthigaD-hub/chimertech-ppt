// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Copy your config from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyBMV_XYj7q2MGqMAz2KApTiW8pmPvVq9hQ",
  authDomain: "chimertech123.firebaseapp.com",
  projectId: "chimertech123",
  storageBucket: "chimertech123.firebasestorage.app",
  messagingSenderId: "905098277804",
  appId: "1:905098277804:web:7eca8009ebc3beef508009"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
