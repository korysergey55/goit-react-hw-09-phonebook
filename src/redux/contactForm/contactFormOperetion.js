import {
 getAllContactsApi,
 addNewContactApi,
 deleteContactApi,
 } from "../../servises/api";

import {
 getAllContacts,
 getAllRequestError,
 submitNewContact,
 submitNewContactRequestError,
 handleDelete,
 handleDeleteRequestError,
 setLoader,
} from "./contactFormActions";

export const getAllContactsOperation = () => async (dispatch, getState) => {
 const token = getState().auth.token;

 try {
  dispatch(setLoader());
  const response = await getAllContactsApi(token);
  dispatch(getAllContacts(response.data));
  dispatch(setLoader());
 } catch (error) {
  dispatch(getAllRequestError(error));
 }
};

export const addContactOperation = (contact) => async (dispatch, getState) => {
 const token = getState().auth.token;
 try {
  dispatch(setLoader());
  const response = await addNewContactApi(contact, token);
  dispatch(submitNewContact(response.data));
  dispatch(setLoader());
 } catch (error) {
  dispatch(submitNewContactRequestError(error));
 }
};

export const deleteContactOperation = (id) => async (dispatch, getState) => {
 const token = getState().auth.token;
 try {
  dispatch(setLoader());
  await deleteContactApi(id, token);
  dispatch(handleDelete(id));
  dispatch(setLoader());
 } catch (error) {
  dispatch(handleDeleteRequestError(error));
 }
};
