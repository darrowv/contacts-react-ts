import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.root}>
      <Link to={"/login"}>
        <button>LOGIN</button>
      </Link>
    </div>
  );
};

export default Home;
