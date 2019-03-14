import {
  SET_LOGIN_FORM_ACTIVE_STATUS,
  SHOW_SYSTEM_MESSAGE,
  HIDE_SYSTEM_MESSAGE,
  FETCH_DEPARTMENTS_PENDING,
  FETCH_DEPARTMENTS_FULFILLED,
  FETCH_DEPARTMENTS_REJECTED,
  SET_USER_MENU_VISIBILITY
} from '../actions/app';

const initialState = {
  isLoginFormActive: true,
  systemMessage: {
    text: '',
    type: '',
    isVisible: false
  },
  departments: [],
  isFetching: false,
  isVisibleUserMenu: false,
};

function app(state = initialState, action) {
  switch (action.type) {
    case SET_USER_MENU_VISIBILITY:
      return {
        ...state,
        isVisibleUserMenu: action.payload
      };
    case FETCH_DEPARTMENTS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_DEPARTMENTS_FULFILLED:
      return {
        ...state,
        departments: action.payload,
        isFetching: false
      };
    case FETCH_DEPARTMENTS_REJECTED:
      return {
        ...state,
        productsList: action.payload,
        isFetching: false
      };
    case SET_LOGIN_FORM_ACTIVE_STATUS:
      return {
        ...state,
        isLoginFormActive: action.payload
      };
    case SHOW_SYSTEM_MESSAGE:
      return {
        ...state,
        systemMessage: {
          ...action.payload,
          isVisible: true
        }
      };
    case HIDE_SYSTEM_MESSAGE:
      return {
        ...state,
        systemMessage: {
          ...state.systemMessage,
          isVisible: false
        }
      };
    default:
      return { ...state };
  }
}

export default app;
