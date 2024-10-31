// MyPage.js
import React, { useState } from "react";
import styles from "./css/mpage.module.css";
import Button1 from "../components_elem/Button1";
import Forminp from "../components_elem/Forminp";
import { registerUser } from "../Regist.js";

const MyPage = function () {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    registerUser(email, name, surname, password);
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>Create an account</h1>
        <p>
          By creating an account, you agree to this app's{" "}
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => alert("Terms clicked!")}
          >
            Terms
          </button>{" "}
          and{" "}
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => alert("Privacy Policy clicked!")}
          >
            Privacy Policy
          </button>
          .
        </p>
        <div className={styles.textbox}>
          <Forminp
            placeholder="Email"
            type="text"
            value={email}
            setState={setEmail}
          />
        </div>
        <div className={styles.textbox}>
          <Forminp
            placeholder="Name"
            type="text"
            value={name}
            setState={setName}
          />
        </div>
        <div className={styles.textbox}>
          <Forminp
            placeholder="Surname"
            type="text"
            value={surname}
            setState={setSurname}
          />
        </div>
        <div className={styles.textbox}></div>
        <Forminp
          placeholder="Password"
          type="password"
          value={password}
          setState={setPassword}
        />
        <Button1 functions={handleRegister}>Sign Up</Button1>
        <p className={styles.loginText}>
          Have an account?{" "}
          <a href="/login" className={styles.linkButton}>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default MyPage;
