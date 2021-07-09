import {combineReducers} from 'redux';
import contactFormReducer from '../redux/contactForm/contactFormReducer';
import authReducer from './auth/authReducer';

// ----------persist-----------------
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistContactsConfig = {
 key: "contacts",
 storage,
 whitelist: ["contacts"],
};
const persistAuthConfig = {
 key: "auth",
 storage,
 whitelist: ["token"],
};

const rootReducer = combineReducers({
 contacts: persistReducer(persistContactsConfig, contactFormReducer),
 auth: persistReducer(persistAuthConfig, authReducer),
});

export default rootReducer;
