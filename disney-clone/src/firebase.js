// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
const storage=getFirestore(app);
export{auth,provider,storage}
export default db;