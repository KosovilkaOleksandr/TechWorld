import React from "react";
import styles from "./css/mpage.module.css";
import Button1 from "../components_elem/Button1";
import Forminp from "../components_elem/Forminp";
//testing
function MyPage() {
  return (
    <div className={styles.container}>
      <form>
        <h1>Create account</h1>
        <p>
          By creating an account, you agree to this apps {""}
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
            Privacy Police
          </button>
          .
        </p>
        <div className={styles.textbox}>
          <label htmlFor="email">Email address</label>
          <Forminp placeholder="Email" type="text"></Forminp>
        </div>
        <div className={styles.textbox}>
          <label htmlFor="name">Name</label>
          <Forminp placeholder="Name" type="text"></Forminp>
        </div>
        <div className={styles.textbox}>
          <label htmlFor="surname">Surname</label>
          <Forminp placeholder="Surname" type="text"></Forminp>
        </div>
        <div className={styles.textbox}>
          <label htmlFor="password">Password</label>
        </div>
        <Forminp placeholder="Password" type="password"></Forminp>
        <Button1>Sign Up</Button1>
        <p className={styles.loginText}>
          Have an account?{" "}
          <a href="/login" className={styles.linkButton}>
            Log in
          </a>
        </p>
      </form>
    </div>
  );
}

export default MyPage;
