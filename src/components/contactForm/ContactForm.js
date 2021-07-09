import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import Loader from "../loader/Loader";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
 addContactOperation,
 getAllContactsOperation,
} from "../../redux/contactForm/contactFormOperetion";
import {
 contactsSelector,
 loaderSelector,
} from "../../redux/contactForm/contactFormSelectors";
import { isAuthSelector } from "../../redux/auth/authSelectors";

const initialState = {
 name: "",
 number: "",

};

class ContactForm extends Component {
 static propTypes = {
  contacts: PropTypes.array.isRequired,
 };

 state = {
  ...initialState,
 };

 componentDidMount() {
    this.props.token &&  this.props.getAllContactsOperation();
  }

 saveInputValueToState = (evt) => {
  this.setState({
   [evt.target.name]: evt.target.value,
  });
 };

 handleSubmitForm = (evt) => {
  evt.preventDefault();

  if (this.findDuplicate(this.state.name)) {
   this.props.addContactOperation({ ...this.state });
  }
  this.setState({ ...initialState });
 };

 findDuplicate = (newContactName) => {
  const isDublicate = this.props.contacts.some(
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

 render() {
  return (
   <>
    {this.props.loader && <Loader />}
    <form className={styles.mainForm} onSubmit={this.handleSubmitForm}>
     <div className={styles.inputContainer}>
      <label className={styles.labelName}>Name</label>
      <input
       value={this.state.name}
       onChange={this.saveInputValueToState}
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
       value={this.state.number}
       onChange={this.saveInputValueToState}
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
 }
}

const mapStateToProps = (state, ownProps) => ({
 contacts: contactsSelector(state),
 loader: loaderSelector(state),
 token: isAuthSelector(state),
});

const mapDispatchToProps = {
 addContactOperation,
 getAllContactsOperation,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
