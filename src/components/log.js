import React, { useState } from "react";
import styles from "./css/log.module.css";
import Button1 from "../components_elem/Button1";
import Forminp from "../components_elem/Forminp";
import Label1 from "../components_elem/Label1";
import { loginUser } from "../AuthUser";
import { useNavigate } from "react-router-dom";

function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      let result = await loginUser(email, password);
      if (result) {
        navigate("/main_page");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred during login");
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Login</h1>
        <p className={styles.logintext}>
          Welcome back! Please log in to your account.
        </p>
        <div className={styles.inputGroup}>
          <Label1 text="Email" />
          <Forminp
            placeholder="Email"
            type="text"
            value={email}
            setState={setEmail}
          />
        </div>
        <div className={styles.inputGroup}>
          <Label1 text="Password" />
          <Forminp
            placeholder="Password"
            type="password"
            value={password}
            setState={setPassword}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}{" "}
        <Button1 functions={handleLogin} className={styles.submitButton}>
          Login
        </Button1>
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
