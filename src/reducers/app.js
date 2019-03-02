import {
  SET_LOGIN_FORM_ACTIVE_STATUS,
  SHOW_SYSTEM_MESSAGE,
  HIDE_SYSTEM_MESSAGE,
} from '../actions/app';

const initialState = {
  isLoginFormActive: true,
  systemMessage: {
    text: '',
    type: '',
    isVisible: false
  }
};

function app(state = initialState, action) {
  switch (action.type) {
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
