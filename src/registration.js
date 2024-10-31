import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUserToDatabase } from "./userdata.js";

export const registerUser = async (login, name, surname, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      login,
      password
    );
    const user = userCredential.user;

    console.log("Користувач зареєстрований:", user);

    await addUserToDatabase(user.uid, name, surname, user.email);
  } catch (error) {
    console.error("Помилка реєстрації:", error.message);
  }
};
