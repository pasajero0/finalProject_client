import axios from 'axios';
import { SubmissionError, reset } from 'redux-form';
import { showSystemMessage } from './app';
import {
  URL_API_ADD_CUSTOMER,
  URL_API_LOGIN_CUSTOMER,
  URL_API_LOGOUT_CUSTOMER,
  URL_API_FETCH_PROFILE,
  URL_API_UPDATE_PROFILE,
  URL_API_GET_RESET_PASSWORD_TOKEN,
  URL_API_SAVE_PASSWORD,
  URL_API_ADD_ORDERS,
  URL_API_FETCH_ORDER_HISTORY
} from '../config/app';

axios.defaults.withCredentials = true;

export const FETCH_ORDER_HISTORY_FULFILLED = 'FETCH_ORDER_HISTORY_FULFILLED';
export const FETCH_ORDER_HISTORY_REJECTED = 'FETCH_ORDER_HISTORY_REJECTED';
export const FETCH_ORDER_HISTORY_PENDING = 'FETCH_ORDER_HISTORY_PENDING';

export const FETCH_PROFILE_FULFILLED = 'FETCH_PROFILE_FULFILLED';
export const FETCH_PROFILE_REJECTED = 'FETCH_PROFILE_REJECTED';
export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const UPDATE_PROFILE_PENDING = 'UPDATE_PROFILE_PENDING';
export const UPDATE_PROFILE_FULFILLED = 'UPDATE_PROFILE_FULFILLED';
export const UPDATE_PROFILE_REJECTED = 'UPDATE_PROFILE_REJECTED';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const GET_TOKEN = 'GET_TOKEN';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const ADD_ORDERS = 'ADD_ORDERS';
export const SET_PURCHASE_STATUS = 'SET_PURCHASE_STATUS';


/**
 * Load profile data
 * @returns {function(*, *)}
 */
export function fetchOrdersHistoryData() {
  return (dispatch) => {
    dispatch({ type: FETCH_ORDER_HISTORY_PENDING, payload: {} });
    return axios.get(URL_API_FETCH_ORDER_HISTORY)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: FETCH_ORDER_HISTORY_FULFILLED,
            payload: { ...res.data }
          });
        } else {
          throw new Error('Unable to fetch orders history');
        }
      })
      .catch(err => dispatch({ type: FETCH_ORDER_HISTORY_REJECTED, payload: err }));
  };
}


/**
 * Load profile data
 * @returns {function(*, *)}
 */
export function fetchProfile() {
  return (dispatch) => {
    dispatch({ type: FETCH_PROFILE_PENDING, payload: {} });
    axios.get(URL_API_FETCH_PROFILE)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: FETCH_PROFILE_FULFILLED,
            payload: {
              profile: { ...res.data }
            }
          });
        } else {
          throw new Error('Unable to fetch profile');
        }
      })
      .catch(err => dispatch({ type: FETCH_PROFILE_REJECTED, payload: err }));
  };
}

/**
 * Update customer profile data
 * @param data {object}
 * @returns {function(*, *)}
 */
export function addCustomer(data) {
  return (dispatch) => {
    dispatch(
      { type: UPDATE_PROFILE_PENDING, payload: {} }
    );
    return axios.post(URL_API_ADD_CUSTOMER, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: UPDATE_PROFILE_FULFILLED,
            payload: {
              profile: { ...res.data },
              isAuthenticated: true,
            }
          });
          dispatch(showSystemMessage('You have been registered!', 'success'));
          dispatch(reset('RegisterForm'));
        } else {
          throw new SubmissionError({ ...res.data, _error: res.message });
        }
      })
      .catch((err) => {
        dispatch({ type: UPDATE_PROFILE_REJECTED, payload: err });
        throw err;
      });
  };
}

/**
 * Update customer profile data
 * @param data {object}
 * @returns {function(*, *)}
 */
