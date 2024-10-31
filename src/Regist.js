import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUserToDatabase } from "./UserDataBase.js";

export const registerUser = async (email, name, surname, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    console.log("Користувач зареєстрований:", user);

    await addUserToDatabase(user.uid, name, surname, user.email);
  } catch (error) {
    console.error("Помилка реєстрації:", error.message);
  }
};
