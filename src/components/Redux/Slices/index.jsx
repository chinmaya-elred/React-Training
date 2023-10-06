import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';
import userReducer from './UserSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
