import React from "react";
import { useSelector } from "react-redux";
import styles from "./Contacts.module.scss";

const ContactInfo = () => {
  // @ts-ignore
  const contact = useSelector((state) => state.contacts.selectedItem);
  // @ts-ignore
  const contacts = useSelector((state) => state.contacts.items);

  if (!contact) {
    return (
      <div className={styles.contactInfo}>
        <p className={styles.chooseContact}>Choose contact...</p>
      </div>
    );
  } else if (!contacts.length) {
    return (
      <div className={styles.contactInfo}>
        <p className={styles.chooseContact}>Add some contacts!</p>
      </div>
    )
  }

  return (
    <div className={styles.contactInfo}>
      <div className={styles.contactName}>
        <h1>Fullname</h1>
        <p>{contact.name}</p>
      </div>
      <div className={styles.contactNumber}>
        <h1>Number</h1>
        <p>{contact.number}</p>
      </div>
      <div className={styles.contactEmail}>
        <h1>Email</h1>
        <p>{contact.email}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
