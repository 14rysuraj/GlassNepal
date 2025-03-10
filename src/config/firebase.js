// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBe4en3GBZNjClCf717L7DAgD4A0fz7VbA",
  authDomain: "glassnepal-f0d51.firebaseapp.com",
  projectId: "glassnepal-f0d51",
  storageBucket: "glassnepal-f0d51.firebasestorage.app",
  messagingSenderId: "221055668854",
  appId: "1:221055668854:web:a6bef43e875e89a6578557",
  measurementId: "G-3W4BZR8LGG"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const google = new GoogleAuthProvider();
export const db = getFirestore(app);