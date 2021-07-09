import { createAction } from "@reduxjs/toolkit";

export const registerUserAction = createAction("auth/registerUserAction");
export const registerUserActionError = createAction("auth/registerUserActionError");
export const loginUserAction = createAction("auth/loginUserAction");
export const loginUserActionError = createAction("auth/loginUserActionError");
export const logoutUserAction = createAction("auth/logoutUserAction");
export const logoutUserActionError = createAction("auth/logoutUserActionError");

