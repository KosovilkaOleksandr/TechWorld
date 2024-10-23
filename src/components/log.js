import React from "react";
import styles from "./css/mpage.module.css"; // Импортируем стили для логина

function Log() {
  return (
    <div className={styles.container}>
      {/* Контейнер с фоном */}
      <form className={styles.form}>
        {/* Применяем стиль формы */}
        <h1>Login</h1>
        <p>Welcome back! Please log in to your account.</p>
        <div className={styles.textbox}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
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
          {" "}
          {/* Применяем стиль к кнопке */}
          Login
        </button>
        <p className={styles.loginText}>
          Don't have an account? <a href="/">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Log;
