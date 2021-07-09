import React, { useState } from "react";
import styles from "./AuthForm.module.css";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { registrationApi } from "../../servises/authApi";
import {
 registrationOperation,
 loginOperation,
} from "../../redux/auth/authOperations";

const initialState = {
 email: "",
 password: "",
};

const AuthForm = () => {
  
 const [state, setState] = useState(initialState);
 const location = useLocation();
 const dispatch = useDispatch();

 const onHandleChange = (event) => {
  const { name, value } = event.target;
  setState((prev) => ({ ...prev, [name]: value }));
 };
 const onHandleSubmit = (event) => {
  event.preventDefault();
  registrationApi(state);

  location.pathname === "/registration"
   ? dispatch(registrationOperation(state))
   : dispatch(
      loginOperation({
       email: state.email,
       password: state.password,
      })
     );
 };
 return (
  <form onSubmit={onHandleSubmit} className={styles.formAuth}>
   <div className={styles.inputContainer}>
    {location.pathname === "/registration" && (
     <label className={styles.labelName}>
      Name
      <input
       className={styles.inputName}
       type="text"
       name="name"
       value={state.name}
       onChange={onHandleChange}
      />
     </label>
    )}

    <label className={styles.labelName}>
     Email
     <input
      className={styles.inputName}
      type="text"
      name="email"
      value={state.email}
      onChange={onHandleChange}
     />
    </label>
    <label className={styles.labelName}>
     Password
     <input
      className={styles.inputName}
      type="text"
      name="password"
      value={state.password}
      onChange={onHandleChange}
     />
    </label>
   </div>
   <button type="submit" className={styles.buttonGo}>
    {location.pathname === "/registration" ? "Registration" : "Login"}
   </button>
  </form>
 );
};

export default AuthForm;
