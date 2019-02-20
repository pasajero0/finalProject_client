import axios from 'axios';
import { SubmissionError, reset } from 'redux-form';

export const FETCH_PROFILE_FULFILLED = 'FETCH_PROFILE_FULFILLED';
export const FETCH_PROFILE_REJECTED = 'FETCH_PROFILE_REJECTED';
export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const UPD_PROFILE_PENDING = 'UPD_PROFILE_PENDING';
export const UPD_PROFILE_FULFILLED = 'UPD_PROFILE_FULFILLED';
export const UPD_PROFILE_REJECTED = 'UPD_PROFILE_REJECTED';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';

const urlAddCustomer = '/customers';
const urlLoginCustomer = '/customers/auth';
const urlProfile = '/customers/profile'

/**
 * Fetching customer profile data from the server
 * @returns {function(*, *)}
 */
export function fetchProfile() {
  return (dispatch, getState) => {
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
export function updProfile(data) {
  return (dispatch, getState) => {
    dispatch(
      { type: UPD_PROFILE_PENDING, payload: { } }
    );
    axios.get(urlProfile)
      .then((result) => {
        if (result.success){
          dispatch({ type: UPD_PROFILE_FULFILLED, payload: { profile: result.data } });
        } else {
          throw new SubmissionError({
            //email: 'email',
            //body: 'body',
            //subject: 'subject',
            //error: 'No letter has been sent'
          });
        }
      })
      .catch(err => dispatch({ type: UPD_PROFILE_REJECTED, payload: err }));
  };
}
/**
 * Update customer profile data
 * @param data {object}
 * @returns {function(*, *)}
 */
export function addCustomer(data) {
  return (dispatch, getState) => {
    dispatch(
      { type: UPD_PROFILE_PENDING, payload: { } }
    );
    return axios.post(urlAddCustomer, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({ type: UPD_PROFILE_FULFILLED, payload: { profile: result.data } });
          dispatch(reset('RegisterForm'));
        } else {
          throw new SubmissionError({ ...res.data, _error: res.message });
        }
      })
      .catch((err) => {
        dispatch({ type: UPD_PROFILE_REJECTED, payload: err });
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
  return (dispatch, getState) => {
    dispatch(
      { type: UPD_PROFILE_PENDING, payload: { } }
    );
    return axios.post(urlLoginCustomer, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({ type: SET_IS_AUTHENTICATED, payload: true });
          dispatch(reset('LoginForm'));
        } else {
          throw new SubmissionError({ ...res.data, _error: res.message });
        }
      })
      .catch((err) => {
        dispatch({ type: SET_IS_AUTHENTICATED, payload: false });
        throw err;
      });
  };
}