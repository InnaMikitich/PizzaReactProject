import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers/';


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
 });

window.store = store;

export default store;
