// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5NIytqAIVj1XU8gorcKFo5ozVgevJsAw",
  authDomain: "balaji-collection-bc2bb.firebaseapp.com",
  projectId: "balaji-collection-bc2bb",
  storageBucket: "balaji-collection-bc2bb.appspot.com",
  messagingSenderId: "52283696294",
  appId: "1:52283696294:web:260c34b3b21d5011eec067"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{db}
