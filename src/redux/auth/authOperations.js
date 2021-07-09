
import { registrationApi, loginApi, logoutApi } from "../../servises/authApi";
import {
 registerUserAction,
 registerUserActionError,
 loginUserAction,
 loginUserActionError,
 logoutUserAction,
 logoutUserActionError,
} from "./authActions";

export const registrationOperation = (authFormState) => async (dispatch,) => {
 try {
  const response = await registrationApi(authFormState);
  dispatch(registerUserAction(response.data));
 } catch (error) {
  dispatch(registerUserActionError(error));
 }
};

export const loginOperation = (authFormState) => async (dispatch) => {
 try {
  const response = await loginApi(authFormState);
  dispatch(loginUserAction(response.data));
 } catch (error) {
  dispatch(loginUserActionError(error));
 }
};


export const logoutOperation = () => async (dispatch, getState) => {
    const token = getState().auth.token
 try {
  const response = await logoutApi(token);
  dispatch(logoutUserAction(response.data));
 } catch (error) {
  dispatch(logoutUserActionError(error));
 }
};
