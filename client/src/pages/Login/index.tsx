import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { motion } from "framer-motion";
import axios from "axios";

const Login: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const logBtnRef = useRef<HTMLButtonElement>(null);
  const token = localStorage.getItem("token");

  const onClickAuth = () => {
    if (login && password) {
      axios({
        method: "post",
        url: "http://localhost:8000/auth/login",
        data: {
          email: login,
          password,
        },
      })
        .then((res) => {
          res.data.access_token &&
            localStorage.setItem("token", res.data.access_token);
        })
        .then(() => {
          logBtnRef.current?.click();
        })
        .catch(() => {
          setInvalid(true);
        });
    }
  };

  return (
    <motion.div
      className={styles.root}
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      {token ? null : (
        <>
          <div className={styles.loginWindow}>
            <h1 className={styles.title}>AUTHORIZATION</h1>
            {invalid && (
              <p className={styles.invalidSign}>
                invalid login and/or password
              </p>
            )}
            <div className={styles.emailInput}>
              <p>Login:</p>
              <input
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                type="text"
              />
            </div>
            <div className={styles.passwordInput}>
              <p>Password:</p>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </div>
            <Link to="/contacts">
              <button
                ref={logBtnRef}
                onClick={onClickAuth}
                className={styles.loginButton}
              >
                LOGIN
              </button>
            </Link>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Login;
