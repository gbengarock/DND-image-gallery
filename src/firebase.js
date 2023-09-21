// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyCTLrAbrcHSqHou8tpiXyWxQDFJuhfxWWA',
  authDomain: "hngx-1da0d.firebaseapp.com",
  projectId: "hngx-1da0d",
  storageBucket: "hngx-1da0d.appspot.com",
  messagingSenderId: "525515676873",
  appId: "1:525515676873:web:3706a2107bc454c3a1c118",
  measurementId: "G-Z0TS3YH4VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;