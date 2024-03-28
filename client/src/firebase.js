// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-e7e2a.firebaseapp.com",
  projectId: "blog-app-e7e2a",
  storageBucket: "blog-app-e7e2a.appspot.com",
  messagingSenderId: "432569190964",
  appId: "1:432569190964:web:8dca9ba6a11e3e6d925861",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
