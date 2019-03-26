import {
  FETCH_ORDER_HISTORY_FULFILLED,
  FETCH_ORDER_HISTORY_REJECTED,
  FETCH_ORDER_HISTORY_PENDING,
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
  purchaseData: {},
  ordersList: {
    records: [],
    page: 1,
    perPage: 10,
    count: 0,
    pagesTotal: 0,
  },
};


function customers(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDER_HISTORY_FULFILLED:
      console.log(action.payload);
      return {
        ...state,
        ordersList: action.payload,
        isFetching: false
      };
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        ...action.payload
      };
    case FETCH_ORDER_HISTORY_PENDING:
    case FETCH_PROFILE_PENDING:
      return {
        ...state
      };
    case FETCH_ORDER_HISTORY_REJECTED:
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
        ...action.payload
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
