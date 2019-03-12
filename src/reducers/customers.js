import {
  FETCH_PROFILE_FULFILLED,
  FETCH_PROFILE_REJECTED,
  FETCH_PROFILE_PENDING,
  UPDATE_PROFILE_PENDING,
  UPDATE_PROFILE_FULFILLED,
  UPDATE_PROFILE_REJECTED,
  SET_IS_AUTHENTICATED,
  GET_TOKEN,
  RESET_PASSWORD
} from '../actions/customers';

const initialState = {
  isFetching: false,
  error: '',
  profile: {},
  isAuthenticated: false,
  isSentResetPasswordToken: false,
  isPasswordReseted: false
};

function customers(state = initialState, action) {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        profile: action.payload.profile
      };
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
    case UPDATE_PROFILE_PENDING:
      return {
        ...state
      };
    case UPDATE_PROFILE_REJECTED:
      return {
        ...state
      };
    case UPDATE_PROFILE_FULFILLED:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        profile: action.payload.profile
      };
    case GET_TOKEN:
      return {
        ...state,
        isSentResetPasswordToken: action.payload
      };
    case RESET_PASSWORD:
      return {
        ...state,
        isPasswordReseted: action.payload

      };
    default:
      return { ...state };
  }
}

export default customers;
