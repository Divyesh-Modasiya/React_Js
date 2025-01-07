// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqFX3Bf6UFYjW0fe_FK2B1ZUQ5CtoiHPg",
  authDomain: "reactfinal-project.firebaseapp.com",
  projectId: "reactfinal-project",
  storageBucket: "reactfinal-project.appspot.com",
  messagingSenderId: "375775037720",
  appId: "1:375775037720:web:9bbceb4e3307c53f02f66d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };