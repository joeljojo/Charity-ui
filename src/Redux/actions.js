import Axios from 'axios';
// import * as actions from './actionTypes';
import { ADD_USER, LOGIN } from './actionTypes';
import { baseUrl } from './Services/config';

const addUser = (user) => async (dispatch) => {
  dispatch({
    type: ADD_USER.REQUEST,
  });

  try {
    // Perform a post request
    const response = await Axios.post(`${baseUrl}/register`, user);
    if (response.data.status) {
      dispatch({
        type: ADD_USER.SUCCESS,
        message: response.data.message,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: ADD_USER.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: ADD_USER.FAIL,
      message: err.message,
    });
  }
};
const login = (user) => async (dispatch) => {
  dispatch({
    type: LOGIN.REQUEST,
  });

  try {
    // Perform a post request
    const response = await Axios.post(`${baseUrl}/login`, user);
    if (response.data.status) {
      dispatch({
        type: LOGIN.SUCCESS,
        user: response.data.user,
        message: response.data.message,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: LOGIN.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: LOGIN.FAIL,
      message: err.message,
    });
  }
};

export { addUser, login };
