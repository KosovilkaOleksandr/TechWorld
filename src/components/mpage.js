import React from "react";
import styles from "./css/mpage.module.css";
import Button1 from "../components_elem/Button1";
import Forminp from "../components_elem/Forminp";

function MyPage() {
  return (
    <div className={styles.container}>
      <form>
        <h1>Create an account</h1>
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
            Privacy Policy
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
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Enter your surname"
            required
          />
          <Forminp placeholder="Surname" type="text"></Forminp>
        </div>
        <div className={styles.textbox}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign up
        </button>
        <p className={styles.loginText} />
        Have an account? <a href="/login">Log in</a>
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
