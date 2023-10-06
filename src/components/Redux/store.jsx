import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Slices/index';

const store = configureStore({
  reducer: rootReducer
});

export default store;
