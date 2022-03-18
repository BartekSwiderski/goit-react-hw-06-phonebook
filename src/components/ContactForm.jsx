import styles from "./Phonebook.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/actions";

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const submitForm = (e) => {
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    e.preventDefault();
    if (contacts.some((contacts) => contacts.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some((contacts) => contacts.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="name">
          Name
        </label>
        <input
          className={styles.formInput}
          required
          type="text"
          name="name"
          onChange={changeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </div>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="number">
          Number
        </label>
        <input
          className={styles.formInput}
          required
          type="tel"
          name="number"
          onChange={changeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
      </div>
      <button className={styles.formButton}>Add contact</button>
    </form>
  );
};

export default ContactForm;
