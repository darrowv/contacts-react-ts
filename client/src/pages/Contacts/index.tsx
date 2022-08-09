import React from "react";
import ContactInfo from "./ContactInfo";
import ContactList from "./ContactList";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <ContactList />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contacts;
