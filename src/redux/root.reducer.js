import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from "./cart/cart.reducer";
const persistConfig = {
   key: 'root',
   storage,
   Whitelist:["cart"]
}

export const rootReducer= combineReducers({
   user: userReducer,
   cart:cartReducer,
});
export default persistReducer(persistConfig, rootReducer);