import React from "react";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/contactForm/contactFormActions";
import { filterSelector } from "../../redux/contactForm/contactFormSelectors";

const Filter = () => {

 const dispatch = useDispatch();
 const filter = useSelector(filterSelector);

 const onHandleChange = (event) => {
  dispatch(filterContacts(event.target.value));
 };

 return (
  <div className={styles.mainContainer}>
   <div className={styles.inputContainer}>
    <label className={styles.labelName} htmlFor="filter">
     Find contact by name
    </label>
    <input
     onChange={onHandleChange}
     type="text"
     name="filter"
     id="filter"
     value={filter}
     className={styles.inputName}
    ></input>
   </div>
  </div>
 );
};


export default Filter;
