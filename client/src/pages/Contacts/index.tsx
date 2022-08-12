import React, { useEffect, useRef, useState } from "react";
import ContactInfo from "./ContactInfo";
import ContactList from "./ContactList";
import styles from "./Contacts.module.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanItems } from "../../redux/contactsSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  const [editingMode, setEditingMode] = useState(false);
  const [render, setRender] = useState(false);
  const isMounted = useRef(false);

  // @ts-ignore
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    const json = JSON.stringify(contacts);
    localStorage.setItem("contacts", json);
  }, [contacts]);

  const getEditingMode = (mode: boolean) => {
    setEditingMode(mode);
  };

  const onClickLogOut = () => {
    const result = window.confirm(
      "All contacts will be lost. Are you sure you want to log out?"
    );
    if (result) {
      localStorage.clear();
      dispatch(cleanItems());
      setRender(!render);
    }
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
