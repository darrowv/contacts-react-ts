import React, { useEffect, useState } from "react";
import ContactInfo from "./ContactInfo";
import ContactList from "./ContactList";
import styles from "./Contacts.module.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanItems } from "../../redux/contactsSlice";
import { RootState } from "../../redux/store";

const Contacts = () => {
  const dispatch = useDispatch();
  const [editingMode, setEditingMode] = useState(false);
  const [render, setRender] = useState(false);

  const contacts = useSelector((state: RootState) => state.contacts.items);

  useEffect(() => {
    const json = JSON.stringify(contacts);
    localStorage.setItem("contacts", json);
  }, [contacts]);

  const getEditingMode = (mode: boolean) => {
    setEditingMode(mode);
  };

  const onClickLogOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    const result = window.confirm(
      "All contacts will be lost. Are you sure you want to log out?"
    );
    if (result) {
      localStorage.clear();
      dispatch(cleanItems());
      setRender(!render);
    } else if (!result) {
      e.preventDefault();
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
        <motion.div
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: 90, opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className={styles.contactInfo}
        >
          <ContactInfo getEditingMode={getEditingMode} />
        </motion.div>
      </div>
      <Link to={"/login"}>
        <button onClick={(e) => onClickLogOut(e)} className={styles.logoutBtn}>
          log out
        </button>
      </Link>
    </motion.div>
  );
};

export default Contacts;
