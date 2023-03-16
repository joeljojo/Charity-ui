import Axios from 'axios';
import * as actions from './actionTypes';
import { baseUrl } from './Services/config';

const addUser = (user) => async (dispatch) => {
  dispatch({
    type: actions.ADD_USER.REQUEST,
  });

  try {
    // Perform a post request
    const response = await Axios.post(`${baseUrl}/register`, user);
    if (response.data.status) {
      dispatch({
        type: actions.ADD_USER.SUCCESS,
        message: response.data.message,
        user: response.data.user,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: actions.ADD_USER.FAIL,
        message: response.data.message,
        status: response.data.staus,
      });
    }
  } catch (err) {
    dispatch({
      type: actions.ADD_USER.FAIL,
      message: err.message,
    });
  }
};
const login = (user) => async (dispatch) => {
  dispatch({
    type: actions.LOGIN.REQUEST,
  });

  try {
    // Perform a post request
    const response = await Axios.post(`${baseUrl}/login`, user);
    if (response.data.status) {
      dispatch({
        type: actions.LOGIN.SUCCESS,
        userId: response.data.userID,
        firstName: response.data.firstname,
        lastName: response.data.lastname,
        isAdmin: response.data.isadmin,
        isDonor: response.data.isdonaor,
        isChildrensHome: response.data.ischildrenshome,
        message: response.data.message,
        user: response.data.user,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: actions.LOGIN.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: actions.LOGIN.FAIL,
      message: err.message,
    });
  }
};

export { addUser, login };
