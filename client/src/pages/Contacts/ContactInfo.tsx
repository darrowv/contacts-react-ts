import React from 'react';
import styles from "./Contacts.module.scss"

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.contactName}>
        <h1>Fullname</h1>
        <p>John Doe</p>
      </div>
      <div className={styles.contactNumber}>
        <h1>Number</h1>
        <p>+7(777)33-44-22</p>
      </div>
      <div className={styles.contactEmail}>
        <h1>Email</h1>
        <p>johndoe@email.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
