/* eslint-disable no-param-reassign */
// use of configureStore is recommended. This is for learning purposes
import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import {
  loginReducer,
  donorsReducer,
  allMyRequestsReducer,
  myAdminApprovedRequestsReducer,
  myAdminRejectedRequestsReducer,
  myDonorApprovedRequestsReducer,
  myDonorRejectedRequestsReducer,
  adminRequestsReducer,
  donorRequestsReducer,
  addUserReducer,
  makeRequestReducer,
  adminApprovesRequestReducer,
  adminRejectsRequestReducer,
  donorApprovesRequestReducer,
  donorRejectsRequestReducer,
  logOutReducer,
} from './reducer';
import { LOG_OUT } from './actionTypes';

const appReducer = combineReducers({
  loginState: loginReducer,
  getDonorsState: donorsReducer,
  allMyRequestsState: allMyRequestsReducer,
  myAdminApprovedRequestsState: myAdminApprovedRequestsReducer,
  myAdminRejectedRequestsState: myAdminRejectedRequestsReducer,
  myDonorApprovedRequestsState: myDonorApprovedRequestsReducer,
  myDonorRejectedRequestsState: myDonorRejectedRequestsReducer,
  adminRequestsState: adminRequestsReducer,
  donorRequestsState: donorRequestsReducer,
  addUserState: addUserReducer,
  makeRequestState: makeRequestReducer,
  adminApprovesRequestState: adminApprovesRequestReducer,
  adminRejectsRequestState: adminRejectsRequestReducer,
  donorApprovesRequestSate: donorApprovesRequestReducer,
  donorRejectsRequestSate: donorRejectsRequestReducer,
  logOutState: logOutReducer,
});
const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
