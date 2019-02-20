import {
  FETCH_PROFILE_FULFILLED,
  FETCH_PROFILE_REJECTED,
  FETCH_PROFILE_PENDING,
  UPD_PROFILE_PENDING,
  UPD_PROFILE_FULFILLED,
  UPD_PROFILE_REJECTED,
  SET_IS_AUTHENTICATED
} from '../actions/customers';

const initialState = {
  isFetching: false,
  error: '',
  profile: {},
  isAuthenticated: false,
};

function customers(state = initialState, action) {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload
      }
    case FETCH_PROFILE_PENDING:
      return {
        ...state
      };
    case FETCH_PROFILE_REJECTED:
      return {
        ...state
      };
    case FETCH_PROFILE_FULFILLED:
      return {
        ...state
      };
    case UPD_PROFILE_PENDING:
      return {
        ...state
      };
    case UPD_PROFILE_REJECTED:
      return {
        ...state
      };
    case UPD_PROFILE_FULFILLED:
      return {
        ...state
      };
    default:
      return { ...state };
  }
}

export default customers; 
