import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  removeContact,
  setSelected,
} from "../../redux/contactsSlice";
import styles from "./Contacts.module.scss";

const ContactList: React.FC = () => {
  const dispatch = useDispatch();
  const [window, setWindow] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // @ts-ignore
  const contacts = useSelector((state) => state.contacts.items);

  const onClickAdd = () => {
    if (name && number && email) {
      dispatch(addContact({ name, number, email }));
      setWindow(!window);
      setName("");
      setNumber("");
      setEmail("");
      setSearchValue("");
    }
  };

  const filteredContacts = contacts.filter((item: any) =>
    item.name.toUpperCase().includes(searchValue.toUpperCase())
  );

  if (window) {
    return (
      <div className={styles.addingWindow}>
        <h2>Adding new contact</h2>
        <div>
          <span>Name:</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div>
          <span>Number:</span>
          <input
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            type="text"
          />
        </div>
        <div>
          {" "}
          <span>Email:</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <button onClick={() => onClickAdd()}>
          <span>add</span>
        </button>
      </div>
    );
  }

  return (
    <div className={styles.contactList}>
      <div className={styles.listTop}>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className={styles.searchContact}
          type="text"
        />
        <button
          onClick={() => setWindow(!window)}
          className={styles.addContact}
        >
          +
        </button>
      </div>
      {filteredContacts.map((item: any) => {
        return (
          <div
            onClick={() => dispatch(setSelected(item))}
            key={item.number}
            className={styles.contactItem}
          >
            <span className={styles.itemName}>{item.name}</span>
            <span
              onClick={() => dispatch(removeContact(item.number))}
              className={styles.removeContact}
            >
              ×
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
