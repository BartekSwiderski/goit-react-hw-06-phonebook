import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/actions";
import { saveToLocalStore } from "../../utils/localStorage";

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter)
  );
};

const Contact = () => {
  const contacts = useSelector(({ contacts, filter }) =>
    getVisibleContacts(contacts, filter)
  );
  const dispatch = useDispatch();
  saveToLocalStore("CONTACTS", contacts);

  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          <div>
            <span className={styles.contactName}>{name}</span>
          </div>
          <div>
            <span className={styles.contactNumber}>tel. {number}</span>
          </div>
          <button
            className={styles.contactDel}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export const ContactList = () => {
  return (
    <div>
      <ul>
        <Contact />
      </ul>
    </div>
  );
};
