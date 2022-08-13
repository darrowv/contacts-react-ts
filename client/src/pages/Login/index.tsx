import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Login: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [render, setRender] = useState(false);

  const token = localStorage.getItem("token");

  const onClickAuth = () => {
    axios({
      method: "post",
      url: "http://localhost:8000/auth/login",
      data: {
        email: login,
        password,
      },
    }).then((res) => {
      res.data.access_token &&
        localStorage.setItem("token", res.data.access_token);
      setRender(!render);
    });
  };

  const onClickLogOut = () => {
    localStorage.clear();
    setRender(!render);
  };

  const letsGo = (
    <AnimatePresence>
      <div className={styles.letsGo}>
        <Link to={"/contacts"}>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className={styles.letsgoBtn}
          >
            LET'S GO{" "}
          </motion.button>
        </Link>
        <button onClick={onClickLogOut} className={styles.logoutBtn}>
          log out
        </button>
      </div>
    </AnimatePresence>
  );

  return (
    <motion.div
      className={styles.root}
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      {token ? (
        letsGo
      ) : (
        <>
          <div className={styles.loginWindow}>
            <h1 className={styles.title}>AUTHORIZATION</h1>
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

            <button onClick={onClickAuth} className={styles.loginButton}>
              CHECK
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Login;
