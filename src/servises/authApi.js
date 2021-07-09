import axios from "axios";
const BASE_URL = "https://connections-api.herokuapp.com";

export const registrationApi = async (authFormState) => {
 try {
  const response = await axios.post(`${BASE_URL}/users/signup`, {
   ...authFormState,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const loginApi = async (authFormState) => {
 try {
  const response = await axios.post(`${BASE_URL}​/users/login`, {
   ...authFormState,
  });
  return response;
 } catch (error) {
  console.log(error);
 }
};

export const logoutApi = async (token) => {
 try {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  const response = await axios.post(`${BASE_URL}​/users/logout`);
  return response;
 } catch (error) {
  console.log(error);
 }
};
