import {
  FETCH_PROFILE_FULFILLED,
  FETCH_PROFILE_REJECTED,
  FETCH_PROFILE_PENDING,
  UPDATE_PROFILE_PENDING,
  UPDATE_PROFILE_FULFILLED,
  UPDATE_PROFILE_REJECTED,
  SET_IS_AUTHENTICATED,
  GET_TOKEN,
  RESET_PASSWORD,
  ADD_ORDERS,
  SET_PURCHASE_STATUS
} from '../actions/customers';

const initialState = {
  isFetching: false,
  error: '',
  profile: {},
  isAuthenticated: false,
  isSentResetPasswordToken: false,
  isPasswordReseted: false,
  isPurchaseComplited: false,
  purchaseData: {}
};

function customers(state = initialState, action) {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        ...action.payload
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
        ...state,
        profile: action.payload
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
        profile: {
          ...state.profile,
          ...action.payload
        }
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
    case ADD_ORDERS:
      return {
        ...state
      };
    case SET_PURCHASE_STATUS:
      return {
        ...state,
        isPurchaseComplited: action.payload.isPurchaseComplited,
        purchaseData: action.payload.purchaseData
      };
    default:
      return { ...state };
  }
}

export default customers;
