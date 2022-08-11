import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../../redux/contactsSlice";
import styles from "./Contacts.module.scss";

const ContactInfo = () => {
  // @ts-ignore
  const contact = useSelector((state) => state.contacts.selectedItem);
  // @ts-ignore
  const contacts = useSelector((state) => state.contacts.items);

  const dispatch = useDispatch();
  const [editButton, setEditButton] = useState(false);
  const [nameField, setNameField] = useState(false);
  const [newName, setNewName] = useState("");
  const [emailField, setEmailField] = useState(false);
  const [newEmail, setNewEmail] = useState("");

  const toggleEditingMode = () => {
    setEditButton(true);
    setNameField(true);
    setEmailField(true);
    setNewName(contact.name)
    setNewEmail(contact.email)
  };

  const confirmEditing = () => {
    if (newName && newEmail && newName.length < 30 && newEmail.length < 25) {
      dispatch(
        editContact({ name: newName, number: contact.number, email: newEmail })
      );
      setEditButton(false);
      setNameField(false);
      setEmailField(false);
      setNewName("");
      setNewEmail("");
    } else {
      alert("There is an empty field or the data is too lengthy. Please, enter correct data.")
    }
  };

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
    );
  }

  return (
    <div className={styles.contactInfo}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />
      <div className={styles.editButton}>
        {editButton ? (
          <span onClick={confirmEditing} className="material-symbols-outlined">
            done
          </span>
        ) : (
          <span
            onClick={toggleEditingMode}
            className="material-symbols-outlined"
          >
            edit
          </span>
        )}
      </div>
      <div className={styles.contactName}>
        <h1>Fullname</h1>
        {nameField ? (
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            type="text"
            className={styles.editInput}
          />
        ) : (
          <p>{contact.name}</p>
        )}
      </div>
      <div className={styles.contactNumber}>
        <h1>Number</h1>
        <p>{contact.number}</p>
      </div>
      <div className={styles.contactEmail}>
        <h1>Email</h1>
        {emailField ? (
          <input
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            type="text"
            className={styles.editInput}
          />
        ) : (
          <p>{contact.email}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
