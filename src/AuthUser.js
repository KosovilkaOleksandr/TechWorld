import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export const loginUser = async (login, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      login,
      password
    );
    console.log("User Entered:", userCredential.user);
    return true;
  } catch (error) {
    console.error("Invalid information:", error.message);
    return false;
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User exit from account");
  } catch (error) {
    console.error("Problems with entering invalid information:", error.message);
  }
};

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  return { user };
};
