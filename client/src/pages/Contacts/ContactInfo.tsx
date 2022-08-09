import React from 'react';
import styles from "./Contacts.module.scss"

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.contactName}>
        <p>John Doe</p>
      </div>
      <div className={styles.contactNumber}>
        <p>+7(777)33-44-22</p>
      </div>
      <div className={styles.contactMail}>
        <p>johndoe@email.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
