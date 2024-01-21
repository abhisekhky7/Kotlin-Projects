// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCihNpCCMFQH8DWzc6lbo44FMYwI040CJE",
  authDomain: "todo-1-c3099.firebaseapp.com",
  projectId: "todo-1-c3099",
  storageBucket: "todo-1-c3099.appspot.com",
  messagingSenderId: "226158038919",
  appId: "1:226158038919:web:e03fa8acec396809694d22",
  measurementId: "G-7V880T0669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)