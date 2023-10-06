import { createStore } from 'redux';
import counterReducer from '../Redux/Reducer/reducer';

const store = createStore(counterReducer);

export default store;
