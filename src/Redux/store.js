// use of configureStore is recommended. This is for learning purposes
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { loginReducer, donorsReducer } from './reducer';

const rootReducer = combineReducers({
  loginState: loginReducer,
  getDonorsState: donorsReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
