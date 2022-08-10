import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { motion } from "framer-motion"


const Login = () => {
  return (
    <motion.div
      className={styles.root}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
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
    </motion.div>
  );
};

export default Login;
