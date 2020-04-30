import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger";
import thunk from  "redux-thunk"
import { persistStore } from 'redux-persist';
import rootReducer from "./root.reducer"
let middlewares=[logger,thunk]
// if (process.env.NODE_ENV === "development ") {
//     middlewares.push(logger)
// } 


const store =  createStore(rootReducer,applyMiddleware(...middlewares));
const  persistor = persistStore(store)
export {
    store, 
    persistor
}
