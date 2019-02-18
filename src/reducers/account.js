import {
	DISPLAY_LOGIN_OR_REGISTER
} from '../actions/account';

const initialState = {
  isAccountLogin: true
};

function account(state = initialState, action) {
    console.log('FROM REDUCERS: ', action)

  switch (action.type) {
    case DISPLAY_LOGIN_OR_REGISTER :
      return {...state, isAccountLogin: action.payload};
    default:
      return { ...state };
  }
}

export default account; 