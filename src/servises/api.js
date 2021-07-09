import axios from "axios";

const BASE_URL = "https://connections-api.herokuapp.com/contacts";

export const getAllContactsApi = async (token) => {
 axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
 try {
  const response = await axios.get(BASE_URL);
  return response;
 } catch (error) {
  console.log(error);
 }
};


export const addNewContactApi = async (newContact, token) => {
 axios.defaults.headers.Authorization = `Bearer ${token}`;
 try {
  const response = await axios.post(BASE_URL, newContact);
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const deleteContactApi = async (id, token) => {
 axios.defaults.headers.Authorization = `Bearer ${token}`;
 try {
  const response = axios.delete(`${BASE_URL}/${id}`);
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const filterContactApi = async (id, token) => {
 axios.defaults.headers.Authorization = `Bearer ${token}`;
 try {
  const response = axios.get(`${BASE_URL}/${id}`);
  return response;
 } catch (error) {
  console.log(error);
 }
};
