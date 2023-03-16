// use of configureStore is recommended. This is for learning purposes
import { legacy_createStore as createStore } from 'redux';

import loginReducer from './reducer';

const store = createStore(loginReducer);

export default store;
