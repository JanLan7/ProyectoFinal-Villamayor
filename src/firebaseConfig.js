import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoy6_xCqq4tCUU9GaGPQ92DPLekb8UDO4",
  authDomain: "react-items-d96bb.firebaseapp.com",
  projectId: "react-items-d96bb",
  storageBucket: "react-items-d96bb.appspot.com",
  messagingSenderId: "467204340864",
  appId: "1:467204340864:web:176bd34e2f3cd5692bfa65"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
