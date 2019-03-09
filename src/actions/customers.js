import axios from 'axios';
import { SubmissionError, reset } from 'redux-form';
import {
  URL_API_ADD_CUSTOMER,
  URL_API_LOGIN_CUSTOMER,
  URL_API_LOGOUT_CUSTOMER,
  URL_API_FETCH_PROFILE,
  URL_API_UPDATE_PROFILE,
  URL_API_GET_RESET_PASSWORD_TOKEN,
  URL_API_SAVE_PASSWORD
} from '../config/app';

axios.defaults.withCredentials = true;

export const FETCH_PROFILE_FULFILLED = 'FETCH_PROFILE_FULFILLED';
export const FETCH_PROFILE_REJECTED = 'FETCH_PROFILE_REJECTED';
export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const UPDATE_PROFILE_PENDING = 'UPDATE_PROFILE_PENDING';
export const UPDATE_PROFILE_FULFILLED = 'UPDATE_PROFILE_FULFILLED';
export const UPDATE_PROFILE_REJECTED = 'UPDATE_PROFILE_REJECTED';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const GET_TOKEN = 'GET_TOKEN';
export const RESET_PASSWORD = 'RESET_PASSWORD';



/**
 * Load profile data
 * @returns {function(*, *)}
 */
export function fetchProfile() {
  return (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_PENDING, payload: {} });
    axios.get(URL_API_FETCH_PROFILE)
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
        } else {
          throw new SubmissionError({
            // email: 'email',
            // body: 'body',
            // subject: 'subject',
            // error: 'No letter has been sent'
          });
        }
      })
      .catch(err => dispatch({ type: UPDATE_PROFILE_REJECTED, payload: err }));
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
        } else {
          console.log('logoutCustomer get result');
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
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: GET_TOKEN,
            payload: true
          });
        } else {
          console.log('logoutCustomer get result', res);
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
  console.log('resetPasswordFunc ======> ', data);
  return (dispatch) => {
    axios.post(URL_API_SAVE_PASSWORD, data)
      .then((result) => {
        const res = result.data;
        console.log('res ======> ', res);
        if (res.success) {
          dispatch({
            type: RESET_PASSWORD,
            payload: true
          });
        } else {
          console.log('logoutCustomer get result', res);
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
