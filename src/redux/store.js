import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
// redux-persist: it allows browser to cache our store
import { persistStore } from 'redux-persist'

import rootReducer from "./root-reducer";

const middlewares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);

// export default store;
