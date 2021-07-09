import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

import { useDispatch, useSelector } from "react-redux";
import { deleteContactOperation } from "../../redux/contactForm/contactFormOperetion";
import { getfilteredContactsSelector } from "../../redux/contactForm/contactFormSelectors";

const ContactList = () => {
 const contacts = useSelector(getfilteredContactsSelector);
 const dispatch = useDispatch();

 return (
  <div className={styles.mainContainer}>
   <ul className={styles.ulContainer}>
    {contacts.map((contact) => (
     <li className={styles.newContact} key={contact.id}>
      <p className={styles.newContactName}>
       {contact.name} : {contact.number}
      </p>
      <button
       type="button"
       className={styles.btn}
       onClick={() => dispatch(deleteContactOperation(contact.id))}
      >
       Delete
      </button>
     </li>
    ))}
   </ul>
  </div>
 );
};

export default ContactList;
