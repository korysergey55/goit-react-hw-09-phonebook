import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

// ----------persist-----------------
import { persistStore} from "redux-persist";


const store = configureStore({ reducer: rootReducer });
export default store;

// ----------persist-----------------
persistStore(store);