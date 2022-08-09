import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.root}>
      <div className={styles.loginWindow}>
        <h1 className={styles.title}>AUTHORIZATION</h1>
        <div className={styles.loginInput}>
          <p>Login:</p>
          <input type="text" />
        </div>
        <div className={styles.passwordInput}>
          <p>Password:</p>
          <input type="password" />
        </div>
        <Link to={"/contacts"}>
        <button className={styles.loginButton}>LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
