import axios from 'axios';
import { SubmissionError, reset } from 'redux-form';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';



/**
 * Fetching customer profile data from the server
 * @returns {function(*, *)}
 */

export function displayLogin () {
  console.log('Login')
}

export function displayRegister () {
  console.log('Register')
}
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


