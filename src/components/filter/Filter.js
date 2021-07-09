import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { filterContacts } from "../../redux/contactForm/contactFormActions";
import { filterSelector } from "../../redux/contactForm/contactFormSelectors";

const Filter = ({ filter, filterContacts }) => {

 const onHandleChange = (event) => {
  filterContacts(event.target.value);
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

Filter.propTypes = {
 filter: PropTypes.string,
 filterContacts: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
 filter: filterSelector(state),
});

const mapDispatchToProps = {
 filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
