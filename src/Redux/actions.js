import Axios from 'axios';
// import * as actions from './actionTypes';
import {
  ADD_USER,
  ADMIN_APPROVES_REQUEST,
  ADMIN_REJECTS_REQUEST,
  DONOR_APPROVES_REQUEST,
  DONOR_REJECTS_REQUEST,
  FETCH_ADMIN_REQUESTS,
  FETCH_DONOR_REQUESTS,
  FETCH_DONORS,
  FETCH_MY_ADMIN_APPROVED_REQUESTS,
  FETCH_MY_ADMIN_REJECTED_REQUESTS,
  FETCH_MY_DONOR_APPROVED_REQUESTS,
  FETCH_MY_DONOR_REJECTED_REQUESTS,
  FETCH_REQUESTS,
  LOGIN,
  MAKE_PAYMENT,
  MAKE_REQUEST,
  LOG_OUT,
} from './actionTypes';
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
const fetchMyAdminApprovedRequests = (userID) => async (dispatch) => {
  dispatch({
    type: FETCH_MY_ADMIN_APPROVED_REQUESTS.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.get(
      `${baseUrl}/admin-approved-requests?userID=${userID}`
    );
    if (response.data.status) {
      dispatch({
        type: FETCH_MY_ADMIN_APPROVED_REQUESTS.SUCCESS,
        requests: response.data.result,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: FETCH_MY_ADMIN_APPROVED_REQUESTS.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: FETCH_MY_ADMIN_APPROVED_REQUESTS.FAIL,
      message: err.message,
    });
  }
};
const fetchMyAdminRejectedRequests = (userID) => async (dispatch) => {
  dispatch({
    type: FETCH_MY_ADMIN_REJECTED_REQUESTS.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.get(
      `${baseUrl}/admin-rejected-requests?userID=${userID}`
    );
    if (response.data.status) {
      dispatch({
        type: FETCH_MY_ADMIN_REJECTED_REQUESTS.SUCCESS,
        requests: response.data.result,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: FETCH_MY_ADMIN_REJECTED_REQUESTS.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: FETCH_MY_ADMIN_REJECTED_REQUESTS.FAIL,
      message: err.message,
    });
  }
};
const fetchMyDonorApprovedRequests = (userID) => async (dispatch) => {
  dispatch({
    type: FETCH_MY_DONOR_APPROVED_REQUESTS.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.get(
      `${baseUrl}/donor-approved-requests?userID=${userID}`
    );
    if (response.data.status) {
      dispatch({
        type: FETCH_MY_DONOR_APPROVED_REQUESTS.SUCCESS,
        requests: response.data.result,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: FETCH_MY_DONOR_APPROVED_REQUESTS.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: FETCH_MY_DONOR_APPROVED_REQUESTS.FAIL,
      message: err.message,
    });
  }
};
const fetchMyDonorRejectedRequests = (userID) => async (dispatch) => {
  dispatch({
    type: FETCH_MY_DONOR_REJECTED_REQUESTS.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.get(
      `${baseUrl}/donor-rejected-requests?userID=${userID}`
    );
    if (response.data.status) {
      dispatch({
        type: FETCH_MY_DONOR_REJECTED_REQUESTS.SUCCESS,
        requests: response.data.result,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: FETCH_MY_DONOR_REJECTED_REQUESTS.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: FETCH_MY_DONOR_REJECTED_REQUESTS.FAIL,
      message: err.message,
    });
  }
};
const fetchAdminRequests = () => async (dispatch) => {
  dispatch({
    type: FETCH_ADMIN_REQUESTS.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.get(`${baseUrl}/admin-requests`);
    if (response.data.status) {
      dispatch({
        type: FETCH_ADMIN_REQUESTS.SUCCESS,
        requests: response.data.result,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: FETCH_ADMIN_REQUESTS.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: FETCH_ADMIN_REQUESTS.FAIL,
      message: err.message,
    });
  }
};
const fetchDonorRequests = (userID) => async (dispatch) => {
  dispatch({
    type: FETCH_DONOR_REQUESTS.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.get(
      `${baseUrl}/donor-requests?userID=${userID}`
    );
    if (response.data.status) {
      dispatch({
        type: FETCH_DONOR_REQUESTS.SUCCESS,
        requests: response.data.result,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: FETCH_DONOR_REQUESTS.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: FETCH_DONOR_REQUESTS.FAIL,
      message: err.message,
    });
  }
};
const makeRequests = (requestsData) => async (dispatch) => {
  dispatch({
    type: MAKE_REQUEST.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.post(
      `${baseUrl}/children-home-request`,
      requestsData
    );
    if (response.data.status) {
      dispatch({
        type: MAKE_REQUEST.SUCCESS,
        message: response.data.message,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: MAKE_REQUEST.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: MAKE_REQUEST.FAIL,
      message: err.message,
    });
  }
};
const adminApprovesRequest = (requestsId) => async (dispatch) => {
  dispatch({
    type: ADMIN_APPROVES_REQUEST.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.put(
      `${baseUrl}/admin-approve-request`,
      requestsId
    );
    if (response.data.status) {
      dispatch({
        type: ADMIN_APPROVES_REQUEST.SUCCESS,
        message: response.data.message,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: ADMIN_APPROVES_REQUEST.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: ADMIN_APPROVES_REQUEST.FAIL,
      message: err.message,
    });
  }
};
const adminRejectsRequest = (requestId) => async (dispatch) => {
  dispatch({
    type: ADMIN_REJECTS_REQUEST.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.put(
      `${baseUrl}/admin-reject-request`,
      requestId
    );
    if (response.data.status) {
      dispatch({
        type: ADMIN_REJECTS_REQUEST.SUCCESS,
        message: response.data.message,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: ADMIN_REJECTS_REQUEST.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: ADMIN_REJECTS_REQUEST.FAIL,
      message: err.message,
    });
  }
};
const donorApprovesRequest = (requestId) => async (dispatch) => {
  dispatch({
    type: DONOR_APPROVES_REQUEST.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.put(
      `${baseUrl}/donor-approve-request`,
      requestId
    );
    if (response.data.status) {
      dispatch({
        type: DONOR_APPROVES_REQUEST.SUCCESS,
        message: response.data.message,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: DONOR_APPROVES_REQUEST.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: DONOR_APPROVES_REQUEST.FAIL,
      message: err.message,
    });
  }
};
const donorRejectsRequest = (requestId) => async (dispatch) => {
  dispatch({
    type: DONOR_REJECTS_REQUEST.REQUEST,
  });
  try {
    // Perform a get request
    const response = await Axios.put(
      `${baseUrl}/donor-reject-request`,
      requestId
    );
    if (response.data.status) {
      dispatch({
        type: DONOR_REJECTS_REQUEST.SUCCESS,
        message: response.data.message,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: DONOR_REJECTS_REQUEST.FAIL,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: DONOR_REJECTS_REQUEST.FAIL,
      message: err.message,
    });
  }
};
const makePayment = (payData) => async (dispatch) => {
  dispatch({
    type: MAKE_PAYMENT.REQUEST,
  });
  try {
    // Perform a post request
    const response = await Axios.post(`${baseUrl}/lipa-na-mpesa`, payData);
    if (response.data.success) {
      dispatch({
        type: MAKE_PAYMENT.SUCCESS,
        success: response.data.success,
        message: response.data.message,
        status: response.data.status,
      });
    } else {
      dispatch({
        type: MAKE_PAYMENT.FAIL,
        success: response.data.success,
        message: response.data.message,
        status: response.data.status,
      });
    }
  } catch (err) {
    dispatch({
      type: MAKE_PAYMENT.FAIL,
      message: err.message,
    });
  }
};
const logOut = () => ({
  type: LOG_OUT,
});

export {
  addUser,
  login,
  fetchDonors,
  fetchAllMyRequests,
  fetchMyAdminApprovedRequests,
  fetchMyAdminRejectedRequests,
  fetchMyDonorApprovedRequests,
  fetchMyDonorRejectedRequests,
  fetchAdminRequests,
  fetchDonorRequests,
  makeRequests,
  adminApprovesRequest,
  adminRejectsRequest,
  donorApprovesRequest,
  donorRejectsRequest,
  makePayment,
  logOut,
};
