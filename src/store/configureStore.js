import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contador from './contador';
import modal from "./modal";
import login from "./login";
import logger from "./middleware/logger";

//getDefaultMiddleware = puxa thunk e outros middlewares, para não serem sobreescritos pelo uso do 'logger'
const middleware = [ ...getDefaultMiddleware()];

const reducer = combineReducers({contador, modal, login})
const store = configureStore({reducer, middleware});

export default store;