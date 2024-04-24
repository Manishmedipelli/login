import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDsDIuErytHJKM7TzfDcI1nBTyF9Eijeu0",
  authDomain: "login-9b3bf.firebaseapp.com",
  projectId: "login-9b3bf",
  storageBucket: "login-9b3bf.appspot.com",
  messagingSenderId: "129392833017",
  appId: "1:129392833017:web:33dc3e21f1b677b8254d28",
  measurementId: "G-Q79BD547P1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 


export {db}; 
