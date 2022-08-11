import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  ContactType,
  removeContact,
  setSelected,
} from "../../redux/contactsSlice";
import styles from "./Contacts.module.scss";

type ContactListProps = {
  editingMode: boolean;
};

const ContactList: React.FC<ContactListProps> = ({ editingMode }) => {
  const dispatch = useDispatch();
  const [window, setWindow] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // @ts-ignore
  const contacts = useSelector((state) => state.contacts.items);
  // @ts-ignore
  const contact = useSelector((state) => state.contacts.selectedItem);

  const toggleSelectedItem = (item: ContactType) => {
    if (!editingMode) {
      dispatch(setSelected(item));
    } else {
      alert("You have to complete editing");
    }
  };

  const onClickAdd = () => {
    if (
      name &&
      number &&
      email &&
      name.length < 30 &&
      number.length < 25 &&
      email.length < 25
    ) {
      dispatch(addContact({ name, number, email }));
      setWindow(!window);
      setName("");
      setNumber("");
      setEmail("");
      setSearchValue("");
    } else {
      alert(
        "There is an empty field or the data is too lengthy. Please, enter correct data."
      );
    }
  };

  const removeItem = (
    number: string,
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    if (!editingMode) {
      dispatch(removeContact(number));
      event.stopPropagation();
    }
  };

  const filteredContacts = contacts.filter((item: ContactType) =>
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
      {filteredContacts.map((item: ContactType) => {
        return (
          <div
            onClick={() => toggleSelectedItem(item)}
            key={item.number}
            className={styles.contactItem}
            style={
              item.name === contact?.name
                ? { backgroundColor: "rgba(150, 190, 215, 0.5)" }
                : undefined
            }
          >
            <span className={styles.itemName}>{item.name}</span>
            <span
              onClick={(event) => removeItem(item.number, event)}
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
