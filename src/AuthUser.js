import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const loginUser = async (login, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      login,
      password
    );
    console.log("Користувач увійшов:", userCredential.user);
  } catch (error) {
    console.error("Помилка входу:", error.message);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Користувач вийшов з акаунту");
  } catch (error) {
    console.error("Помилка при виході з акаунту:", error.message);
  }
};
