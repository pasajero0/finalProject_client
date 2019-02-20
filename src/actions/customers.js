import axios from 'axios';
import { SubmissionError, reset } from 'redux-form';

export const FETCH_PROFILE_FULFILLED = 'FETCH_PROFILE_FULFILLED';
export const FETCH_PROFILE_REJECTED = 'FETCH_PROFILE_REJECTED';
export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const UPD_PROFILE_PENDING = 'UPD_PROFILE_PENDING';
export const UPD_PROFILE_FULFILLED = 'UPD_PROFILE_FULFILLED';
export const UPD_PROFILE_REJECTED = 'UPD_PROFILE_REJECTED';

const urlFetchProfile = 'https://next.json-generator.com/api/json/get/NkO3JQZQ8';
const urlUpdProfile = 'https://next.json-generator.com/api/json/get/NkO3JQZQ8';
const urlAddCustomer = '/customers';
const urlLoginCustomer = '/customers/auth';
const urlProfile = '/customers/profile'

/**
 * Fetching customer profile data from the server
 * @returns {function(*, *)}
 */
// export function fetchProfile() {
//   return (dispatch, getState) => {
//     dispatch(
//       { type: FETCH_PROFILE_PENDING, payload: { } }
//     );
//     axios.get(urlFetchProfile)
//       .then((result) => {
//         dispatch({ type: FETCH_PROFILE_FULFILLED, payload: { profile: result.data } });
//       })
//       .catch(err => dispatch({ type: FETCH_PROFILE_REJECTED, payload: err }));
//   };
// }
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
// export function updProfile(data) {
//   return (dispatch, getState) => {
//     dispatch(
//       { type: UPD_PROFILE_PENDING, payload: { } }
//     );
//     axios.get(urlUpdProfile)
//       .then((result) => {
//         if (result.success){
//           dispatch({ type: UPD_PROFILE_FULFILLED, payload: { profile: result.data } });
//         } else {
//           throw new SubmissionError({
//             //email: 'email',
//             //body: 'body',
//             //subject: 'subject',
//             //error: 'No letter has been sent'
//           });
//         }
//       })
//       .catch(err => dispatch({ type: UPD_PROFILE_REJECTED, payload: err }));
//   };
// }
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
  console.log('======================> addCustomerAction', data)
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
  console.log('======================> loginCustomerAction', data)
  return (dispatch, getState) => {
    dispatch(
      { type: UPD_PROFILE_PENDING, payload: { } }
    );
    return axios.post(urlLoginCustomer, data)
      .then((result) => {
        const res = result.data;
        if (res.success) {
          dispatch({ type: UPD_PROFILE_FULFILLED, payload: { profile: result.data } });
          dispatch(reset('LoginForm'));
          //////////////////////
          alert('LOGIN SUCCESS')
          //////////////////////
        } else {
          throw new SubmissionError({ ...res.data, _error: res.message });
        }
      })
      .catch((err) => {
        dispatch({ type: UPD_PROFILE_REJECTED, payload: err });
        //////////////////////
        alert('LOGIN ERROR')
        //////////////////////
        throw err;
      });
  };
}