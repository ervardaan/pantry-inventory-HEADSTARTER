// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVzfrdoUV6yjXNI98CyPh2nJzkzf7XYVA",
  authDomain: "pantryinventory-2f141.firebaseapp.com",
  projectId: "pantryinventory-2f141",
  storageBucket: "pantryinventory-2f141.appspot.com",
  messagingSenderId: "591239760177",
  appId: "1:591239760177:web:7d55a53cb94c5d5c298810",
  measurementId: "G-20R6DET6VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore=getFirestore(app);
export {firestore}