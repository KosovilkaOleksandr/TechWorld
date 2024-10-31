import { db } from "./firebase.js";
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";

export const addUserToDatabase = async (uid, name, surname, email) => {
  try {
    await addDoc(collection(db, "users"), {
      name,
      surname,
      email,
      createdAt: new Date().toISOString(),
    });
    console.log("Дані користувача збережено у Firestore з id:", uid);
  } catch (error) {
    console.error("Помилка збереження даних:", error.message);
  }
};

export const getUserFromDatabase = async (uid) => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log("Документ користувача не знайдено");
      return null;
    }
  } catch (error) {
    console.error("Помилка при отриманні даних користувача:", error.message);
    return null;
  }
};
