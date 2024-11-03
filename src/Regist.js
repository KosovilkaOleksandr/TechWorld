import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUserToDatabase } from "./UserDataBase.js";

export const registerUser = async (email, name, surname, password) => {
  if (name === "" || surname === "") {
    console.log("error");
    return false;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    console.log("Sucess Registration:", user);

    await addUserToDatabase(user.uid, name, surname, user.email);

    return true;
  } catch (error) {
    console.error("Error Registration:", error.message);
    return false;
  }
};
