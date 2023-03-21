// use of configureStore is recommended. This is for learning purposes
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import loginReducer from './reducer';

const store = createStore(
  loginReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
