
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";


const firebaseConfig = {
  apiKey: "AIzaSyBYXmQVDa0C3hWWn8CwA_VD60TgWcU_034",
  authDomain: "kanbanboard-a4ff8.firebaseapp.com",
  projectId: "kanbanboard-a4ff8",
  storageBucket: "kanbanboard-a4ff8.appspot.com",
  messagingSenderId: "122836007181",
  appId: "1:122836007181:web:d2e1d37991888e26a25844"
};



export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
} 