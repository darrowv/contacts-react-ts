import React, { useEffect, useState } from "react";
import ContactInfo from "./ContactInfo";
import ContactList from "./ContactList";
import styles from "./Contacts.module.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setContacts } from "../../redux/contactsSlice";
import data from "../../assets/data.json";

type ContactsType = {
  name: string;
  number: string;
  email: string;
};

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setContacts(data.users))
  })

  return (
    <motion.div
      className={styles.root}
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
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