export function loginCustomer(data) {
  return (dispatch) => {
    dispatch(
      { type: UPDATE_PROFILE_PENDING, payload: {} }
    );
    return axios.post(URL_API_LOGIN_CUSTOMER, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: SET_IS_AUTHENTICATED,
            payload: {
              isAuthenticated: true,
              profile: { ...res.data }
            }
          });
          dispatch(showSystemMessage('You have been logged in!', 'success'));
          dispatch(reset('LoginForm'));
        } else {
          throw new SubmissionError({ ...res.data, _error: res.message });
        }
      })
      .catch((err) => {
        dispatch({
          type: SET_IS_AUTHENTICATED,
          payload: {
            isAuthenticated: false,
            profile: {}
          }
        });
        throw err;
      });
  };
}

export function logoutCustomer() {
  return (dispatch) => {
    axios.get(URL_API_LOGOUT_CUSTOMER)
      .then(({ data }) => {
        if (data.success) {
          dispatch({
            type: SET_IS_AUTHENTICATED,
            payload: {
              isAuthenticated: false,
              profile: {}
            }
          });
          dispatch(showSystemMessage('You have been logged out!', 'success'));
        } else {
          throw new SubmissionError({ ...data.data, _error: data.message });
        }
      })
      .catch((err) => {
        dispatch(
          {
            type: SET_IS_AUTHENTICATED,
            payload: {
              isAuthenticated: true
            }
          }
        );
        throw err;
      });
  };
}

export function getToken(data) {
  return (dispatch) => {
    axios.post(URL_API_GET_RESET_PASSWORD_TOKEN, data)
      .then((result) => result.data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: GET_TOKEN,
            payload: true
          });
        } else {
          throw new SubmissionError({ ...res.data, _error: res.message });
        }
      })
      .catch((err) => {
        dispatch(
          {
            type: GET_TOKEN,
            payload: false
          }
        );
        throw err;
      });
  };
}

export function resetPassword(data) {
  return (dispatch) => {
    axios.post(URL_API_SAVE_PASSWORD, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: RESET_PASSWORD,
            payload: true
          });
        } else {
          throw new SubmissionError({ ...res.data, _error: res.message });
        }
      })
      .catch((err) => {
        dispatch(
          {
            type: RESET_PASSWORD,
            payload: false
          }
        );
        throw err;
      });
  };
}

export function setPasswordReseted(data) {
  return (dispatch) => {
    dispatch({
      type: RESET_PASSWORD,
      payload: data
    });
    dispatch(showSystemMessage('You have been change your password', 'info'));
  };
}

export function updateProfileData(data) {
  return (dispatch) => {
    dispatch(
      { type: UPDATE_PROFILE_PENDING, payload: {} }
    );
    axios.put(URL_API_UPDATE_PROFILE, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: UPDATE_PROFILE_FULFILLED,
            payload: { ...res.data }
          });
          dispatch(showSystemMessage('Your data have been updated!', 'success'));
        } else {
          throw new SubmissionError({ ...res.data, _error: res.message });
        }
      })
      .catch((err) => {
        dispatch({ type: UPDATE_PROFILE_REJECTED, payload: err });
        throw err;
      });
  };
}

export function submitChekout(data) {
  return (dispatch) => {
    axios.post(URL_API_ADD_ORDERS, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch(showSystemMessage(res.message, 'success'));
          dispatch({
            type: ADD_ORDERS,
            payload: { ...res.data }
          });
          dispatch({
            type: SET_PURCHASE_STATUS,
            payload: {
              isPurchaseComplited: true,
              purchaseData: { ...res },
            }
          });
        } else {
          throw new SubmissionError({ ...res.data, _error: res.message });
        }
      })
      .catch((err) => {
        dispatch({ type: ADD_ORDERS, payload: err });
        throw err;
      });
  };
}

export function clearPurchaseData() {
  return (dispatch) => {
    dispatch({
      type: SET_PURCHASE_STATUS,
      payload: {
        isPurchaseComplited: false,
        purchaseData: {},
      }
    });
  };
};
