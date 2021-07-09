import React, { useEffect } from "react";
import styles from "./ContactForm.module.css";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
 addContactOperation,
 getAllContactsOperation,
} from "../../redux/contactForm/contactFormOperetion";
import {
 contactsSelector,
 loaderSelector,
} from "../../redux/contactForm/contactFormSelectors";
import { isAuthSelector } from "../../redux/auth/authSelectors";
import { useState } from "react";

const initialState = {
 name: "",
 number: "",
};

const ContactForm = () => {
 const [state, setState] = useState(initialState);
 const dispatch = useDispatch();
 const token = useSelector(isAuthSelector);
 const contacts = useSelector(contactsSelector);
 const loader = useSelector(loaderSelector);

 useEffect(() => {
  token && dispatch(getAllContactsOperation());
 }, [token, dispatch]);

 const saveInputValueToState = (evt) => {
  setState((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
 };
 const handleSubmitForm = (evt) => {
  evt.preventDefault();

  if (findDuplicate(state.name)) {
   dispatch(addContactOperation({ ...state }));
  }
  setState({ ...initialState });
 };

 const findDuplicate = (newContactName) => {
  const isDublicate = contacts.some(
   (contact) => contact.name === newContactName
  );
  if (!newContactName) {
   alert("The field cannot be empty!");
   return false;
  }
  if (isDublicate) {
   alert("This Name already exist!" + newContactName);
   return false;
  }
  return true;
 };

 return (
  <>
   {loader && <Loader />}
   <form className={styles.mainForm} onSubmit={handleSubmitForm}>
    <div className={styles.inputContainer}>
     <label className={styles.labelName}>Name</label>
     <input
      value={state.name}
      onChange={saveInputValueToState}
      type="text"
      name="name"
      className={styles.inputName}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      required
      placeholder="Enter Name"
     ></input>
    </div>

    <div className={styles.inputContainer}>
     <label className={styles.labelName}>Number</label>
     <input
      value={state.number}
      onChange={saveInputValueToState}
      type="tel"
      name="number"
      className={styles.inputName}
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      required
     />
    </div>
    <button type="submit" className={styles.buttonAddContact}>
     Add contact
    </button>
   </form>
  </>
 );
};

export default ContactForm;

