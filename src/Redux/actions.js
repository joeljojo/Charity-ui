import Axios from 'axios';
// import * as actions from './actionTypes';
import { ADD_USER, FETCH_DONORS, FETCH_REQUESTS, LOGIN } from './actionTypes';
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
const fetchDonors = () => async (dispatch) => {
  dispatch({
    type: FETCH_DONORS.REQUEST,
  });

  try {
    // Perform a get request
    const response = await Axios.get(`${baseUrl}/donors`);
    if (response.data.status) {
      dispatch({
        type: FETCH_DONORS.SUCCESS,
        donors: response.data.result,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: FETCH_DONORS.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: FETCH_DONORS.FAIL,
      message: err.message,
    });
  }
};
const fetchAllMyRequests = (userID) => async (dispatch) => {
  dispatch({
    type: FETCH_REQUESTS.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.get(
      `${baseUrl}/children-home-requests?userID=${userID}`
    );
    if (response.data.status) {
      dispatch({
        type: FETCH_REQUESTS.SUCCESS,
        requests: response.data.result,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: FETCH_REQUESTS.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: FETCH_REQUESTS.FAIL,
      message: err.message,
    });
  }
};
export { addUser, login, fetchDonors, fetchAllMyRequests };
