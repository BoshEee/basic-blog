import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9LbPUzdrE83kmGXNba0-E13_SGEi8MSo",
  authDomain: "basicblog-f15a9.firebaseapp.com",
  projectId: "basicblog-f15a9",
  storageBucket: "basicblog-f15a9.appspot.com",
  messagingSenderId: "350108167678",
  appId: "1:350108167678:web:dd27ea92e110ccb86464af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
