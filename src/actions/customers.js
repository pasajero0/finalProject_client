import axios from 'axios';
import { SubmissionError, reset } from 'redux-form';

export const FETCH_PROFILE_FULFILLED = 'FETCH_PROFILE_FULFILLED';
export const FETCH_PROFILE_REJECTED = 'FETCH_PROFILE_REJECTED';
export const FETCH_PROFILE_PENDING = 'FETCH_PROFILE_PENDING';
export const UPDATE_PROFILE_PENDING = 'UPDATE_PROFILE_PENDING';
export const UPDATE_PROFILE_FULFILLED = 'UPDATE_PROFILE_FULFILLED';
export const UPDATE_PROFILE_REJECTED = 'UPDATE_PROFILE_REJECTED';
export const SET_IS_AUTHENTICATED = 'SET_IS_AUTHENTICATED';

const urlAddCustomer = '/customers';
const urlLoginCustomer = '/customers/auth';
const urlLogoutCustomer = '/customers/logout';
const urlProfile = '/customers/profile';

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
      { type: UPDATE_PROFILE_PENDING, payload: { } }
    );
    axios.get(urlProfile)
      .then((result) => {
        if (result.success) {
          dispatch({ type: UPDATE_PROFILE_FULFILLED, payload: { profile: result.data } });
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
  return (dispatch, getState) => {
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
  return (dispatch, getState) => {
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
  console.log('logoutCustomer----');
  return (dispatch, getState) => {
    console.log('=================================>');
    axios.get(urlLogoutCustomer)
      .then(({ data }) => {
        console.log(data);
        if (data.success) {
          dispatch({
            type: SET_IS_AUTHENTICATED,
            payload: {
              isAuthenticated: false,
              profile: {}
            }
          });
        } else {
          console.log('logoutCustomer get result', data.success);
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
// export function logoutCustomer () {
//   console.log('logoutCustomer');
//   return (dispatch, getState) => {

//     dispatch(
//       { type: UPDATE_PROFILE_PENDING, payload: { } }
//     );
//     axios.get(urlLogoutCustomer)
//       .then((result) => {
//         console.log(result);
//         dispatch({
//           type: SET_IS_AUTHENTICATED,
//           payload: {
//             isAuthenticated: false,
//             profile: {}
//           }
//         });
//       })
//       .catch( (err) => {
//         dispatch(
//           {
//             type: SET_IS_AUTHENTICATED,
//             payload:{
//                       isAuthenticated: true
//                     }
//           }
//         );
//         throw err;
//       });

//   };
// }
