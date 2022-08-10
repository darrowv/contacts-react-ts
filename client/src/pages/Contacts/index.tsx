import React from "react";
import ContactInfo from "./ContactInfo";
import ContactList from "./ContactList";
import styles from "./Contacts.module.scss";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <motion.div
      className={styles.root}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className={styles.container}>
        <ContactList />
        <ContactInfo />
      </div>
    </motion.div>
  );
};

export default Contacts;
