import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contador from './contador';
import modal from './modal';
import slice from './slice';
import logger from './logger'
import token from './fetchLogin';
import user from './getUser'

const combineRedux = combineReducers({ slice, modal, contador, token, user });
const store = configureStore({
  reducer: combineRedux,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;