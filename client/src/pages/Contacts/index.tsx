import React, { useEffect, useState } from "react";
import ContactInfo from "./ContactInfo";
import ContactList from "./ContactList";
import styles from "./Contacts.module.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "../../redux/contactsSlice";
import data from "../../assets/data.json";
import { Link } from "react-router-dom";

const Contacts = () => {
  const dispatch = useDispatch();
  const [editingMode, setEditingMode] = useState(false);
  const [render, setRender] = useState(false);

  useEffect(() => {
    dispatch(setContacts(data.users));
  }, []);

  const getEditingMode = (mode: boolean) => {
    setEditingMode(mode);
  };

  const onClickLogOut = () => {
    localStorage.clear();
    setRender(!render);
  };

  return (
    <motion.div
      className={styles.root}
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className={styles.container}>
        <ContactList editingMode={editingMode} />
        <ContactInfo getEditingMode={getEditingMode} />
      </div>
      <Link to={"/login"}>
        <button onClick={onClickLogOut} className={styles.logoutBtn}>
          log out
        </button>
      </Link>
    </motion.div>
  );
};

export default Contacts;
