import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import {
 registerUserAction,
 registerUserActionError,
 loginUserAction,
 loginUserActionError,
 logoutUserAction,
 logoutUserActionError,
} from "./authActions";

const tokenReducer = createReducer(null, {
 [registerUserAction]: (state, action) => action.payload.token,
 [loginUserAction]: (state, action) => action.payload.token,
 [logoutUserAction]: (state, action) => null,
});

const userReducer = createReducer(null, {
 [registerUserAction]: (state, action) => action.payload.user,
 [loginUserAction]: (state, action) => action.payload.user,
 [logoutUserAction]: (state, action) => null,
});

const errorItemReducer = createReducer(null, {
 [registerUserActionError]: (state, action) => action.payload,
 [loginUserActionError]: (state, action) => action.payload,
 [logoutUserActionError]: (state, action) => action.payload,
});

const authReducer = combineReducers({
 token: tokenReducer,
 user: userReducer,
 error: errorItemReducer,
});
export default authReducer;
