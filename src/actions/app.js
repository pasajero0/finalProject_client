import axios from 'axios';


export const SET_LOGIN_FORM_ACTIVE_STATUS = 'SET_LOGIN_FORM_ACTIVE_STATUS';
export const SHOW_SYSTEM_MESSAGE = 'SHOW_SYSTEM_MESSAGE';
export const HIDE_SYSTEM_MESSAGE = 'HIDE_SYSTEM_MESSAGE';
export const FETCH_DEPARTMENTS_PENDING = 'FETCH_DEPARTMENTS_PENDING';
export const FETCH_DEPARTMENTS_FULFILLED = 'FETCH_DEPARTMENTS_FULFILLED';
export const FETCH_DEPARTMENTS_REJECTED = 'FETCH_DEPARTMENTS_REJECTED';

const urlFetchDepartments = '/departments';


export function fetchDepartments() {

  return (dispatch) => {
    dispatch({
      type: FETCH_DEPARTMENTS_PENDING,
    });
    axios.get(urlFetchDepartments)
      .then(res => res.data)
      .then((data) => {
        if (data.success) {
          dispatch({
            type: FETCH_DEPARTMENTS_FULFILLED,
            payload: data.data.records
          });
        } else {
          throw new Error('Fetching product data error');
        }
      })
      .catch(err => dispatch({ type: FETCH_DEPARTMENTS_REJECTED, payload: err }));
  };
}

export function setLoginFormActiveStatus(value) {

  return {
    type: SET_LOGIN_FORM_ACTIVE_STATUS,
    payload: value
  }
}

export function showSystemMessage(text, type) {
  return {
    type: SHOW_SYSTEM_MESSAGE,
    payload: {
      text,
      type
    }
  }
}

export function hideSystemMessage() {
  return {
    type: HIDE_SYSTEM_MESSAGE,
    payload: {}
  }
}
