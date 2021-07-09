//============================= Redux Toolkit ================================
import { createAction } from "@reduxjs/toolkit";

const getAllContacts = createAction("contact/getAllContacts");
const getAllRequestError = createAction("contact/getAllRequestError");
const submitNewContact = createAction("contact/submitNewContact");
const submitNewContactRequestError = createAction( "contact/submitNewContactRequestError");
const handleDelete = createAction("contact/handleDelete");
const handleDeleteRequestError = createAction( "contact/handleDeleteRequestError");
const setLoader = createAction("contact/setLoader");
const filterContacts = createAction("contact/filter");

export {
 getAllContacts,
 getAllRequestError,
 submitNewContact,
 submitNewContactRequestError,
 handleDelete,
 handleDeleteRequestError,
 filterContacts,
 setLoader,
};
