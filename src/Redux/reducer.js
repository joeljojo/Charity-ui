// import * as actions from './actionTypes';

import { LOGIN } from './actionTypes';

const initialUserState = {
  user: {},
  error: null,
  loading: false,
  message: '',
  status: false,
};
const loginReducer = (state = initialUserState, action = {}) => {
  switch (action.type) {
    case LOGIN.REQUEST:
      return {
        ...state,
        error: '',
        loading: true,
        message: '',
        status: false,
      };

    case LOGIN.SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
        error: '',
        message: action.message,
        status: action.status,
      };
    case LOGIN.FAIL:
      return {
        ...state,
        user: {},
        loading: false,
        error: action.error,
        message: action.message,
        status: false,
      };

    default:
      return state;
  }
};

export default loginReducer;
