import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeP3YPd6A8ItsobjaCGGwAVlpLRIhfoDc",
  authDomain: "techworld-8caa5.firebaseapp.com",
  projectId: "techworld-8caa5",
  storageBucket: "techworld-8caa5.appspot.com",
  messagingSenderId: "823830137191",
  appId: "1:823830137191:web:9d2e010d92b8a6464f47c2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
