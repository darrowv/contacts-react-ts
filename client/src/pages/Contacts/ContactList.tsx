import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelected } from "../../redux/contactsSlice";
import styles from "./Contacts.module.scss";

const ContactList: React.FC = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <div className={styles.contactList}>
      <div className={styles.listTop}>
        <input className={styles.searchContact} type="text" />
        <button className={styles.addContact}>+</button>
      </div>
      {contacts.map((item: any) => {
        return (
          <div
            onClick={() => dispatch(setSelected(item))}
            key={item.number}
            className={styles.contactItem}
          >
            <span>{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
