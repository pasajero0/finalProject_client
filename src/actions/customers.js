import axios from 'axios';
import { SubmissionError, reset } from 'redux-form';

export const FETCH_PROFILE_FULFILLED = 'FETCH_PROFILE_FULFILLED';
export const FETCH_PROFILE_REJECTED = 'FETCH_PROFILE_REJECTED';
export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const UPDATE_PROFILE_PENDING = 'UPDATE_PROFILE_PENDING';
export const UPDATE_PROFILE_FULFILLED = 'UPDATE_PROFILE_FULFILLED';
export const UPDATE_PROFILE_REJECTED = 'UPDATE_PROFILE_REJECTED';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';
export const GET_TOKEN = 'GET_TOKEN';
export const RESET_PASSWORD = 'RESET_PASSWORD';

const urlAddCustomer = '/customers';
const urlLoginCustomer = '/customers/auth';
const urlLogoutCustomer = '/customers/logout';
const urlProfile = '/customers/profile';
const urlGetToken = '/password/send-token';
const urlSavePassword = '/password/save';
/**
 * Fetching customer profile data from the server
 * @returns {function(*, *)}
 */
export function fetchProfile() {
  return (dispatch) => {
    dispatch(
      { type: FETCH_PROFILE_PENDING, payload: { } }
    );
    axios.get(urlProfile)
      .then((result) => {
        dispatch({ type: FETCH_PROFILE_FULFILLED, payload: { profile: result.data } });
      })
      .catch(err => dispatch({ type: FETCH_PROFILE_REJECTED, payload: err }));
  };
}

/**
 * Update customer profile data
 * @param data {object}
 * @returns {function(*, *)}
 */
export function updProfile() {
  return (dispatch) => {
    dispatch({ type: UPDATE_PROFILE_PENDING, payload: { } });
    axios.get(urlProfile)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          const undefinedToEmptystring = value => value ? value : '';
          dispatch({
            type: UPDATE_PROFILE_FULFILLED,
            payload: {
              profile: {
                email: res.data.email,
                first_name: undefinedToEmptystring(res.data.first_name),
                last_name: undefinedToEmptystring(res.data.last_name),
                city: undefinedToEmptystring(res.data.city),
                zip: undefinedToEmptystring(res.data.zip),
                address: undefinedToEmptystring(res.data.address),
                phone: undefinedToEmptystring(res.data.phone),
              },
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
      { type: UPDATE_PROFILE_PENDING, payload: { } }
    );
    return axios.post(urlAddCustomer, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: UPDATE_PROFILE_FULFILLED,
            payload: {
              profile: { email: result.data.data.email, data: result.data.data },
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
      { type: UPDATE_PROFILE_PENDING, payload: { } }
    );
    return axios.post(urlLoginCustomer, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: SET_IS_AUTHENTICATED,
            payload: {
              isAuthenticated: true,
              profile: { email: data.email }
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
    axios.get(urlLogoutCustomer)
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
    axios.post(urlGetToken, data)
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
    axios.post(urlSavePassword, data)
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

export function putProfileData(data) {
  return (dispatch) => {
    dispatch(
      { type: UPDATE_PROFILE_PENDING, payload: { } }
    );
    axios.put(urlProfile, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({
            type: UPDATE_PROFILE_FULFILLED,
            payload: {
              profile: res.data,
              isAuthenticated: true,
            }
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
