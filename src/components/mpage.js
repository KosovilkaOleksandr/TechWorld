import React from "react";
import styles from "./css/mpage.module.css"; // Убедитесь, что файл называется mpage.module.css

function MyPage() {
  return (
    <div className={styles.container}>
      <form>
        <h1>Create an account</h1>
        <p>
          By creating an account, you agree to this apps
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
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className={styles.textbox}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
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

        <p className={styles.loginText}>
          Have an account? <a href="/login">Log in</a>
        </p>
      </form>
    </div>
  );
}

export default MyPage;
