import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCCm2umWqV7b6YaNPsI_w-NUtQSoWlTsGw",
  authDomain: "disneyclone-24296.firebaseapp.com",
  projectId: "disneyclone-24296",
  storageBucket: "disneyclone-24296.appspot.com",
  messagingSenderId: "803818581394",
  appId: "1:803818581394:web:7d3cc3ccf29e16b180654b",
  measurementId: "G-02PR336Q6R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebase.firestore();
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
export{auth,provider,db}
export default db;