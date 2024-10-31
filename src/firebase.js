import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXPLxmP8ZC4ZvunCG0STLDtCJUTSIovJM",
  authDomain: "techuniverse-6a104.firebaseapp.com",
  projectId: "techuniverse-6a104",
  storageBucket: "techuniverse-6a104.firebasestorage.app",
  messagingSenderId: "165496592204",
  appId: "1:165496592204:web:2d2b0da0d8f610f984e1e9",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
