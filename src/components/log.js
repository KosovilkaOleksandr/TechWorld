import React from "react";
import styles from "./css/mpage.module.css";
import Button1 from "../components_elem/Button1";
import Forminp from "../components_elem/Forminp";
import Label1 from "../components_elem/Label1";

function Log() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <p className={styles.logintext}>
          Welcome back! Please log in to your account.
        </p>
        <Label1 text={"Email"} />
        <Forminp placeholder={"Email"} type={"text"}></Forminp>
        <Label1 text={"Password"} />
        <Forminp placeholder={"Password"} type={"password"}></Forminp>
        <Button1>Login</Button1>
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
      </form>
    </div>
  );
}

export default Log;
