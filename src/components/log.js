import React, { useState } from "react";
import styles from "./css/mpage.module.css";
import Button1 from "../components_elem/Button1";
import Forminp from "../components_elem/Forminp";
import Label1 from "../components_elem/Label1";
import { loginUser } from "../AuthUser";

function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    loginUser(email, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Login</h1>
        <p className={styles.logintext}>
          Welcome back! Please log in to your account.
        </p>
        <Label1 text={"Email"} />
        <Forminp
          placeholder={"Email"}
          type={"text"}
          value={email}
          setState={setEmail}
        ></Forminp>
        <Label1 text={"Password"} />
        <Forminp
          placeholder={"Password"}
          type={"password"}
          value={password}
          setState={setPassword}
        ></Forminp>
        <Button1 functions={handleLogin}>Login</Button1>
        <p className={styles.loginText}>
          Don't have an account?{" "}
          <a href="/" className={styles.linkButton}>
            Register
          </a>
        </p>
        <p className={styles.loginText}>
          Back to{" "}
          <a href="/main_page" className={styles.linkButton}>
            Main Screen
          </a>
        </p>
      </div>
    </div>
  );
}

export default Log;
