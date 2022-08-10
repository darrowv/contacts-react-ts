import React from "react";
import styles from "./Contacts.module.scss";

const ContactList = () => {
  return (
    <div className={styles.contactList}>
      <div className={styles.listTop}>
        <input className={styles.searchContact} type="text" />
        <button className={styles.addContact}>+</button>
      </div>
      <div className={styles.contactItem}>
        <span>john doe</span>
      </div>
      <div className={styles.contactItem}>
        <span>gladiator mithcek</span>
      </div>
      <div className={styles.contactItem}>
        <span>conan barbarian</span>
      </div>
    </div>
  );
};

export default ContactList;
