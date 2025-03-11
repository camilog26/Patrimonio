// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW1sIBHflNci-10O6Sf9kGfl9T9U0VVsg",
  authDomain: "descubriendo-el-patrimonio.firebaseapp.com",
  projectId: "descubriendo-el-patrimonio",
  storageBucket: "descubriendo-el-patrimonio.firebasestorage.app",
  messagingSenderId: "841639998973",
  appId: "1:841639998973:web:ba4c6cdd0b88a078ea1594",
  measurementId: "G-QY9K2JTJPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };