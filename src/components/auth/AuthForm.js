import React, { Component } from "react";
import styles from "./AuthForm.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { registrationApi } from "../../servises/authApi";
import {
 registrationOperation,
 loginOperation,
} from "../../redux/auth/authOperations";

class AuthForm extends Component {
 state = { email: "", password: "" };

 onHandleChange = (event) => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
 };
 onHandleSubmit = (event) => {
  event.preventDefault();
  registrationApi(this.state);

  this.props.location.pathname === "/registration"
   ? this.props.registrationOperation(this.state)
   : this.props.loginOperation({
      email: this.state.email,
      password: this.state.password,
     });
 };
 render() {
  return (
   <form onSubmit={this.onHandleSubmit} className={styles.formAuth}>
    <div className={styles.inputContainer}>
     {this.props.location.pathname === "/registration" && (
      <label className={styles.labelName}>
       Name
       <input
        className={styles.inputName}
        type="text"
        name="name"
        value={this.state.name}
        onChange={this.onHandleChange}
       />
      </label>
     )}

     <label className={styles.labelName}>
      Email
      <input
       className={styles.inputName}
       type="text"
       name="email"
       value={this.state.email}
       onChange={this.onHandleChange}
      />
     </label>
     <label className={styles.labelName}>
      Password
      <input
       className={styles.inputName}
       type="text"
       name="password"
       value={this.state.password}
       onChange={this.onHandleChange}
      />
     </label>
    </div>
    <button type="submit" className={styles.buttonGo}>
     {this.props.location.pathname === "/registration"
      ? "Registration"
      : "Login"}
    </button>
   </form>
  );
 }
}
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = { registrationOperation, loginOperation };

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(withRouter(AuthForm));
