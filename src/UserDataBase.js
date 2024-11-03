import { db } from "./firebase.js";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";

export const addUserToDatabase = async (uid, name, surname, email) => {
  try {
    const userDocRef = doc(db, "users", uid);
    await setDoc(userDocRef, {
      name,
      surname,
      email,
      createdAt: new Date().toISOString(),
    });
    console.log("Saved in Firestore with id:", uid);
  } catch (error) {
    console.error("Saving error:", error.message);
  }
};

export const getUserFromDatabase = async (uid) => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log("Document of user dont found");
      return null;
    }
  } catch (error) {
    console.error("Error can`t receive user document", error.message);
    return null;
  }
};
