import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-cb603.firebaseapp.com",
  projectId: "mern-auth-cb603",
  storageBucket: "mern-auth-cb603.appspot.com",
  messagingSenderId: "1053310814552",
  appId: "1:1053310814552:web:f08ec5119e10b72eb73d2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);