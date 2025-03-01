// import firebase from 'firebase';
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDFxsXHXF9Ebhu8AxsqBDuYQs76-3JXaoY",
//     authDomain: "fir-9c00b.firebaseapp.com",
//     projectId: "fir-9c00b",
//     storageBucket: "fir-9c00b.firebasestorage.app",
//     messagingSenderId: "406731658497",
//     appId: "1:406731658497:web:6e344be6d34f762fcab700",
//     measurementId: "G-62ZZSDCTM3"
//   };
//   export default firebase.initializeApp(firebaseConfig)
import { initializeApp } from "firebase/app";  
import { getFirestore } from "firebase/firestore";  
import { getAuth } from "firebase/auth";  
import { getStorage } from "firebase/storage";  

const firebaseConfig = {
  apiKey: "AIzaSyDFxsXHXF9Ebhu8AxsqBDuYQs76-3JXaoY",
  authDomain: "fir-9c00b.firebaseapp.com",
  projectId: "fir-9c00b",
  storageBucket: "fir-9c00b.appspot.com",
  messagingSenderId: "406731658497",
  appId: "1:406731658497:web:6e344be6d34f762fcab700",
  measurementId: "G-62ZZSDCTM3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage };
export default app; // ✅ Add default export
